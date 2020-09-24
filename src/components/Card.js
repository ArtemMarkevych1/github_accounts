import React from 'react'
import {Link} from "react-router-dom";

export const Card = ({user}) => {
  return (
    <div className="card">
      <img src={user.avatar_url} alt={user.login} className="card-img-top"/>
      <div className="card-body">
        <h5 className="card-title">
          {user.login}
        </h5>
        <Link className="btn bg-primary" to={'/profile/' + user.login}>Get more information</Link>
      </div>
    </div>
  )
}
