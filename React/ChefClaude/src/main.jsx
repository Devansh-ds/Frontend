import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";

import Header from "./components/Header";
import Main from "./components/Main";

import { StateLearn, StateCounter } from "./components/StateTest";
import PersonCard from "./components/Person";
import FormLearn from "./components/Form";

const root = createRoot(document.getElementById("root"));

root.render(
  <>
    <Forms />
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
