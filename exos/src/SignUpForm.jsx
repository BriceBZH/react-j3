import { useState } from 'react'

const LoginForm = (props) => {
    const [value, setValue] = useState({
        submitted : false,
        firstName : "",
        lastName : "",
        email : "",
        password : "",
        confirmPassword : ""
        
    });

    const handleChangePassword = (event) => {
        let newState = Object.assign({}, value, {password:event.target.value});
        setValue(newState);
    };
    
    const handleChangeConfirmPassword = (event) => {
        let newState = Object.assign({}, value, {confirmPassword:event.target.value});
        setValue(newState);
    };
    
    const handleChange = (event) => {
        setValue({
            submitted: false,
        });
    };

    const handleSubmit = (event) => {
        console.log(event.target.password.value);
        event.preventDefault();
        setValue({
            submitted: true,
            firstName : event.target.firstName.value,
            lastName : event.target.lastName.value,
            email : event.target.email.value,
            password : event.target.password.value,
            confirmPassword : event.target.confirmPassword.value
        });
    };

    return (
        <>
            {
                value.submitted === true && (
                    <p>Dernier ajout : {value.firstName} {value.lastName}</p>
                )
            }
            
            {
                value.submitted === false && (
                    <form onSubmit={handleSubmit}>
                    	<fieldset>
                            <label htmlFor="firstName">
                                Prénom
                            </label>
                            <input type="text" name="firstName" id="firstName" onChange={handleChange}  />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="lastName">
                                Nom
                            </label>
                            <input type="text" name="lastName" id="lastName"  onChange={handleChange}  />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="email">
                                Email
                            </label>
                            <input type="email" name="email" id="email"  onChange={handleChange}  />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="password">
                                Mot de passe
                            </label>
                            <input type="password" name="password" id="password"  onChange={handleChangePassword} />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="confirmPassword">
                                Confirmer le Mot de passe
                            </label>
                            <input type="password" name="confirmPassword" id="confirmPassword"  onChange={handleChangeConfirmPassword} />
                        </fieldset>
                        {
                            value.password === value.confirmPassword && (
                                <button type="submit">Inscription</button>
                            )
                        }
                    </form>
                )
            }
        </>
    );
};

export default LoginForm;