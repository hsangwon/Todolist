import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const RestApi = () => {
  async function users() {
    try {
      const response = await axios.post("https://reqres.in/api/users", {
        name: name,
        job: job,
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  return (
    <Container>
      <Title>
        <h1 style={{ color: "#586fab" }}>RestApi Post</h1>
        <NameInput
          placeholder="Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></NameInput>
        <JobInput
          placeholder="Job"
          onChange={(e) => {
            setJob(e.target.value);
          }}
        ></JobInput>
        <Post onClick={users}>전송</Post>
      </Title>
    </Container>
  );
};

export default RestApi;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 1px solid black;
  border-radius: 10px;
  width: 500px;
  height: 500px;
  gap: 50px;
`;

const NameInput = styled.input`
  width: 300px;
  height: 60px;
  border: 1px solid black;
`;

const JobInput = styled.input`
  width: 300px;
  height: 60px;
  border: 1px solid black;
`;

const Post = styled.button`
  width: 100px;
  height: 50px;
  background: black;
  color: white;
  border: none;
  border-radius: 5px;
`;
