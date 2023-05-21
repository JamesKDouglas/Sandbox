// const list = {
//     head: {
//         value: 6,
//         next: {
//             value: 10,                                            
//             next: {
//                 value: 12,
//                 next: {
//                     value: 3,
//                     next: null	
//                 }
//             }
//         }
//     }
// };

class ListNode {
    constructor(data) {
        this.data = data
        this.next = null                
    }
}

let list = new ListNode();

console.log(list.head.value);
console.log(list.head.next.value);
console.log(list.head.next.next.value);