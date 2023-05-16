"use client";
import { useState } from "react";
const Comment = ({ id }) => {
    const [comment, setComment] = useState("");
    const body = { comment: comment, parent: id.toString() };
    return (
        <div>
            <textarea name="comment" id="comment" onChange={(e) => setComment(e.currentTarget.value)}></textarea>
            {comment}
            <button
                onClick={() => {
                    fetch("/api/post/comment", { method: "POST", body: JSON.stringify(body) })
                        .then((res) => {
                            if (res.status === 200) {
                                window.alert("댓글작성 완료");
                                
                            }
                        })
                        .catch((err) => window.alert(`댓글작성 실패 사유: ${err}`));
                }}
            >
                작성
            </button>
        </div>
    );
};

export default Comment;
