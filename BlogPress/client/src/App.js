import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Post from "./components/post";
import PostView from "./components/PostView";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Register from "./components/register";
import Login from "./components/login";
import { AuthProviderWrapper } from "./context/auth.context";
import Restricted from "./components/restricted";
import NotRestricted from "./components/notRestricted";
function App() {
  return (
    <AuthProviderWrapper>
      <Router>
        <Routes>
          <Route element={<WithoutNav />}>
            <Route
              path="/auth/register"
              element={
                <NotRestricted>
                  <Register />
                </NotRestricted>
              }
            />
            <Route
              path="/auth/login"
              element={
                <NotRestricted>
                  <Login />
                </NotRestricted>
              }
            />
          </Route>
          <Route element={<WithNav />}>
            <Route
              path="/"
              element={
                <Restricted>
                  <Post />
                </Restricted>
              }
            />
            <Route
              path="/post/:id"
              element={
                <Restricted>
                  <PostView />
                </Restricted>
              }
            />
          </Route>
        </Routes>
      </Router>
    </AuthProviderWrapper>
  );
}

function WithNav() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
function WithoutNav() {
  return <Outlet />;
}
export default App;
