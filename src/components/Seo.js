import React from "react";
import Helmet from "react-helmet";

const Seo = () => {


  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={`${title} | ${siteTitle}`}
    ></Helmet>
  );
};

export default Seo;
