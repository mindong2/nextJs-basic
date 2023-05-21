// next에서의 Dynamic routing (...를 붙히면 여러 path가 가능)

type paramsType = string[];

export default function Detail({ params }: { params: paramsType }) {
  const [title] = params;
  return (
    <>
      <h4>{title}</h4>
    </>
  );
}

export function getServerSideProps({ params: { params } }: { params: { params: paramsType } }) {
  return {
    props: {
      params,
    },
  };
}
