//Create the object called cashRegister
//and initialize its total property
var cashRegister = {
  total: 0
};

//Using dot notation change the total property
cashRegister.total = 2.99
-------------------------------
var cashRegister = {
    total:0,
    add: function(itemCost){
        this.total += itemCost;
    }
};


//call the add method for our items
cashRegister.add(0.98)
cashRegister.add(1.23)
cashRegister.add(4.99)
cashRegister.add(0.45)

//Show the total bill
console.log('Your bill is '+cashRegister.total);
