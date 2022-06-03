import React from 'react';
import { Button } from "react-bootstrap";

const User = ({ singleUser }) => {
    const [oneUser, index] = singleUser;
    const { emailOrUid, role } = oneUser;

    const makeAdmin = () => {
        const url = `http://localhost:5000/users/updateRole`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ emailOrUid })
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            }
            );
    };

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{emailOrUid}</td>
            <td>
                {
                    !role ? <Button onClick={makeAdmin} variant="info" className="px-1">Make Admin</Button> :
                        <Button variant="success" className="px-4">Admin</Button>
                }
            </td>
            <td></td>
        </tr>
    );
};

export default User;