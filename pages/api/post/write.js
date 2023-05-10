import { connectDB } from "@/util/database";

const Write = async (req, res) => {
  if (req.method === "POST") {
    let client = await connectDB;
    let db = client.db("forum");
    const title = req.body.title;
    const content = req.body.title;

    if (req.body.title === "" || req.body.content === "") {
      res.status(500).json("빈칸없이 작성해주세요");
    } else {
      try {
        await db.collection("post").insertOne({ title, content });
        res.status(200).redirect(302, "/list");
      } catch (error) {
        console.log(error);
      }
    }
  }
};

export default Write;
