import React from "react";
import { Link } from "react-router-dom";

class  Header extends React.Component{
  render(){


    
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-primary barr">
        <div className="Header">
          <div className="navbar-brand">
            Note app
          </div>
          <div className="Header">
              <ul>
                <li className="nav-item">
                  <Link className="nav-link" to="/">Главная </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">Информация </Link>
                </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  } 
}

export default Header