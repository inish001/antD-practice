// import logo from './logo.svg';
import "./App.css";
// import Main from './Main';
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import Navbar from "./Project/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Users from "./components/Users";
import Characters from "./components/Characters";
import CharactersDetais from "./components/CharacterDetails";
import Pagination from "./components/Pagination";
import InfiniteScroll from "./components/InfiniteScroll";
import Profile from "./components/Profile";
import ReqAuth from "./components/ReqAuth";
import { AuthProvider } from "./components/auth";
import Login from "./components/Login";
// import AntD from './AntD';
// import Fetch from './Fetch';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        {/* <Fetch/> */}
        {/* <Main/> */}
        {/* <AntD/> */}
        <Navbar />
        <Routes>
          <Route path="/home" element={<ReqAuth><Home />
          </ReqAuth>} />
          <Route path="/users" element={<ReqAuth><Users /></ReqAuth>} />
          <Route path="/characters" element={<ReqAuth><Characters /> </ReqAuth>} />
          <Route path="/home/:characterId" element={<ReqAuth><CharactersDetais /> </ReqAuth>} />
          <Route path="/pagination" element={<ReqAuth><Pagination /> </ReqAuth>} />
          {/* <Route path='/pagination/:numberid' element ={<Pagination/>} /> */}
          <Route path="/infintescrolling" element={<ReqAuth><InfiniteScroll /> </ReqAuth>} />
          <Route
            path="/profile"
            element={
              <ReqAuth>
                <Profile />
              </ReqAuth>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
