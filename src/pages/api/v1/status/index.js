import database from "../../../../../infra/database.js";

export default async function status(request, response) {
  const result = await database.query("SELECT 1 + 1;");
  console.log("DATABASE: ", result.rows[0]);
  return response.status(200).json({ message: "API working Ok!" });
}
