/// using array


class Queue {
    constructor(){
        this.item = []
    }

    enqueue(value){
        this.item.push(value)
    }
    dequeue(){
       if(this.isEmpty()){
         return undefined
       }
       return this.item.shift()
       // shift will remove form first 
    }

    isEmpty(){
        return this.item.length === 0
    }

    peek() {
        if (this.isEmpty()) {
            return undefined
        }

        return this.item[0]
    }


    // print(){
    //     console.log(this.item)
    // }

    print() {
        console.log(this.item.join(' -> '))
    }
}

const queue = new Queue()

queue.enqueue(5)
queue.enqueue(1)
queue.enqueue(6)
console.log(queue.peek())

queue.dequeue()
console.log(queue.peek())

queue.print()
