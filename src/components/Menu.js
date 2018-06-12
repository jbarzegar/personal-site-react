import React from "react";
import Link from "gatsby-link";
import PropTypes from "prop-types";

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currLink: null
    };
  }

  isOnLink = link => {
    const includesLink =
      typeof window !== "undefined" && window.location.href.includes(link);
    console.log("running link", includesLink);
    return includesLink;
  };

  componentWillReceiveProps(props, state, prevProps) {
    console.log(props);
    const menuObj = props.menuItemsObject[props.currMenuKey];
    console.log(menuObj);
    if (menuObj && !this.isOnLink(menuObj.href)) {
      console.log("ds");
      this.props.setActiveMenuKey(null);
    } else {
      // const hash = window.location.href.substr(
      //   window.location.href.lastIndexOf("#") + 1
      // );
      // if (hash) {
      //   this.props.setActiveMenuKey(hash);
      // }
    }
  }

  // componentDidMount = () => {
  //   console.log("tesdt");
  //   const cMenuKey = this.props.currMenuKey;
  //   if (!cMenuKey) {
  //     return;
  //   }
  //   const menuObj = this.props.menuItemsObject[cMenuKey];
  //   if (this.isOnLink(menuObj.href)) {
  //     console.log("ds");
  //     //this.props.setActiveMenuKey(null);
  //   }
  // };

  render() {
    return (
      <div>
        <div className="hero-foot ">
          <nav className="tabs is-boxed is-fullwidth">
            <div className="container">
              <ul>
                {Object.keys(this.props.menuItemsObject).map(linkObjKeys => {
                  const linkObj = this.props.menuItemsObject[linkObjKeys];
                  console.log(linkObj);
                  return (
                    <li
                      key={linkObjKeys}
                      className={this.isOnLink(linkObj.href) ? "is-active" : ""}
                      onClick={() => this.props.setActiveMenuKey(linkObjKeys)}
                    >
                      <Link to={linkObj.href}>{linkObj.text}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
