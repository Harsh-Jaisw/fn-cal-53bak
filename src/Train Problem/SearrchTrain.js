import React, { useState } from "react";
import axios from "axios";
import {useLocation} from "react-router-dom"
function TrainSchedule() {
  const location=useLocation()
  const [train,setTrain]=useState({})
  const config = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTAwMDU4MzIsImNvbXBhbnlOYW1lIjoiRnVuY3Rpb24gVXAiLCJjbGllbnRJRCI6ImE5MDA3ODk2LTE4ZDEtNDlhYy04YTJjLTVjYTExNjUwMjdjMCIsIm93bmVyTmFtZSI6IiIsIm93bmVyRW1haWwiOiIiLCJyb2xsTm8iOiJmbi1jYWwtNTNiYWsifQ.Ml58SjmPx05vroILgnNEnTW3FzIoFXJstNtB_0IUKDI",
    },
  };
  axios.get(`http://20.244.56.144/train/${location.state.trainId}`, config).then((res) => {
    setTrain(res.data);
  });
  return (
    <div>
      
        
          <div  className="d-flex flex-wrap" style={{width:"64rem"}}>
            <h1>Train Name {train.trainName}</h1>
            <h4>
              Departure : {train.departureTime.Hours}:
              {train.departureTime.Minutes}
            </h4>
            <p>Availble Seats</p>
            <b>Sleeper</b> - <b>{train.seatsAvailble.sleeper}</b>
            <b>AC</b> - <b>{train.seatsAvailble.AC}</b>
          </div>
       
    </div>
  );
}

export default SearhTrain;
