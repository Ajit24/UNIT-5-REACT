import './App.css';
import { Button } from './components/Button';
import style from 'styled-components'
import { Body } from './components/Body';

function App() {
  return (
    <div className="App">
      <Body>
        <Button background='#0795ff' color='white' border='1px solid transparent'>Primery Button</Button>
        <Button background='white' color='black' border='1px solid #a5a2a2'>Default Button</Button>
        <Button background='white' color='black' border='1px dashed #a5a2a2'>Dashed Button</Button>
        <Button background='white' color='black' border='1px solid transparent'>Taxt Button</Button>
        <Button background='white' color='#075dff' border='1px solid transparent' font-w>Link Button</Button>
      </Body>
    </div>
  );
}

export default App;