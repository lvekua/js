var shoppingList = {

    list: [],

    displayItems: function(){
        if(this.list.length === 0){
            console.log('Shopping list is empty!');
        } else {
            console.log('Shopping List:');
            for (var i = 0; i < this.list.length; i++){
                if (this.list[i].purchased === false) {
                    console.log('( )', this.list[i].newItem);
                } else {
                    console.log('(X)', this.list[i].newItem);
                }
            }
        }

    },

    addItem: function(newEntry){
        this.list.push({
            newItem: newEntry,
            purchased: false
        });
        this.displayItems();
    },

    //
    editItem: function(position, newEntry){
        this.list[position].newItem = newEntry;
        this.displayItems();
    },

    // Delete item from shopping list
    removeItem: function(position){
        this.list.splice(position, 1);
        this.displayItems();
    },

    // Mark off purchased items in shopping list
    checkPurchased: function(position){
        var l = this.list[position];
        l.purchased = !l.purchased;
        this.displayItems();
    },

    toggleAll: function(){
        // find total items
        var totalItems = this.list.length;
        // find all items that are checked
        var checkedItems = 0;

        // find all checked items
        for (var i = 0; i < totalItems; i++){
            if (this.list[i].purchased === true){
                checkedItems++;
            }
        }

        if (checkedItems === totalItems) {
            for (var i = 0; i < totalItems; i++) {
                this.list[i].purchased = false;
            }
        } else {
            for (var i = 0; i < totalItems; i++) {
                this.list[i].purchased = true;
            }
        }
        this.displayItems();
    }
}
