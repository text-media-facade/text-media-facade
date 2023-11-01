import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styled, { keyframes } from "styled-components";
import Layout from "../components/Layout";
import bg from "../images/logo.png";

const Main = () => {
  const navigate = useNavigate();
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentComponent, setCurrentComponent] = useState("TextComponent");

  const handleComponentToggle = () => {
    if (currentComponent === "TextComponent") {
      setIsFlipped(true);
      setCurrentComponent("ExplanationComponent");
    } else {
      setIsFlipped(false);
      setCurrentComponent("TextComponent");
    }
  };

  let renderedComponent = null;

  if (currentComponent === "TextComponent") {
    renderedComponent = (
      <TextWrapper>{"Hello!\n Text Media Facade\n\n\n"}
        <span style={{ fontSize: '30px'}}>Click me!</span></TextWrapper>
    );
  } else if (currentComponent === "ExplanationComponent") {
    renderedComponent = (
      <ExplanationWrapper>{`
      안녕하세요👋
      텍스트 미디어 파사드 사용법을 알려드립니다.

      1. 텍스트 입력 일반 사용자/텍스트 입력 코딩 사용자 버튼 중에 하나를 선택하세요.
      🎨 텍스트 입력 일반 사용자 : 코딩은 아직 어렵다! 코딩 없이 스타일을 선택하고 싶다!
      🧑‍💻 텍스트 입력 코딩 사용자 : 코딩 할 줄 안다! 직접 스타일 코드를 작성해보고 싶다! 
      
      2. 방명록 글을 남겨주세요.

      3. 스타일을 선택하거나 작성해주세요.
        ✍️ 작성 팁: color: purple; font-size: 30px; 
    `}</ExplanationWrapper>
    );
  }

  const handleLogoutClick = () => {
    console.log("로그아웃");
    // 쿠키 삭제
    document.cookie =
      "sessionId=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC; Secure; HttpOnly";
  };

  return (
    <Layout>
      <BackgroundWrapper>
        <LeftSideWrapper>
          <LogoImage></LogoImage>
          <CommonButton onClick={() => navigate("/common")}>
            {"텍스트 입력 일반 사용자"}
          </CommonButton>
          <DevButton onClick={() => navigate("/dev")}>
            {"텍스트 입력 코딩 사용자"}
          </DevButton>
          <GuestButton onClick={() => navigate("/guest")}>
            {"방명록 리스트"}
          </GuestButton>
        </LeftSideWrapper>
        <RightSideWrapper onClick={() => handleComponentToggle()}>
          <Wrapper3D isFlipped={isFlipped}>{renderedComponent}</Wrapper3D>
          <LogoText>{"@231102 IoT 학술제"}</LogoText>
        </RightSideWrapper>
      </BackgroundWrapper>
    </Layout>
  );
};

export default Main;

const BackgroundWrapper = styled.div`
  width: 1024px;
  height: 800px;
  display: flex;
  flex-direction: row;
  margin: 100px 80px;
`;

const LogoImage = styled.div`
  margin-bottom: 100px;
  background: url(${bg}) center no-repeat;
  width: 200px;
  height: 187px;
`;

const LeftSideWrapper = styled.div`
  width: 50%;
  height: 100%;
  padding: 10px 12px;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  box-shadow: 0 8px 20px rgba(35, 0, 77, 0.2);
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const RightSideWrapper = styled.div`
  width: 50%;
  height: 100%;
  padding: 10px 12px;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  box-shadow: 0 8px 20px rgba(35, 0, 77, 0.2);
  background-color: #26539c;
  cursor: pointer;
`;

const Wrapper3D = styled.div`
  transform-style: preserve-3d;
  transform: rotateY(${(props) => (props.isFlipped ? "180deg" : "0deg")});
  transition: transform 1s ease;
`;

const shake = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(5px); }
  50% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
  100% { transform: translateX(0); }
`;

const TextWrapper = styled.div`
  height: 400px;
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  color: #fff;
  white-space: pre;
  margin: 300px 50px 10px 50px;
  transform: rotateY(0deg);
  animation: ${shake} 2s ease infinite;
`;

const ExplanationWrapper = styled.div`
  max-width: 400px;
  width: fit-content;
  height: 600px;
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  white-space: pre-line;
  margin: 55px 50px;
  line-height: 200%;
  transform: rotateY(180deg);
`;

const LogoText = styled.div`
  font-size: 16px;
  color: #fff;
  text-align: center;
`;

const CommonButton = styled.button`
  width: 80%;
  height: 60px;
  border-radius: 25px;
  border: none;
  background-color: #f2f2f2;
  color: #000;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  padding: 14px 16px;
  &:hover {
    border: 4px solid #26539c;
  }
`;

const DevButton = styled.button`
  width: 80%;
  height: 60px;
  border-radius: 25px;
  border: none;
  background-color: #f2f2f2;
  color: #000;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  padding: 14px 16px;
  &:hover {
    border: 4px solid #26539c;
  }
`;

const GuestButton = styled.button`
  width: 80%;
  height: 60px;
  border-radius: 25px;
  border: none;
  background-color: #f2f2f2;
  color: #000;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  padding: 14px 16px;
  &:hover {
    border: 4px solid #26539c;
  }
`;

const LogoutButton = styled.button`
  width: 30%;
  height: 30px;
  border-radius: 25px;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  padding: 3px 5px;
  background-color: #26539c;
  margin-top: 80px;
  &:hover {
    background-color: #1b3969;
  }
`;
