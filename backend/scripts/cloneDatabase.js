import "dotenv/config";
import mysql from "mysql2/promise";

const sourceDb = process.env.SOURCE_DB_NAME || "marsai";
const targetDb = process.env.TARGET_DB_NAME || process.env.DB_NAME || "marsaiazim";

const quoteIdentifier = (value) => {
  if (!value || typeof value !== "string") {
    throw new Error("Nom de base/table invalide.");
  }
  return `\`${value.replace(/`/g, "``")}\``;
};

const run = async () => {
  if (sourceDb === targetDb) {
    throw new Error("La base source et la base cible ne peuvent pas etre identiques.");
  }

  const connection = await mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    multipleStatements: false,
  });

  try {
    const qSourceDb = quoteIdentifier(sourceDb);
    const qTargetDb = quoteIdentifier(targetDb);

    const [sourceDbExists] = await connection.query(
      "SELECT SCHEMA_NAME FROM information_schema.SCHEMATA WHERE SCHEMA_NAME = ?",
      [sourceDb],
    );

    if (!Array.isArray(sourceDbExists) || sourceDbExists.length === 0) {
      throw new Error(`La base source '${sourceDb}' est introuvable.`);
    }

    await connection.query(
      `CREATE DATABASE IF NOT EXISTS ${qTargetDb} CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`,
    );

    const [tables] = await connection.query(
      "SELECT TABLE_NAME FROM information_schema.TABLES WHERE TABLE_SCHEMA = ? AND TABLE_TYPE = 'BASE TABLE' ORDER BY TABLE_NAME",
      [sourceDb],
    );

    await connection.query("SET FOREIGN_KEY_CHECKS = 0");

    for (const row of tables) {
      const tableName = row.TABLE_NAME;
      const qTableName = quoteIdentifier(tableName);

      await connection.query(
        `CREATE TABLE IF NOT EXISTS ${qTargetDb}.${qTableName} LIKE ${qSourceDb}.${qTableName}`,
      );
      await connection.query(`TRUNCATE TABLE ${qTargetDb}.${qTableName}`);
      await connection.query(
        `INSERT INTO ${qTargetDb}.${qTableName} SELECT * FROM ${qSourceDb}.${qTableName}`,
      );
    }

    await connection.query("SET FOREIGN_KEY_CHECKS = 1");

    console.log(
      `Clonage termine: '${sourceDb}' -> '${targetDb}' (${tables.length} tables copiees).`,
    );
    console.log("L'ancienne base est conservee intacte.");
  } finally {
    await connection.end();
  }
};

run().catch((error) => {
  console.error("Echec du clonage de base:", error.message);
  process.exit(1);
});
