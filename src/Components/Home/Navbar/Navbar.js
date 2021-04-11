import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                   <h3>Logo</h3>
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link ml-5 active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ml-5" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ml-5" href="#">Dental Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ml-5 text-white" href="#">Appointment</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ml-5 text-white" href="#">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ml-5 text-white" href="#">Contact Us</a>
                        </li>
       
      

                     </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;