import axios from 'axios';

export function deleteTodo(indexTodo){
    return {
        type: "DELETE_TODO",
        indexTodo
    }
}

export function getData(){
    return dispatch => {
        dispatch(getDataStarted());
        axios.get(`https://5ec912c49ccbaf0016aa8b5c.mockapi.io/todolists`)
        .then(res => {
          dispatch(getDataSusses(res.data));
        })
        .catch(err => {
          dispatch(getDataFail(err));
        });
      };
}


export function getDataStarted(){
    return {
        type: "GET_DATA_STARTED"
    }
  }
  
  export function getDataFail(err){
    return {
        type: "GET_DATA_FAIL",
        err
    }
  }

  export function getDataSusses(data){
    return {
        type: "GET_DATA_SUCCES",
        data 
    }
  };