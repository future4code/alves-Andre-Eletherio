import React, {Component} from "react";
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3"
import Etapa4 from "./components/Etapa4";

export default class App extends Component {

  state = {
    step: '',
    showing: ''
  }

  nextStep = (e) => {
    this.setState({
      step: e.target.value
    })
  }

  selectNextStage = (e) => {
    e.preventDefault()
    this.setState({showing: this.state.step})
  }

  toStage4 = () => {
    this.setState({
      showing: "stage4"
    })
  }

  render() {
    let show = <Etapa1 nextStep={this.nextStep} onClickButtonStep1={this.selectNextStage}/>
    if (this.state.showing === "Ensino Médio Incompleto" || this.state.showing === "Ensino Médio Completo") {
      show = <Etapa3 toStage4={this.toStage4}/>
    } else if (this.state.showing === "Ensino Superior Incompleto" || this.state.showing === "Ensino Superior Completo") {
      show = <Etapa2 toStage4={this.toStage4}/>
    } else if (this.state.showing === "stage4") {
      show = <Etapa4 />
    }
    console.log(this.state.step)
    return (
      <div className="App">
        {show}
        {/* <Etapa3 /> */}
        {/* <Etapa4 /> */}
      </div>
    );
  }
}