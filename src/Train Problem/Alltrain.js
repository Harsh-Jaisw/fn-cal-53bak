import React, { useState } from "react";
import axios from "axios";
function TrainSchedule() {
  const [train, setTrain] = useState([]);
  const config = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTAwMDU4MzIsImNvbXBhbnlOYW1lIjoiRnVuY3Rpb24gVXAiLCJjbGllbnRJRCI6ImE5MDA3ODk2LTE4ZDEtNDlhYy04YTJjLTVjYTExNjUwMjdjMCIsIm93bmVyTmFtZSI6IiIsIm93bmVyRW1haWwiOiIiLCJyb2xsTm8iOiJmbi1jYWwtNTNiYWsifQ.Ml58SjmPx05vroILgnNEnTW3FzIoFXJstNtB_0IUKDI",
    },
  };
  axios.get("http://20.244.56.144/train/trains", config).then((res) => {
    setTrain(res.data);
  });
  return (
    <div>
      {train?.map((item) => {
        return (
          <div  className="d-flex flex-wrap" style={{width:"64rem"}} onClick={()=>{navigate("/searchTrain"),{state:{trainId:item.trainNumber}} }}>
            <h1>Train Name {item.trainName}</h1>
            <h4>
              Departure : {item.departureTime.Hours}:
              {item.departureTime.Minutes}
            </h4>
            <p>Availble Seats</p>
            <b>Sleeper</b> - <b>{item.seatsAvailble.sleeper}</b>
            <b>AC</b> - <b>{item.seatsAvailble.AC}</b>
          </div>
        );
      })}
    </div>
  );
}

export default TrainSchedule;
