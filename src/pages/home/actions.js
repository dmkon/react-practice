export const ADD_TODO = 'ADD_TODO';

export function addTodo(id, name) {
    console.log('Action creator', id,  name);
    let error = '';
    if (!name) {
        error = 'Need to enter title';
    }
    return {
        type: ADD_TODO,
        id, name, error
    };
}
