import React from "react";
import logo from "../../logo.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Styles = styled.div`
  .navbar-toggler:focus {
    outline: none;
  }

  .navbar-toggler {
    border: none;
  }
`;

function Navigationbar() {
  return (
    <Styles>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <Link className="navbar-brand ml-5" to="#">
          <img src={logo} alt="logo" style={{ width: "35px" }} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span > <i className="fas fa-bars" style={{color: '#fff'}} ></i></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto">
            <li className="nav-item active">
              <Link className="nav-link text-white text-uppercase ml-5" to="/">
                Home&nbsp;<i class="fas fa-home"></i>{" "}
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white text-uppercase ml-5"
                to="/news"
              >
                News
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white text-uppercase ml-5"
                to="contacts"
              >
                Contact us
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-primary my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </Styles>
  );
}
export default Navigationbar;

// export   const NavigationBar = ( ) =>(

// <Styles>
//     <Navbar expand="lg"bg="light" variant="light">
//         <Navbar.Brand href="/" >StylesNy</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic" />
//         <Navbar.Collapse id="basic-navbar-nav" >
//         <Nav className="ml-auto" >
//             <Nav.Item><Nav.Link href="/" >Home</Nav.Link></Nav.Item>
//             <Nav.Item><Nav.Link  >Locations</Nav.Link></Nav.Item>
//             <Nav.Item><Nav.Link href="/login">Login</Nav.Link></Nav.Item>

//         </Nav>
//         </Navbar.Collapse>
//     </Navbar>
// </Styles>

// )
