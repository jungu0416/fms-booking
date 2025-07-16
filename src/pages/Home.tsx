// Home.tsx (예시)
import { useLoadingStore } from "../store/useLoadingStore";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const { show, hide } = useLoadingStore();

  const handleClick = () => {
    show(); // 로딩 시작
    setTimeout(() => {
      hide(); // 로딩 끄기
      navigate("/reserve"); // 이동
    }, 1000); // 1초 후 이동
  };

  return (
    <div className="p-4">
      <h1 className="mb-4 text-xl font-bold">연습실 예약 현황</h1>
      <button onClick={handleClick} className="rounded bg-blue-600 px-4 py-2">
        예약하기
      </button>
    </div>
  );
}
