import { List, ListItem, ListItemText } from "@material-ui/core";
import React from "react";

function Todo(props) {
	return (
		<List>
			<ListItem>
				<ListItemText
					primary={props.todoNumber}
					secondary={props.todoText}
				></ListItemText>
			</ListItem>
		</List>
	);
}

export default Todo;
