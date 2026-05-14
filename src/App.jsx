import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import WelcomeIntro from "./components/WelcomeIntro";

export default function App() {
  return (
    <>
      <WelcomeIntro />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </>
  );
}