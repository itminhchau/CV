import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-content">
                        <h6 className="mt-bottom" ><strong>ABOUT ME</strong></h6>
                        <p className="grey-text">
                            My name is Dao Minh Chau, I come from Quang Ngai. I am a person who likes to explore, learn, learn but new things. I have worked on many kotlin projects. and have teamwork skills.</p>
                    </div>
                    <div className="card-action">
                        <h6><strong>PERSONAL INFO</strong></h6>
                        <div className="row mt">
                            <div className="col s12 m6 16 x16">
                                <p><strong>Address: </strong>QuangNgai</p>
                                <p><strong>Email: </strong>daominhchau18@gmail.com</p>
                                <p><strong>Phone: </strong>0964605042</p>
                            </div>
                            <div className="s12 m6 16 x16">
                                <p><strong>Main Language: </strong>English</p>
                                <p><strong>Second Language: </strong>japanese</p>
                                <p><strong>Third Language: </strong>No</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;