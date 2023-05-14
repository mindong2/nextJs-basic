import { ObjectId } from "mongodb";
import { connectDB } from "@/util/database.js";

const Update = async ({ params }) => {
  const client = await connectDB;
  const db = client.db("forum");
  const result = await db.collection("post").findOne({ _id: new ObjectId(params.id) });
  const title = result?.title ?? "";
  const content = result?.content ?? "";
  return (
    <div>
      <form action="/api/post/update" method="POST">
        <input type="hidden" name="id" defaultValue={params.id} />
        <input type="text" name="title" defaultValue={title} />
        <input type="text" name="content" defaultValue={content} />
        <button type="submit">수정</button>
      </form>
    </div>
  );
};

export default Update;
