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
                <div className="columns">
                  <div className="tile is-vertical column is-3 imag">
                    <figure className="image">
                      <img
                        src={
                          post.frontmatter.image ||
                          "https://source.unsplash.com/256x256"
                        }
                        alt="Image"
                      />
                    </figure>
                  </div>
                  {/* // "/img/coffee-gear.png */}
                  {console.log(post.frontmatter)}
                  <div className="column is-2">
                    <h1 style={{ marginBottom: "0px" }}>
                      <Link
                        className="has-text-primary column is-11"
                        to={post.fields.slug}
                      >
                        {post.frontmatter.title}
                      </Link>
                    </h1>

                    <small className="column">{post.frontmatter.date}</small>
                    <small className="column is-italic">
                      {post.frontmatter.tags.reduce((acc, tag, index, arr) => {
                        if (index < arr.length - 1) {
                          return acc.concat(tag + " • ");
                        } else {
                          return acc.concat(tag);
                        }
                      }, "")}
                    </small>
                  </div>
                  <p className="column ">
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
            tags
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
