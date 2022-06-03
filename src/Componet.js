import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux"
import Avatar from 'react-avatar'
import { Link } from 'react-router-dom'
import { deleteInformation } from './action/index'
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";


export default function Componet() {

    const mystate = useSelector((state) => state.contect.contect)
    const [contectData, setContectData] = useState(mystate)
    const dispatch = useDispatch()
    const history = useNavigate();


    useEffect(() => {
        setContectData(mystate)
    }, [mystate])


    return (
        <div>
            <nav>
                <div><Link to="/">Information</Link></div>
                <div><Link to="/about">About</Link></div>
            </nav>

            <table border="1">
                <thead>
                    <tr>
                        <th><div><input type="checkbox" /></div></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contectData.length > 0 &&
                        contectData.map(contect => (
                            <tr>
                                <td><div><input type="checkbox" /></div></td>
                                <td>
                                    <Avatar name={contect.name} round={true} size="50" textSizeRatio={.05} />
                                    {contect.name}
                                </td>
                                <td>{contect.email}</td>
                                <td>{contect.phone}</td>
                                <td>
                                    <button onClick={() => {
                                        history("/about", {
                                            state: {
                                                id: contect.id
                                            }
                                        });
                                    }}>Edit</button>
                                    <button onClick={() => dispatch(deleteInformation(contect.id))}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
