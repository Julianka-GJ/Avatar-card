import './App.css';
import Avatar from './Avatar';
import Users from '../data/user.json';

function App() {
  return (
    <div className="container">
      {Users.map((el) => (
            <Avatar
              key = {el.id}
              picture = {el.picture}
              name = {el.name}
              age = {el.age}
              email = {el.email}
              phone = {el.phone}/>
          ))}
    </div>
  );
}

export default App;
