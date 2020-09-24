import React, {Fragment, useContext} from 'react'
import {Search} from "../components/Search";
import {Card} from "../components/Card";
import {GithubContext} from "../context/github/githubContext";

export const Home = () => {

  const {loading, users} = useContext(GithubContext)

  return (
    <Fragment>
      <Search/>
      <div className="row mt-4">
        {loading
          ? <p>Loading...</p>
          : users.map(user => {
            return (
              <div className="col-sm-4 mb-4">
                <Card key={user.id} user={user}/>
              </div>
            )
          })
        }
      </div>
    </Fragment>
  )
}
