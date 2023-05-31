import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { VisualizerPage } from "./pages/VisualizerPage";
import { MainPage } from "./pages/MainPage";
import { BrandStoryPage } from "./pages/BrandStoryPage";
import { EcobottlePage } from "./pages/EcobottlePage";
import { ContactPage } from "./pages/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<VisualizerPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/brand" element={<BrandStoryPage />} />
          <Route path="/ecobottle" element={<EcobottlePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
