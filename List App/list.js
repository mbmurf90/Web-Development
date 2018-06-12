//issue with Chrome so used setTimeout function
window.setTimeout(function(){

var todos = [];

var input = prompt("What would you like to do?");


while (input!=="quit"){

if(input ==="list"){
	listTodos();
} else if(input ==="new"){
	addTodo();
} else if(input ==="delete"){
	deleteTodo();
}
input = prompt("What would you like to do?");

}
console.log("App is finished");

function listTodos(){
todos.forEach(function(todo,i){
		console.log(i + ": " + todo);
});
}

function addTodo(){
	//ask for new todo
	var newTodo = prompt("Enter new todo");
	//add to todos array
	todos.push(newTodo);
	console.log("Added Todo");
}

function deleteTodo(){
	//ask for index to be deleted
	var index = prompt ("Enter index of todo to delete");
	//deletes that number todo
	//splice() deletes that number and removes it from array
	todos.splice(index,1);
	console.log("Deleted Todo");
}



},500);



