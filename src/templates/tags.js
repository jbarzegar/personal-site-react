import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import Link from "gatsby-link";

class TagRoute extends React.Component {
  decideLink = () => {
    console.log(this.props.currentPostLink);
    const linkTo = this.props.currentPostLink || "/";

    return (
      <Link to={linkTo}>
        <div className="button is-info is-outlined is-inverted">
          Return to {this.props.currentPostLink ? "post" : "home"}
        </div>
      </Link>
    );
  };

  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    const postLinks = posts.map(post => (
      <li key={post.node.fields.slug}>
        <Link to={post.node.fields.slug}>
          <h2 className="title is-size-2">{post.node.frontmatter.title}</h2>
          <h2 className="subtitle is-size-6">{post.node.frontmatter.date}</h2>
        </Link>
      </li>
    ));
    const tag = this.props.pathContext.tag;
    const title = this.props.data.site.siteMetadata.title;
    const totalCount = this.props.data.allMarkdownRemark.totalCount;
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? "" : "s"
    } tagged with “${tag}”`;

    return (
      <section className="section">
        <Helmet title={`${tag} | ${title}`} />
        <div className="container content">
          <div className="columns">
            <div
              className="column is-10 is-offset-1"
              style={{ marginBottom: "6rem" }}
            >
              <h3 className="title is-size-4 is-bold-light">{tagHeader}</h3>
              <ul className="taglist">{postLinks}</ul>
              <Link to="/tags/">
                <div className="button is-info is-outlined is-inverted">
                  Browse all tags
                </div>
              </Link>
              <br />
              <br />
              {this.decideLink()}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

TagRoute.propTypes = {
  currentPostLink: PropTypes.string.isRequired
};

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
