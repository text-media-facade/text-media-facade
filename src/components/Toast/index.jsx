import { useEffect } from "react";
import './style'

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
    <div className="toast_container">
      <p className="toast_text">{text}</p> 
    </div>
  );
}

export default Toast;