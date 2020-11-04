import {
	List,
	ListItem,
	ListItemText,
	Button,
	FormControl,
	Input,
	InputLabel,
} from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import React, { useState } from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { makeStyles } from "@material-ui/core/styles";

function Todo(props) {
	const [open, setOpen] = useState(false);
	const [input, setInput] = useState("");
	const handleClose = () => {
		setOpen(false);
	};
	const updateTodoInput = (event) => {
		setInput(event.target.value);
	};
	const useStyles = makeStyles((theme) => ({
		paper: {
			textAlign: "center",
			position: "relative",
			width: "80%",
			margin: "20px auto",
			backgroundColor: theme.palette.background.paper,
			border: "2px solid #000",
			boxShadow: theme.shadows[5],
			padding: theme.spacing(2, 4, 3),
		},
	}));
	const classes = useStyles();
	return (
		<div>
			<Modal open={open} onClose={handleClose}>
				<form>
					<div className={classes.paper}>
						<FormControl>
							<InputLabel>Update A Todo</InputLabel>
							<Input
								type="text"
								value={input}
								onChange={updateTodoInput}
							/>
						</FormControl>
						<br />
						<br />
						<Button
							disabled={!input}
							type="submit"
							color="primary"
							variant="contained"
							onClick={(e) => {
								props.updateTodoHandler(
									props.todoObj.todoId,
									input
								);
								setOpen(false);
							}}
						>
							Update
						</Button>
					</div>
				</form>
			</Modal>
			<List>
				<ListItem>
					<ListItemText
						primary={props.todoObj.todoText}
						secondary="Dummy Deadline"
					></ListItemText>
					<DeleteForeverIcon
						color="primary"
						variant="contained"
						onClick={() => {
							props.deleteTodoHandler(props.todoObj.todoId);
						}}
					/>
				</ListItem>
				<Button
					type="submit"
					color="primary"
					variant="contained"
					onClick={(e) => setOpen(true)}
				>
					Edit Todo
				</Button>
			</List>
		</div>
	);
}

export default Todo;
