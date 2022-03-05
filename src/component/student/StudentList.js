import React from "react";
import { styles } from "./StudentStyle";


function StudentList({ student , deleteHandler ,ind}) {
    return (
        <tr>
            <td style={styles.border}> {student.name} </td>
            <td style={styles.border}> {student.batch} </td>
            <td style={styles.border}> {student.roll} </td>
            <td style={styles.border}> {student.class} </td>
           
       <td style={styles.border}> <button style={{backgroundColor:"blue" }} onClick={ ()=> deleteHandler(ind)}>Delete</button></td>
        </tr>

    );
}

export default StudentList;
