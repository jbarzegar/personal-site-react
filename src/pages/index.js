import React, { Component } from "react";
import github from "../img/github-icon.svg";
import PropTypes from "prop-types";
import Blog from "../components/Blog";
import Resume from "../components/Resume";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";
import Image from "gatsby-image";

// first two will be displayed, this list will cycle through
const listedItems = [
  "a game programming graduate 🎮",
  "a web developer 🌐",
  "a problem solver 💻",
  "open to new opportunities 📋"
];

//action link is the last item, and the one which is actionable, ie: leads user to somewhere etc.
const actionLink = listedItems[3];
const TRANSITION_TIMEOUT = 10;

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldStartFlipping: true,
      currentRoledexTuple: { first: listedItems[0], second: listedItems[1] },
      actionTuple: { first: actionLink, second: actionLink },
      tempTuple: null,
      doneRotation: false,
      // menu related items
      activeMenuKey: null
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

  setActiveMenuKey = key => {
    console.log(key);
    this.setState({
      activeMenuKey: key
    });
  };

  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    const menuItems = {
      resume: {
        component: <Resume />,
        href: "#resume",
        text: "Resume",
        keyName: "resume"
      },
      blog: {
        component: <Blog posts={posts} />,
        href: "#blog",
        text: "Blog",
        keyName: "blog"
      }
    };

    return (
      <div>
        <section className="hero is-info is-large has-bg-img is-fullheight">
          <Image
            sizes={this.props.data.headerImage.sizes}
            style={{
              position: "absolute",

              left: 0,

              top: 0,

              width: "100%",

              height: "100%"
            }}
          />
          <div className="hero-head">
            <Navbar invertedLogo />
          </div>

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
                  >
                    {this.state.currentRoledexTuple.first}
                  </span>
                </a>
              </h1>
              <div
                style={{
                  display: "flex"
                }}
              >
                <h2 className="subtitle is-4">from Toronto</h2>
              </div>

              {/* <span className="icon is-large">
                <img src={github} alt="Github" />
              </span> */}
            </div>
          </div>
          <Menu
            location={this.props.location}
            setActiveMenuKey={this.setActiveMenuKey}
            menuItemsObject={menuItems}
            currMenuKey={this.state.activeMenuKey}
          />
        </section>
        {menuItems[this.state.activeMenuKey] && (
          <section
            className="section has-inverted-bg-img"
            id={menuItems[this.state.activeMenuKey].href}
          >
            <div className="container">
              <div
                className="content"
                id={menuItems[this.state.activeMenuKey].keyName}
              />
              {menuItems[this.state.activeMenuKey].component}
            </div>
          </section>
        )}
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
    headerImage: imageSharp(id: { regex: "/header/" }) {
      sizes(maxWidth: 9856) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
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
