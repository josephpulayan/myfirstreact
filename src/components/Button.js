import React from "react";

class Button extends React.Component{
    
    constructor(){
        super()
        this.state ={
            count : 0
        }
    }
    addCounter = () =>{
        this.setState(
                {
                    count : this.state.count + 1
                })
    }
    
    render(){
        return(<div>
                 <button onClick ={this.addCounter}>Pindutin mo ito tapos may magic</button>
                 <p>galing no? nag bibilang hahaha = {this.state.count}</p>       
                 </div>
         )
    }
}

export default Button
