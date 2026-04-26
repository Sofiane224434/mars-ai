import "dotenv/config";
import { exchangeMagicTokenForSession } from "../src/services/magicAuth.service.js";

const run = async () => {
  const token = process.env.ADMIN_ENV_TOKEN;

  if (!token) {
    throw new Error("ADMIN_ENV_TOKEN manquant dans .env");
  }

  const { user, sessionToken } = await exchangeMagicTokenForSession({ token });

  console.log("admin-email:", user.email);
  console.log("admin-status:", user.status);
  console.log("session-token-generated:", Boolean(sessionToken));
};

run().catch((error) => {
  console.error("Echec test login admin env:", error.message);
  process.exit(1);
});
