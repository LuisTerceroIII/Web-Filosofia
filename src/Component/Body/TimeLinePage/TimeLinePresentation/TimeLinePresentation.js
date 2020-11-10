import React from "react";
import HorizontalTimeline from "react-horizontal-timeline";
import SwipeableViews from 'react-swipeable-views';
import './TimeLinePresentation.css'
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

export class TimeLinePresentation extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.state = {
            value: 0,
            previous: 0,
            // timelineConfig
            minEventPadding: 100,
            maxEventPadding: 130,
            linePadding: 150,//mueve barra
            labelWidth: 150,//mueve puntos
            fillingMotionStiffness: 40,
            fillingMotionDamping: 25,
            slidingMotionStiffness: 20,
            slidingMotionDamping: 150,
            stylesBackground: '#ffffff',
            stylesForeground: '#535050',
            stylesOutline: '#9f9595',
            isTouchEnabled: true,
            isKeyboardEnabled: true,
            isOpenEnding: false,
            isOpenBeginning: false
        }
        this.dates = ["Siglo VII a.C.  /1/12","Siglo IV  a.C.  /12/11","Siglo V d.C.  /12/12","Siglo XV d.C. /12/12","Siglo XX d.C. /12/12"]
    }
    static propTypes = {
        content: PropTypes.arrayOf(PropTypes.object).isRequired
    }

    onClick(e,index) {

        this.props.changePhilosophersPage(e)
    }

    render() {
        const state = this.state;
        const views = this.props.content.map((entry, index) => {
            return (
                <div key={index} style={{textAlign:'center',overflow:'hidden'}}>
                    { entry.component }
                    <Link to={"/philosopher"} className="knowMoreButton" onClick={ () => { this.onClick(entry.data,index) } }><i className="fas fa-search"/></Link>
                    <h2 className="message-button">Saber mas</h2>
                </div>
            );
        });

        return  (
            <div className="main-container">
                <div  className="time-line-container" >
                    <HorizontalTimeline
                        fillingMotion={{ stiffness: state.fillingMotionStiffness, damping: state.fillingMotionDamping }}
                        index={this.state.value}
                        indexClick={(index) => {
                            this.setState({ value: index, previous: this.state.value });
                        }}
                        isKeyboardEnabled={state.isKeyboardEnabled}
                        isTouchEnabled={state.isTouchEnabled}
                        labelWidth={state.labelWidth}
                        linePadding={state.linePadding}
                        maxEventPadding={state.maxEventPadding}
                        minEventPadding={state.minEventPadding}
                        slidingMotion={{ stiffness: state.slidingMotionStiffness, damping: state.slidingMotionDamping }}
                        styles={{
                            background: state.stylesBackground,
                            foreground: state.stylesForeground,
                            outline: state.stylesOutline
                        }}
                        values={ this.dates }
                        getLabel={function(date) { return date.toString().slice(0,14) }}
                        isOpenEnding={state.isOpenEnding}
                        isOpenBeginning={state.isOpenBeginning}

                    />
                </div>
                <SwipeableViews
                    hysteresis={1.5}
                    enableMouseEvents={true}
                    index={this.state.value}
                    onChangeIndex={(value, previous) => {
                        this.setState({ value: value, previous: previous });
                    }}
                    resistance>
                    {views}

                </SwipeableViews>

        </div>
        );
    }
}
