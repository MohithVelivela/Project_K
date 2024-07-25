import React from "react";
import ReactDOM from "react-dom";

const name = "Mohith";
const lname = "Velivela";
const date = new Date();
console.log(date);
let year = date.getFullYear();

const App = () => {
  return (
    <div>
      <div className="title-box">
        <img
          src="https://www.iitdh.ac.in/sites/default/files/2024-01/logo_white_final.png"
          alt="Logo"
          className="logo"
        />
        <h1 className="title">NAVIC, IIT Dharwad</h1>
        <h4>Campus Navigation and Information Service of IIT Dharwad</h4>
        <div className="spacer"></div>
      </div>
      <div className="navbar">
        <a href="#Live Location">Live Location</a>
        <a href="#Navigate">Navigate</a>
        <a href="#Find here">Find a Service</a>
        <a href="#Find here">Find a Professor</a>
        <a href="#Find here">Find a Staff</a>
        <a href="#Find here">Find a Building</a>
        <a href="#Find here">Find a Student</a>
        <a href="#Bus Schedule">Bus Stops and Timings</a>
        <a href="#contact">Contact</a>
        <input type="text" placeholder="Search..." className="search-box" />
      </div>

      <div className="main-content">
        <div style={{ padding: "20px" }}>
          <h1 className="information">Welcome to NAVIC</h1>
          <p className="text">
            Your navigation companion and guide at IIT Dharwad.
          </p>
        </div>
        <img
          src="https://pbs.twimg.com/media/Elfk0aQVoAAxc9Y.jpg"
          alt="Campus"
          className="campus-image"
        />
      </div>

      <div className="sidenav">
        <h1>Gallery</h1>
        <a href="#Administration Block">Administration Block</a>
        <a href="#Engineering Block">Engineering Block</a>
        <a href="#Science Block">Science Block</a>
        <a href="#Central Learning Theatre">Central Learning Theatre</a>
        <a href="#Knowledge Resource and Data Centre">
          Knowledge Resource and Data Centre
        </a>
        <a href="#Central Instrumentation Facility">
          Central Instrumentation Facility
        </a>
        <a href="#Central Instructional Lab">Central Instructional Lab</a>
        <a href="#Hostel Blocks">Hostel Blocks</a>
        <a href="#Mess and Canteen">Mess and Canteen</a>
        <a href="#Indoor Sports Facility">Indoor Sports Facility</a>
        <a href="#Wellness Centre">Wellness Centre</a>
        <a href="#Common Amenities Centre">Common Amenities Centre</a>
        <a href="#Aquatic Sports">Aquatic Sports</a>
        <a href="#Lake">Lake</a>
      </div>

      <p className="heading">Copyright {year}</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
