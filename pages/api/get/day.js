export default function Day(req, res) {
  const now = new Date();
  let year = now.getFullYear(); // 년도
  let month = now.getMonth() + 1; // 월
  let date = now.getDate(); // 날짜
  let day = now.getDay(); // 요일
  const hour = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  res.status(200).json(`지금은 ${year}년 ${month}월 ${date}일 ${day}요일 ${hour}시 : ${minutes}분 : ${seconds}초입니다.`);
}
