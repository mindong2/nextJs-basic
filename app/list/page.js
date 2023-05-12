import { connectDB } from "../../util/database";
import ListItem from "./ListItem";

export default async function List() {
    let client = await connectDB;
    const db = client.db("forum");
    const result = await db.collection("post").find().toArray();
    return (
        <div className="list-bg">
            <ListItem result={result} />
        </div>
    );
}
