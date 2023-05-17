"use client";
import { useRef } from "react";
import { useState, useEffect } from "react";
export default function CommentList({ params, id }) {
    const [comment, setComment] = useState("");
    const [isDone, setIsDone] = useState(false);
    const body = { comment: comment, parent: id.toString() };
    const [commentList, setCommentList] = useState([]);
    const commentRef = useRef();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/post/commentList", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ parent: params.id }),
                });
                const result = await response.json();
                setCommentList(result);
                console.log(commentList);
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, [isDone]);

    return(
        <>
            <div>
                <textarea name="comment" id="comment" ref={commentRef} onChange={(e) => setComment(e.currentTarget.value)}></textarea>
                <button
                    onClick={() => {
                        fetch("/api/post/comment", { method: "POST", body: JSON.stringify(body) })
                            .then((res) => {
                                if (res.status === 200) {
                                    window.alert("댓글작성 완료");
                                    setComment("");
                                    setIsDone((prev) => !prev);
                                    commentRef.current.value = "";
                                    commentRef.current.focus();
                                }
                            })
                            .catch((err) => window.alert(`댓글작성 실패 사유: ${err}`));
                    }}
                >
                    작성
                </button>
            </div>
            {commentList.length > 0 ? (
                <ul>
                    {commentList.map((data, i) => (
                        <li key={i}>
                            <b>{data.user}님의 댓글</b>
                            <p>{data.comment}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                "댓글이 없습니다."
            )}
        </>
    );
}
