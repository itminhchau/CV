import React, { Component } from 'react';

class Experience extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-content">
                        <h6><strong>EXPERIENCES</strong></h6>
                        <div className="row">
                            <div className="col s12 m4 l4 xl4">
                                <p className="teal year_exp white-text">
                                    jan<strong>2017</strong> - March<strong>2019</strong>
                                </p>
                            </div>
                            <div className="col s12 m8 l8 x18">
                                <blockquote className="no-pad">
                                    <h6 className="no-pad mt-bottom">
                                        <strong>ANDROID DEVELOPER</strong>
                                    </h6>
                                    <p>I study and work at Danang Pedagogical University. I have training in mobile programming. and has participated in a number of small projects at the school. and have experience working with the team
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12 m4 l4 xl4">
                                <p className="teal year_exp white-text">
                                    jan<strong>2018</strong> - March<strong>2020</strong>
                                </p>
                            </div>
                            <div className="col s12 m8 l8 x18">
                                <blockquote className="no-pad">
                                    <h6 className="no-pad mt-bottom">
                                        <strong>ANDROID DEVELOPER</strong>
                                    </h6>
                                    <p>I joined the mobile team. to receive projects from companies and develop them. to improve mobile skills.
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Experience;