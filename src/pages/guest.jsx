import { useState, useEffect } from "react";

import styled from "styled-components";
import Layout from "../components/Layout";

import axios from "axios";

const Guest = () => {
  const [guests, setGuests] = useState([]);

  // map 함수를 통해 guest의 name, text, styles, function 불러오기(GET)
  // 만약 undefined이면, '-'
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Axios를 사용하여 데이터 가져오기
        const response = await axios.get("http://3.38.231.213:8080/api/guest");

        if (response.status !== 200) {
          throw new Error("Network response was not ok");
        }
        console.log(response.data);
        setGuests(response.data);
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
        <StudentIdItem>{"학번"}</StudentIdItem>
        <SelectionItem>{"스타일 번호"}</SelectionItem>
        <TextItem>{"텍스트"}</TextItem>
        <TypeItem>{"선택"}</TypeItem>
      </ColumnWrapper>
      <ListWrapper>
        {guests &&
          guests.map((guest) => (
            <ListItem key={guest.id}>
              <NameItem>{guest.name || "-"}</NameItem>
              <StudentIdItem>{guest.studentId || "-"}</StudentIdItem>
              <SelectionItem>{guest.selection || "-"}</SelectionItem>
              <TextItem>{guest.text || "-"}</TextItem>
              <TypeItem>{guest.type || "-"}</TypeItem>
            </ListItem>
          ))}
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
  background-color: #26539c;
  color: #fff;
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

const StudentIdItem = styled.div`
  width: 200px;
  padding: 0px 10px;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
`;

const SelectionItem = styled.div`
  width: 350px;
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
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
`;

const TypeItem = styled.div`
  width: 400px;
  padding: 0px 10px;
  text-align: center;
  border: none;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
`;
