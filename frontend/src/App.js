import './App.css';
import Left from './component/Left';
import Right from './component/Right';

function App() {
  return (
    <div className="App">
      <>
       <div className='flex h-screen'>
         <Left />
         <Right />
       </div>
      </>
    </div>
  );
}

export default App;
