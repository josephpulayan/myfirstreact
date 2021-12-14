import logo from '../logo.svg';
import '../App.css';
import Greet from './Greet';
import Message from './Message';
import Button from './Button';
import Hello from './Hello';
import NavBar from './NavBar';
function Home() {
  return (
    <div className="Home">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         
            <img src="/images/joseph.jpg" alt=""/>
    
        
        <p>
       My First React by JOSEPH PULAYAN
        </p>
         <Greet/>
        <Message/>
         <Button/>
       
       
        
        <a
          className="App-link"
          href="https://www.netflix.com/title/70143836"
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch Breaking Bad
        </a>
      </header>
    </div>
  );
}

export default Home;
