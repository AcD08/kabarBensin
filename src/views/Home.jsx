// FIXME: betulin header yang masih ga bisa buka burger menu
import React from 'react';
const Header = React.lazy(() => import('../shared/Header'));
const Footer = React.lazy(() => import('../shared/Footer'));
const TabelHarga = React.lazy(() => import('./TabelHarga'));
const Blog = React.lazy(() => import('./Blog'));

const Home = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <TabelHarga />
      <Blog />
      <Footer />
    </div>
  );
};

export default Home;
