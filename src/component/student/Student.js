import React from "react";
import StudentList from "./StudentList";
import { Data } from "./Data";
import { useState } from "react";
import { styles } from "./StudentStyle";

function Student() {
    const [students, setStudents] = useState(Data);
    const [name ,setName] = useState('');
    const [batch, setBatch] = useState ('');
    const [roll ,setRoll]= useState ('');
    const [stuClass ,setClass] =useState('') ;
    const submitHandler = ()=> {
    
        let student= {
           name ,
           batch,
           roll,
           class:stuClass,
        }
        console.log("student",student);
        setStudents([student, ...students]);
        setName('')
        setRoll('')
        setBatch('')
        setClass('')

}
const deleteHandler = (ind) => {
    console.log('index',ind);

let newStudents =  students.filter ( (student,index) => {
   if (ind !== index) {
       return student;
}
})
console.log("item", newStudents );
setStudents([...newStudents])
return 
}

    return ( 
        <div>
        <input type="text" value={name}  placeholder="Name" onChange={(e)=>setName(e.target.value)}/><br/><br/>
        <input type="text" value={batch} placeholder="Batch"onChange={(e)=>setBatch(e.target.value)}/><br/><br/>
        <input type="text" value={roll}  placeholder="Roll" onChange={(e)=>setRoll(e.target.value)}/><br/><br/>
        <input type="text" value={stuClass}placeholder="Class"onChange={(e)=>setClass(e.target.value)} /><br/>
        <br/>
        <button onClick={submitHandler}>Submit</button>
            <table>
                <thead>
                    <tr>
                
                        <th style={styles.border}> Name </th>
                        <th style={styles.border}> Batch </th>
                        <th style={styles.border}> Roll No </th>
                        <th style={styles.border}> Class </th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((item ,ind) => {
                        return<StudentList student={item} ind={ind} deleteHandler={deleteHandler} />})}
                </tbody>
            </table>
        </div>
    );
}

export default Student;
