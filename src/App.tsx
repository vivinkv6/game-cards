import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Platform from "./pages/Platform";
import Category from "./pages/Category";
import Single from "./pages/Single";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<Single />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/category" element={<Category />} />
          <Route path="/search" element={<Search/>} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
      <NavBar />
    </>
  );
}

export default App;
