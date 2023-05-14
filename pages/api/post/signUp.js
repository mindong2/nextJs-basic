import { connectDB } from "@/util/database";
import bcrypt from "bcrypt";
const signUp = async (req, res) => {
  if (req.body.email === "" || req.body.password === "") {
    return res.status(500).json("필드값을 채워주세요");
  }
  let client = await connectDB;
  let db = client.db("forum");
  const isEmailValid = await db.collection("user").findOne({ email: req.body.email });
  if (isEmailValid) {
    return res.status(500).json("이미 있는 아이디입니다.");
  } else {
    // 암호화
    const hash = await bcrypt.hash(req.body.password, 10);
    req.body.password = hash;
    try {
      await db.collection("user").insertOne({ name: req.body.name, email: req.body.email, password: req.body.password });
      res.status(200).redirect(302, "/");
    } catch (error) {
      console.log(error);
    }
  }
};

export default signUp;
