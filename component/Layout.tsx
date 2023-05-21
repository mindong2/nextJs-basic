import React from "react";
import NavBar from "./NavBar";

type AppLayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: AppLayoutProps) {
  return (
    //   children은 다른 컴포넌트를 포함할수 있게 해준다
    <>
      <NavBar />
      {children}
    </>
  );
}
