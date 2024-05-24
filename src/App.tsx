
import './App.css';
import Button, { TypesEnum } from './components/button';
import Hamburger, { TypesEnum2 } from './components/hamburger';

function App() {
  return (
    <div className="App">
      <Button title='signIn' type={TypesEnum.signIn}/>
        <br></br><br></br>
      <Hamburger title='button' type={TypesEnum2.button}/>
    </div>
  );
}

export default App;
