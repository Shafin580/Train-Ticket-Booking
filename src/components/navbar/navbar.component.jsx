import React from 'react';


export const NavigationBar = () => {

    return(

        <nav className='navbar navbar-expand-md navbar-dark bg-dark'>

                <a className="navbar-brand" href="h">
                    <img alt = "Train"
                     src = 'https://cdn.pixabay.com/photo/2014/03/24/17/21/amtrak-295512_1280.png'
                     width = '60'/>
                    Train Ticket Booking
                </a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav ml-auto">

                        <li className="nav-item">
                            <a className="nav-link" href="h">Home</a>

                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="h">Login</a>

                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="h">Register</a>

                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="h">Contact Us</a>

                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="h">About</a>

                        </li>

                    </ul>

                </div>

            </nav>
    );
}