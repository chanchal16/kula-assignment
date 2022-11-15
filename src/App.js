import './App.css';
import { Form } from './components/Form';
import { UserList } from './features/Users/UserList';
import {Text} from '@chakra-ui/react'

function App() {
  return (
    <div className="App">
      <Text fontSize='4xl' m={4} color='blue.400' fontWeight='bold' mx='auto'>Find Developers</Text>
      <Form/>
      <UserList/>
    </div>
  );
}

export default App;
