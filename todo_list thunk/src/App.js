import React from 'react';
import './App.css';
import List from './components/list';
import TodoForm from './components/todo_form';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todoName: "",
      loader: true   
    }
  }

  handlerSubmit(e, inputRef){
    // e.preventDefault();
    // let todo = {
    //   name: inputRef.current.value
    // }
    // const notify = () => toast.success("Ban da tao thanh cong!");
    // axios.post("https://5ec912c49ccbaf0016aa8b5c.mockapi.io/todolists", todo)
    // .then((res)=>{
    //   this.setState({
    //     todo_lists: [...this.state.todo_lists, res.data]
    //   })
    //   notify()
    // })
    
  }

  handlerEdit(e, todoName){
    // alert(todoName);
    this.setState({
      todoName: todoName
    })
  }

  componentDidMount(){
    // this.setState({
    //   loader: true
    // })
    // axios.get("https://5ec912c49ccbaf0016aa8b5c.mockapi.io/todolists")
    // .then((res)=>{
    //   console.log(res.data);
    //   this.setState({
    //     todo_lists: res.data,
    //     loader: false
    //   })
    // }).catch((e)=>{
    //   alert(e)
    // })
  }

  render(){
    return (
      <div className="mg-app">
        <ToastContainer/>
        <TodoForm todoName={this.state.todoName} handlerSubmit={this.handlerSubmit.bind(this)}/>
        <List handlerEdit={this.handlerEdit.bind(this)}/>
        {this.state.loader && <div class="loader"></div>}
      </div>
    );
  }
}

export default App;