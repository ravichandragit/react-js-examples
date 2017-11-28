import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    state = {
        Persons:[
            {name:'Maxa',age:30},
            {name:'Maximum', age: 20},
            {name:'John', age: 26}
        ]
    }

    switchNameHadler = (newName) => {
        console.log('was clicked');
        this.setState({
           Persons : [
               {name: newName, age: 28},
               {name: 'Dude', age: 35},
               {name: 'Diya', age: 18}
           ]
        })
    }

    render() {
        return ( 
            <div className = "App" >
                <h1> Its working </h1>
                <button onClick={this.switchNameHadler.bind(this,'Ravi')}>Switch Name</button>
                <Person 
                    name={this.state.Persons[0].name} 
                    age={this.state.Persons[0].age} 
                    click={this.switchNameHadler}
                /> 
                <Person 
                    name={this.state.Persons[1].name} 
                    age={this.state.Persons[1].age}> My hobby is racing 
                </Person>
                <Person 
                    name={this.state.Persons[2].name} 
                    age={this.state.Persons[2].age} /> 
            </div>
        );
    }
}

export default App;
//export default header;