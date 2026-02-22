import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"
function App() {
  const [weatherInfo,setweatherInfo] = useState({
    city:"Nagpur",
    feelsLike:31.49,
    humidity:20,
    temp:33.55,
    tempMax:33.55,
    tempMin:33.55,
});

let updateInfo =(result) =>{
  setweatherInfo(result);
}
    
  return (
    <>
      <SearchBox updateInfo = {updateInfo} />
      <InfoBox info = {weatherInfo}/>
    </>
  )
}

export default App
