import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { createContext, useContext, useState } from 'react';
import './App.css';
import AddStudents from './Components/AddStudents';
import ContactUs from './Components/ContactUs';
import Home from './Components/Home';
import Students from './Components/Students';



const AOB = createContext();
function App() {

  const [dat, setData] = useState([
    {id:0,  name : "Hello", age : 25, course : "Comp", batch : "E17"},
    {id:1,  name : "Hello", age : 25, course : "Comp", batch : "E17"},
    {id:2,  name : "Hello", age : 25, course : "Comp", batch : "E17"},
    {id:3,  name : "Hello", age : 25, course : "Comp", batch : "E17"},
    {id:4,  name : "Hello", age : 25, course : "Comp", batch : "E17"},
    {id:5,  name : "Hello", age : 25, course : "Comp", batch : "E17"},
    {id:6,  name : "Hello", age : 25, course : "Comp", batch : "E17"},
    {id:7,  name : "Hello", age : 25, course : "Comp", batch : "E17"},
    {id:8,  name : "Hello", age : 25, course : "Comp", batch : "E17"},
    {id:9, name : "Hello", age : 25, course : "Comp", batch : "E17"},
    {id:10, name : "Hello", age : 25, course : "Comp", batch : "E17"},
    {id:11, name : "Hello", age : 25, course : "Comp", batch : "E17"},
    {id:12, name : "Hello", age : 25, course : "Comp", batch : "E17"},
    {id:13, name : "Hello", age : 25, course : "Comp", batch : "E17"},
    {id:14, name : "Hello", age : 25, course : "Comp", batch : "E17"},
    {id:15, name : "Hello", age : 25, course : "Comp", batch : "E17"},
    {id:16, name : "Hello", age : 25, course : "Comp", batch : "E17"},
    {id:17, name : "Hello", age : 25, course : "Comp", batch : "E17"},
    {id:18, name : "Hello", age : 25, course : "Comp", batch : "E17"},
    ]) 

   

  return (
    <>
   <BrowserRouter>
    <Routes>
     
        <Route path='/' element={<Home></Home>} > </Route>
        <Route path='/Students' element=
        {
           <AOB.Provider value={{ data : dat, updatefun : setData }} > 
             <Students></Students>
           </AOB.Provider>
        }> 
        </Route>
        <Route path='/Contact' element={<ContactUs></ContactUs>} > </Route>
        <Route path='/addContact' element={
          <AOB.Provider value={{ data : dat, updatefun : setData }} > 
        <AddStudents></AddStudents>
        </AOB.Provider>
        }>
        </Route>
    </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
export {AOB}
