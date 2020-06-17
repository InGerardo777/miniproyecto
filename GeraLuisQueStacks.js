var stack1 = [];
var stack2 = [];
function enqueue(element) {
stack1.push(element);
}

function dequeue() {
if (stack2.length==0) {
if (stack1.length==0) {
    return 'No fue posible quitar el elemento por que no hay ninguno';
}
while (stack1.length > 0) {
    var p = stack1.pop();
    stack2.push(p);
    }
  }
  return stack2.pop();
}
enqueue('a');
enqueue('b');
enqueue('c');
dequeue();
