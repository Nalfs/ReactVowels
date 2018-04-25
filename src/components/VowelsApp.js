import React from 'react';
import FormsList from './Forms-list';



  export class Vowels extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        display: [],
        text: [],
        count: 0,
        pattern: '/[aeiou]/i'
      };
  
    }

    createText(text) {
      this.state.text.push({
                    text: text
      });
      this.setState({text: this.state.text});
      console.log(this.state.text);
    }

    handleInput(event) {
      event.preventDefault();
      if (this.refs.userInput.value === "") return;
      this.createText(this.refs.userInput.value);
      this.refs.userInput.value = '';
    }

    compareInput(text) {
      this.state.text.map(item => {
      if (item.text.match(this.state.pattern)) {
      console.log("found a match")
      this.setState.count ++;
      this.state.display.push(count);

    }
    console.log(this.state.display.length);
    console.log("We found " + this.state.display.length + " matches!");
    });
   }
     


    render() {
      return (
        <div>
            <h1>React CountVowels</h1>
            <form onSubmit={e=>this.handleInput(e)}>
               <input type="text" placeholder="Enter Search" ref="userInput" />
               <button  onClick={(text)=>this.compareInput(text)}>Enter Search</button>
            </form>
      <FormsList 
      text={this.state.text}
      />
      </div>
            );
    }
  }