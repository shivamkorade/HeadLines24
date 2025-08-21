import "./App.css";
import NavBar from "./components/NavBar";
import NewsComponent from "./components/NewsComponent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <NewsComponent key="general" pageSize={10} country="us" category="general" />
          </Route>
          <Route exact path="/business">
            <NewsComponent key="business" pageSize={10} country="us" category="business" />
          </Route>
          <Route exact path="/entertainment">
            <NewsComponent key="entertainment" pageSize={10} country="us" category="entertainment" />
          </Route>
          <Route exact path="/health">
            <NewsComponent key="health" pageSize={10} country="us" category="health" />
          </Route>
          <Route exact path="/science">
            <NewsComponent key="science" pageSize={10} country="us" category="science" />
          </Route>
          <Route exact path="/sports">
            <NewsComponent key="sports" pageSize={10} country="us" category="sports" />
          </Route>
          <Route exact path="/technology">
            <NewsComponent key="technology" pageSize={10} country="us" category="technology" />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
