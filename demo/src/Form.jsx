import { useState } from 'react'

const Form = (props) => {
    const [value, setValue] = useState({
        submitted : false,
        username : ""
    });

    const handleChange = (event) => {
        setValue({
            submitted: false,
            username : event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setValue({
            submitted: true,
            username : event.target.username.value
        });
    };

    return (
        <>
            {
                value.submitted === true && (
                    <p>Dernier ajout : {value.username}</p>
                )
            }
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                        name="username"
                        id="username"
                        type="text"
                        value={value.username}
                        onChange={handleChange}
                    />
                </label>
                <input type="submit" value="Add" />
            </form>
        </>
    );
};

export default Form;