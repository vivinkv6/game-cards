import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PlatformPage from "./pages/Platform";
import CategoryPage from "./pages/Category";
import Single from "./pages/Single";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";
import Pages from "./pages/Pages";


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pages/:page" element={<Pages/>}/>
          <Route path="/:id" element={<Single />} />
          <Route path="/platform" element={<PlatformPage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/search" element={<Search/>} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
      <NavBar />
    </>
  );
}

export default App;
