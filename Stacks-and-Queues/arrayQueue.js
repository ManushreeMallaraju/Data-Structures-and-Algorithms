//Every Queues implementation should follow FIFO - First In First Out order.
//One way of implementing Queues in array is : push() and shift()
var q = [];
undefined
q.push("FIRST");
1
q.push("SECOND");
2
q.push("THIRD");
3
q
    (3)['FIRST', 'SECOND', 'THIRD']
q.unshift();
3
q.shift();
'FIRST'
q.shift();
'SECOND'
q.shift();
'THIRD'

//Using push() & shift() is not optimal, because every time it re-indexes the entire Queue

//Another way of implementing Queues in Array -> unshift() & pop(), improves the performance

q.unshift("first");
1
q.unshift("second");
2
q.unshift("third");
3
q
    (3)['third', 'second', 'first']
q.pop();
'first'
q.pop();
'second'