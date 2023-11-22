import "./App.css";
import { useState } from "react";
import Categories from "./components/Categories";
import Dashboard from "./components/Dashboard";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import Welcome from "./components/Welcome";
import { notes } from "./data/data";

function App() {
  const [openPage, setOpenPage] = useState(true);
  const [data, setData] = useState(notes);
  const openDashboard = () => {
    setOpenPage(!openPage);
  };
  const [activeNote, setActiveNote] = useState({
    id: 1,
    title: "Lorem Ipsum",
    info: "My name is Lorem",
    hashtags: ["personal"],
    category: "personal",
    edited_at: 17 / 10 / 2021,
    created_at: 18 / 11 / 2021,
  });

  return (
    <>
      {!openPage && <Welcome openDashboard={openDashboard} />}
      {openPage && (
        <Dashboard>
          <Sidebar
            data={data}
            setData={setData}
            activeNote={activeNote}
            setActiveNote={setActiveNote}
          />
          <Main activeNote={activeNote} setActiveNote={setActiveNote} />
          <Categories />
        </Dashboard>
      )}
    </>
  );
}

export default App;
