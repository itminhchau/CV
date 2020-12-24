import React, { Component } from 'react';
import ImgProfile from '../Image/chau.jpg';

class Profile extends Component {
    render() {
        return (
            <div>
                <div className='card'>
                    <div className='card-image'>
                        <img className='activator' src={ImgProfile} alt="Đào Minh Châu" />
                    </div>
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">Dao Minh Chau</span>
                        <p>Mobile Develoment</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;

