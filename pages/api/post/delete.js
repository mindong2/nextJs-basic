import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

const Delete = async (req, res) => {
    /*
        만약 get방식으로 요청을 했다고 한다면 `/api/post/delete?_id=${data._id}` 로 요청을 했을것이고, 
        req.query는 {_id: '65a4sda564dsd4'} 같은식으로 올수있다. (query string)
        console.log(req.query);
    */
    try {
        let client = await connectDB;
        let db = client.db("forum");
        const result = await db.collection("post").deleteOne({ _id: new ObjectId(req.query._id) });
        res.status(200).json("삭제완료");
    } catch (error) {
        res.status(500);
        console.log(error);
    }
};

export default Delete;
