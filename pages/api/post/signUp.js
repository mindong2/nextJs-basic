import { connectDB } from "@/util/database";

const signUp = async (req, res) => {
  if (req.body.nickname === "" || req.body.password === "") {
    return res.status(500).json("필드값을 채워주세요");
  }
  let client = await connectDB;
  let db = client.db("forum");
  const isNicknameValid = await db.collection("user").findOne({ nickname: req.body.nickname });
  if (isNicknameValid) {
    return res.status(500).json("이미 있는 아이디입니다.");
  } else {
    try {
      await db.collection("user").insertOne({ nickname: req.body.nickname, password: req.body.password });
      res.status(200).redirect(302, "/");
    } catch (error) {
      console.log(error);
    }
  }
};

export default signUp;
