import React, { useState } from 'react';

const AddUser = () => {

    const [user, setUser] = useState({});

    const handleAddUser = event => {
        event.preventDefault();
        console.log(user);

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)

        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('user added sucessfully');
                    event.target.reset();
                }
                // console.log(data)
            })
    }

    const handleInputBlur = event => {
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
            <h2>Please add a new User.</h2>
            <form onSubmit={handleAddUser}>
                <input onChange={handleInputBlur} type="text" name="name" placeholder='name' required />
                <br />

                <input onChange={handleInputBlur} type="text" name="adress" placeholder='adress' required />
                <br />

                <input onChange={handleInputBlur} type="email" name="email" placeholder='email' required />
                <br />

                <button type="submit"> Add User</button>
            </form>
        </div>
    );
};

export default AddUser;