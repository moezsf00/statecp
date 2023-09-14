import React, { Component, useState } from 'react'

export default class App extends Component {
  state={
  Person :{
  fullName:"Cristiano Ronaldo  ",
  bio:"Cristiano Ronaldo dos Santos Aveiro GOIH ComM is a Portuguese professional footballer who plays as a forward for and captains both Saudi Pro League club Al Nassr and the Portugal national team",
  imgSrc:"https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQfniAGFxBnFdtMRmpK8BnTN082bMLIo515fUZjEufqpLw3n9IwjJsaprNwPFsUDgruy8rdjNOJ5WHDulU",
  profession:"soccer player"  
  }  ,
  shows:true
  }
  timer=0
 changeShows=()=>{
  this.state.shows?this.setState({shows:false}):this.setState({shows:true})
  
 }
  render() {
    return (
      <>
      <div style={this.state.shows?{display:"block"}:{display:"none"}} >
       <h1>{this.state.Person.fullName}</h1> 
       <img src={this.state.Person.imgSrc} style={{width:"300px"}} ></img>
       <p>{this.state.Person.bio}</p>
       <h1>{this.state.Person.profession}</h1> 
        
        
        </div>      
      <button onClick= {this.changeShows} >change</button>
      <h1>{this.timer}</h1>
      </>
    )
  }
}

