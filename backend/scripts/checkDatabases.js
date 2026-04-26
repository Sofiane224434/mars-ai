import "dotenv/config";
import mysql from "mysql2/promise";

const run = async () => {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
  });

  try {
    const [oldDb] = await connection.query("SHOW DATABASES LIKE 'marsai'");
    const [newDb] = await connection.query("SHOW DATABASES LIKE 'marsaiazim'");

    console.log("marsai:", oldDb.length > 0);
    console.log("marsaiazim:", newDb.length > 0);
  } finally {
    await connection.end();
  }
};

run().catch((error) => {
  console.error("Echec verification bases:", error.message);
  process.exit(1);
});
