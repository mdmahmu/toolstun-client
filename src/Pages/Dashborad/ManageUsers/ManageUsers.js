import { signOut } from "firebase/auth";
import React, { useEffect, useState } from 'react';
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Loading from "../../../Components/Loading/Loading";
import auth from "../../../firebase.init";
import User from "./User/User";

const ManageUsers = () => {

    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getUsers();
    });

    const getUsers = async () => {

        const url = `https://nameless-headland-97121.herokuapp.com/users`;

        const res = await fetch(url, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        });
        if (res.status === 200) {
            const data = await res.json();
            setUsers(data);
        }
        else {
            signOut(auth);
            localStorage.removeItem('accessToken');
            navigate("/login");
        }
    };

    return (
        <div>
            <h4 className="text-center text-danger">Manage All Users</h4>
            <div className="table-responsive">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email/Uid</th>
                            <th>Role</th>
                            <th>Delete?</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            !users ? <Loading></Loading> :
                                users?.map((singleUser, index) => <User key={index} singleUser={[singleUser, index]}></User>)
                        }
                    </tbody>
                </Table>
            </div>

        </div>
    );
};

export default ManageUsers;