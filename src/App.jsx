import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Price from "./pages/Price";
import Black from "./pages/Black";
import Gray from "./pages/Gray";
import White from "./pages/White";
import Statement from "./pages/Statement";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/price" element={<Price />} />
          <Route path="/black" element={<Black />} />
          <Route path="/gray" element={<Gray />} />
          <Route path="/white" element={<White />} />
          <Route path="/statement" element={<Statement />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;