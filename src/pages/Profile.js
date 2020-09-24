import React, {Fragment, useContext, useEffect} from 'react'
import {GithubContext} from "../context/github/githubContext";
import {Link} from "react-router-dom";
import {Repos} from "../components/Repos";

export const Profile = ({match}) => {

  const {getUser, getRepos, loading, user, repos} = useContext(GithubContext)
  const urlName = match.params.name

  useEffect(() => {
    getUser(urlName)
    getRepos(urlName)
    // eslint-disable-next-line
  }, [])

  if (loading) {
    return <p className={'text-center'}>Loading...</p>
  }

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    folowers,
    public_repos,
    public_dists,
    following
  } = user

  console.log(match)
  return (
    <Fragment>
      <Link to={'/'} className={'btn btn-link'}>Return on the Main page</Link>
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3 text-center">
              <img src={avatar_url} alt={name} style={{width: '150px'}}/>
              <h1>{name}</h1>
              {location && <p>Location: {location}</p>}
            </div>
            <div className="col">
              {
                bio && <Fragment>
                  <h3>Bio</h3>
                  <p>{bio}</p>
                </Fragment>
              }
              <a href={html_url} className={'btn btn-dark'} target={'_blank'}>Visit profile</a>
              <ul>
                {login && <li>
                  <strong>Username: </strong>{login}
                </li>}
                {company && <li>
                  <strong>Company: </strong>{login}
                </li>}
                {blog && <li>
                  <strong>Website: </strong>{login}
                </li>}
              </ul>
              <div className="badge badge-primary">Followers: {folowers}</div>
              <div className="badge badge-success">Follow: {following}</div>
              <div className="badge badge-info">Repos: {public_repos}</div>
              <div className="badge badge-dark">Dists: {public_dists}</div>
            </div>
          </div>
        </div>
      </div>
      <Repos repos={repos}/>
    </Fragment>
  )
}
