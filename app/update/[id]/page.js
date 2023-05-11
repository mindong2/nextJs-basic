import { ObjectId } from "mongodb";
import { connectDB } from "@/util/database.js";

const Update = async ({params}) => {
    const _id = new ObjectId(params.id);
    const client = await connectDB;
    const db = client.db('forum');
    const result = await db.collection('post').findOne({_id : _id})
    console.log(result)
    return (
        <div>
            <form action="/api/post/update" method="POST">
                <input type="hidden" name="id" value={`${_id}`}/>
                <input type="text" name="title" value={result.title}/>
                <input type="text" name="content" value={result.content}/>
                <button type="submit">수정</button>
            </form>
        </div>
    );
};

export default Update;