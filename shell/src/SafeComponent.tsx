import React, { Component } from "react";

export default class SafeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.error(
      "🚀 ~ SafeComponent ~ getDerivedStateFromError ~ error:",
      error
    );
    return { hasError: true };
  }

  componentDidCatch() {}

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong!</h1>;
    }

    return this.props.children;
  }
}
