import React from "react";
import Helmet from "react-helmet";
import _ from "lodash";
import { render } from "node-sass";

class Seo extends React.Component {
  render() {
    const data = _.get(this.props, "site.siteMetadata");

    const title = _.get(this.props, "title");

    console.log(data);

    return <Helmet htmlAttributes={{ lang: "en" }} title={`${title}`}></Helmet>;
  }
}

export default Seo;
