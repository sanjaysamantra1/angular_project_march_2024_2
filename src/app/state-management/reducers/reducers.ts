const initialState = [
    { id: 1, text: 'ToDo 1', isCompleted: true },
    { id: 2, text: 'ToDo 2', isCompleted: false },
];

function todosReducer(state = initialState, action: any): any {
    switch (action.type) {
        case 'ADD_TODO': {
            const newToDo = {
                id: state.length + 1,
                text: action.payload.text,
                isCompleted: false,
            };
            return [...state, newToDo];
        }
        case 'TOGGLE_TODO': {
            return state.map((todo) => {
                return todo.id !== action.payload.id
                    ? todo
                    : Object.assign({}, todo, { isCompleted: !todo.isCompleted });
            });
        }
        case 'DELETE_TODO': {
            return state.filter((todo) => {
                return todo.id !== action.payload.id;
            });
        }
        default: {
            return state;
        }
    }
}

const initialEmployees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
    { eId: 105, name: 'deepak', sal: 8000, gender: 'male' },
];
function employeesReducer(state = initialEmployees, action: any): any {
    switch (action.type) {
        default: {
            return state;
        }
    }
}
export const rootReducer = {
    todosReducer,
    employeesReducer
};