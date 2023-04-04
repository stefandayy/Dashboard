import { BrowserRouter, Routes,Route } from "react-router-dom";
import SidebarComponent from "./components/SidebarComponent";
import HomePage from "./pages/HomePage";

import data from "./userDataAPI.json"

const userData = data;

function App() {
  console.log(userData);
  return (
    <BrowserRouter>
    <SidebarComponent />
    <Routes>
      <Route path="/" element={<HomePage data={userData}/>} />
    </Routes>
      
      
    </BrowserRouter>
  );
}

export default App;
