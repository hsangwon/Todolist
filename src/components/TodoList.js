import React, { useState } from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const TodoList = (props) => {
  const isMobile = useMediaQuery({
    query: "(max-width:800px)",
  });
  const Delcontent = (x) => {
    props.setAddcontent(props.Addcontent.filter((text) => text !== x));
  };
  if (isMobile) {
    return (
      <Container>
        {props.Addcontent.map((x, index) => (
          <TodoCardM key={index}>
            <div>{index + 1}</div>
            <div>{x}</div>
            <DelBtnM
              onClick={() => {
                Delcontent(x);
              }}
            >
              del
            </DelBtnM>
          </TodoCardM>
        ))}
      </Container>
    );
  }

  return (
    <Container>
      {props.Addcontent.map((x, index) => (
        <TodoCard key={index}>
          <div>{index + 1}</div>
          <div>{x}</div>
          <DelBtn
            onClick={() => {
              Delcontent(x);
            }}
          >
            del
          </DelBtn>
        </TodoCard>
      ))}
    </Container>
  );
};

export default TodoList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: max-content;
  gap: 20px;
`;

const TodoCardM = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
  height: 3.4722vw;
  line-height: 3.4722vw;
  font-size: 1.0417vw;
  font-weight: bold;
`;
const TodoCard = styled.div`
  display: flex;
  justify-content: space-between;
  width: 35%;
  height: 50px;
  line-height: 50px;
  font-size: 15px;
  font-weight: bold;
`;

const DelBtnM = styled.button`
  border: 2px solid black;
  background: white;
  width: 5.5556vw;
  height: 2.7778vw;
  font-size: 1.1111vw;
  font-weight: bold;
`;
const DelBtn = styled.button`
  border: 2px solid black;
  background: white;
  width: 80px;
  height: 40px;
  font-size: 16px;
  font-weight: bold;
`;
