import { CustomerReviews,Services,SpecialOffer,Subscribe,SuperQuality,Hero,Footer,PopularProducts } from "./sections";
import Nav from "./components/Nav";
import {Routes,Route, BrowserRouter} from "react-router-dom"
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
const App=()=>(
   <div>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
</Routes>
   </div>
);
export default App;

