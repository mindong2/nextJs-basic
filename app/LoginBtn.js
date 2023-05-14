"use client";
import { signIn, signOut } from "next-auth/react";
const LoginBtn = ({ session }) => {
  return (
    <>
      {session === null ? (
        <button onClick={() => signIn()}>로그인</button>
      ) : (
        <span>
          {session.user.name}
          <button onClick={() => signOut()} style={{ marginLeft: "10px" }}>
            로그아웃
          </button>
        </span>
      )}
    </>
  );
};

export default LoginBtn;
