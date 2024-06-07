import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce, ToastContainer } from "react-toastify";
import PrivateRouter from "./component/PrivateRouter";
import MyInfo from "./component/MyInfo";
import UserDashbord from "./component/UserDashbord";

function App() {
  return (
    <>
      <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        limit={3}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"

        
        />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />

          <Route path="/user" element={< PrivateRouter/>}/>
          <Route path="/myInfo" element={< MyInfo/>}/>
          <Route path="/userDashbord" element={<UserDashbord/>}/>
        </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;
