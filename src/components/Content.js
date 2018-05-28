import React from "react";
import PropTypes from "prop-types";

export const HTMLContent = ({ content, className }) => {
  //console.log(content);
  const firstImg = findFirstContentImage(content);
  console.log("first image", firstImg);
  return (
    <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
  );
};

const findFirstContentImage = content =>
  content.toString().split(/<img[^>]+src="([^">]+)"/)[1];

const Content = ({ content, className }) => {
  return <div className={className}>{content}</div>;
};

Content.propTypes = {
  content: PropTypes.string,
  className: PropTypes.string
};

HTMLContent.propTypes = Content.propTypes;

export default Content;
