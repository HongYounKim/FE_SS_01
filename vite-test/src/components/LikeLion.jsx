import { useState } from "react";

function LikeLion() {
  const [likelion, setLikelion] = useState(true);
  return (
    <>
      <div>{likelion ? <div>멋사 안녕</div> : <div>누구세요</div>}</div>
      <button onClick={() => setLikelion(!likelion)}>상태 변경</button>
    </>
  );
}

export default LikeLion;
