import "./index.css"
import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/Header";
import Featured from "../components/featured/Featured";
import PropertyList from "../components/propertyList/PropertyList";

export default function Index(){
  return(
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
      </div>
    </div>
  );
}
