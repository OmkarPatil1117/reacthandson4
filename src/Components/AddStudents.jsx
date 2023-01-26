import React, { useContext } from 'react'
import { createContext } from 'react'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { AOB } from '../App'


const objData = createContext()

const AddStudents = () => {
    const mainArr = useContext(AOB)
    const navigation = useNavigate()

    const location = useLocation()
    if(location.state !== null ) {
      console.log(  location.state.ind );
      var  updatefun = ()=> {
        console.log("Update function called");
        const newArr =   mainArr.data.splice(  location.state.ind , 1 , {id : location.state.ind,  name : nam,
            age : age,
            course : course,
            batch : batch   } )
          console.log(newArr);
          navigation("/Students")
      }
    } 
    const [nam, setnam ] = useState("")
    const [age, setage ] = useState("")
    const [course, setcourse ] = useState("")
    const [batch, setbatch] = useState("")
    const [objMain, setobjMain] = useState()

    const getName = (e) => {
        setnam(e.target.value)
    }

    const getAge = (e) => {
        setage(e.target.value)
    }

    const getBatch = (e) => {
        setbatch(e.target.value)
    }

    const getCourse = (e) => {
        setcourse(e.target.value)
    }

    const getData = (e) => {
        e.preventDefault()
        const obj = {
            id : mainArr.data.lenght, 
            name : nam,
            age : age,
            course : course,
            batch : batch
        }

        setobjMain(obj)
        if(location.state !== null ) {
            updatefun()
        } else {
            mainArr.updatefun( [...mainArr.data, obj] )
            navigation("/Students")
        }
    }







  return (
    <>
    <objData.Provider value={objMain}>
     <div className='form'>
      <form >
        <label htmlFor="name" style={{marginLeft:"62px"}} >Name :</label>
            <input type="text" name="Name1" id="name" onChange={getName}  /> <br /> <br />

        <label htmlFor="name" style={{marginLeft:"62px"}}>age :</label>
            <input type="text" name="age" id="name" onChange={getAge}  /> <br /> <br />

        <label htmlFor="name" style={{marginLeft:"62px"}} >Course :</label>
            <input type="text" name="course" id="name" onChange={getCourse} /> <br /><br />

        <label htmlFor="name" style={{marginLeft:"62px"}}>Batch :</label>
            <input type="text" name="batch" id="name"  onChange={getBatch} /> <br /><br />
        <button onClick={getData}>Submit</button>
      </form>
    </div>
    </objData.Provider>
    </>
  )
}

export default AddStudents
export  { objData }