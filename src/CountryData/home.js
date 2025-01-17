import { useState } from "react";

import CountryData from "./countryData";
import InitialData from "./initialData";
import SingleCountry from "./singleCountry";
import "./app.css";
import SheimerEffect from "./sheimerEffect";
import { useEffect } from "react";


const Home=()=>{

    const[inputData,setInputData] = useState("")
    const[filterData,setFilterData] = useState([])
    const[singleCData,setSingleCountryData] = useState([])
    const [loading, setLoading] = useState(true); 
 

    useEffect(() => {
     
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000); 
  
      return () => clearTimeout(timer); 
    }, []);


    const renderContent = () => {
      if (loading) {
        return <SheimerEffect />;
      }
      
      if (singleCData.length > 0) {
        return <SingleCountry data={singleCData} />;
      }
      
      if (filterData.length === 0 && inputData === '') {
        return <InitialData />;
      }
  
      
    };

   const handleChange = (e) => {
    const value = e.target.value;
    setInputData(value);

    if (!value) {
      setFilterData([]);
      setSingleCountryData([]);
      return;
    }

    let SearchData = CountryData.filter((item) => {
      const country = item.country || '';
      const capital = item.capital || '';

      return `${country}${capital}`.toUpperCase().includes(value.toUpperCase());
    });

    setFilterData(SearchData);

};


 const handleClick=(value)=>{
          
         let SingleCountryData=CountryData.filter((item,index)=>{
            if(`${item.country}`.toUpperCase().includes(value.toUpperCase())==true){
                       return true;
            }else{
              return false
            }
    })
        console.log(SingleCountryData)
        
        setSingleCountryData(SingleCountryData)
        setFilterData([])
        setInputData('')
        
 }

    return(<>
        <div className="container-fluid homeContainer">
        <div className="container">
             <h1 style={{textAlign:"center", color:"white"}}><b>Know About The Country</b></h1>
            <div className="row" style={{display: 'flex', justifyContent: 'center', width: '50%', margin: '50px auto' }}>
            <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1"> <svg style={{marginRight:"10px"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
</svg></span>
  <input  value={inputData}
  onChange={handleChange}
  type="text" class="form-control" placeholder="Search Any  Country" aria-label="Username" aria-describedby="basic-addon1"/>
</div>
                 </div>

                 <div className="row justify-content-center mt-3">
        <div className="col-md-6 ListGroup">
          <ul className="list-group">
            { filterData.length>0 ? filterData.map((item, index) => (
              <li  style={{color:"blue" , cursor:"pointer"}}  key={index} className="list-group-item" onClick={()=>{handleClick(item.country)}}>
                <svg style={{marginRight:"10px"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
</svg> {item.country}
              </li>
            )):" " }
          </ul>
        </div>
      </div>


   <div className="row">
          {renderContent()}
   </div>
        </div>
      
        </div>
    </>)
}

export default Home