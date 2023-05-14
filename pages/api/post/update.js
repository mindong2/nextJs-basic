import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

const Update = async (req, res) => {
  if (req.body.title === "" || req.body.content === "") {
    return res.status(500).json("필드값을 채워주세요");
  }
  let client = await connectDB;
  let db = client.db("forum");
  try {
    const updateData = { title: req.body.title, content: req.body.content };
    await db.collection("post").updateOne({ _id: new ObjectId(req.body.id) }, { $set: updateData });
    res.status(200).redirect(302, "/list");
  } catch (error) {
    console.log(error);
  }
};

export default Update;
