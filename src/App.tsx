import './App.css';
import Input from './Components/Input/Input';
import IPProvider from './Providers/IPProvider';
import Result from './Components/Result/Result';
import Map from './Components/Map/Map';

function App() {
  return (
    <>
      <IPProvider>
        <div className='header'>
          <h1>IP Address Tracker</h1>
          <Input />
        </div>
        <Result />
        <Map />
      </IPProvider>
    </>
  )
}

export default App
