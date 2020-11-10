import React from "react";
import {LandingContainer} from "../LandingPage/LandingContainer/LandingContainer";
import { AuthorContainer} from "../AuthorPage/AuthorContainer/AuthorContainer";
import {TimeLineContainer} from "../TimeLinePage/TimeLineContainer/TimeLineContainer";
import  {PhilosophersByTimeContainer} from "../PhilosophersByTimePage/PhilosophersByTimeContainer/PhilosophersByTimeContainer";
import periods from "../PhilosophersByTimePage/PhilosophersByTimeContainer/Philosophers.json"
import {CSSTransition} from "react-transition-group";
import { Route } from 'react-router-dom'
import {SchoolsContainer} from "../SchoolsPage/SchoolsContainer/SchoolsCotainer";

export class BodyContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            landing: true,
            timeline: false,
            philosophers: false,
            author: false,
        }
        this.changePhilosophersPage = this.changePhilosophersPage.bind(this);
        this.toLanding = this.toLanding.bind(this)
    }
    toLanding() {
        this.setState({
            landing: false
        })
    }

    period = periods[0];
    periodsName = ["Pre-socratico","Helenico","Filosofia Medieval","Filosofia Moderna","Filosofia Contemporanea"]


    async changePhilosophersPage(periodName)  {
        switch (periodName) {
            case "Pre-socratico":
                this.period = periods[0];
                break;
            case "Helenico":
                this.period = periods[1];
                break;
            case "Filosofia Medieval":
                this.period = periods[2];
                break;
            case "Filosofia Moderna":
                this.period = periods[3];
                break;
            case "Filosofia Contemporanea":
                this.period = periods[4];
                break
            default:
                this.period = periods[0];
        }
         await this.setState({
            timeline: false,
            philosophers: true
        })


    }

    render() {

        return (

            <div>

                <Route path={"/"} exact component={"LandingContainer"}>
                    {({match}) => (
                        <CSSTransition
                            in={match != null}
                            timeout={{enter: 600, appear: 2000, exit:800}}
                            classNames={"landing-container-"}
                            appear={true}
                            unmountOnExit={true}
                            onExited={() => {
                                this.setState({
                                    timeline:true
                                })
                            }}
                        >
                            <LandingContainer toLanding={this.toLanding}/>
                        </CSSTransition>
                    )}
                </Route>




            <Route path={"/history"} exact component={"TimeLineContainer"}>
                {({match}) => (
                    <CSSTransition
                        in={match != null}
                        timeout={{enter: 600, exit:700}}
                        classNames={"timeline-main-container-"}
                        appear={true}
                        unmountOnExit={true}
                        onExited={()=> {this.setState({
                            philosophers: true
                        })}}
                    >
                        <TimeLineContainer changePhilosophersPage={this.changePhilosophersPage}/>
                    </CSSTransition>
                )}
            </Route>

            <Route path={"/philosopher"} exact component={"PhilosophersByTimeContainer"}>
                {({match}) => (
                    <CSSTransition
                        in={match != null}
                        timeout={{enter: 600, appear: 1000, exit:700}}
                        classNames={"philosophers-main-container-"}
                        appear={true}
                        unmountOnExit={true}
                    >
                        <PhilosophersByTimeContainer periodsName={this.periodsName}
                                                     period={this.period}
                                                     changePhilosophersPage={this.changePhilosophersPage}/>
                    </CSSTransition>
                )}
            </Route>

            <Route path={"/schools"} exact component={"SchoolsContainer"}>
                {({match}) => (
                    <CSSTransition
                        in={match != null}
                        timeout={{enter: 600, appear: 2000, exit:800}}
                        classNames={"landing-container-"}
                        appear={true}
                        unmountOnExit={true}
                        onExited={() => {
                            this.setState({
                            })
                        }}
                    >
                        <SchoolsContainer toLanding={this.toLanding}/>
                    </CSSTransition>
                )}
            </Route>
                    {/*{this.state.author && <AuthorContainer/>}*/}

            </div>
        )
    }


}
