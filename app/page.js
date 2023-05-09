/* 
server component vs client component
 
page.js, layout.js에 대충 만드는 컴포넌트들은 전부 server component 입니다.
 
장점 : 페이지 로드시 자바스크립트가 별로 필요가 없어서 빠름
단점 : html 안에 자바스크립트를 못 넣습니다. useState, useEffect, onClick 이런거 사용불가능합니다.

컴포넌트 만들 때 페이지 맨 위에 'use client' 라는 코드를 넣으면 
그 밑에 있는 모든 컴포넌트는 client component가 됩니다. 

장점 : html 안에 자바스크립트 맘대로 넣어서 기능개발 가능 
단점 : 쓸데없는 자바스크립트로 인해 페이지 용량도 커지고 페이지 로딩속도도 약간 느려질 수 있습니다. 
특히 client component를 로드하려면 hydration이라는 과정을 거치게 되는데

html을 로드하고나서 거기에 리액트 문법을 적용하기 위해
컴퓨터가 html을 읽고 분석하는 과정이 필요한데 그걸 hydration이라고 부릅니다.
그거 때문에 페이지 로드속도가 더 느려집니다. 

그래서 큰 페이지들은 보통 server component로 만들고
자바스크립트 기능이 필요한 특정 부분은 client component로 만들어서 넣는게 좋은 습관입니다.
*/

export default function Home() {
    let name = "dongmin";
    return (
        <>
            <div>애플 후레시</div>
            <div>by dev {name}</div>
        </>
    );
}
