var shoppingList = {

// NOTE: Shopping list array
  listItems: [],

// NOTE: Add item to shopping list
  itemAdd: function(itemText){
    this.listItems.push({
      item: itemText,
      completed: false
    });
    view.displayItems();
  },

// NOTE: Edit item
  itemEdit: function(position, newValue){
    this.listItems[position].item = newValue;
    view.displayItems();
  },

// NOTE: Remove item
  itemRemove: function(position){
    this.listItems.splice(position, 1);
    view.displayItems();
  },

// NOTE: Check off item
  itemCheck: function(position, completedTxt){
      var listItems = this.listItems[position];
      listItems.completed = !listItems.completed;
      view.displayItems();
  },

// NOTE: Check all items
  itemCheckAll: function(){
    var totalItems = this.listItems.length;
    var checkedItems = 0;

    for(var i = 0; i < totalItems; i++){
      if(this.listItems[i].completed === true){
        checkedItems++;
      }
    }

    if(checkedItems === totalItems){
      for(var i = 0; i < totalItems; i++){
        this.listItems[i].completed = false;
      }
    } else {
      for(var i = 0; i < totalItems; i++){
        this.listItems[i].completed = true;
      }
    }

    view.displayItems();
  }
};

var handlers = {

  addItem: function(){
    var addItemInput = document.getElementById('addItemInput');
    shoppingList.itemAdd(addItemInput.value);
    addItemInput.value = '';
  },
  editItem: function(){
    var itemPosition = document.getElementById('itemPosition');
    var editItemInput = document.getElementById('editItemInput');

    shoppingList.itemEdit(itemPosition.valueAsNumber, editItemInput.value);
    itemPosition.value = '';
    editItemInput.value = '';
  },
  removeItem: function(){
    var itemPos = document.getElementById('itemPos');
    shoppingList.itemRemove(itemPos.valueAsNumber);
    itemPos.value = '';
  },
  checkItem: function(){
    var itemIndex = document.getElementById('itemCompleted');
    shoppingList.itemCheck(itemCompleted.valueAsNumber);
    itemIndex.value = '';
  }

};

var view = {
  
  displayItems: function(){
    var listUl = document.querySelector('ul');
    listUl.innerHTML = '';

    for (var i = 0; i < shoppingList.listItems.length; i++) {
      var listLi = document.createElement('li');
      var listText = shoppingList.listItems[i];
      var listLiWithCheckbox = '';

      if(listText.completed === true){
        listLiWithCheckbox = '(X) ' + listText.item;
      } else{
        listLiWithCheckbox = '( ) ' + listText.item;
      }

      listLi.textContent = listLiWithCheckbox;
      listUl.appendChild(listLi);
    }
  }

};
