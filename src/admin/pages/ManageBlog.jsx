// import React from "react";
import React, { useState, useEffect } from "react";
import axios from "axios";
// import axios from "axios";
import Aheader from '../components/Aheader'
import AFooter from '../components/AFooter'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { toast } from "react-toastify";


function ManageBlog() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await axios.get("https://beaidal.com/view_blog.php");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.post(`https://beaidal.com/delete_blog.php`,{id:id});
      fetchContacts(); // Refresh the data after successful deletion
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  // Edit
  const [formvalue, setFormvalue] = useState({
    id: "",
    title: "",
    image: "",
    description: "",
  });

  const editdata = async (id) => {
    const res = await axios.post(`https://beaidal.com/single_blog.php`,{id:id});
    console.log(res.data);
    setFormvalue(res.data);
  };

  const getform = (e) => {
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
    console.log(formvalue);
  };
  const validation = () => {
    var result = true;
    if (formvalue.title === "") {
      toast.error("Title is required");
      result = false;
      return false;
    }
    if (formvalue.image === "") {
      toast.error("Image is required");
      result = false;
      return false;
    }
    if (formvalue.description === "") {
      toast.error("Description is required");
      result = false;
      return false;
    }
    return result;
  };
  //  save edit
  const submithandel = async (e) => {
    e.preventDefault(); // stop page reload
    if (validation()) {
      const res = await axios.patch(
        `https://beaidal.com/single_blog.php${formvalue.id}`,
        formvalue
      );
      console.log(res);
      if (res.status === 200) {
        setFormvalue({
          ...formvalue,
          title: "",
          image: "",
          description: "",
        });
        toast.success("Update success");
        fetch();
      }
    }
  };


  return (
    <div>
      <Aheader/>
      {/*/inner-page*/}
      <div className="inner-banner2 inner-banner2d py-5">
        <section className="w3l-breadcrumb text-left py-sm-5 ">
          <div className="container">
            <div className="w3breadcrumb-gids">
              <div className="w3breadcrumb-left text-left">
                <h2 className="inner-w3-title"> Manage Blog </h2>
              </div>
              <div className="w3breadcrumb-right">
                <ul className="breadcrumbs-custom-path">
                  <li>
                    <a href="index.html">Dashboard</a>
                  </li>
                  <li className="active">
                    <span className="fas fa-angle-double-right mx-2" /> Manage Blog
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/*//inner-page*/}
      {/* <h3 className="title-w3l mb-4 mt-4 text-center">
             Manage Blog
              </h3> */}
              <TableContainer component={Paper} className="container mt-5 mb-5" style={{ backgroundColor: '#d8bfd8' }}>
      <Table>
        <TableHead style={{ backgroundColor: '#7B76A0' }}>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Action</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
        {data.map((value, index, arr) => (
          <TableRow key={value.id}>
            <TableCell>{value.id}</TableCell>
            <TableCell>{value.title}</TableCell>
            <TableCell>
            {value.image}
            </TableCell>
            <TableCell>
            {value.description}
            </TableCell>
            <TableCell>
              <Button variant="contained" style={{ backgroundColor: '#4CAF50', color: 'white' }}  onClick={() => editdata(value.id)}
                      data-bs-toggle="modal"
                      data-bs-target="#myModal">Edit</Button>
              <Button variant="contained" style={{ backgroundColor: '#f44336', color: 'white' }}  onClick={() => handleDelete(value.id)}>Delete</Button>
              <div className="modal" id="myModal">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header">
                          <h4 className="modal-title">Edit Products</h4>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                          />
                        </div>
                        {/* Modal body */}
                        <div className="modal-body">
                          <div className="container">
                            <form action="" method="post">
                              <div className="row g-4 mp-2">
                                <div className="col-md-6">
                                  <div className="form-floating">
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="title"
                                      value={formvalue.title}
                                      onChange={getform}
                                      id="title"
                                      placeholder="Title"
                                    />
                                    <label htmlFor="name">Title</label>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-floating">
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="image"
                                      value={formvalue.image}
                                      onChange={getform}
                                      id="image"
                                      placeholder="image"
                                    />
                                    <label htmlFor="image">Image</label>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-floating">
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="description"
                                      value={formvalue.description}
                                      onChange={getform}
                                      id="description"
                                      placeholder="description"
                                    />
                                    <label htmlFor="name">Description</label>
                                  </div>
                                </div>

                                <div className="col-12">
                                  <button
                                    onClick={submithandel}
                                    data-bs-dismiss="modal"
                                    className="btn btn-primary w-100 py-3"
                                    type="submit"
                                  >
                                    Save
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                        {/* Modal footer */}
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-danger"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
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

export default ManageBlog
