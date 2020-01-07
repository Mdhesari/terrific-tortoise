import React from "react";
import Helmet from "react-helmet";
import _ from "lodash";

export default class Seo extends React.Component {
  render() {
    const data = _.get(this.props, "site.siteMetadata");

    const { description } = this.props;

    return (
      <Helmet
        htmlAttributes={{ lang: "en" }}
      >
        <meta name="description" content={description || data.description} />
        <meta name="keywords" content={_.join(data.keywords, ", ")} />
      </Helmet>
    );
  }
}
