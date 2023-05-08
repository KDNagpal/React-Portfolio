import React, { useState } from 'react';
import NavBar from './NavBar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Footer from './Footer'
import ContactMe from './pages/ContactMe'

const styles = {
  bg: {
    position: 'relative'
  }
}


export default function AppContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'ContactMe') {
      return <ContactMe />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <main>
      <NavBar handlePageChange={handlePageChange} />
      <section style={styles.bg}>
      {renderPage()}
      </section>
      <Footer/>
    </main>
  );
}

