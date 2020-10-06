
import React from 'react';
import './App.css';



class App extends React.Component {

 increaseLikes =() =>{
   this.setState({
     Likes:this.state.Likes+1

   })
 }
 decreaseLikes = () =>{
   if(this.state.Likes > 0){
  this.setState({
    Likes:this.state.Likes -1 
  })
}
else { 
  this.setState({
    likes: 0
  })
  }
}

 state ={
  myText: "Plus or Minus but dont go below 0",
  Likes : 0,
 

}

render() {
  return(
    
      <div> 
          <h1>{this.state.myText}</h1>
          <h1>Number:{this.state.Likes}</h1>
          <button onClick={this.increaseLikes}>Plus</button>
          <button onClick={this.decreaseLikes}>minus</button>
      
         </div>
    )
  }
}

export default App;