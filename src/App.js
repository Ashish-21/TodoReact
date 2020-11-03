import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./App.css";
import db from "./firebase";
import firebase from "firebase";

import Todo from "./Components/Todo";

function App() {
	const [todos, setTodos] = useState([]);
	const [todoInput, setTodoInput] = useState("");

	const setInput = (event) => {
		setTodoInput(event.target.value);
	};

	useEffect(() => {
		db.collection("todos")
			.orderBy("timestamp", "desc")
			.onSnapshot((snapshot) => {
				setTodos(snapshot.docs.map((doc) => doc.data().task));
			});
	}, []);

	const addTodosHandler = (event) => {
		event.preventDefault();
		//const todoArray = [...todos];
		//todoArray.push(todoInput);
		//setTodos(todoArray);
		db.collection("todos").add({
			task: todoInput,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});
		setTodoInput("");
	};

	return (
		<div className="App">
			<h1>TODO APP</h1>
			<div>
				<form>
					<FormControl>
						<InputLabel>Write A Todo</InputLabel>
						<Input
							type="text"
							value={todoInput}
							onChange={setInput}
						/>
					</FormControl>
					<Button
						disabled={!todoInput}
						variant="contained"
						color="primary"
						type="submit"
						onClick={addTodosHandler}
					>
						ADD TODO
					</Button>
				</form>
			</div>
			<div>
				<ul>
					{todos.map((todo, index) => {
						return (
							<Todo
								key={index}
								todoText={todo}
								todoNumber={index + 1}
							></Todo>
						);
					})}
				</ul>
			</div>
		</div>
	);
}

export default App;
