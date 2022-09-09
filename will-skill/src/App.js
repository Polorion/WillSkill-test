import Header from "./Components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Content from "./Components/Content/Content";
import Page404 from "./Components/Page404/Page404";

function App() {
  return (
    <div className={`App`}>
      <Header />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
