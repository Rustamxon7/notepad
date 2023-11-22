import "./App.css";
import { useState } from "react";
import Categories from "./components/Categories";
import Dashboard from "./components/Dashboard";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import Welcome from "./components/Welcome";


const Notes = [
  {
    title: "Hello World",
    info: "Hello my friend",
    hashtags: ["personal"],
    category: "personal",
    edited_at: 15/12/2022,
    created_at: 18/12/2022
  },
  {
    title: "Lorem Ipsum",
    info: "My name is Lorem",
    hashtags: ["personal"],
    category: "personal",
    edited_at: 17/10/2021,
    created_at: 18/11/2021
  },
  {
    title: "IT developer",
    info: "Web developer",
    hashtags: ["personal"],
    category: "personal",
    edited_at: 22/12/2020,
    created_at: 18/10/2020
  },
  {
    title: "Acer Nitro 5",
    info: "256 GB M2 NVME SSD",
    hashtags: ["personal"],
    category: "personal",
    edited_at: 3/5/2019,
    created_at: 17/12/2029
  },
  {
    title: "Macbook Pro",
    info: "Macbook Pro M1 13,3 256 GB",
    hashtags: ["personal"],
    category: "personal",
    edited_at: 1/1/2022,
    created_at: 31/12/2032
  }
]

function App() {
  const [openPage, setOpenPage] = useState(false);
  const [data, setData] = useState(Notes)
  const openDashboard = () => {
    setOpenPage(!openPage);
  };

 

  return (
    <>
     {!openPage && <Welcome openDashboard={openDashboard} />}
      {openPage && (
        <Dashboard>
          <Sidebar data={data}
          setData={setData}
          />
          <Main />
          <Categories />
        </Dashboard>
      )}
    </>
  );
}

export default App;
