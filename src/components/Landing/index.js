import React from 'react';
import * as ROUTES from '../../constants/routes';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div>
    <div class = "d-flex justify-content-center mx-auto">
         <div class= "display-2 font-weight black--text text-xs-center">
         Test Your Website Now!
         </div>
    </div>
    <div class="d-flex justify-content-center mx-auto">
     <button href="/signin" class="btn btn-dark" ><Link to={ROUTES.SIGN_IN}>Sign In</Link></button>
     <button href="/signup" class="btn btn-dark" ><Link to={ROUTES.SIGN_UP}>Sign Up</Link></button>
    </div>
  </div>



);

export default Landing;
