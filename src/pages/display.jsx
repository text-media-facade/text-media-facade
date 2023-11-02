import React, { useEffect, useState } from "react";
import "../styles/style1.css";

const Display = () => {
  const [textData, setTextData] = useState([]);
  const [style, setStyleNumber] = useState(1);

  useEffect(() => {
    // 로컬 스토리지에서 데이터 불러오기
    const storedTextData = JSON.parse(localStorage.getItem("textData")) || [];
    console.log("storedTextData = ", storedTextData);
    setTextData(storedTextData);

    // 스타일 번호 설정
    if (storedTextData.length > 0) {
      setStyleNumber(storedTextData[0].style); // 예: 첫 번째 데이터의 style 값을 사용
    }

    // 일정한 간격(10초)으로 데이터 가져오기
    const fetchData = async () => {
      try {
        // 서버에서 데이터를 가져와서 설정
        const response = await fetch("서버에서 데이터를 가져올 URL");
        if (!response.ok) {
          throw new Error("서버에서 데이터 가져오기 실패");
        }
        const data = await response.json();
        if (!data) {
          throw new Error("서버에서 빈 데이터 반환");
        }
      setTextData(data);
      } catch (error) {
        console.error("데이터 가져오기 오류:", error);
      }
    };

    // 페이지가 처음 로드될 때 데이터 가져오기
    fetchData();

    // 10초마다 데이터 가져오기
    const interval = setInterval(fetchData, 10000); // 10초(10000밀리초) 간격으로 데이터 가져오기

    // 컴포넌트가 언마운트될 때 clearInterval로 interval 정리
    return () => clearInterval(interval);
  }, []);

  const renderStyledText = (text, style) => {
    console.log("styleNumber = " + style);
    const styleClass = `style-${style}`;
    console.log("styleClass = " + styleClass);
    const textArray = (text || "").split("");

    return textArray.map((char, index) => (
      <span key={index} className={styleClass}>
        {char}
      </span>
    ));
  };

  return (
    <div className="wrapper">
      <div className="moving-text-container">
        <ul>
          {textData.map((text, index) => (
            <StyledItem
              key={index}
              data={text}
              renderStyledText={renderStyledText}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

const StyledItem = ({ data, renderStyledText }) => {
  const { text, style } = data;
  console.log("data = ", data);
  console.log("text = ", text);
  console.log("styleNumber = ", style);

  const randomTop = 10 + Math.random() * 80;

  return (
    <li>
      <div className={`moving-text text-${style} moving-text-1`} style={{ top: randomTop + "%", left: randomTop + "%",  display: "block"}}>
        {renderStyledText(text, style)}
      </div>
    </li>
  );
};

export default Display;
