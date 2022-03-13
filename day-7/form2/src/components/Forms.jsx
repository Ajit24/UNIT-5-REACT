// import { useState } from "react";
// //import axios from "axios";
// const axios = require ("axios");
// export const Forms = () => {
//     const [formData, setFormData] = useState({
//         username: "",
//         age: "",
//         email: "",
//     });

//     const handleChange= (e) => {
//          const { id, value } = e.target;
//          setFormData({
//              ...formData,
//              [id]: value
//          })

//         //  if(id === "age"){
//         //     setFormData({ ...formData, age: value});
//         //  }
//         //  if(id === "username") {
//         //      setFormData({ ...formData, username: value });
//         //  }
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         //console.log("formData")
        
//         axios.post("https://localhost:3001/users", formData).then(() => {
//             alert("user created successfuly");
//             setFormData({
//                 username: "",
//                 age: "",
//                 email: "",
//             })
//         });
//     };
//     return(
//       <form onSubmit={handleSubmit}>
//         <h3>SignUp</h3>
//         <input value={formData.username} id="username" type="text" onChange={handleChange} placeholder="enter username" />
//         <input value={formData.age} id="age" type="number" onChange={handleChange} placeholder="enter age" />
//         <input value={formData.email} id="email" type="text" onChange={handleChange} placeholder="enter email" />
//         <input type="submit" value={"Create user"} />
//       </form>
//      )
// };

 
import { useEffect, useState } from "react"
 
const axios = require("axios");
export const Forms = () => {
    const [formData, setFormData] = useState({ });
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3001/users`).then(res => {
          setData(res.data)
        })
      }, [])
    const handleChange = (e) => {
        // console.log(e.target.id, e.target.value)
        const { id, value } = e.target;
        setFormData({
            ...formData, [id]:value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(`http://localhost:3001/users`,formData).then(() => {
            alert("user Created successfully!")
            setFormData({
                username:"",
                age:"",
                address:"",
                department:"",
                salary:"",
                marital:"",
            })
    })
        console.log(formData)
    }
    

    return <>
    <div className="MainBox">
        <div className="input_boxes">
            <form onSubmit={handleSubmit}>
                <h2>Employe's Data</h2>
                <input id = "username"  value={formData.username} type = "text" onChange = {handleChange} placeholder = "enter username"/><br />
                <input  id = "age"   value={formData.age} type = "number"  onChange = {handleChange} placeholder = "enter age"/><br />
                <input  id = "address"   value={formData.address} type = "address"  onChange = {handleChange} placeholder = "enter address"/>
                <br />

                <select id="department" value={formData.department} type="department" onChange={handleChange}>
                    <option  selected>
                        Choose Department
                    </option>
                    <option value="Tech">Tech</option>
                    <option value="Management">Management</option>
                    <option value="Sales">Sales</option>
                </select>
                <br />
                <input  id = "salary"   value={formData.salary} type = "number"  onChange = {handleChange} placeholder = "enter salary"/><br />
                <span>Married</span>
                <input id="marital" type="checkbox" value="married" onChange={handleChange} /><br />
                <input type = "submit" value={"created user"}/> 
            </form>
        </div>
        <table class="w3-table">
                {/* <tr> */}

                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                    <th>Department</th>
                    <th>Salary</th>
                    <th>Marital State</th>
                {/* </tr> */}
            <tbody>
                {data.map((elem, index) => {

          
                return(
                    <tr>
                        <td>{elem.username}</td>
                        <td>{elem.age}</td>
                        <td>{elem.address}</td>
                        <td>{elem.department}</td>
                        <td>{elem.salary}</td>
                        <td>{elem.marital?`yes`:`no`}</td>
                    </tr>
                )
                })}
 
            </tbody>
        </table>
    </div>
    </>
     
}

 