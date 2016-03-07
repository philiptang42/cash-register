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
----------------------------
var cashRegister = {
    total: 0,
//insert the add method here
    add: function(itemCost) {
      this.total += itemCost
    },

    scan: function (item) {
        switch (item) {
        case "eggs":
            this.add(0.98);
            break;

        case "milk":
            this.add(1.23);
            break;

        //Add other 2 items here
        case "magazine":
          this.add(4.99);
          break;

        case "chocolate":
          this.add(0.45);
          break;

        }
        return true;
    }
};

//Scan 2 eggs and 3 magazines
cashRegister.scan("eggs")
cashRegister.scan("eggs")
cashRegister.scan("magazine")
cashRegister.scan("magazine")
cashRegister.scan("magazine")

//Show the total bill
console.log('Your bill is ' + cashRegister.total);
