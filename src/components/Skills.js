import React, { Component } from 'react';

class Skills extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-content">
                        <h6><strong>PROFESSIONL SKILLS</strong></h6>
                        <div className="row mt-top">
                            <div className="col s6">
                                <p>Java</p>
                                <div className="progress grey lighten-1">
                                    <div className="determinate blue" style={{ width: '89%' }}></div>
                                </div>
                            </div>
                            <div className="col s6">
                                <p>Github</p>
                                <div className="progress grey lighten-1">
                                    <div className="determinate blue" style={{ width: '98%' }}></div>
                                </div>
                            </div>
                            <div className="col s6">
                                <p>Kotlin</p>
                                <div className="progress grey lighten-1">
                                    <div className="determinate blue" style={{ width: '80%' }}></div>
                                </div>
                            </div>
                            <div className="col s6">
                                <p>Android Studio</p>
                                <div className="progress grey lighten-1">
                                    <div className="determinate blue" style={{ width: '95%' }}></div>
                                </div>
                            </div>
                            <div className="col s6">
                                <p>Realm Data</p>
                                <div className="progress grey lighten-1">
                                    <div className="determinate blue" style={{ width: '87%' }}></div>
                                </div>
                            </div>
                            <div className="col s6">
                                <p>Room Data</p>
                                <div className="progress grey lighten-1">
                                    <div className="determinate blue" style={{ width: '67%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;