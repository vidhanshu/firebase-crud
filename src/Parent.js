
/***********CONTROLLED COMPONENT***********/

import React, { useState, useEffect } from 'react'
import { collection, getDocs, updateDoc, doc, getDoc, deleteDoc, addDoc } from 'firebase/firestore';

import Adduser from './Adduser'
import Table from './Table'
import { db } from "./firebase"

export const context = React.createContext();

function Parent() {

    /* state of complete application */
    const [change, setChange] = useState(0);
    const [firstname, setFname] = useState('');
    const [lastname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [data, setData] = useState([]);
    const [btn, setBtn] = useState(0);
    const [id, setId] = useState('')

    /* first time data render and render on change of any field */
    useEffect(() => {

        getDocs(collection(db, 'users')).then(snapshot => {
            let ar = [];
            snapshot.docs.map(e => ar.push({ _id: e.id, ...e.data() }));
            setData(ar);
        });

    }, [change])

    /* to edit the document */
    const editTheDoc = async (id) => {
        const user = await getDoc(doc(db, 'users', id));
        const userData = user.data();
        setFname(userData.firstname)
        setLname(userData.lastname)
        setEmail(userData.email)
        setId(id);
        setBtn(i => !i)
    }

    /* to actually update the document */
    const updateData = async () => {
        await updateDoc(doc(db, 'users', id), {
            firstname, lastname, email
        })
        setFname('')
        setLname('')
        setEmail('')
        setBtn(i => !i)
        setId('')
    }
    /* to check if fields are empty */
    const checkEmptyField = () => {
        if (firstname.trim() === '' || lastname.trim() === '' || email.trim() === '') {
            return true;
        }
        return false;
    }

    /* saving the data to the firestore */
    const saveData = async () => {
        try {

            if (checkEmptyField()) {
                return alert('Please enter details!');
            }

            /* adding the new user */
            await addDoc(collection(db, 'users'), {
                firstname,
                lastname,
                email
            })

            /* emptying the fields */
            setFname('')
            setLname('')
            setEmail('')

        } catch (e) {
            console.log(e)
        }
    }


    const deleteTheDoc = async (_id) => {
        if (id !== '') {
            return alert('Please either update or delete once!')
        }
        await deleteDoc(doc(db, 'users', _id));

        setChange(i => i + 1)
    }

    const cancelUpdate = () => {
        setId('');
        /* emptying the fields */
        setFname('')
        setLname('')
        setEmail('')
        setBtn(i => !i);
    }
    //context value
    const cont = {
        change, setChange, firstname, setFname, lastname, setLname, data, setData, email, setEmail, editTheDoc, deleteTheDoc, btn, setBtn, updateData, saveData, cancelUpdate
    }


    return (
        <context.Provider value={cont}>
            <div className=' mt-5 container d-flex col-md-6 justify-content-center'>
                <div>
                    <div className="row  border p-2 rounded">
                        <Adduser setChange={setChange} />
                    </div>
                    <Table change={change} />
                </div>
            </div>
        </context.Provider>
    )
}

export default Parent