import { useState } from 'react'

const UserTable = (props) => {
    const user = props.user;
        
    return (
        <>
        <table>
            <thead>
                <tr>
                    <td>ID</td>
                    <td>First Name</td>
                    <td>Last Name</td>
                    <td>Email</td>
                </tr>
            </thead>
            <tbody>
                {user.map((use, i) => <tr key={i}>
                    <td>{use.id}</td>
                    <td>{use.firstName}</td>
                    <td>{use.lastName}</td>
                    <td>{use.email}</td>
                </tr>)}
            </tbody>
        </table>
        </>
    )

};

export default UserTable;