import "./App.css";
import { useReducer, useState } from "react";
import Categories from "./components/Categories";
import Dashboard from "./components/Dashboard";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import Welcome from "./components/Welcome";
import { notes } from "./data/data";

const initialState = {
  openPage: true,
  data: notes,
  activeNote: notes[0],
};

const OPEN_DASHBOARD = "OPEN_DASHBOARD";
const CURRENT_NOTE = "CURRENT_NOTE";

const reducer = (state, action) => {
  switch (action.type) {
    case OPEN_DASHBOARD:
      return {
        ...state,
        openPage: !state.openPage,
      };
    case CURRENT_NOTE:
      return {
        ...state,
        activeNote: action.payload,
      };
    default:
      return state;
  }
};

function App() {
  // const [openPage, setOpenPage] = useState(true);
  // const [data, setData] = useState(notes);
  // const [activeNote, setActiveNote] = useState({
  //   id: 1,
  //   title: "Lorem Ipsum",
  //   info: "My name is Lorem",
  //   hashtags: ["personal"],
  //   category: "personal",
  //   edited_at: 17 / 10 / 2021,
  //   created_at: 18 / 11 / 2021,
  // });

  const [{ openPage, data, activeNote }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const openDashboard = () => {
    // setOpenPage(!openPage);
    dispatch({ type: OPEN_DASHBOARD });
  };

  const handleActiveNote = (note) => {
    dispatch({ type: CURRENT_NOTE, payload: note });
  };

  return (
    <>
      {!openPage && <Welcome openDashboard={openDashboard} />}
      {openPage && (
        <Dashboard>
          <Sidebar
            data={data}
            activeNote={activeNote}
            onActiveNote={handleActiveNote}
          />
          <Main activeNote={activeNote} onActiveNote={handleActiveNote} />
          <Categories />
        </Dashboard>
      )}
    </>
  );
}

export default App;
