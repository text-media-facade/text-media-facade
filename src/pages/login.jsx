import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Layout from "../components/Layout";
import bg from "../images/logo.png";

const Login = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [id, setId] = useState(0);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeId = (e) => {
    setId(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log(name);
    // 다른 페이지로 데이터(name, id) 전달?
  };

  return (
    <Layout>
      <LogoWrapper />
      <LoginWrapper>
        <LoginTextWrapper> {"방명록 작성하기"}</LoginTextWrapper>
        <FormWrapper onSubmit={handleSubmit}>
          <InputWrapper
            placeholder="이름을 입력하세요."
            onChange={handleChangeName}
          />
          <InputWrapper
            placeholder="학번을 입력하세요."
            onChange={handleChangeId}
          />
        </FormWrapper>
        <SubmitButton onSubmit={SubmitButton} onClick={() => navigate("/main")}>
          참여하기
        </SubmitButton>
      </LoginWrapper>
    </Layout>
  );
};

export default Login;

const LoginWrapper = styled.div`
  position: absolute;
  top: 300px;
  width: 736px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 8px;
  box-shadow: 0 8px 20px rgba(35, 0, 77, 0.2);
  text-align: center;
`;

const LoginTextWrapper = styled.div`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 80px;
`;

const LogoWrapper = styled.div`
  position: absolute;
  top: 80px;
  background: url(${bg}) center no-repeat;
  width: 200px;
  height: 200px;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
  width: 80%;
`;
const InputWrapper = styled.input`
  padding: 14px 16px;
  border: none;
  outline: none;
  border-radius: 8px;
  height: 32px;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 30px;
  color: #000;
  &:focus {
    border: 3px solid #26539c;
  }
`;

const SubmitButton = styled.button`
  width: 80%;
  height: 60px;
  border-radius: 8px;
  border: none;
  background-color: #26539c;
  color: #fff;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  padding: 14px 16px;
  &:hover {
    background-color: #1c4079;
  }
`;
