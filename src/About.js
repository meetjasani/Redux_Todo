import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { addInformation } from "./action/index"
import { editInformation } from "./action/index"
import { useSelector } from "react-redux"

export default function About(props) {
    const [formInformation, setFormInformation] = useState({
        id: null,
        name: '',
        phone: '',
        email: '',
    })

    const location = useLocation();

    const history = useNavigate();
    const [isEdit, setIsEdit] = useState(false);


    const dispatch = useDispatch()

    const mystate = useSelector((state) => state.contect.contect)

    const createContect = (e) => {
        e.preventDefault()
    }


    useEffect(() => {
        const id = location?.state?.id;
        if (id) {
            const item = mystate.find(element => element.id == id);
            if (!item) {
                history('/')
            }
            setFormInformation(item)
            setIsEdit(true)
        }
    }, [])


    return (
        <div>
            <nav>
                <Link to="/"> Information
                </Link>
                <div>
                    <Link to="/about">About</Link>
                </div>
            </nav>
            <div>
                <form onSubmit={(e) => createContect(e)}>
                    <div>
                        <input type="text" placeholder='Name' value={formInformation.name} onChange={(e) => setFormInformation({ ...formInformation, name: e.target.value })} />
                    </div>
                    <div>
                        <input type="text" placeholder='Email' value={formInformation.email} onChange={(e) => setFormInformation({ ...formInformation, email: e.target.value })} />
                    </div>

                    <div>
                        <input type="text" placeholder='Phone' value={formInformation.phone} onChange={(e) => setFormInformation({ ...formInformation, phone: e.target.value })} />
                    </div>

                    <div>
                        {
                            isEdit ?
                                <button onClick={() => {
                                    dispatch(editInformation(formInformation))
                                    setFormInformation({
                                        id: null,
                                        name: '',
                                        phone: '',
                                        email: '',
                                    })
                                    setIsEdit(false)
                                    history('/')
                                }}>edit Contect</button> :



                                <button onClick={() => {
                                    let temp = {
                                        ...formInformation,
                                        id: Math.floor((Math.random() * 1000) + 1)
                                    }
                                    dispatch(addInformation(temp))
                                    setFormInformation({
                                        id: null,
                                        name: '',
                                        phone: '',
                                        email: '',
                                    })

                                }}>Create Contect</button>

                        }

                    </div>
                </form>
            </div>
        </div>
    )
}
