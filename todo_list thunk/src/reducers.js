var stateDefault = {};

export function reducers(state=stateDefault, action){
    switch(action.type){
        case "DELETE_TODO":
            console.log(action);
            let todos = state

            todos.splice(action.indexTodo, 1)
            return [...todos];
          case "GET_DATA_STARTED":
              return {
                loading: true,
                todos: []
              };
          case "GET_DATA_FAIL":
              return {
                loading: false,
                todos: [],
                error: "Ban khong load duoc du lieu!"
              };
          case "GET_DATA_SUCCES":
              return {
                loading: false,
                todos: action.data
              };
        default:
            return {
              todos: []
            };
    }
}