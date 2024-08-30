var addTwoNumbers = function(l1, l2) {
    const iter = (n1, n2, rest = 0) => {
        if (!n1 && !n2 && !rest) return null;
        const newVal = (n1?.val || 0) + (n2?.val || 0) + rest;
        const nextNode = iter(n1?.next, n2?.next, Math.floor(newVal / 10));
        return new ListNode(newVal % 10, nextNode);
    }
    return iter(l1, l2);
};

// recursive solution from vfyodorov above

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;

    while (l1 !== null || l2 !== null || carry !== 0) {
        let sum = carry;

        if (l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2 !== null) {
            sum += l2.val;
            l2 = l2.next;
        }

        current.next = new ListNode(sum % 10);
        current = current.next;
        carry = Math.floor(sum / 10);
    }

    return dummy.next;
};

//Iterative solution by kartikdevsharmaa

// I find the iterative solution easier to think through and the recursive one doesn't perform better.
// It shows the use of a ListNode well - call l1.next and it reports not only the next value but the address which can be assigned to what appears to a variable but is the original object. Now you can use that as if it were a primitive variable again.
// The original problem just says the inputs are 'linked lists'. Then they show array notation for them. What they really mean is that the objects provided are ListNode objects, which have associated methods. A linkedList could be written with literal object notation or could be a more basic object without methods to use.

