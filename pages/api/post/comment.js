import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { ObjectId } from "mongodb";

const comment = async (req, res) => {
    let session = await getServerSession(req, res, authOptions);
    const body = JSON.parse(req.body);
    if (body.title === "" || body.content === "") {
        return res.status(500).json("필드값을 채워주세요");
    }
    const updateData = { user: session.user.email, comment: body.comment, parent: new ObjectId(body.parent) };
    let client = await connectDB;
    let db = client.db("forum");
    try {
        await db.collection("comment").insertOne(updateData);
        return res.status(200).json({ success: true });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false });
    }
};

export default comment;
