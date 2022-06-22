import React, { useState } from "react";
import styled from "styled-components";
import TodoList from "../components/TodoList";
import { useMediaQuery } from "react-responsive";

const Todo = () => {
  const isMobile = useMediaQuery({
    query: "(max-width:800px)",
  });
  const [content, setContent] = useState("");
  const [Addcontent, setAddcontent] = useState([]);
  const addCreate = (e) => {
    if (content === "") {
      window.alert("내용을 작성해 주세요.");
      return;
    }
    setAddcontent((Addcontent) => [...Addcontent, content]);
    setContent("");
  };
  if (isMobile) {
    return (
      <>
        <Container>
          <h1>ToDo</h1>
          <div>
            <InputBoxM
              placeholder="input text"
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
            ></InputBoxM>
            <AddBtnM onClick={addCreate}>ADD</AddBtnM>
          </div>
          <hr
            style={{
              width: "50%",
              border: "1px solid lightgray",
              margin: "50px 0",
            }}
          />
        </Container>
        <TodoList Addcontent={Addcontent} setAddcontent={setAddcontent} />
      </>
    );
  }
  return (
    <>
      <Container>
        <h1>ToDo</h1>
        <div>
          <InputBox
            placeholder="input text"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          ></InputBox>
          <AddBtn onClick={addCreate}>ADD</AddBtn>
        </div>
        <hr
          style={{
            width: "50%",
            border: "1px solid lightgray",
            margin: "50px 0",
          }}
        />
      </Container>
      <TodoList Addcontent={Addcontent} setAddcontent={setAddcontent} />
    </>
  );
};

export default Todo;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: none;
  border-top: none;
  border-left: none;
`;

const InputBoxM = styled.input`
  border-right: none;
  border-top: none;
  border-left: none;
  border-bottom: 3px solid;
  margin-right: 20px;
  padding: 10px;
  width: 34.7222vw;
`;
const InputBox = styled.input`
  border-right: none;
  border-top: none;
  border-left: none;
  border-bottom: 3px solid;
  margin-right: 20px;
  padding: 10px;
  width: 500px;
`;

const AddBtnM = styled.button`
  border: 3px double gray;
  background: white;
  border-radius: 10px;
  padding: 0.6944vw;
  width: 4.8611vw;
  height: 3.8194vw;
  font-size: 1.0417vw;
  cursor: pointer;
`;
const AddBtn = styled.button`
  border: 3px double gray;
  background: white;
  border-radius: 10px;
  padding: 10px;
  width: 70px;
  height: 55px;
  font-size: 15px;

  cursor: pointer;
`;
