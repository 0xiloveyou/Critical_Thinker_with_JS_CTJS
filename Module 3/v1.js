//* stateless vs Stateful 

/*

* function is stateless -> 

* object is statefull -> 


/// lexical envionmnet is local 
/// inside fucntion -> when runs a function 
/// every fucntion call function create new lexical environment 
/// that's why we loose 



/// object is stateful



*/

const counter = {
    count : 0,

    add(amount){
       this.count = this.count + amount
    },

    print(){ // print is a method 
        console.log(this.count)
    },
}

counter.add(7)
counter.add(1)
counter.print()