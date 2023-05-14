export default function Request() {
  return (
    <div className="p-20">
      <form action="/api/post/write?a=12" method="post">
        <input type="text" name="title" placeholder="제목" required />
        <input type="text" name="content" placeholder="내용" required />
        <button type="submit">보내기</button>
      </form>
    </div>
  );
}
