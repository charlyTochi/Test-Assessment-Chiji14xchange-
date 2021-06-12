
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "reactstrap";

var ps;

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.activeRoute.bind(this);
  }
  // verifies if routeName is the one active (in browser input)
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.refs.sidebar, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
    }
  }
  render() {
    return (
      <div className="sidebar secondary-color" data-color={this.props.backgroundColor}>
        <div className="sidebar-wrapper secondary-color" ref="sidebar">
          <div className="logo-area mt-4" style={{textAlign: "center"}}>
            <a style={{fontWeight: "bold", fontSize: 18}} >
            <img src={require('../../assets/img/logo.png')} style={{ height: 35, width: 40 }}  />

              test
            </a>
          </div>
          <Nav>
            {this.props.routes.map((prop, key) => {
              if (prop.redirect) return null;
              return (
                <li
                  className={
                    this.activeRoute(prop.layout + prop.path) +
                    (prop.pro ? " active active-pro" : "")
                  } style={{ color: "#fbfbff" }}
                  key={key}
                >
                  <NavLink
                    to={!prop.pro && prop.layout + prop.path}
                    className="nav-link"
                    activeClassName="active"
                    style={{ borderRadius: 0, margin: 0, color: "#ffff", textTransform: "capitalize" }}
                  >
                    <i style={{ color: "red" }} className={"now-ui-icons " + prop.icon}><span>{prop.iconComponent}</span> </i>
                    <p style={{ color: "#abb2c7" }}>{prop.name}</p>
                  </NavLink>
                </li>
              );
            })}
          </Nav>
        </div>
      </div>
    );

  }
}

export default Sidebar;
