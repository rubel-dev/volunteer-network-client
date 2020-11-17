import React from 'react';
import Logo from '../../logos/Logo.png'

const Header = () => {
    
    return (
        <div className='container' style={{marginBottom:"50px"}}>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#"><img src={Logo} style={{width:"100px"}}></img></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav ml-auto">
                        <a class="nav-link active" href="/home">Home <span class="sr-only">(current)</span></a>
                        <a class="nav-link" href="#">Donation</a>
                        <a class="nav-link" href="/event">Events</a>
                        <a class="nav-link" href="#" >Blog</a>
                        <button className="btn btn-primary">Register</button>
                        <button className="ml-2 btn btn-secondary">Admin</button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;