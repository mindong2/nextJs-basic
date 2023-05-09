"use client";
import { useState } from "react";

export default function List() {
    let item = ["Tomatoes", "Pasta", "Coconut"];
    const [count, setCount] = useState([0, 0, 0]);
    return (
        <>
            <h2>Products</h2>
            {item.map((v, i) => {
                return (
                    <div className="food" key={i}>
                        <h4>{v} $40</h4>
                        <button
                            type="button"
                            onClick={() => {
                                if (count[i] > 0) {
                                    const copy = [...count];
                                    copy[i]--;
                                    setCount(copy);
                                }
                            }}
                        >
                            -
                        </button>
                        <span>수량 {count[i]}</span>
                        <button
                            type="button"
                            onClick={() => {
                                const copy = [...count];
                                copy[i]++;
                                setCount(copy);
                            }}
                        >
                            +
                        </button>
                    </div>
                );
            })}
            <div>{count}</div>
        </>
    );
}
