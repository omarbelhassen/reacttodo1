import React from "react";
import {Navbar} from "react-bootstrap";
import {Filter}from "./Form";
function NavigBar () {
    return (
        <Navbar>
            <img
             src="https://cdn0.iconfinder.com/data/icons/weby-flat-files-folder-documents/64/Filesfolders-17-512.png"
             width="30"
             height="30"
             className="d-inline-block align-top"
             alt="TODO list logo"
           />
           <Navbar.Brand href="#home" className="brand">
               my todo list
           </Navbar.Brand>
           <Filter/>
        </Navbar>
    );
}
export default NavigBar;