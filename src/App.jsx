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
  searchResult: [],
};

const OPEN_DASHBOARD = "OPEN_DASHBOARD";
const CURRENT_NOTE = "CURRENT_NOTE";
const SEARCH = "SEARCH";
const ADD_NOTE = "ADD_NOTE";
const EDIT_NOTE = "EDIT_NOTE";

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
    case ADD_NOTE:
      return {
        ...state,
        // data: state.data.push(action.payload),
        data: [action.payload, ...state.data],
        activeNote: action.payload,
      };
    case EDIT_NOTE:
      return {
        ...state,
        data: action.payload,
      };
    case SEARCH:
      return {
        ...state,
        searchResult: action.payload,
      };
    default:
      return state;
  }
};

function App() {
  const [{ openPage, data, activeNote, searchResult }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const openDashboard = () => {
    dispatch({ type: OPEN_DASHBOARD });
  };

  const handleActiveNote = (note) => {
    dispatch({ type: CURRENT_NOTE, payload: note });
  };

  /*const date = new Date(timestamp * 1000);
const datevalues = [
   date.getFullYear(),
   date.getMonth()+1,
   date.getDate( */

  return (
    <>
      {!openPage && <Welcome openDashboard={openDashboard} />}
      {openPage && (
        <Dashboard>
          <Sidebar
            searchResult={searchResult}
            data={data}
            activeNote={activeNote}
            onActiveNote={handleActiveNote}
            dispatch={dispatch}
          />
          <Main activeNote={activeNote} data={data} dispatch={dispatch} />
          <Categories dispatch={dispatch} data={data} />
        </Dashboard>
      )}
    </>
  );
}

export default App;
