import React from 'react';
import Welcome1Svg from '../../assets/Icons/Home';
import LoginSvg from '../../assets/Icons/LoginSVG';
import JoinUsSVG from '../../assets/Icons/JoinUsSVG';
const CSvg = props => {
  switch (props.name) {
    case 'home':
      break;
    case 'welcome1':
      return <Welcome1Svg size={props.size} />;
    case 'login':
      return <LoginSvg size={props.size} />;
    case 'joinUS':
      return <JoinUsSVG size={props.size} />;
    default:
      break;
  }
};

export {CSvg};
