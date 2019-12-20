import React, { Component } from "react";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Cargando"
    };
  }
  componentWillMount() {}

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        message: "Componente montado"
      });
    }, 3000);
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">
            {this.state.message}
          </a>
        </nav>
      </div>
    );
  }
}

export default Nav;
