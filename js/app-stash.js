
var shoppingList = {
    list: [],
    // NOTE: Display shopping list items
    displayItems: function(){
        debugger;
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
        var totalItems = this.list.lenght;
        var purchasedItems = 0;

        for(var i = 0; i < totalItems; i++){
            if(this.list[i].completed === true) {
                purchasedItems++;
            }
        }

        if(purchasedItems === totalItems){
            for (var i = 0; i < totalItems; i++) {
                this.list[i].completed = false;
            }
        } else {
            for (var i = 0; i < totalItems; i++) {
                this.list[i].completed = true;
            }
        }
    }

}
