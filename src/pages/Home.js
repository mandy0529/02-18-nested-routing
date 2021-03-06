import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

function Home() {
  return (
    <Wrapper>
      <h1>Characters types</h1>
      <div>
        <Link to="donald">도날드덕</Link>
        <Link to="pooh">푸</Link>
        <Link to="sponge">스폰지밥</Link>
        <Link to="elsa">엘사</Link>
        <Link to="woodie">우디</Link>
        <main>
          <Outlet />
        </main>
      </div>
    </Wrapper>
  );
}

const Wrapper =styled.div`
div {
  margin:3rem;
}
a {
    list-style-type: style none;
    text-decoration:none;
    color:black;
    margin:0 2rem;
    padding:0.5rem 1.5rem;
    border-radius:10px;
    background:gray;
    color:white;
    font-weight:bold;
    transition: all 0.3s linear;
    border:3px solid transparent;
    &:hover {
        background-color:transparent;
        color:gray;
        border:3px solid gray;
    }
}`;
export default Home;
