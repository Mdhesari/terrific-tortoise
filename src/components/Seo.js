import React from "react";
import Helmet from "react-helmet";
import _ from "lodash";

export default class Seo extends React.Component {
  render() {
    const data = _.get(this.props, "site.siteMetadata");

    const { title, description } = this.props;

    console.log(this.props);
    console.log(title);

    return (
      <Helmet
        htmlAttributes={{ lang: "en" }}
        title={`${title} | ${data.title}`}
      >
        <meta name="description" content={description || data.description} />
        <meta name="keywords" content={_.join(data.keywords, ", ")} />
      </Helmet>
    );
  }
}
