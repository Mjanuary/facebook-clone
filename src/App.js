import "./App.css";
import Feed from "./Feed/Feed";
import Header from "./Header/Header";
import SideBar from "./SideBar/SideBar";
import Widgets from "./Widgets/Widgets";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />

      <div className="app__body">
        {/* App body */}
        <SideBar />
        <Feed />
        <Widgets />
      </div>
    </div>
  );
}

export default App;
