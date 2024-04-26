import React, { useState, useEffect } from "react";
import axios from "axios";
import Aheader from '../components/Aheader'
import AFooter from '../components/AFooter'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
// import { toast } from "react-toastify";

function ManageContact() {
 
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await axios.get("https://beaidal.com/view_contacts.php");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.post(`https://beaidal.com/delete_contacts.php`,{id:id});
      fetchContacts(); // Refresh the data after successful deletion
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };
  // useEffect(() => {
  //   fetch();
  // }, []);

  // const fetch = async () => {
  //   const res = await axios.get("https://beaidal.com/view_contacts.php"); // Assuming your JSON server is running on localhost:3000
  //   console.log(res.data);
  //   setData(res.data);
  // };
  // Edit
  // const [formvalue, setFormvalue] = useState({
  //   id: "",
  //   name: "",
  //   email: "",
  //   mobile: "",
  //   comment: "",
  // });

  // const editdata = async (id) => {
  //   const res = await axios.get(`https://beaidal.com/view_contacts.php/${id}`);
  //   console.log(res.data);
  //   setFormvalue(res.data);
  // };

  // const getform = (e) => {
  //   setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
  //   console.log(formvalue);
  // };
  // const validation = () => {
  //   var result = true;
  //   if (formvalue.name === "") {
  //     toast.error("Name Field is required");
  //     result = false;
  //     return false;
  //   }
  //   if (formvalue.email === "") {
  //     toast.error("Email Field is required");
  //     result = false;
  //     return false;
  //   }
  //   if (formvalue.mobile === "") {
  //     toast.error("Mobile Field is required");
  //     result = false;
  //     return false;
  //   }
  //   if (formvalue.comment === "") {
  //     toast.error("Message Field is required");
  //     result = false;
  //     return false;
  //   }
  //   return result;
  // };
  //  save edit
  // const submithandel = async (e) => {
  //   e.preventDefault(); // stop page reload
  //   if (validation()) {
  //     const res = await axios.patch(
  //       `https://beaidal.com/view_contacts.php${formvalue.id}`,
  //       formvalue
  //     );
  //     console.log(res);
  //     if (res.status === 200) {
  //       setFormvalue({
  //         ...formvalue,
  //         name: "",
  //         email: "",
  //         mobile: "",
  //         comment: "",
  //       });
  //       toast.success("Update success");
  //       fetch();
  //     }
  //   }
  // };

  // for delete

  // const handleDelete = async (id) => {
  //   const res = await axios.delete(`https://beaidal.com/view_contacts.php${id}`);
  //   fetch();
  // };
  return (
    <div>
      <Aheader/>
       {/*/inner-page*/}
       <div className="inner-banner2 inner-banner2d py-5">
        <section className="w3l-breadcrumb text-left py-sm-5 ">
          <div className="container">
            <div className="w3breadcrumb-gids">
              <div className="w3breadcrumb-left text-left">
                <h2 className="inner-w3-title">Manage Contact</h2>
              </div>
              <div className="w3breadcrumb-right">
                <ul className="breadcrumbs-custom-path">
                  <li>
                    <a href="index.html">Dashboard</a>
                  </li>
                  <li className="active">
                    <span className="fas fa-angle-double-right mx-2" />Manage Contact
                   
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/*//inner-page*/}

      <TableContainer component={Paper} className="container mt-5 mb-5" style={{ backgroundColor: '#d8bfd8' }}>
      <Table>
        <TableHead style={{ backgroundColor: '#7B76A0' }}>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone No</TableCell>
            <TableCell>Message</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {data.map((value, index, arr) => (
          <TableRow  key={value.id}>
           <TableCell>{value.id}</TableCell>
              <TableCell>{value.name}</TableCell>
              <TableCell>{value.email}</TableCell>
              <TableCell>{value.mobile}</TableCell>
              <TableCell>{value.comment}</TableCell>
            <TableCell>
              <Button variant="contained" style={{ backgroundColor: '#f44336', color: 'white' }} onClick={() => handleDelete(value.id)}>Delete</Button>
            </TableCell>
          </TableRow>
            ))}
          {/* Add more rows as needed */}
        </TableBody>
      </Table>
    </TableContainer>
      <AFooter/>
    </div>
  )
}

export default ManageContact
