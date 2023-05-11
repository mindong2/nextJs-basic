import { connectDB } from "@/util/database";

const Update = async (req, res) => {
  if (req.body.title === "" || req.body.content === "") {
    return res.status(500).json("필드값을 채워주세요");
  }
  let client = await connectDB;
  let db = client.db("forum");
    try {
      await db.collection("user").findOneAndUpdate({_id : params.id}, {$set : {title, content}});
      res.status(200).redirect(302, "/");
    } catch (error) {
      console.log(error);
    }
};

export default Update;
