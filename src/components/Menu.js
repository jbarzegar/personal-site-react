import React from "react";
import { navigateTo } from "gatsby-link";
import PropTypes from "prop-types";
import Scrollchor from "react-scrollchor";

export default class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currLink: null
    };
  }

  isOnLink = link => {
    // console.log("CHECK LIN", this.props.location);
    const includesLink =
      this.props.location.hash.includes(link) ||
      this.props.location.pathname.includes(link);
    return includesLink;
  };

  componentDidMount() {
    console.log("test ", this.props);
    this.checkHash();
  }

  checkHash() {
    const regex = /\#(.*)/;
    const includesHash =
      this.props.location.hash.match(regex) ||
      this.props.location.pathname.match(regex);
    console.log(includesHash);
    if (includesHash) {
      this.props.setActiveMenuKey(includesHash[1]);
    }
  }

  componentWillReceiveProps(props, state, prevProps) {
    // console.log("PROPS", props);
    const menuObj = props.menuItemsObject[props.currMenuKey];

    if (!props.currMenuKey) {
      this.checkHash();
    }

    if (menuObj) {
      if (this.isOnLink(menuObj.href)) {
        //  console.log(menuObj);
      } else {
        this.props.setActiveMenuKey(null);
      }
    }
    console.log("tr");
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
                  // console.log("LNIK OBJ", linkObj);
                  return (
                    <li
                      key={linkObjKeys}
                      className={this.isOnLink(linkObj.href) ? "is-active" : ""}
                      onClick={() => this.props.setActiveMenuKey(linkObjKeys)}
                    >
                      <Scrollchor
                        beforeAnimate={() => {
                          console.log("srt");
                          navigateTo(linkObj.href);
                        }}
                        to={linkObj.keyName}
                      >
                        {linkObj.text}
                        {/* <Link to={linkObj.href}>{linkObj.text}</Link> */}
                      </Scrollchor>
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
