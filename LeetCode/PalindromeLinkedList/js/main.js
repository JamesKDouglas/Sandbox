// parameters:
// return:
// example:
// pseudocode:

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }


// let node1 = new ListNode(2);
// let node2 = new ListNode(5);
// node1.next = node2;

// let list = new LinkedList(node1);

// let isPalindrome = function(head) {
    
// };


//calling this with new will return the object.
function ListNode(val=0, next=null) { // use defaults
    this.val = val;
    this.next = next;
}

let insert = function(l1, index, value) {
    if (index == 0) return new ListNode(value, l1);

    let i = 1; // start at 1
    let p = l1;

    while(i<index && p){
        p = p.next;
        i++;
    }

    let tem = new ListNode(value, p.next);
    p.next = tem;

    return lst; // return the list
};

function toArray(lst) { // utility to help display the list
    return lst ? [lst.val].concat(toArray(lst.next)) : [];
}

let lst = new ListNode(1, new ListNode(2, new ListNode(4)));

lst = insert(lst, 2, 3); // insert value 3 at index 2 

console.log(toArray(lst));