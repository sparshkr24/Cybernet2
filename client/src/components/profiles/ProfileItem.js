import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

let imgUrl = "https://cdn3.iconfinder.com/data/icons/user-interface-web-1/550/web-circle-circular-round_11-512.png";

const ProfileItem = ({
    profile: {
        user: { _id, name, avatar },
        status,
        company,
        location,
        skills,
    },
}) => {
    return (
        <div className='profile bg-light'>
           <img src={imgUrl} alt='' className='round-img' />
            <div>
                <h2>{name}</h2>
                <p>
                    {status} {company && <span>at {company}</span>}
                </p>
                <p className='my-1'>{location && <span>{location}</span>}</p>
                <Link to={`/profile/${_id}`} className='btn btn-primary'>
                    View Profile
                </Link>
            </div>
            <ul>
                {skills.slice(0, 4).map((skill, index) => (
                    <li key={index} className='text-primary'>
                        <i className='fas fa-check'></i> {skill}
                    </li>
                ))}
            </ul>
        </div>
    );
};

ProfileItem.propTypes = {
    profile: PropTypes.object.isRequired,
};

export default ProfileItem;
