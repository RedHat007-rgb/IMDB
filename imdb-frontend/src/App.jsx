import {BrowserRouter, Route,Routes,Link} from "react-router-dom";
import Home from "./Components/Home";
import Messages from "./Components/Messages";
import Notifications from "./Components/Notifications";
import Pictures from "./Components/Pictures";
import Idk from "./Components/Idk";

function App() {
 

  return (
    <div>
      <Link to="/">Home</Link>
      |
      <Link to="/notifications">Notifications</Link>
      |
      <Link to="/messages">Messages</Link>
      
      <Routes>
       <Route path="/" element={<Home/>}>
        <Route index="/pictures" element={<Pictures/>}></Route>
        <Route path="/messages" element={<Messages/>}>
        
            <Route index="/"  element={<Idk/>}  />
        </Route>
        <Route path="/notifications/:id" element={<Notifications/>}/>
       </Route>
      </Routes>
    

   
    </div>
    
  )
}

export default App
