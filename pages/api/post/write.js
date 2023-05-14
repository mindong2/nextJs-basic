import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
const Write = async (req, res) => {
  const session = await getServerSession(req, res, authOptions);
  if (req.method === "POST") {
    //url에 /api/post/write?a=12와 같은식으로 보내면 아래와같이 확인가능 {a : '12'}
    let client = await connectDB;
    let db = client.db("forum");
    if (session) {
      const item = req.body;
      item.author = session.user.email;
      if (req.body.title === "" || req.body.content === "") {
        res.status(500).json("빈칸없이 작성해주세요");
      } else {
        try {
          await db.collection("post").insertOne(item);
          res.status(200).redirect(302, "/list");
        } catch (error) {
          console.log(error);
        }
      }
    }
  }
};

export default Write;
