var todolist = {

// NOTE: todo array
    todo: [],

// NOTE: add new items to todo list
    addItem: function(itemValue){
        this.todo.push({
            item: itemValue,
            completed: false
        });
        view.displayTodos();
    },

// NOTE: edit items in todo list
    editItem: function(itemIndex, itemValue){
        this.todo[itemIndex].item = itemValue;
        view.displayTodos();
    },

// NOTE: remove items from todo list
    removeItem: function(itemIndex){
        this.todo.splice(itemIndex, 1);
        view.displayTodos();
    },

// NOTE: check completed items in todo list
    toggleTodo: function(itemIndex){
        var itemDone = this.todo[itemIndex];
        itemDone.completed = !itemDone.completed;
        view.displayTodos();
    },

// NOTE: check all items in todo list
    toggleAll: function(){
        var totalTodos = this.todo.length;
        var completedTodos = 0;

        for(var i = 0; i < totalTodos; i++){
            if(this.todo[i].completed === true){
                completedTodos++
            }
        }

        if(completedTodos === totalTodos){
            for (var i = 0; i < totalTodos; i++) {
                this.todo[i].completed = false;
            }
        } else{
            for (var i = 0; i < totalTodos; i++) {
                this.todo[i].completed = true;
            }
        }
        view.displayTodos();
    }

};

var handlers = {

    displayTodos: function(){
        todolist.displayTodos();
    },
    addTodo: function() {
        var todoItem = document.getElementById('addTodo');
        todolist.addItem(todoItem.value);
        todoItem.value = '';
    },
    editItem: function(){
        var itemIndex = document.getElementById('itemIndex');
        var itemValue = document.getElementById('itemValue');
        todolist.editItem(itemIndex.valueAsNumber, itemValue.value);

        itemIndex.value = '';
        itemValue.value = '';
    },
    removeItem: function(){
        var itemPosition = document.getElementById('itemPosition');
        todolist.removeItem(itemPosition.valueAsNumber);

        itemPosition.value = '';
    },
    toggleTodo: function(){
        var itemToCheck = document.getElementById('itemToCheck');
        todolist.toggleTodo(itemToCheck.valueAsNumber);

        itemToCheck.value = '';
    },
    toggleAll: function(){
        todolist.toggleAll();
    }

};

var view = {

    displayTodos: function(){
        var todoUl = document.querySelector('ul');
        var todoTitle = document.getElementById('todoTitle');
        var todoTitleText = '';
        todoUl.innerHTML = '';

        if (todolist.todo.length === 0) {
            todoTitleText = 'EMPTY TODO!';
        } else{
            todoTitleText = 'TODO:';
        }

        todoTitle.textContent = todoTitleText

        for (var i = 0; i < todolist.todo.length; i++) {
            var todoLi = document.createElement('li');
            var itemValue = todolist.todo[i];
            var itemText = '';

                if (itemValue.completed === true) {
                    itemText = '(X) ' + itemValue.item;
                } else{
                    itemText = '( ) ' + itemValue.item;
                }

            todoLi.textContent = itemText;
            todoUl.appendChild(todoLi);
        }
    }

}
