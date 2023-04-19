import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
    if (isAuthenticated) {
        return <Redirect to='/dashboard' />;
    }
    return (
        <>
        <section className='landing'>
            <div className='dark-overlay'>
                <div className='landing-inner'>
                    <h1 className='x-large'>Social Network for Programmers</h1>
                    <p className='lead custom-animation'>
                        Connect and share ideas with other professionals in the field
                    </p>
                    <div className='buttons'>
                        <Link to='/register' style={{backgroundColor:"#6a53bdd2"}} className='btn main-btn btn-primary'>
                            Sign Up
                        </Link>
                        <Link to='/login' className='btn main-btn btn-light'>
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

Landing.propTypes = {
    isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps)(Landing);
