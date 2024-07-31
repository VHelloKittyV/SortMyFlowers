import DateComponent from "../Date";
import { useState } from "react";
import "./Card.css"
export default function Card() {
    const [currentDate, setCurrentDate] = useState("");
   
  return (
    <>
        
        <div className="listCard">
          <h1 className="listCard_title">
            <DateComponent setDate={setCurrentDate} />
          </h1>
          <textarea className="listCard_preview" />
        </div>
     
    </>
  );
}
