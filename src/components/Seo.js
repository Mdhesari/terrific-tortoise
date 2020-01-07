import React from "react";
import Helmet from "react-helmet";
import _ from "lodash";

export default class Seo extends React.Component {
  render() {
    const data = _.get(this.props, "site.siteMetadata");

    const title = _.get(this.props, "title") || data.title;

    console.log(data);

    return (
      <Helmet htmlAttributes={{ lang: "en" }} title={`${title}`}>
        <meta name="description" content={data.description} />
        <meta name="keywords" content={_.join(data.keywords, ", ")} />
      </Helmet>
    );
  }
}
