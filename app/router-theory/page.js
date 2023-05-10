"use client";
import { useRouter, usePathname, useSearchParams, useParams } from "next/navigation";

export default function Detail() {
    let router = useRouter();
    // 현재 url 출력
    let usePathname2 = usePathname();
    // query string 출력
    let useSearchParams2 = useSearchParams();
    // dynamic route에 입력한내용 (URL 파라미터) 출력
    // let useParams2 = useParams();
    return (
        <div>
            <button type="button" onClick={() => router.push("/")}>
                기본이동
            </button>

            <button type="button" onClick={() => router.back()}>
                뒤로가기
            </button>

            <button type="button" onClick={() => router.forward()}>
                앞으로가기
            </button>

            {/* 이전과 바뀐점만 새로고침 -> soft refresh */}
            <button type="button" onClick={() => router.refresh()}>
                새로고침
            </button>

            {/* 링크의 내용을 미리 로드 (빠르다) server Component 에서는 
                Link태그가 화면에 보일때 자동으로 prefetch 된다 
                <Link href={/} prefetch={false}>링크</Link>
                위와 같은식으로 prefetch를 막을수있다.
                그러나 false로 설정해도, 유저가 Link 위에 마우스를 올리면(hover) 해당 링크가 가리키는 페이지는 자동으로 prefetch 된다
                (링크가 많은 페이지에서 많은 페이지를 미리 로드하는건 자원 낭비이므로)
            */}
            <button
                type="button"
                onClick={() => {
                    // 클릭시 네트워크에서 list가 미리 로드되는걸 확인할수있다.
                    router.prefetch("/list");
                }}
            >
                prefetch
            </button>
        </div>
    );
}
