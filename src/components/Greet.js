function Greet(props){
    return (
     <div>
          {props.children} 
          <h1>Hello {props.name} a.k.a {props.Role}</h1>
    </div>
            )
}

export default Greet