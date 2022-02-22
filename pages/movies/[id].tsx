import { useRouter } from "next/router";

function Detail() {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <h4>{router.query.title || "Loading..."}</h4>
    </div>
  );
}

export default Detail;
