import React from 'react';
import './HiveMobile.styled';
import HiveGlobal from '../styled/HiveGlobal.styled';
import { Mobile } from './HiveMobile.styled';

function HiveMobile() {
  return (
    <>
      <HiveGlobal />
      <Mobile>
        <span>
          {' '}
          <i className="uil uil-home"></i>
        </span>
        <span>
          <i className="uil uil-compass"></i>
        </span>
        <span>
          <i className="uil uil-bell"></i>
        </span>
        <span>
          <i className="uil uil-bookmark"></i>
        </span>
        <span>
          <i className="uil uil-chart-line"></i>
        </span>
        <span>
          <i className="uil uil-palette"></i>
        </span>
        <span>
          <i className="uil uil-setting"></i>
        </span>
      </Mobile>
    </>
  );
}

export default HiveMobile;
