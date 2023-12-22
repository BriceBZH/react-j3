import { useState } from 'react'

const LoginForm = (props) => {
    const [value, setValue] = useState({
        submitted : false,
        email : "",
        password : ""
    });

    const handleEmailChange = (event) => {
        setState({
            submitted: false,
            email : event.target.value
        });
    };

    const handlePasswordChange = (event) => {
        setState({
            submitted: false,
            password : event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setValue({
            submitted: true,
            email : event.target.email.value,
            password : event.target.email.value
        });
    };

    return (
        <>
            {
                value.submitted === true && (
                    <p>Vous êtes déjà connecté</p>
                )
            }
            
            {
                value.submitted === false && (
                    <form onSubmit={handleSubmit}>
                        <fieldset>
                            <label for="email">
                            Email
                            </label>
                            <input 
                                type="email" 
                                name="email" 
                                id="email"
                                onChange={handleEmailChange} 
                            />
                        </fieldset>
                        <fieldset>
                            <label for="password">
                            Mot de passe
                            </label>
                            <input 
                                type="password" 
                                name="password" 
                                id="password" 
                                onChange={handlePasswordChange} 
                            />
                        </fieldset>
                        <button type="submit">Connexion</button>
                    </form>
                )
            }
        </>
    );
};

export default LoginForm;