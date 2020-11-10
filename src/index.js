import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HeaderContainer } from "./Component/Header/HeaderContainer/HeaderContainer";
import { BodyContainer } from "./Component/Body/BodyContainer/BodyContainer";
import {FooterContainer} from "./Component/Footer/FooterContainer/FooterContainer";
import {BrowserRouter as Router} from "react-router-dom";




ReactDOM.render(
  < Router >
        <div>
            <HeaderContainer />
            <BodyContainer />
            <FooterContainer />
        </div>
  </Router>
 ,
  document.getElementById('root')
);


