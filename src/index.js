import React from "react";
import * as ReactDOMClient from "react-dom/client";

import reactToWebComponent from "react-to-webcomponent";

import Greeting from "./Greeting";
import "./components/WelcomeComponent"

const MyGreeting = reactToWebComponent(Greeting, React, ReactDOMClient);

customElements.define("web-greeting", MyGreeting);
