import { useState, useEffect } from "react";

import styled from "styled-components";
import Layout from "../components/Layout";

const Guest = () => {
  const [guests, setGuests] = useState([]);

  // map 함수를 통해 guest의 name, text, styles, function 불러오기(GET)
  // 만약 undefined이면, '-'
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("서버주소");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setGuests(jsonData.guests);
      } catch (error) {
        console.error("Error fetching guests: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Layout>
      <ListTextWrapper>{"방명록 리스트"}</ListTextWrapper>
      <ColumnWrapper>
        <NameItem>{"이름"}</NameItem>
        <TextItem>{"텍스트"}</TextItem>
        <StyleItem>{"효과"}</StyleItem>
        <FunctionItem>{"함수"}</FunctionItem>
      </ColumnWrapper>
      <ListWrapper>
        {guests.map((guest) => {
          <ListItem key={guest.id}>
            <NameItem>{guest.name || "-"}</NameItem>
            <TextItem>{guest.text || "-"}</TextItem>
            <StyleItem>{guest.style || "-"}</StyleItem>
            <FunctionItem>{guest.function || "-"}</FunctionItem>
          </ListItem>;
        })}
      </ListWrapper>
    </Layout>
  );
};

export default Guest;

const ListTextWrapper = styled.div`
  font-size: 32px;
  font-weight: 700;
  position: absolute;
  top: 150px;
`;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  width: 900px;
  height: 60px;
  top: 240px;
  font-size: 20px;
  font-weight: 600;
  background-color: #1e9ad6;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const ListWrapper = styled.div`
  width: 900px;
  height: 500px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 300px;
  background-color: #fff;
  box-shadow: 0 8px 20px rgba(35, 0, 77, 0.2);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  overflow-y: auto;
`;

const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 50px;
  align-items: center;
  background-color: #fff;
  border-bottom: 2px solid #f2f2f2;
  justify-content: center;
`;

const NameItem = styled.div`
  width: 100px;
  padding: 0px 10px;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
`;

const TextItem = styled.div`
  width: 350px;
  padding: 0px 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
`;

const StyleItem = styled.div`
  width: 50px;
  padding: 0px 10px;
  border: none;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
`;

const FunctionItem = styled.div`
  width: 400px;
  padding: 0px 10px;
  border: none;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
`;
