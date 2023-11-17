import './App.css';
import Categories from './components/Categories';
import Dashboard from './components/Dashboard';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
function App() {
  return (
    <>
      {/* <Welcome /> */}
      <Dashboard>
        <Sidebar />
        <Main />
        <Categories />
      </Dashboard>
    </>
  );
}

export default App;
