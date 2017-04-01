
var shoppingList = {
    list: [],

    // NOTE: Display shopping list items
    displayItems: function(){
        if (this.list.length === 0) {
            console.log('your shopping list is empty!');
        } else{
            console.log('shopping list:');
            for(var i = 0; i < this.list.length; i++){
                 if (this.list[i].completed === false) {
                     console.log('( )', this.list[i].item);
                 } else {
                     console.log('(X)', this.list[i].item);
                 }
            }
        }
    },

    // NOTE: Add new items to shopping list
    addItem: function(newItem){
        this.list.push({
            item: newItem,
            completed: false
        });
        this.displayItems();
    },

    // NOTE: Edit desired item with new value
    editItem: function(position, newValue){
        this.list[position].item = newValue;
        this.displayItems();
    },

    // NOTE: Remove an item from shopping list
    removeItem: function(position){
        this.list.splice(position, 1);
        this.displayItems();
    },

    // NOTE: Check off completed or purchased item
    toggleCompleted: function(position){
        var l = this.list[position];
        l.completed = !l.completed;
        this.displayItems();
    },

    toggleAll: function(){

        // NOTE: Define variables for total items and checked off items in the list
        var totalItems = this.list.length;
        var purchasedItems = 0;

        // NOTE: Find if an item is checked off and increas purchasedItems variable
        for(var i = 0; i < totalItems; i++){
            if(this.list[i].completed === true) {
                purchasedItems++;
            }
        }

        // NOTE: If all items in the list are checked off, then ucheck all
        if(purchasedItems === totalItems){
            for (var i = 0; i < totalItems; i++) {
                this.list[i].completed = false;
            }

        // NOTE: Otherwise if all items are unchecked, check off all items
        } else {
            for (var i = 0; i < totalItems; i++) {
                this.list[i].completed = true;
            }
        }
        this.displayItems();
    }
};

var handlers = {
    // NOTE: Display items handler
    displayItems: function(){
        shoppingList.displayItems();
    },
    addItem: function(){
        var addItemInput = document.getElementById('addItemInput');
        shoppingList.addItem(addItemInput.value);
        addItemInput.value = '';
    },
    // NOTE: Edit item handler
    editItem: function(){
        var itemPosition = document.getElementById('itemPosition');
        var editItemInput = document.getElementById('editItemInput');

        shoppingList.editItem(itemPosition.valueAsNumber, editItemInput.value);
        itemPosition.value = '';
        editItemInput.value = '';
    },
    // NOTE: Remove item handler
    removeItem: function(){
        var itemIndex = document.getElementById('itemIndex');

        shoppingList.removeItem(itemIndex.valueAsNumber);
        itemIndex.value = '';
    },
    // NOTE: Check completed handler
    toggleCompleted: function(){
        var itemCompleted = document.getElementById('itemCompleted');

        shoppingList.toggleCompleted(itemCompleted.valueAsNumber);
        itemCompleted.value = '';
    },
    // NOTE: Check all handler
    toggleAll: function(){
        shoppingList.toggleAll();
    }
};

var view = {
  displayItems: function(){
      var listUl = document.querySelector('ul');
      listUl.innerHTML = '';

      for(var i = 0; i < shoppingList.list.length; i++){
        var listLi = document.createElement('li');
        var listText =  shoppingList.list[i];
        var listLiWithCeckbox = '';

        if(listText.completed === true){
          listLiWithCeckbox = '(X) ' + listText.item;
        }else{
          listLiWithCeckbox = '( ) ' +  listText.item;
        }

        listLi.textContent = listLiWithCeckbox;
        listUl.appendChild(listLi);
      }
  }
}
