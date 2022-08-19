
import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import TodoItem from './MyComponents/TodoItem';
function App() {
  let Todos=[
    {
      sno :1,
      title: "go to college",
      desc :"you have to go to college"
    },
    {
      sno :2,
      title: "go to movie",
      desc :"you have to go to college"
    },
    {
      sno :3,
      title: "go to market",
      desc :"you have to go to college"
    }
  ]
  return (
    <> 
    <Header title="my todos list" searchBar="false"/>
    <Todos />
    <TodoItem/>
    <Footer/>
    </>
  );
}

export default App;
