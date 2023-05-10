import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  let client = await connectDB;
  let db = client.db("forum");
  const result = await db.collection("post").find().toArray();

  if (req.method === "GET") {
    res.status(200).json(result);
  }
  if (req.method === "POST") {
    res.status(200).json("post");
  }
}
