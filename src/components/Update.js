import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const UpDate = () => {
    const storedUser = useLoaderData();
    const [user, setUser] = useState(storedUser);

    const handleUpdateUser = event => {
        event.preventDefault();
        // console.log(user);
        fetch(`http://localhost:5000/users/${storedUser._id}`, {

            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('user update.')
                    console.log(data);

                }

            })
    }

    const handleInputChange = event => {
        const value = event.target.value;
        const field = event.target.name;
        // console.log(value, field)
        const newuser = { ...user }
        newuser[field] = value;
        setUser(newuser);
        // console.log(newuser);
    }
    return (
        <div>
            <h2>Please update: {storedUser.name} </h2>
            <form onSubmit={handleUpdateUser}>
                <input onChange={handleInputChange} defaultValue={storedUser.name} type="text" name="name" placeholder='name' required />
                <br />

                <input onChange={handleInputChange} type="text" defaultValue={storedUser.adress} name="adress" placeholder='address' required />
                <br />

                <input onChange={handleInputChange} type="email" defaultValue={storedUser.email} name="email" placeholder='email' required />
                <br />

                <button type="submit"> UpDate User</button>
            </form>
        </div>
    );
};

export default UpDate;