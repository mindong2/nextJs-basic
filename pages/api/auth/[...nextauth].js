// next auth settings
import { connectDB } from "@/util/database";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { GITHUB_ID, GITHUB_KEY, JWT_KEY } from "@/key";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const authOptions = {
  providers: [
    GithubProvider({
      // Github에서 발급받은 정보
      clientId: GITHUB_ID,
      clientSecret: GITHUB_KEY,
    }),

    CredentialsProvider({
      //1. 로그인페이지 폼 자동생성해주는 코드
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },

      //2. 로그인요청시 실행되는코드
      //직접 DB에서 아이디,비번 비교하고
      //아이디,비번 맞으면 return 결과, 틀리면 return null 해야함
      async authorize(credentials) {
        let db = (await connectDB).db("forum");
        let user = await db.collection("user").findOne({ email: credentials.email });
        if (!user) {
          console.log("해당 이메일은 없음");
          return null;
        }
        const pwcheck = await bcrypt.compare(credentials.password, user.password);
        if (!pwcheck) {
          console.log("비번틀림");
          return null;
        }
        return user;
      },
    }),
  ],

  //3. jwt , jwt 만료일설정
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60, // 1일
  },

  callbacks: {
    //4. jwt 만들 때 실행되는 코드
    //user변수는 DB의 유저정보담겨있고 token.user에 저장하면 jwt에 들어갑니다.
    jwt: async ({ token, user }) => {
      if (user) {
        token.user = {};
        token.user.name = user.name;
        token.user.email = user.email;
      }
      return token;
    },
    //5. 유저 세션이 조회될 때 마다 실행되는 코드
    session: async ({ session, token }) => {
      session.user = token.user;
      return session;
    },
  },
  //   jwt생성시 쓰는 암호
  secret: JWT_KEY,
};
export default NextAuth(authOptions);
