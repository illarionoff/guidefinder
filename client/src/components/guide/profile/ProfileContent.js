import React, { Component } from 'react';
import { connect } from 'react-redux'

import { getAllTours } from '../../../actions/guestToursActions';
import { getAllReservations } from '../../../actions/guideReservationActions'

import Loading from '../../Loading'

class ProfileContent extends Component {

    componentDidMount() {

        getAllTours();
        getAllReservations();

    }

    render() {
        const { guideReservationsLoading, guideReservations } = this.props.guideReservations;
        const { toursLoading, tours } = this.props.guideTours;
        const { handle, age, country, city, bio } = this.props.profile;
        const { facebook, twitter, instagram, linkedin, youtube } = this.props.profile.social;

        if (toursLoading || guideReservationsLoading) {
            return <Loading />
        } else {
            return (

                <>
                    <main className="page page--eighty">
                        <div className="wrap">
                            <h1>My Profile</h1>
                            <div className="profile">
                                <div className="profile__header">
                                    <h1>{handle}</h1>
                                    <h2>{age}</h2>
                                    <h3>
                                        {country}, {city}
                                    </h3>
                                    <ul className="social">
                                        {facebook ? (
                                            <li>
                                                <a href={facebook}>
                                                    <i className="fab fa-facebook-f" />
                                                </a>
                                            </li>
                                        ) : null}
                                        {twitter ? (
                                            <li>
                                                <a href={twitter}>
                                                    <i className="fab fa-twitter" />
                                                </a>
                                            </li>
                                        ) : null}
                                        {instagram ? (
                                            <li>
                                                <a href={instagram}>
                                                    <i className="fab fa-instagram" />
                                                </a>
                                            </li>
                                        ) : null}
                                        {linkedin ? (
                                            <li>
                                                <a href={linkedin}>
                                                    <i className="fab fa-linkedin" />
                                                </a>
                                            </li>
                                        ) : null}
                                        {youtube ? (
                                            <li>
                                                <a href={youtube}>
                                                    <i className="fab fa-youtube" />
                                                </a>
                                            </li>
                                        ) : null}
                                    </ul>
                                    <p>{bio}</p>
                                </div>

                                <div className="profile__text">
                                    <h2>
                                        Tours offered <span>{tours.length}</span>
                                    </h2>
                                    <h2>
                                        Tours reserved <span>{guideReservations.length}</span>
                                    </h2>

                                </div>
                            </div>
                        </div>
                    </main>
                </>
            );
        }


    }
}


const mapStateToProps = state => ({
    guideAuth: state.guideAuth,
    guideProfile: state.guideProfile,
    guideReservations: state.guideReservations,
    guideTours: state.guideTours
});

export default connect(mapStateToProps, { getAllReservations, getAllTours })(ProfileContent)