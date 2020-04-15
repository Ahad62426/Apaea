import React from 'react';
import LoginSvg from '../../assets/Icons/LoginSVG';
import JoinUsSVG from '../../assets/Icons/JoinUsSVG';
const CSvg = props => {
  switch (props.name) {
    case 'login':
      return <LoginSvg size={props.size} />;
    case 'joinUS':
      return <JoinUsSVG size={props.size} />;
    default:
      break;
  }
};

export {CSvg};
