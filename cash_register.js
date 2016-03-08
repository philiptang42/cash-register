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
-----------------------------------------------
var cashRegister = {
    total:0,
    add: function(itemCost){
        this.total += itemCost;
    },
    scan: function(item, quantity) {
        switch (item) {
        case "eggs": this.add(0.98 * quantity); break;
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
        }
    }
};

// scan each item 4 times
cashRegister.scan("eggs", 4);
cashRegister.scan("milk", 4);
cashRegister.scan("magazine", 4);
cashRegister.scan("chocolate", 4);

//Show the total bill
console.log('Your bill is '+cashRegister.total);
---------------------------------
var cashRegister = {
    total:0,
    lastTransactionAmount: 0,
    //Dont forget to add your property
    add: function(itemCost) {
        this.total +=  itemCost;
        this.lastTransactionAmount = itemCost;
    },
    scan: function(item,quantity) {
        switch (item) {
        case "eggs": this.add(0.98 * quantity); break;
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
        }
        return true;
    },
    //Add the voidLastTransaction Method here
    voidLastTransaction: function() {
      this.total -= this.lastTransactionAmount;
    }
};

cashRegister.scan('eggs',1);
cashRegister.scan('milk',1);
cashRegister.scan('magazine',1);
cashRegister.scan('chocolate',4);

//Void the last transaction and then add 3 instead
cashRegister.voidLastTransaction();
cashRegister.scan("chocolate", 3);

//Show the total bill
console.log('Your bill is '+cashRegister.total);
---------------------------
// create a constructor for the StaffMember class
var StaffMember = new Object(); {
  name = name;
  discountPercent = discountPercent;
};

var sally = new StaffMember("Sally",5);
var bob = new StaffMember("Bob",10);

//Create a StaffMember for yourself called me
var me = new StaffMember("Phil", 20);
