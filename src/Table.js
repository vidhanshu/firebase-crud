import React, { useContext } from 'react'
import { AiOutlineEdit, AiFillDelete } from "react-icons/ai"
import { context } from './Parent'
function Table() {

    const { editTheDoc, deleteTheDoc, data } = useContext(context);




    return (
        <table className='table mt-2 table-dark'>
            <thead>
                <tr><td>firstname</td><td>lastname</td><td>email</td><td>action</td></tr>
            </thead>
            <tbody >
                {
                    data.map(row =>
                        <tr key={row._id}>
                            <td>{row.firstname}</td>
                            <td>{row.lastname}</td>
                            <td>{row.email}</td>
                            <td>
                                <AiOutlineEdit className='m-2' style={{ cursor: "pointer" }} onClick={() => editTheDoc(row._id)} /> <AiFillDelete style={{ cursor: "pointer" }} onClick={() => deleteTheDoc(row._id)} />
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}

export default Table