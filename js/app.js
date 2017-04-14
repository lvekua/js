var todoList = {

// NOTE: todo array
    todo: [],

// NOTE: display todo items
    displayTodos: function() {
        if (this.todo.length === 0) {
            console.log('EMPTY TODO!');
        } else{
            for(var i = 0; i < this.todo.length; i++){
                if (this.todo[i].completed === true) {
                    console.log('(X)', this.todo[i].newItemText);
                } else{
                    console.log('( )', this.todo[i].newItemText);
                }
            }
        }
    },

// NOTE: add todo items to todo list
    addTodo: function(item) {
        this.todo.push({
            newItemText: item,
            completed: false
        });
        this.displayTodos();
    },

// NOTE: edit todo list item
    editTodo: function(itemIndex, item) {
        var todo = this.todo[itemIndex];
        todo.newItemText = item;
        this.displayTodos();
    },

// NOTE: delete an item from todo list
    deleteTodo: function(itemIndex) {
        this.todo.splice(itemIndex, 1);
        this.displayTodos();
    },

// NOTE: mark todo item as completed
    markCompletedTodo: function(itemIndex) {
        var todo = this.todo[itemIndex];
        todo.completed = !todo.completed;
        this.displayTodos();
    },

// NOTE: mark all todos as completed ot unmark all todos
    markAllTodos: function() {
        var totoalTodos = this.todo.length;
        var markedTodos = 0;

        for (var i = 0; i < this.todo.length; i++) {
            if (this.todo[i].completed === true) {
                markedTodos++
            }
        }

        if (markedTodos === totoalTodos) {
            for (var i = 0; i < this.todo.length; i++) {
                this.todo[i].completed = false;
            }
        } else{
            for (var i = 0; i < this.todo.length; i++) {
                this.todo[i].completed = true;
            }
        }
        this.displayTodos();
    }

};

var handler = {

};

var view = {
    
}
