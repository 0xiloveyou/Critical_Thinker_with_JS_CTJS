class Node {
    constructor (value) {
        this.value = value
        this.next = null
    }

}
const head = new Node(10)

// console.log(head)
// console.log(head.next)

head.next = new Node(6)

// console.log(head)


let temp = head 

while(temp !== null){
   console.log(temp.value, ' ')
   temp = temp.next
}