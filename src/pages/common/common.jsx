import React, { useState } from "react";

import {
  MainContainer,
  Header,
  TextInput,
  Text,
  Input1,
  Information,
  MyFunction,
  StyleList,
  Button,
  TextImage,
  Back,
  Deco,
  Button1,
  Button2,
  Button3,
  Button4,
} from "./style";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function CommonPage() {
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (styleNumber) => {
    setActiveButton(styleNumber);
  };

  const resetInput = () => {
    setText("");
    setName("");
    setStudentId("");
  };

  const handleSubmit = async () => {
    const styleNumber = activeButton;
    resetInput();
    setActiveButton(null);
    axios
      .post("http://3.38.231.213:8080/api/common", {
        withCredentials: true,
        text: text,
        selection: styleNumber, // 스타일 번호를 전달
        name: name,
        studentId: studentId,
        type: "common",
      }, {
  headers: {
    "Accept": "application/json",
    // 다른 헤더도 추가할 수 있습니다.
  }
      })
      .then((response) => {
        console.log("POST 요청 성공:", response.data);
        const storedTextData =
          JSON.parse(localStorage.getItem("textData")) || [];
        const newText = {
          text: response.data.text,
          style: styleNumber,
        };
        storedTextData.push(newText);
        localStorage.setItem("textData", JSON.stringify(storedTextData));
      })
      .catch((error) => {
        console.log("POST 요청 실패:", error);
      });
  };

  return (
    <MainContainer>
      <Header>
        <Link to="/main">
          <Back />
        </Link>
        <h2>텍스트 입력 일반 사용자</h2>
      </Header>
      <Information>
        <div>
          <Text>이름</Text>
          <input
            placeholder="이름을 입력해주세요."
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <Text>학번</Text>
          <input
            placeholder="학번을 입력해주세요."
            type="text"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
          />
        </div>
      </Information>
      <TextInput>
        <TextImage />
        <Text>텍스트</Text>
        <Input1
          placeholder="텍스트를 입력해주세요."
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </TextInput>
      <MyFunction>
        <div>
          <Deco />
          <Text>텍스트 꾸밈 리스트</Text>
        </div>
        <StyleList>
          <li>
            {" "}
            <Button1
              onClick={() => handleButtonClick(1)}
              className={activeButton === 1 ? "active" : ""}
            >
              Bounce 효과, color: pink
            </Button1>
          </li>
          <li>
            <Button2
              onClick={() => handleButtonClick(2)}
              className={activeButton === 2 ? "active" : ""}
            >
              Bounce 효과, color: orange
            </Button2>
          </li>
          <li>
            <Button3
              onClick={() => handleButtonClick(3)}
              className={activeButton === 3 ? "active" : ""}
            >
              Loading Text 효과, color: green
            </Button3>
          </li>
          <li>
            <Button4
              onClick={() => handleButtonClick(4)}
              className={activeButton === 4 ? "active" : ""}
            >
              Text Animation 효과, color: random
            </Button4>
          </li>
        </StyleList>
        <Button type="submit" onClick={handleSubmit}>
          제출
        </Button>
      </MyFunction>
    </MainContainer>
  );
}

export default CommonPage;