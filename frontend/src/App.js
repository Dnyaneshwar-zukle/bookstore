import './App.css';
import Left from './component/Leftpart/Left';
import Right from './component/Rightpart/Right';

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
// export default App;
