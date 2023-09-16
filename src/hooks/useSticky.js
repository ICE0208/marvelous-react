import { useState, useEffect, useRef } from "react";

// useSticky 커스텀 훅 정의
const useSticky = (initialIsSticky, offset) => {
  const [isSticky, setIsSticky] = useState(initialIsSticky);
  const stickyRef = useRef();

  useEffect(() => {
    const onScroll = () => {
      if (!stickyRef.current) return;
      setIsSticky(stickyRef.current.getBoundingClientRect().top <= offset);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);

  return { stickyRef, isSticky };
};

export default useSticky;
