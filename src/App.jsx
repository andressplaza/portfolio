import { useMediaQuery } from "@mui/material";
import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import Dock from "./components/Dock/Dock"
import { Globe, Phone, FileDown } from "lucide-react";
import About from "./components/About/About";

function App() {
  const isMobile = useMediaQuery("(max-width: 600px)");

  const dockItems = [
    { icon: <Globe />, label: "Social Media", onClick: () => console.log("Home") },
    { icon: <FileDown />, label: "Download CV", onClick: () => console.log("Projects") },
    { icon: <Phone />, label: "Contact", onClick: () => console.log("Contact") },
  ];

  return (
    <>
      {!isMobile && <Nav />}
      <Hero />
      <About />
      {isMobile && <Dock items={dockItems}   />}
    </>
  );
}

export default App;
