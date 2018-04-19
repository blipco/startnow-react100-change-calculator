import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountDue: 0,
      amountReceived: 0,
      changeDue: 0,
      twenties: 0,
      tens: 0,
      fives: 0,
      ones: 0,
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChangeDue = this.handleChangeDue.bind(this);
    this.handleAmountReceived = this.handleAmountReceived.bind(this);
    this.handleAmountDue = this.handleAmountDue.bind(this);
  };


  handleAmountReceived(event) {
    this.setState({amountReceived: event.target.value});
  };

  handleAmountDue(event) {
    this.setState({amountDue: event.target.value});
  };

  handleChangeDue(event) {
    this.setState({changeDue: event.target.value});
  };

  handleClick(event) {
    event.preventDefault();
    var amountReceived = this.state.amountReceived;
    var amountDue = this.state.amountDue;
    var a = parseFloat(amountReceived);
    var b = parseFloat(amountDue);
    var c = (a-b).toFixed(2);
    var changeDue = c;
    this.setState({changeDue: changeDue});

    var runningTotal = c * 100;

    if (runningTotal >= 2000){
      this.setState({twenties: parseInt(runningTotal / 2000)});
      runningTotal %= 2000;
    } else this.setState({twenties: 0});

    if (runningTotal >= 1000){
      this.setState({tens: parseInt(runningTotal / 1000)});
      runningTotal %= 1000;
    }  else this.setState({tens: 0});

    if (runningTotal >= 500){
      this.setState({fives: parseInt(runningTotal / 500)});
      runningTotal %= 500;
    } else this.setState({fives: 0});

    if (runningTotal >= 100){
      this.setState({ones: parseInt(runningTotal / 100)});
      runningTotal %= 100;
    } else this.setState({ones: 0});

    if (runningTotal >= 25){
      this.setState({quarters: parseInt(runningTotal / 25)});
      runningTotal %= 25;
    } else this.setState({quarters: 0});

    if (runningTotal >= 10){
      this.setState({dimes: parseInt(runningTotal / 10)});
      runningTotal %= 10;
    } else this.setState({dimes: 0});

    if (runningTotal >= 5){
      this.setState({nickels: parseInt(runningTotal / 5)});
      runningTotal %= 5;
    } else this.setState({nickels: 0});

    if (runningTotal >= 1){
      this.setState({pennies: parseInt(runningTotal / 1)});
      runningTotal %= 1;
    } else this.setState({pennies: 0});
  
  };

  render() {
    return(
      <div className="container">
        <h3 className="text-left text-white">CHANGE CALCULATOR</h3>
        <div className="row">
          <div className="col-4">
            <div className="card">
              <div className="card-header">
                Enter Information
              </div> {/* card-header */}
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="due">How Much Is Due?</label>
                    <input className="form-control" 
                           name="amountDue"
                           value={this.state.amountDue} 
                           onChange={this.handleAmountDue} 
                           id="due" 
                           placeholder="$"/>
                  </div> {/* form-group */}
                  <div className="form-group">
                    <label htmlFor="received">How Much Was Received?</label>
                    <input className="form-control" 
                           name="amountReceived"
                           value={this.state.amountReceived}
                           onChange={this.handleAmountReceived}
                           id="received" 
                           placeholder="$"/>
                  </div> {/* form-group */}
                </form>
              </div> {/* card body */}
              <div className="card-footer">
                <button type="button" 
                        className="btn btn-primary btn-lg btn-block"
                        name="button" 
                        onClick={this.handleClick}>
                        Calculate</button>
              </div> {/* card footer */}
            </div> {/* card */}
          </div> {/* col-4 */}
          <div className="col-8">
            <div className="card"
                 id="results">
              <div className="alert alert-success"
                   role="alert" 
                   onChange={this.handleChangeDue}>
                    The total change due is ${this.state.changeDue}
              </div> {/* alert */}
              <div className="row">
                <div className="col-3">
                  <div className="card alpha">Twenties
                    <p id="twenties">
                      {this.state.twenties}
                    </p>
                  </div> {/* card */}
                </div> {/* col-3 */}
                <div className="col-3">      
                  <div className="card alpha">Tens
                    <p id="tens">
                      {this.state.tens}
                    </p>
                  </div> {/* card */}
                </div> {/* col-3 */}
                <div className="col-3">
                  <div className="card alpha">Fives
                    <p id="fives">
                      {this.state.fives}
                    </p>
                  </div> {/* card */}
                </div> {/* col-3 */}
                <div className="col-3">  
                  <div className="card alpha">Ones
                    <p id="ones">
                      {this.state.ones}
                    </p>
                  </div> {/* card */}
                </div> {/* col-3 */}
              </div> {/* row */}
              <div className="row">
                <div className="col-3">
                  <div className="card alpha">Quarters
                    <p id="quarters">
                      {this.state.quarters}
                    </p>
                  </div> {/* card */}
                </div> {/* col-3 */}
                <div className="col-3">
                  <div className="card alpha">Dimes
                    <p id="dimes">
                      {this.state.dimes}
                    </p>
                  </div> {/* card */}
                </div> {/* col-3 */}
                <div className="col-3">
                  <div className="card alpha">Nickels
                    <p id="nickels">
                      {this.state.nickels}
                    </p>
                  </div> {/* card */}
                </div> {/* col-3 */}
                <div className="col-3">
                  <div className="card alpha">Pennies
                    <p  id="pennies">
                      {this.state.pennies}
                    </p>
                  </div> {/* card */}
                </div> {/* col-3 */}
              </div> {/* row */}
            </div> {/* card body */}
          </div> {/* col-8 */}
        </div> {/* row */}
      </div> // container
    );
  };
};

export default App;
