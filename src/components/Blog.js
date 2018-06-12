import React from "react";
import Link from "gatsby-link";
import PropTypes from "prop-types";

const Blog = props => {
  return (
    <div>
      {props.posts
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
                    alt="blog preview"
                  />
                </figure>
              </div>
              {/* {console.log(post.frontmatter)} */}
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
  );
};

// FeatureGrid.propTypes = {
//   gridItems: PropTypes.arrayOf(
//     PropTypes.shape({
//       image: PropTypes.string,
//       text: PropTypes.string,
//     })
//   ),
// }

export default Blog;
