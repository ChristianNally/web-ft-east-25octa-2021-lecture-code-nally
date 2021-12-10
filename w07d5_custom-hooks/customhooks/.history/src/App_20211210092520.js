import './App.css';
import DocumentTitle from './components/DocumentTitle';
import Mouse from './components/Mouse';
import Input from './components/Input';
import Location from './components/Location';

function App() {
  return (
    <div className="App">
      <DocumentTitle />
      <Mouse />
      <Input />
      <Location />
    </div>
  );
}

export default App;
