import { ObjectId } from "mongodb";
import { connectDB } from "@/util/database.js";
import Comment from "./Comment";
import CommentList from "./CommentList";
// next.js에서는 url params 정보가 props로 내려온다.
export default async function Detail({ params }) {
    let db = (await connectDB).db("forum");
    let result = await db.collection("post").findOne({ _id: new ObjectId(params.id) });

    return (
        <div>
            <h4>상세페이지</h4>
            <h4>{result.title}</h4>
            <h4>{result.content}</h4>
            <h4>{result.author}</h4>

            <CommentList id={result._id} params={params} />
        </div>
    );
}
