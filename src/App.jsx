import "./App.css";
import NavBar from "./components/NavBar";
import NewsComponent from "./components/NewsComponent";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <>
      <NavBar />
      <NewsComponent pageSize={10} country="us" />
    </>
  );
}

export default App;
