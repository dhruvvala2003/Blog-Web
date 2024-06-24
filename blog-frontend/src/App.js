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
import PostPage from "./pages/PostPage";
import Categorys from "./pages/Categorys";
import UpdateBlog from "./pages/UpdateBlog";
import ProfileUpdateForm from "./pages/ProfileUpdateForm";
import SerchImpl from "./pages/SerchImpl";

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

          <Route path="/user" element={<PrivateRouter/>}/>
          <Route path="/myInfo/:uid" element={<MyInfo/>}/>
          <Route path="/userDashbord" element={<UserDashbord/>}/>

          <Route path="/post" element={<PostPage/>}/>

          <Route path="/category/:category_Id" element={<Categorys/>}/>
          <Route path="/update-blog/:blogId" element={<UpdateBlog/>}/>
          <Route path="/updateProfile" element={<ProfileUpdateForm/>}/>

          <Route path="/serchImpl" element={<SerchImpl/>}/>
          
        </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;
