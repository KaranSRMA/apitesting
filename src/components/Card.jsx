import { useState, useEffect } from "react"
import React from 'react'
import "./Card.css"

const Card = ({ users }) => {
    const [state, setState] = useState();

    return (
        <div className="card">
            {users.length > 0 ? (
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            <h1>{user.title}</h1>
                            <p>{user.body}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No users found</p>
        )}
        </div>
    )
}

export default Card
