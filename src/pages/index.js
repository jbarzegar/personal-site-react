import React from "react";
import github from "../img/github-icon.svg";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Blog from "../components/Blog";

//first two will be displayed, this list will cycle through
const listedItems = [
  "a game programming graduate 🎮",
  "a web developer 🌐",
  "a problem solver 💻",
  "open to new opportunities 📋"
];

const actionLink = listedItems[3];

const TRANSITION_TIMEOUT = 10;

const dataHover = "open to new opportunities 📋";

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldStartFlipping: true,
      currentRoledexTuple: { first: listedItems[0], second: listedItems[1] },
      actionTuple: { first: actionLink, second: actionLink },
      tempTuple: null,
      doneRotation: false
    };
  }

  shiftCurrTupleForward() {
    //determine which index the previous items resided at
    const firstIndex = listedItems.indexOf(
      this.state.currentRoledexTuple.first
    );
    const secondIndex = listedItems.indexOf(
      this.state.currentRoledexTuple.second
    );

    if (firstIndex < 0 || secondIndex < 0) {
      console.warn(
        "Tuple values do not correspond to identity array listedItems"
      );
      return;
    }

    this.setState(prev => ({
      currentRoledexTuple: {
        ...prev.currentRoledexTuple,
        first: listedItems[(firstIndex + 1) % listedItems.length],
        second: listedItems[(secondIndex + 1) % listedItems.length]
      },
      shouldStartFlipping: false
    }));

    if (listedItems[(firstIndex + 1) % listedItems.length] !== actionLink) {
      setTimeout(() => {
        this.setState({ shouldStartFlipping: true });
      }, TRANSITION_TIMEOUT);
    } else {
      this.setState({ doneRotation: true });
    }
  }

  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div>
        <section className="hero is-info is-large">
          <div className="hero-body">
            <div className="container">
              <h1 className="title is-spaced reduced-max-width">
                <a
                  className="flip-animate title is-1 start-flip "
                  target="_blank"
                >
                  I am &nbsp;
                  <span
                    onAnimationEnd={() => {
                      console.log("done anim");
                      this.shiftCurrTupleForward();
                    }}
                    className={
                      this.state.shouldStartFlipping ? "start-flip" : ""
                    }
                    data-hover={this.state.currentRoledexTuple.second}
                    // onMouseEnter={() => {
                    //   console.log("enter");
                    //   this.setState({
                    //     tempTuple: { ...this.state.currentRoledexTuple },
                    //     currentRoledexTuple: this.state.actionTuple,
                    //     shouldStartFlipping: false
                    //   });
                    // }}
                    // onMouseLeave={() => {
                    //   this.setState({
                    //     currentRoledexTuple: this.state.tempTuple,
                    //     shouldStartFlipping: true
                    //   });
                    // }}
                  >
                    {this.state.currentRoledexTuple.first}
                  </span>
                </a>
              </h1>

              {/* <i className="material-icons">code</i> */}
              {/* <div className="front">a lapsed English major</div>
              <div className="back">a game programming graduate</div>

              <h2 className="subtitle is-4 is-spaced tile is-vertical is-8">
                I am
                <span>a lapsed English major</span>
                <span>a game programming graduate</span>
                <span>a front end</span>
                <span>transitioning to full stack</span>
                <span>web developer</span>
              </h2> */}
              <h2 className="subtitle is-4">from Toronto</h2>

              {/* <span className="icon is-large">
                <img src={github} alt="Github" />
              </span> */}
            </div>
          </div>

          <div className="hero-foot ">
            <nav className="tabs is-boxed is-fullwidth">
              <div className="container">
                <ul>
                  <li className="is-active">
                    <a>Blog</a>
                  </li>
                  <li>
                    <a>🚧</a>
                  </li>
                  <li>
                    <a>🚧</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </section>
        <section className="section">
          <div className="container container-colored">
            <div className="content">
              {/* <h1 className="has-text-weight-bold is-size-2">Blog</h1> */}
            </div>
            <Blog posts={posts} />
            {/* {console.log(posts)} */}
          </div>
        </section>
      </div>
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
