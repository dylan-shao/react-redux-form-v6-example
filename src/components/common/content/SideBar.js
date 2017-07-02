import React,{ Component } from 'react'
import { Link } from 'react-router-dom'

// import { UserProfile } from './UserProfile'
const $ = window.$;
require('metismenu');
class SideBar extends Component {
  componentDidMount(){

    $('#side-menu').metisMenu();

  }
  render(){
    return (
      <div id="sidebar">
        <div className="navbar-default sidebar" role="navigation" style={{paddingTop:'0px'}}>
          <div className="sidebar-nav navbar-collapse slimscrollsidebar">
            <ul className="nav" id="side-menu">
              <li>
                <Link to="/project/simple" className="waves-effect active">
                  <i className="linea-icon linea-basic fa-fw" data-icon="Z"></i>
                  <span className="hide-menu">Simple Form</span>
                </Link>
              </li>

              <li>
                <a className="waves-effect active">
                  <i className="linea-icon linea-basic fa-fw" data-icon="S"></i>
                  <span className="hide-menu">Validation<span className="fa arrow"></span> </span>
                </a>
                <ul className="nav nav-second-level">
                  <li> <Link to="/project/syncValidation">Sync Validation</Link> </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export { SideBar }
