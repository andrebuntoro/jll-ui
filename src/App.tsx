import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Container from "@mui/material/Container";

import { AuthRoute } from "./route/AuthRoute";
import { Paths } from "./route/path";
import Login from "./screens/login";
import Home from "./screens/home";

function App() {
  return (
    <Container
      sx={{
        display: "flex",
        minHeight: "100vh",
        minWidth: "100vh",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#d96207",
      }}
    >
      <Router>
        <Switch>
          <Route path={Paths.login}>
            <Login />
          </Route>
          <AuthRoute Component={Home} path={Paths.home}></AuthRoute>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
