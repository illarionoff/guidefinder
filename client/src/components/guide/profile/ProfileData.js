import React from "react";
import { Link } from "react-router-dom";

export default function ProfileData({
  handle,
  age,
  country,
  city,
  bio,
  facebook,
  twitter,
  instagram,
  linkedin,
  youtube
}) {
  return (
    <div className="profile">
      <h1>{handle}</h1>
      <h2>{age}</h2>
      <h2>{country}</h2>
      <h2>{city}</h2>
      <h2>{bio}</h2>
      {facebook ? <h2>Facebok : {facebook}</h2> : <h2>Facebok : -</h2>}
      {twitter ? <h2>Twitter : {twitter}</h2> : <h2>Twitter : -</h2>}
      {instagram ? <h2>Instagram : {instagram}</h2> : <h2>Instagram : -</h2>}
      {linkedin ? <h2>Linkedin : {linkedin}</h2> : <h2>Linkedin : -</h2>}
      {youtube ? <h2>Youtube : {youtube}</h2> : <h2>Youtube : -</h2>}
      <Link to="/guide/editprofile">Edit</Link>
    </div>
  );
}
