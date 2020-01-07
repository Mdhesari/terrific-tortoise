import React from "react";
import Helmet from "react-helmet";
import _ from "lodash";

export default class Seo extends React.Component {
  render() {
    const data = _.get(this.props, "site.siteMetadata.header.bg_img");

    const title = _.get(this.props, "title") || "Official Website";

    console.log(data);

    return <Helmet htmlAttributes={{ lang: "en" }} title={`${title}`}></Helmet>;
  }
}
