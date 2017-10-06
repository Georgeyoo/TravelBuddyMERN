import React, { Component } from 'react';
// import { Button, Card, Row, Col } from 'react-materialize';

class NavBar extends Component {

  render() {

    return (

      <div className="navBar">
        <nav>
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo center">TravelBuddy</a>
            <a href="#!" data-activates="mobile-demo" className="right button-collapse"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
              <li><a href="login.html">Login</a></li>
              <li><a href="signup.html" className="waves-effect waves-light red btn">Sign Up</a></li>
            </ul>
            <ul className="side-nav" id="mobile-demo">
              <li><a href="login.html">Login</a></li>
              <li><a href="signup.html">Sign Up</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
        
export default NavBar;

// class NavBar extends Component {

//   render() {

//     return (

//       <div className="navBar">
//         <nav>
//           <div className="nav-wrapper">
//             <a href="#!" className="brand-logo">TravelBuddy</a>
//             <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
//             <ul className="right hide-on-med-and-down">
//               <li><a href="login.html">Login</a></li>
//               <li><a href="signup.html" className="waves-effect waves-light btn">Sign Up</a></li>
//             </ul>
//             <ul className="side-nav" id="mobile-demo">
//               <li><a href="login.html">Login</a></li>
//               <li><a href="signup.html" className="waves-effect waves-light btn">Sign Up</a></li>
//             </ul>
//           </div>
//         </nav>
//       </div>
//     );
//   }
// }