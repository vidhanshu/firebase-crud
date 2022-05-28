import React, { useContext } from 'react'
import { context } from "./Parent"
function Adduser() {

    const { setChange, firstname, setFname, lastname, setLname, email, setEmail, btn, updateData, saveData, cancelUpdate } = useContext(context);

    return (
        <>
            <h1 className='text-center'>Add user</h1>
            <form onSubmit={(evt) => { evt.preventDefault(); setChange(i => i + 1) }}>
                <input value={firstname} className='form-control' type="text" placeholder='Enter name' onChange={e => setFname(e.target.value)} />
                <input value={lastname} className='form-control my-2' type="text" placeholder='Enter last name' onChange={e => setLname(e.target.value)} />
                <input value={email} className='form-control' type="email" placeholder='Enter email' onChange={e => setEmail(e.target.value)} />
                {
                    !btn ?
                        <input className='btn m-2 btn-primary' type="submit" value="submit" onClick={saveData} />
                        : (
                            <>
                                <input className='btn m-2 btn-primary' type="submit" value="update" onClick={updateData} />
                                <input className='btn m-2 btn-primary' type="submit" value="cancel" onClick={cancelUpdate} />
                            </>
                        )
                }
            </form>
        </>
    )
}

export default Adduser