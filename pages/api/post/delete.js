import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

const Delete = async (req, res) => {
  const session = await getServerSession(req, res, authOptions);
  /*
        만약 get방식으로 요청을 했다고 한다면 `/api/post/delete?_id=${data._id}` 로 요청을 했을것이고, 
        req.query는 {_id: '65a4sda564dsd4'} 같은식으로 올수있다. (query string)
        console.log(req.query);
    */
  let client = await connectDB;
  let db = client.db("forum");
  const findResult = await db.collection("post").findOne({ _id: new ObjectId(req.query._id) });
  if (findResult.author === session.user.email) {
    try {
      const result = await db.collection("post").deleteOne({ _id: new ObjectId(req.query._id) });
      res.status(200).json("삭제완료");
    } catch (error) {
      res.status(500);
      console.log(error);
    }
  } else {
    res.status(500).json("유저정보 오류 관리자에게 문의하세요");
  }
};

export default Delete;
