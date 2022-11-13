import logo from './logo.svg';
import './App.css';
import { Form } from './components/Form';
import { UserList } from './features/Users/UserList';

function App() {
  return (
    <div className="App">
      <Form/>
      <UserList/>
    </div>
  );
}

export default App;
