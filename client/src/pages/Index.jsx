import "./index.css"
import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/Header";
import Featured from "../components/featured/Featured";

export default function Index(){
  return(
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <Featured/>
        
      </div>
    </div>
  );
}
