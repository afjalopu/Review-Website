import React from "react";
import Friends from "../Friends/Friends";
import Layout from "../Layout/Layout";

const Home = () => {
  return (
    <Layout>
      <Friends limit={5} />
    </Layout>
  );
};

export default Home;
