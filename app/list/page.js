import { connectDB } from "../../util/database";
import ListItem from "./ListItem";

export default async function List() {
    let client = await connectDB;
    const db = client.db("forum");
    let result = await db.collection("post").find().toArray();
    result = result.map((a) => {
        a._id = a._id.toString();
        return a;
    });
    return (
        <div className="list-bg">
            <ListItem result={result} />
        </div>
    );
}
