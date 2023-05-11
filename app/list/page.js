import Link from "next/link";
import { connectDB } from "../../util/database";

export default async function List() {
    let client = await connectDB;
    const db = client.db("forum");
    const result = await db.collection("post").find().toArray();

    return (
        <div className="list-bg">
            {result.map((data, i) => {
                return (
                    <div className="list-item" key={i}>
                        <Link href={`/detail/${data._id}`}>
                            <h4>{data.title}</h4>
                        </Link>
                        <p>{data.content}</p>
                        <Link href={`/update/${data._id}`}>수정하기</Link>
                    </div>
                );
            })}
        </div>
    );
}
