import logo from "./logo.svg";
import "./css/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { VisualizerPage } from "./pages/VisualizerPage";
import { MainPage } from "./pages/MainPage";
import { BrandStoryPage } from "./pages/BrandStoryPage";
import { EcobottlePage } from "./pages/EcobottlePage";
import { ContactPage } from "./pages/ContactPage";
import { ScrollTestPage } from "./pages/ScrollTestPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/brand" element={<BrandStoryPage />} />
          <Route path="/ecobottle" element={<EcobottlePage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* <Route path="/contact" element={<ScrollTestPage />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
