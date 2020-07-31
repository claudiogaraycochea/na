import React from "react";
import './Texts.css';

export const H1 = (props) => {
  const { children } = props;
  return (
    <h1
      className='h1'
    >
      {props.children}
    </h1>
  );
};

export const H2 = (props) => {
  const { children } = props;
  return (
    <h2
      className='h2'
    >
      {props.children}
    </h2>
  );
};

export const H3 = (props) => {
  const { children } = props;
  return (
    <h3
      className='h3'
    >
      {props.children}
    </h3>
  );
};