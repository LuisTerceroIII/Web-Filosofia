import React from "react";
import './HeaderPresentation.css'
import { Link } from 'react-router-dom'

export class HeaderPresentation extends React.Component {
    headerStyles = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '0%',
        background:'white'
    }
    render() {
        return (
            <header style={this.headerStyles}>
                <div className={"header-container"}>
                    <h1 style={{fontSize:'400%'}}>{this.props.title}</h1>
                    <h6 style={{textAlign:"center",fontWeight:"700",fontSize:'140%'}}>By Luis Espinoza</h6>
                </div>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/"}>{this.props.menu[0]}</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/history">{this.props.menu[1]}</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/schools">{this.props.menu[2]}</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/philosopher">{this.props.menu[3]}</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" href="#main-container-footer">{this.props.menu[4]}</a>
                                </li>
                            </ul>
                    </nav>
                </div>
            </header>
        )
    }
}
