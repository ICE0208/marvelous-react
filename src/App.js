import "./styles.css";
import Home from "./routes/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Detail from "./routes/Character";
import NotFound from "./routes/NotFound";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/character/:id">
          <Detail />
        </Route>
        <Route path="/notfound">
          <NotFound />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
