import React, { useEffect, useState} from 'react'

import Navbar from '../component/Navbar'
import Repositories from '../component/Repositories'
import Tabs from '../component/Tabs'
import UserInfo from '../component/UserInfo'
import {getUserData, getUserRepo} from '../api/Api'
import Loading from '../component/Loading'

function UserPage({match}) {

  const [user, setUser] = useState()
  const [repos, SetRepos] = useState([])

  const userNameParams = match.params.userName

  useEffect( () => {

    fetchUser()
    fetchRepo()

  }, [])

  async function fetchUser(){
    const {data} = await getUserData(userNameParams)
    setUser(data)
  }

  async function fetchRepo(){
    const {data} = await getUserRepo(userNameParams)
    SetRepos(data)
  }





  return (

    <>
     {user ? (

      <>
      <Navbar user = {user} />
      <div className="container">
      <UserInfo user = {user} />
      <Tabs repos={repos} user = {user} />
      <Repositories repos={repos} user = {user} />

      </div>

      </>
     ) : (
      <Loading />
     )}
    </>
    

    
  )
}

export default UserPage