'use strict';

import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./custom.css";
import React from "react";
import ReactDOM from "react-dom";
import { Container } from "reactstrap";
import Todo from "./components/todo"


const App = () => (
    <Container className="w-50 mx-auto text-center shadow py-2 mt-4 rounded">
        <Todo />
    </Container>
);


ReactDOM.render(<App />, document.getElementById("app"));
