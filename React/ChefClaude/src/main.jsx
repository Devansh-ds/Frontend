import { createRoot } from "react-dom/client";
import React from "react";

import Header from "./components/Chef/Header";
import Main from "./components/Chef/Main";

import { StateLearn, StateCounter } from "./components/Extra/StateTest";
import PersonCard from "./components/Profile/Person";
import FormLearn from "./components/Extra/Form";
import Counter from "./components/Counter/Counter";

import HeaderData from "./components/DataAroundReact/HeaderData";
import MainData from "./components/DataAroundReact/MainData";

import SoundPad from "./components/SoundPadChallenges/MainBody";

const root = createRoot(document.getElementById("root"));

root.render(
  <>
    <ChefClaude />
  </>
);

function ChefClaude() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

function Forms() {
  return <FormLearn />;
}

function Person() {
  return (
    <main className="person-card">
      <PersonCard />
    </main>
  );
}

function Count() {
  return <Counter />;
}

function DataStateLearn() {
  const [userName, setUserName] = React.useState("Joe");
  return (
    <>
      <HeaderData userName={userName} />
      <MainData userName={userName} />
    </>
  );
}
