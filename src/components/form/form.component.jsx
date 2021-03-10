import React, {useState} from "react";

export const TicketBookingForm = () => {
const [rout,setRout] = useState('');
const [to ,setTo] = useState('');
const [date,setDate] = useState('');
const [clas,setClas] = useState('');
const [passengers,setPassengers] = useState('');
const [ticekts,setTickets] = useState([]);

const handleSubmit = (e) =>{
  e.preventDefault();
  console.log(rout,to,date,clas,passengers);
  if(rout && to && date && clas && passengers)
  {
        const person = { id:new Date().getTime().toString() ,rout , to , date , clas , passengers};
        setTickets ((ticekts) =>{
             return [...ticekts,person]
        });
        setRout('');
        setTo('');
        setDate('');
        setClas('');
        setPassengers('');
  }
  else 
  {
    alert('PLEASE INSERT THE VALUES');
  }
}



  return (
    <>
    <article>
    <form className='form' onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="d-flex justify-content-start">
          <h4>Route</h4>
        </label>
        <div className="row">
          <div className="col">
          <select className="form-control" id="rout" name="rout" value = {rout}
          onChange= {(e) => setRout(e.target.value)}>
          <option>Dhaka</option>
          <option>Chattagram</option>
          <option>Sylhet</option>
          <option>Bogra</option>
          <option>Rangpur</option>
          <option>Cox's Bazar</option>
        </select>
          </div>

          <div className="col">
          <select className="form-control" id="to" name="to" value = {to}
          onChange= {(e) => setTo(e.target.value)}>
          <option>Dhaka</option>
          <option>Chattagram</option>
          <option>Sylhet</option>
          <option>Bogra</option>
          <option>Rangpur</option>
          <option>Cox's Bazar</option>
        </select>
          </div>
        </div>
      </div>

      <div className="form-group">
        <div className="row">
          <div className="col">
            <label className="d-flex justify-content-start">
              <h4>Date</h4>
            </label>
            <input type="date" className="form-control" placeholder="Date" id="date" name="date"  value = {date}
            onChange= {(e) => setDate(e.target.value)}/>
          </div>

          <div className="col">
            <label className="d-flex justify-content-start">
              <h4>Class</h4>
            </label>
            <select className="form-control" id="clas" name="clas" value = {clas}
            onChange= {(e) => setClas(e.target.value)}>
            <option>Choose A Class</option>
          <option>First Class</option>
          <option>Business Class</option>
          <option>General Class</option>
        </select>
          </div>
        </div>
      </div>

      <div className="form-group">
        <label className="d-flex justify-content-start">
          <h4>Passenger(s)</h4>
        </label>

        <select className="form-control" id="passengers" name="passengers" value = {passengers}
        onChange= {(e) => setPassengers(e.target.value)}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select>
      </div>

      <div className="form-group">
      <button type="submit" className="btn btn-success btn-lg btn-block">Buy</button>
      </div>
    </form>

    {
        ticekts.map((person,index) => {
          const {id,rout,to,date,clas,passengers} = person
          return(
          <div className='item alert alert-success' key='id'>
              <h4>Departure   : {rout}</h4>
              <h4>Desitnation : {to}</h4>
              <p>Date : {date}</p>  
              <p>Class : {clas}</p>   
              <p>Number of tickets : {passengers}</p>   
              <button type="button" class="btn btn-danger m-2">PRINT</button> 
              <button type="button" class="btn btn-primary">CANCEL</button>
              
          </div>
        );
        })
      }
    
 </article>   
</>
);
 
};
