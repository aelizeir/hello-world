import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      <Message />
     {/* <Greet name="Bruce" heroName="Batman">
      <p>This is a children props.</p>
     </Greet>
     <Greet name="Ali" heroName="Wonderwoman">
      <button>Action</button>
     </Greet>
     <Greet name="Denver" heroName="Superman"/>
     <Welcome name="Bruce" heroName="Batman"/>
     <Welcome name="Ali" heroName="Wonderwoman"/>
     <Welcome name="Denver" heroName="Superman"/> */}
     {/* <Hello /> */}
    </div>
  );
}

export default App;
