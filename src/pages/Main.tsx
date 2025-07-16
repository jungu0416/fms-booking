// src/pages/Main.tsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div>
      <img src="/fms.webp" alt="앱 로고" className="h-40 w-40 object-contain" />
    </div>
  );
}
