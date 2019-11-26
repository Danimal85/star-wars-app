import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';


class UseTheForce extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput : "",
      characters : [],
      rawData : {}
    }
    this.getAPI = this.getAPI.bind(this)
  }



  componentDidMount() {
    var request = new XMLHttpRequest()
    
    request.open('GET', 'https://swapi.co/api/people/', true);
    
    var charsToAdd = [];
    request.onload = () => {
      
      var data = JSON.parse(request.response);    
      
      this.setState({
        rawData: data.results
      })
    
      
      for(let i = 0; i < Object.keys(data.results).length - 1; i++){
        charsToAdd[i] = data.results[i].name
      }

      this.setState({
        characters: charsToAdd
      })  
      
      //console.log(Object.keys(data.results).length)
      //this.state.characters = data.name
      //console.log(data.results);
    };

    request.send();
  }
  
  handleSubmit() {
    
  };

  handleChange(e) {
    this.setState({
      characters: e
    });
  }

  getAPI() {
        
  };

  render() {
    console.log(this.state.rawData[1], "this is rawData")
  const listChars = this.state.characters.map(i => <option value={i} key={i}>{i}</option>);

    return (
      <div>
        <h1>Star Wars Character Info</h1>
        <form id="StarWarsCharacters">
          <select name="Characters">
          {listChars}
          </select>
        </form>
        
      </div>
    )
  }
}

/*
function App() {
  return (
    <div className="App">
      
    </div>
  );
}
*/


//export default App;
export default UseTheForce;
