import { useInView } from "framer-motion";
import { useRef } from "react";

export function useInview(name) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const style = {
    transform: isInView ? "none" : "translateY(200px)",
    opacity: isInView ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
  };

  return {
    ref,
    isInView,
    style,
  };
}
