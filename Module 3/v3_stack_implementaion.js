

class Stack {
    constructor () {
        this.item = []
    }
    push(value) {
        this.item.push(value)
    }

    pop(){
        if(this.isEmpty()){
            return undefined
        }
        return this.item.pop()
    }

    isEmpty(){
            return this.item.length === 0
        }
        
    peek(){
        if(this.isEmpty()){
            return undefined
        }

        return this.item[this.item.length - 1]
    }

    // print(){
    //     console.log(this.item)
    // }


    print(){
        console.log(this.item.slice().reverse().join(' -> '))
    }
    /// slice create copy of main array then modefy 
    
}


const stack = new Stack()

console.log(stack.peek())
console.log(stack.isEmpty())

stack.push(5)
stack.push(6)
stack.push(0)

stack.print()


console.log(stack.peek())
console.log(stack.pop())
console.log(stack.peek())