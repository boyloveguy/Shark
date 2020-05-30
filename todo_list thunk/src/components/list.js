import React from 'react';
import Item from './item';
import {connect} from 'react-redux';
import {getData} from '../actions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class List extends React.Component {

  componentDidMount(){
    this.props.getData();
  }
  render(){
    console.log(this.props);
    let dataShow = this.props.todos.map((value, index)=>{
        return <Item handlerEdit={this.props.handlerEdit} handlerDelete={this.props.handlerDelete} key={index} todoName={value.name} index={index}/>
    })
    this.props.errors && toast.error(this.props.errors);
    return (
      <div>
        <ToastContainer/>
        <table class="table table-bordered">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            {dataShow}
        </tbody>
        </table>

        {this.props.loading && <div class="loader"></div>}
      </div>
    );
  }
}


const mapStateToProps = (state)=> {
  return {
    todos: state.todos,
    loading: state.loading,
    errors: state.error
  }
}

const mapDispatchToProps  = (dispatch) =>{
  return {
    getData: ()=>{
      dispatch(getData())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);