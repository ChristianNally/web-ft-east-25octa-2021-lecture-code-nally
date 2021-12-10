import './App.css';
import DocumentTitle from './components/DocumentTitle';
import Mouse from './components/Mouse';
import Input from './components/Input';
import Location from './components/Location';
import Request from './components/Request';

function App() {
  return (
    <div className="App">
      <DocumentTitle />
      <Mouse />
      <Input />
      <Location />
      <Request />
    </div>
  );
}

export default App;
