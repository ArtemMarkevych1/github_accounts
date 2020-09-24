import React, {useContext, useState} from 'react'
import {AlertContext} from "../context/alert/alertContext";
import {GithubContext} from "../context/github/githubContext";

export const Search = () => {

  const [value, setValue] = useState('')

  const {show} = useContext(AlertContext)

  const github = useContext(GithubContext)

  const alert = useContext(AlertContext)

  const onSubmit = event => {
    if (event.key !== 'Enter') {
      return
    }

    github.clearUsers()

    if (value.trim()) {
      alert.hide()
      github.search(value.trim())
    } else {
      show('Put data to input')
    }
  };

  return (
    <div>
      <input
        type="text"
        className="form-control"
        placeholder="Write user's name..."
        onKeyPress={onSubmit}
        onChange={event => setValue(event.target.value)}
      />
    </div>
  )
}
