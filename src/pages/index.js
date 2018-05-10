import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <section className="section">
        <div className="container">
          <div className="content">
            {/* <h1 className="has-text-weight-bold is-size-2">Blog</h1> */}
          </div>
          {posts
            .filter(post => post.node.frontmatter.templateKey === "blog-post")
            .map(({ node: post }) => (
              <div
                className="level content"
                style={{ border: "1px solid #eaecee", padding: "1em" }}
                key={post.id}
              >
                <div className="tile is-vertical is-2 image is-64x64">
                  <figure className="image">
                    <img src={post.frontmatter.image} alt="Image" />
                  </figure>
                </div>
                {/* // "/img/coffee-gear.png */}
                {console.log(post.frontmatter)}
                <p className="container is-fluid">
                  <Link className="has-text-primary" to={post.fields.slug}>
                    {post.frontmatter.title}
                  </Link>

                  <small>{post.frontmatter.date}</small>
                </p>
                <p className="container is-fluid">
                  {post.excerpt}
                  <br />
                  <br />
                  <Link
                    className="button is-small "
                    style={{ marginBottom: "1em" }}
                    to={post.fields.slug}
                  >
                    Keep Reading →
                  </Link>
                </p>
              </div>
            ))}
        </div>
      </section>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            image
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
