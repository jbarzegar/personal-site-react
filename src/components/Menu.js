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

  componentDidMount() {
    console.log("tes");
    this.checkHash();
  }

  checkHash() {
    const regex = /\#(.*)/;
    const includesHash =
      typeof window !== "undefined" ? window.location.href.match(regex) : null;
    if (includesHash) {
      this.props.setActiveMenuKey(includesHash[1]);
    }
  }

  componentWillReceiveProps(props, state, prevProps) {
    console.log("PROPS", props);
    const menuObj = props.menuItemsObject[props.currMenuKey];

    if (!props.currMenuKey) {
      this.checkHash();
    }

    if (menuObj) {
      if (this.isOnLink(menuObj.href)) {
        console.log(menuObj);
      } else {
        this.props.setActiveMenuKey(null);
      }
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
        <div className="hero-foot">
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
