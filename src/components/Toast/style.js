import styled from "styled-components";

export const ToastContainer = styled.div`
  position: fixed;
  z-index: 99;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 24rem;
  height: 2.625rem;
  border-radius: 10px;
  box-shadow: 0 0 15px 0 var(--black-40);
  background-color: #323232;
`;

export const ToastText = styled.p`
  font-weight: bold;
  letter-spacing: 0.29px;
  text-align: center;
  margin-top: 0.6rem;
`;
