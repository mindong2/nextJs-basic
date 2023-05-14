"use client";
import Link from "next/link";
/* Nextjs 에선 server / client component 들을 보여줘야할 때 최대한 서버에서 미리 
html을 만들어서 보내려고 하기 때문에
이렇게 하면 client component도 DB 데이터를 미리 채워서 유저에게 보내줍니다. */
const ListItem = ({ result }) => {
    return (
        <div>
            {result.map((data, idx) => (
                <div className="list-item" key={idx}>
                    <Link href={`/detail/${data._id}`}>
                        <h4>{data.title}</h4>
                    </Link>
                    <p>{data.content}</p>
                    <Link href={`/update/${data._id}`}>수정하기</Link>
                    <br />
                    <button
                        type="button"
                        onClick={() => {
                            fetch(`/api/post/delete?_id=${data._id}`, { method: "GET" })
                                .then((res) => {
                                    if (res.status === 200) {
                                        window.alert("삭제가 완료되었습니다");
                                        location.reload();
                                        return res.json();
                                    } else {
                                        console.log("서버에러");
                                    }
                                })
                                .then((result) => {
                                    console.log(result);
                                })
                                .catch((err) => {
                                    console.log(err);
                                });
                        }}
                        style={{ cursor: "pointer" }}
                    >
                        삭제하기
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ListItem;
