import React from 'react'
import Aheader from '../components/Aheader'
import AFooter from '../components/AFooter'
import { styled } from '@mui/system';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';


const StyledTableContainer = styled(TableContainer)`
  && {
    background-color: #d8bfd8;
    margin-top: 40px;
    margin-bottom: 40px;
  }
`;

const StyledTableHead = styled(TableHead)`
  && {
    background-color: #7B76A0;
  }
`;

const StyledTableCell = styled(TableCell)`
  && {
    padding-right: 70px;
    // width: 10%;
   
  }
`;
// const ButtonContainer = styled.div`
//   display: flex;
//   gap: 10px; /* Adjust the gap between buttons */
// `;




function ManageArtist() {
  return (
    <div>
      <Aheader/>
       {/*/inner-page*/}
       <div className="inner-banner2 inner-banner2d py-5">
        <section className="w3l-breadcrumb text-left py-sm-5 ">
          <div className="container">
            <div className="w3breadcrumb-gids">
              <div className="w3breadcrumb-left text-left">
                <h2 className="inner-w3-title">Manage Artists </h2>
              </div>
              <div className="w3breadcrumb-right">
                <ul className="breadcrumbs-custom-path">
                  <li>
                    <a href="index.html">Dashboard</a>
                  </li>
                  <li className="active">
                    <span className="fas fa-angle-double-right mx-2" /> Manage Artists
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/*//inner-page*/}

      <StyledTableContainer component={Paper} className='container'>
      <Table>
        <StyledTableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell>Artist ID</StyledTableCell>
            <StyledTableCell>Title</StyledTableCell>
            <StyledTableCell>Contact</StyledTableCell>
            <StyledTableCell>Address Title</StyledTableCell>
            <StyledTableCell>Full Address</StyledTableCell>
            <StyledTableCell>Address Map URL</StyledTableCell>
            <StyledTableCell>About Us</StyledTableCell>
            <StyledTableCell>Services Included</StyledTableCell>
            <StyledTableCell>Portfolio Images</StyledTableCell>
            <StyledTableCell>Since Work</StyledTableCell>
            <StyledTableCell>Product Used</StyledTableCell>
            <StyledTableCell>Advance Amount</StyledTableCell>
            <StyledTableCell>Travel to Venue</StyledTableCell>
            <StyledTableCell>Makeup Type</StyledTableCell>
            <StyledTableCell>Status</StyledTableCell>
            <StyledTableCell>Action</StyledTableCell>
          </TableRow>
        </StyledTableHead>
        <TableBody>
          <TableRow>
            <StyledTableCell>1</StyledTableCell>
            <StyledTableCell>123456</StyledTableCell>
            <StyledTableCell>John Doe</StyledTableCell>
            <StyledTableCell>123-456-7890</StyledTableCell>
            <StyledTableCell>Studio</StyledTableCell>
            <StyledTableCell>123 Main St, City, Country</StyledTableCell>
            <StyledTableCell>https://maps.example.com</StyledTableCell>
            <StyledTableCell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</StyledTableCell>
            <StyledTableCell>Makeup, Hairstyling</StyledTableCell>
            <StyledTableCell>Image1.jpg, Image2.jpg</StyledTableCell>
            <StyledTableCell>2010</StyledTableCell>
            <StyledTableCell>Brand A, Brand B</StyledTableCell>
            <StyledTableCell>$100</StyledTableCell>
            <StyledTableCell>Yes</StyledTableCell>
            <StyledTableCell>Bridal</StyledTableCell>
            <StyledTableCell>Active</StyledTableCell>
            <StyledTableCell>
              <Button variant="contained" style={{ backgroundColor: '#f44336', color: 'white' }}>Delete</Button>
              <Button variant="contained" style={{ backgroundColor: '#4CAF50', color: 'white' }}>Edit</Button>
              <Button variant="contained" style={{ backgroundColor: '#ff9800', color: 'white' }}>Block</Button>
            </StyledTableCell>
          </TableRow>
          <TableRow>
            <StyledTableCell>2</StyledTableCell>
            <StyledTableCell>987654</StyledTableCell>
            <StyledTableCell>Jane Smith</StyledTableCell>
            <StyledTableCell>987-654-3210</StyledTableCell>
            <StyledTableCell>Home</StyledTableCell>
            <StyledTableCell>456 Park Ave, City, Country</StyledTableCell>
            <StyledTableCell>https://maps.example.com</StyledTableCell>
            <StyledTableCell>Nulla facilisi. Nullam vestibulum tincidunt neque, at laoreet nulla feugiat nec.</StyledTableCell>
            <StyledTableCell>Makeup</StyledTableCell>
            <StyledTableCell>Image3.jpg, Image4.jpg</StyledTableCell>
            <StyledTableCell>2015</StyledTableCell>
            <StyledTableCell>Brand C</StyledTableCell>
            <StyledTableCell>$150</StyledTableCell>
            <StyledTableCell>No</StyledTableCell>
            <StyledTableCell>Party</StyledTableCell>
            <StyledTableCell>Inactive</StyledTableCell>
            <StyledTableCell>
              <Button variant="contained" style={{ backgroundColor: '#f44336', color: 'white' }}>Delete</Button>
              <Button variant="contained" style={{ backgroundColor: '#4CAF50', color: 'white' }}>Edit</Button>
              <Button variant="contained" style={{ backgroundColor: '#ff9800', color: 'white' }}>Block</Button>
            </StyledTableCell>
          </TableRow>
          {/* Add more rows as needed */}
        </TableBody>
      </Table>
    </StyledTableContainer>
      <AFooter/>
    </div>
  )
}

export default ManageArtist
