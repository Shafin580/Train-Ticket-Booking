import React, {Component} from 'react';
import {NavigationBar} from './components/navbar/navbar.component';
import {TicketBookingForm} from './components/form/form.component';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  constructor(){

    super();

    this.state = {
      schedules : [
        {id: 1, title : "Dhaka - Chattagram", departureTime: '8:00 AM'},
        {id: 2, title : "Dhaka - Sylhet", departureTime: '8:10 AM'},
        {id: 3, title : "Dhaka - Bogra", departureTime: '9:00 AM'},
        {id: 4, title : "Dhaka - Rangpur", departureTime: '10:00 AM'},
        {id: 5, title : "Dhaka - Cox's Bazar", departureTime: '8:15 AM'},
        {id: 6, title : "Chattagram - Dhaka", departureTime: '8:00 AM'},
        {id: 7, title : "Chattagram - Sylhet", departureTime: '8:10 AM'},
        {id: 8, title : "Chattagram - Bogra", departureTime: '9:00 AM'},
        {id: 9, title : "Chattagram - Rangpur", departureTime: '10:00 AM'},
        {id: 10, title : "Chattagram - Cox's Bazar", departureTime: '8:15 AM'},
        {id: 11, title : "Sylhet - Dhaka", departureTime: '8:00 AM'},
        {id: 12, title : "Sylhet - Chattagram", departureTime: '8:10 AM'},
        {id: 13, title : "Sylhet - Bogra", departureTime: '9:00 AM'},
        {id: 14, title : "Sylhet - Rangpur", departureTime: '10:00 AM'},
        {id: 15, title : "Sylhet - Cox's Bazar", departureTime: '8:15 AM'},
        {id: 16, title : "Bogra - Dhaka", departureTime: '8:00 AM'},
        {id: 17, title : "Bogra - Chattagram", departureTime: '8:10 AM'},
        {id: 18, title : "Bogra - Sylhet", departureTime: '9:00 AM'},
        {id: 19, title : "Bogra - Rangpur", departureTime: '10:00 AM'},
        {id: 20, title : "Bogra - Cox's Bazar", departureTime: '8:15 AM'},
      ],
      searchField: ''
    }
    
    }

    handleChange = element => {
      this.setState({searchField: element.target.value});
    }


  render(){

    const {schedules, searchField} = this.state;
    const filterredschedules = schedules.filter(schedule => 
      schedule.title.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">

        <NavigationBar />
        <div className = 'container mt-5'>

          <div className = 'row row-cols-2'>

          <div className="col d-flex align-items-center">
            <h1><span className="badge badge-dark">Train Ticket Researvation</span></h1>
          </div>

          <div className="col">
            <TicketBookingForm />
          </div>

          </div>

        </div>

        <SearchBox 
         placeholder = 'Search Schedules'
         handleChange = {this.handleChange} />
        <CardList schedules = {filterredschedules} />
        
      </div>
    );
  }
}

export default App;
