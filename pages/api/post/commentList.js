import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

const commentList = async (req, res) => {
    const parent = req.body.parent;

    let client = await connectDB;
    let db = client.db("forum");
    try {
        const result = await db
            .collection("comment")
            .find({ parent: new ObjectId(parent) })
            .toArray();
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false });
    }
};

export default commentList;
