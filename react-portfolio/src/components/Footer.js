import React from 'react';
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './Footer.css';

export default function App() {
  return (
    <div className="wrapper">
      <main className="content">
      </main>
      <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
        <MDBContainer className='text-center text-md-start mt-5'>
          <div className='text-center p-4'>
            &copy; {new Date().getFullYear()} Karandeep Nagpal - karandeepnagpal@gmail.com
          </div>
        </MDBContainer>
      </MDBFooter>
    </div>
  );
}
