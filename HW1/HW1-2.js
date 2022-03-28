const emptyStackMessage = "Stack is currently empty"
const invalidInputMessage = "Invalid input"

class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

class Stack {
  constructor() {
    this.head = null
  }
  
  push(element) {
    if (typeof(element) == "string") {    
      if (this.head) {
        const newNode = new Node(element)
        newNode.next = this.head
        this.head = newNode
      } else {
        this.head = new Node(element)
      }
    } else {
      return invalidInputMessage
    }
  }

  check() {
    let stack_array = []
    let current_node = this.head
    while(current_node) {
      stack_array.push(current_node.element)
      current_node = current_node.next
    }

    return stack_array
  }

  pop() {
    if (this.head) {
      const element = this.head.element
      this.head = this.head.next
    } else {
      return emptyStackMessage
    }
  }

  peek() {
    if (this.head) {
      return this.head.element
    } else {
      return emptyStackMessage
    }
  }

}

const my_stack = new Stack()
my_stack.push("Task A")
my_stack.push("Task B")
my_stack.push("Task C")
my_stack.push(6)
console.log(my_stack.check())
my_stack.pop()
console.log(my_stack.check())
console.log(my_stack.peek())
my_stack.pop()
console.log(my_stack.check())
console.log(my_stack.peek())
my_stack.pop()
console.log(my_stack.check())
console.log(my_stack.peek())