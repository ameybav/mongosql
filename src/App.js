import React from 'react';
import './App.css';
const builder = require('mongo-sql');

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: ''};
  }
  handleClick() {
    let userQuery = JSON.parse(this.input.value);
    var result = builder.sql(userQuery);
    this.setState({
      value: result.toString()
    });
  };

  render() {
    return (
      <div>
        <div class="textAreaColumn">
        <div>
          <textarea 
            ref={(input) => this.input = input}
          />
        </div>
        <div>
          <textarea
            value={this.state.value}
          />
        </div>
        <div>
        </div>
          <input
            type= "button"
            value="Parse It"
            onClick={this.handleClick.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default App;
