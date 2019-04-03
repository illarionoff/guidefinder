import React from "react";

export default function MyProfile({ profile }) {
  const { handle, age, country, city, bio } = profile;
  const { facebook, twitter, instagram, linkedin, youtube } = profile.social;
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
                Tours offered <span>100</span>
              </h2>
              <h2>
                Tours reserved <span>50</span>
              </h2>
              <h2>
                Tours completed <span>50</span>
              </h2>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
