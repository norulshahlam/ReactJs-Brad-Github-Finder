import ViewUnpaid from "./ViewUnpaid";
import { Receipt } from "./Receipt";
import { Component } from "react";

class App extends Component {
  state = {
    pay: [false, false, false],
  };

  settlePayment = (i) => {
    console.log(i);
    const pay2 = [...this.state.pay];
    pay2[i] = true;
    console.log(pay2);
    this.setState({ pay: pay2 });
  };
  render() {
    return (
      <div>
        <h1>Korilla Korean barbecue tacos</h1>
        {Receipt.map((data, index) => {
          return this.state.pay[index] === false ? (
            <ViewUnpaid
              id={index}
              key={index}
              receipt={data}
              person={data.person}
              order={data.order}
              settlePayment={this.settlePayment}
            />
          ) : (
            <h1></h1>
          );
        })}
      </div>
    );
  }
}

export default App;
