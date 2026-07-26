import database from "infra/database.js";

async function status(request, reponse) {
  const result = await database.query("SELECT 1 + 1 as sum;");
  console.log(result.rows);
  reponse.status(200).json({ chave: "testando response" });
}

export default status;
