const page = () => {
  return (
    <div>
      <form action="/api/post/signUp" method="POST">
        <input type="text" name="nickname" placeholder="nickname" />
        <input type="password" name="password" placeholder="비밀번호" />
        <button type="submit">확인</button>
      </form>
    </div>
  );
};

export default page;
