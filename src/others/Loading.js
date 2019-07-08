import React, { Component } from "react";

export const LoadingContainer = props => (
  <div style={props.style}>{props.children}</div>
);

export const Loading = props => <div>{props.text || "Loading..."}</div>;
