import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import { useContext } from 'react'
import { AOB } from '../App'

const Students = () => {
    const data = useContext(AOB);
    const [index, setindex ] = useState();


    const editData = (d) => {
        console.log(d)
        setindex(d)
    }
    // const obj = useContext(objData) && console.log(obj, "From Students");

  return (
    <>
    <Navbar></Navbar>
    <div className='flex'>
        <h1>Studenst Details</h1>
        <button><Link to='/addContact'>Add New Students</Link></button>
    </div>
    <table>
        <tr>
            <th>Name</th>
            <th>age</th>
            <th>Course</th>
            <th>Batch</th>
            <th>Change</th>
        </tr>
        { data.data.map( (item, index) => {
            return (
            <tr key={index}> 
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.course}</td>
                <td>{item.batch}</td>
                <td onClick={ () => editData(index) }> <Link to={ "/addContact" } state={{ ind : index }} >Change</Link> </td>
            </tr>
            )
        } ) }
    </table>
    </>
  )
}

export default Students
