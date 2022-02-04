//Using push and pop on arrays -> gives a stack implementation - LIFO -> Last In First Out order
var stack = [];

stack.push('google');
stack.push('amazon');
stack.push('telsa');

stack
    (3)['google', 'amazon', 'telsa']

stack.pop();
//-> 'telsa'
stack.pop();
//->'amazon'
stack.pop();
//->['google']

//Another way of implementing stack is with shift() and unshift() 
stack

stack.unshift('New file');
stack.unshift('updated file');
stack.unshift('cloned');

stack
    (3)['cloned', 'updated file', 'New file']
stack.shift();
'cloned' //Following LIFO principle...
stack.shift();
'updated file' //Following LIFO principle...
stack.shift();
'New file' //Following LIFO principle...
