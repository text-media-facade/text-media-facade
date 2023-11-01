import React, { useEffect, useState } from "react";
import "../styles/style1.css";

const Display = () => {
  const [textData, setTextData] = useState([]);

  useEffect(() => {
    // 로컬 스토리지에서 데이터 불러오기
    const storedTextData = JSON.parse(localStorage.getItem("textData")) || [];
    setTextData(storedTextData);
  }, []);

  return (
    <div>
      <ul>
        {textData.map((text, index) => (
          <StyledItem key={index} data={text} />
        ))}
      </ul>
    </div>
  );
};

const StyledItem = ({ data }) => {
  const { text, styleNumber } = data;
  const styleClass = `style-${styleNumber}`;

  return (
    <li className={styleClass}>
      <a href="https://en.wikipedia.org/wiki/Red">{text}</a>
    </li>
  );
};

export default Display;
