import Header from "./components/Header";
import React,{useEffect} from 'react';
import { Routes } from "react-router";
import { authActions } from "./store";
import ReactDOM from "react-dom";
import {
  // BrowserRouter as Router,
  Route
  // Routes
} from "react-router-dom";
import Auth from "./components/Auth";
import Blogs from "./components/Blogs";
import UserBlogs from "./components/UserBlogs";
import BlogDetails from "./components/BlogDetails";
import AddBlog from "./components/AddBlog";
import { useSelector,useDispatch } from "react-redux";
import "./style.css";
import Header2 from "./components2/Header2";
import GridAndBlogEntry from "./components2/GridAndBlogEntry";


// ReactDOM.render(
// <>
//   <h1> hello pappu</h1>
//   cnknkd
// </>,
// document.getElementById("root")
// )



function App() {

  const dispath = useDispatch();

  const isLoggedIn = useSelector(state => state.isLoggedIn);
  console.log(isLoggedIn);
 
  useEffect(() => {
    if (localStorage.getItem("userId")) {
      dispath(authActions.login());
    }
  }, [dispath]);
  return (
   <React.Fragment>
    <header>
      <Header />
   
      
    </header>

    <main>
    <Routes>
      <Route path="/" element={<GridAndBlogEntry/> } />

          {!isLoggedIn ? (
            <Route path="/auth" element={<Auth />} />
            // <Route path="/" element={<Header2/>} />
            // {<GridAndBlogEntry/>}
          ) : (
            <>
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogs/add" element={<AddBlog />} />
              <Route path="/myBlogs" element={<UserBlogs />} />
              <Route path="/myBlogs/:id" element={<BlogDetails />} />{" "}
            </>
          )}
        </Routes>
    
        
</main>
    
  </React.Fragment>
  )
}

export default App;
