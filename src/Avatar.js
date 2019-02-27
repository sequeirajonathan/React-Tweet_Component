import React from 'react';

function Avatar(url) {
  var imgURL = url.url;
  return (<img src={imgURL} className="avatar" alt="avatar" />);
}

export default Avatar;