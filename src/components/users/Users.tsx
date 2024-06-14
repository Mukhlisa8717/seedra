import React, { useEffect, useState } from 'react'
import "./Users.scss"
import axios from 'axios'

interface UserSchema {
    id: string,
    image: string, 
    firstName: string,
    company: {
        title: string
    }
}

const API_URL : string = "https://dummyjson.com"

const Users : React.FC= () => {
    const [userData, setUserData] = useState<null | UserSchema[]>(null)

    useEffect(() => {
        axios
        .get(`${API_URL}/users?limit=4`)
        .then(res => setUserData(res.data.users)
        )
    }, [])

    const userItem: JSX.Element[] | undefined = userData?.map((user : UserSchema) => (
        <div key={user.id} className='user'>
            <img src={user.image} alt="image" />
            <h4>{user.firstName}</h4>
            <p>{user.company.title}</p>
        </div>
    ))

  return (
    <section>
        <div className="container users">
            <h2>Meet our team</h2>
            <div className='users__list'>
                {userItem}
            </div>
        </div>
    </section>
  )
}

export default Users
