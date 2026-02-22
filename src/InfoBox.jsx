import "./InfoBox.css";

export default function InfoBox({info}){

    return(<div id="main">
      <div id="inner">
      <div className="image">
        <img src="https://plus.unsplash.com/premium_photo-1668024966086-bd66ba04262f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D" alt="https://images.unsplash.com/photo-1617478636464-7ea9804bbf58?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJlYXV0aWZ1bCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D" />
      </div>
      <div className="content">
        <h2>{info.city}</h2>
        <p>Temperature = {info.temp}&deg;C </p>
        <p>Humidity = {info.humidity}</p>
        <p>Min Temp = {info.tempMin}&deg;C</p>
        <p>Max Temp = {info.tempMax}&deg;C</p>
        <p>Feelslike = {info.feelsLike}&deg;C</p>
      </div>
      </div>
    </div>);
};