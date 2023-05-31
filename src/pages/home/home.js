import React from "react";

import Nav from "../../component/nav/nav.js";
import Header from "../../component/header/header.js";
import ProductList from "../../component/productList/ProductList.js";
import ProductList2 from "../../component/productList2/ProductList2.js";
import Footer from "../../component/footer/footer.js";

const Home = () => {
  return (
    <div>
      <Nav />
      <Header />
      <ProductList />
      <ProductList2 />
      <Footer />
    </div>
  );
};

export default Home;
