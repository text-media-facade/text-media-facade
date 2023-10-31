import { useEffect } from "react";
import "./style";
import { ToastContainer, ToastText } from "./style";

function Toast({ setToast, text }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setToast(false);
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  }, [setToast]);

  return (
    <ToastContainer>
      <ToastText>{test}</ToastText>
    </ToastContainer>
  );
}

export default Toast;
