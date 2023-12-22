import { useState } from 'react'
import UserTable from './UserTable.jsx'
import users from './user.js'

const UserBase = (props) => {
    const [value, setValue] = useState({
        submitted : false,
        firstName : "",
        lastName : "",
        email : "",
        
    });

    const handleChangeFirstName = (event) => {
        setValue({
            submitted: false,
            firstName: event.target.value
        });
    };
    
    const handleChangeLastName = (event) => {
        setValue({
            submitted: false,
            lastName: event.target.value
            
        });
    };
    
    const handleChangeEmail = (event) => {
        setValue({
            submitted: false,
            emailName: event.target.value
        });
    };

    const handleSubmit = (event) => {
        console.log(value);
        event.preventDefault();
        setValue({
            submitted: true,
            firstName : event.target.firstName.value,
            lastName : event.target.lastName.value,
            email : event.target.email.value,
        });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
            	<fieldset>
                    <label htmlFor="firstName">
                        Prénom
                    </label>
                    <input type="text" name="firstName" id="firstName" onChange={handleChangeFirstName}  />
                </fieldset>
                <fieldset>
                    <label htmlFor="lastName">
                        Nom
                    </label>
                    <input type="text" name="lastName" id="lastName"  onChange={handleChangeLastName}  />
                </fieldset>
                <fieldset>
                    <label htmlFor="email">
                        Email
                    </label>
                    <input type="email" name="email" id="email"  onChange={handleChangeEmail}  />
                </fieldset>
                <button type="submit">Ajouter</button>
            </form>
            <UserTable user = {users} />   
        </>
    );
};

export default UserBase;