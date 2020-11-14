import "./App.scss";

import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import MainPage from "./components/mainChat/MainPage";

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Switch>
            <Route exact path="/login">
              <Register />
            </Route>
            <Route exact path="/register">
              <Login />
            </Route>
            <Route exact path="/">
              <MainPage />
            </Route>
          </Switch>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
