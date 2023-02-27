//Suppose you have a linkedList. 

//Retrieve the middle value.
//if there are an even number of values, get the one just after the middle.

var middleNode =function(head){
    slow=fast=head;
    while(fast&&fast.next){
        slow = slow.next;
        fast=fast.next.next;
    }
    return slow;
};