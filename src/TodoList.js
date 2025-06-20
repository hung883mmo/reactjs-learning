const todos = [
    { id: 1, text: "Học React", done: true },
    { id: 2, text: "Viết component", done: false },
    { id: 3, text: "Làm bài tập", done: false },
];

function TodoList() {
    return (
        <ul className="text-left">
            {todos.map(todo => <li key={todo.id} className="mb-1"> {todo.done ? '✅' : '❌'} {todo.text}</li>)}
        </ul>
    );
}

export default TodoList;