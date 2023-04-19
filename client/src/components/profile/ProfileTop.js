import React from 'react';
import PropTypes from 'prop-types';

let dpImg = "https://media.istockphoto.com/id/1219473617/vector/young-male-character-writing-code-on-a-desktop-computer-working-from-home-millennials-at-work.jpg?s=612x612&w=0&k=20&c=9KrYfX8M5lFqpUN2y5Pklac_XebWqnI0bmDkMB6NLhU=";

const ProfileTop = ({
    profile: {
        status,
        company,
        location,
        website,
        social,
        user: { name, avatar },
    },
}) => {
    return (
        <div className='profile-top bg-primary p-2'>
            <img style={{width: "22%"}} className='round-img my-1' src={dpImg} alt='' />
            <h1 className='large'>{name}</h1>
            <p className='lead'>
                {status} {company && <span>at {company}</span>}
            </p>
            <p>{location && <span>{location}</span>}</p>
            <div className='icons my-1'>
                {website && (
                    <a href={website} target='_blank' rel='noopener noreferrer'>
                        <i className='fas fa-globe fa-2x'></i>
                    </a>
                )}
                {social && social.twitter && (
                    <a
                        href={social.twitter}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <i className='fab fa-twitter fa-2x'></i>
                    </a>
                )}
                {social && social.facebook && (
                    <a
                        href={social.facebook}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <i className='fab fa-facebook fa-2x'></i>
                    </a>
                )}
                {social && social.linkedin && (
                    <a
                        href={social.linkedin}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <i className='fab fa-linkedin fa-2x'></i>
                    </a>
                )}
                {social && social.youtube && (
                    <a
                        href={social.youtube}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <i className='fab fa-youtube fa-2x'></i>
                    </a>
                )}
                {social && social.instagram && (
                    <a
                        href={social.instagram}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <i class='fab fa-instagram fa-2x'></i>
                    </a>
                )}
            </div>
        </div>
    );
};

ProfileTop.propTypes = {
    profile: PropTypes.object.isRequired,
};

export default ProfileTop;
