import React, { useEffect, useState } from "react";
import "../styles/style1.css";

const Display = () => {
  const [textData, setTextData] = useState([]);
  const [styleNumber, setStyleNumber] = useState(1);

  useEffect(() => {
    // 로컬 스토리지에서 데이터 불러오기
    const storedTextData = JSON.parse(localStorage.getItem("textData")) || [];
    console.log("storedTextData = " + storedTextData);
    setTextData(storedTextData);
  
    // 스타일 번호 설정
    if (storedTextData.length > 0) {
      setStyleNumber(storedTextData[0].style); // 예: 첫 번째 데이터의 style 값을 사용
    }
  }, []);

  const renderStyledText = (text, styleNumber) => {
    console.log("styleNumber = " + styleNumber);
    const styleClass = `style-${styleNumber}`;
    console.log("styleClass = " + styleClass);
    const textArray = text.split(""); // 텍스트를 문자 단위로 분할

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
          <StyledItem key={index} data={text} renderStyledText={renderStyledText} />
        ))}
      </ul>
    </div>
    </div>
  );
};

const StyledItem = ({ data, renderStyledText }) => {
  const { text, styleNumber } = data; // "style" 대신 "styleNumber"로 변경
  console.log("data = ", data);
  console.log("text = ", text);
  console.log("styleNumber = ", styleNumber); // "style"로 변경

  return (
    <li>
      <div className={`moving-text text-${styleNumber} moving-text-1`}>
        {renderStyledText(text, styleNumber)}
      </div>
    </li>
  );
};
export default Display;