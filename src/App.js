import "./App.scss";

import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ChatProvider } from "./context/ChatContext";
import MainPage from "./components/mainChat/MainPage";

function App() {
  return (
    <Router>
      <AuthProvider>
        <ChatProvider>
          <div className="App">
            <Switch>
              <Route exact path="/register">
                <Register />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/">
                <MainPage />
              </Route>
            </Switch>
          </div>
        </ChatProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
