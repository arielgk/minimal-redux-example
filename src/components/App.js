import React from "react";
import Items from "./Items";
import ChangeLabel from "./ChangeLabel";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      label: "Items",
      changed: 0
    };

    this.onChangeLabel = this.onChangeLabel.bind(this);
  }

  onChangeLabel(e) {
    e.persist();
    this.setState({
      label: "otroLabel",
      changed: this.state.changed + 1
    });
  }

  componentDidMount() {
    console.log("componente montado");
  }

  render() {
    return (
      <div>
        <Items label={this.state.label} changed={this.state.changed}/>
        <ChangeLabel
          onChangeLabel={this.onChangeLabel}
          changed={this.state.changed}
        />
      </div>
    );
  }
}

export default App;
