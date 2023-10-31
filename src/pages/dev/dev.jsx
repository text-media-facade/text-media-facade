import React, { useState } from "react";
import {
  MainContainer,
  Header,
  TextInput,
  Text,
  Input1,
  MyFunction,
  Input2,
  Button,
  Back,
  Code,
  T,
} from "./style";
import { Link } from "react-router-dom";
import Toast from "../../components/Toast";

function DevPage() {
  const [text, setText] = useState("");
  const [code, setCode] = useState("");
  const [toast, setToast] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === "Tab") {
      e.preventDefault(); // 기본 동작을 중지
      const { selectionStart, selectionEnd } = e.target;
      const newCode =
        code.substring(0, selectionStart) + "\t" + code.substring(selectionEnd);
      setCode(newCode);
    }
  };

  const resetInput = () => {
    setText("");
    setCode("");
  };

  const showToast = () => {
    resetInput();
    setToast(true);
    console.log("토스트메세지!!!!!!!!!!");
    //         toast.success('제출되었습니다.', {
    //             position: "center", // 토스트 메시지 위치 설정 (위쪽 오른쪽)
    //             autoClose: 3000, // 메시지가 자동으로 닫히는 시간 (3초)
    //   });
  };

  {
    toast && <Toast setToast={setToast} text="제출되었습니다." />;
  }

  return (
    <MainContainer>
      <Header>
        <Link to="/main">
          <Back />
        </Link>
        <h2>텍스트 입력 코딩 사용자</h2>
      </Header>
      <TextInput>
        <T />
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
          <Code />
          <Text>나만의 함수 입력</Text>
        </div>
        <Input2
          rows="10"
          cols="50"
          placeholder="나만의 함수를 입력하세요. 입력 가능 함수 : python, java ..."
          value={code}
          onChange={(e) => setCode(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Button type="submit" onClick={showToast}>
          제출
        </Button>
      </MyFunction>
    </MainContainer>
  );
}

export default DevPage;

// const showToast = () => {
//     // 여기서 서버로 POST 요청을 보냅니다.
//     axios.post('서버의_URL', {
//         text,
//         function: code,
//         // 세션 ID 또는 사용자 구분 정보를 추가합니다.
//     })
//     .then((response) => {
//         // 성공적으로 제출된 경우 토스트 메시지 표시
//         toast.success('제출되었습니다.', {
//             position: "top-right",
//             autoClose: 3000,
//         });
//         resetInput();
//     })
//     .catch((error) => {
//         // 요청이 실패한 경우 에러 처리
//         console.error(error);
//         toast.error('제출에 실패했습니다.');
//     });
// };
