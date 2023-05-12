import { connectDB } from "@/util/database";

const Write = async (req, res) => {
    if (req.method === "POST") {
        //url에 /api/post/write?a=12와 같은식으로 보내면 아래와같이 확인가능 {a : '12'}
        console.log(req.query);
        let client = await connectDB;
        let db = client.db("forum");
        const item = req.body;

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
};

export default Write;
