import { MongoClient } from "mongodb";
import { DB_KEY } from "@/key";
const url = `mongodb+srv://${DB_KEY}@cluster0.jyaioxk.mongodb.net/?retryWrites=true&w=majority`;
const options = { useNewUrlParser: true };
let connectDB;

// next.js의 개발환경에서는 모든페이지마다 모든 js를 한번씩 훑고 지나가기때문에 방지하는 코드

if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(url, options).connect();
}
export { connectDB };
