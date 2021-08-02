/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

const arr: number[] = [1,2,3,4,5]

function reverseList(head: ListNode | null): ListNode | null {
    let prev = null
    let curNode = head
    while(curNode) {
        let next = curNode.next
        curNode.next = prev
        prev = curNode
        curNode = next
    }
    return prev
    // if (head === null)
    //     return null
    // let prev = new ListNode(0, head)
    // let curNode = head
    // while(curNode) {
    //     let next = head.next
    //     curNode.next = prev
    //     prev = curNode
    //     curNode = next
    // }
    // return prev
};


















// function createList(arr, n) {
//     let header = {
//         value: arr[0],
//         next: null
//     }
//     let res = []
//     for (let i = 1; i < n; i++) {
//         header.next = arr[i]
//         res.push(header)
//         header = {
//             value: arr[i],
//             next: null
//         }
//         console.log(i)
//     }
//     console.log(res)
// }
// createList(arr, arr.length)

// function createLinedList(arr, n) {
//     if (n === 0) {
//         return null
//     }

//     let head = new ListNode(arr[0])
//     let curNode = head
//     for (let i = 1; i < n; i++) {
//         curNode.next = new ListNode(arr[i])
//         curNode = curNode.next
//     }
//     return head
// }

// function logLinkedList(head) {
//     let curNode = head
//     while(curNode !== null) {
//         console.log(curNode.val + '->')
//         curNode = curNode.next
//     }
//     console.log('NULL')
// }

// let header = createLinedList(arr, arr.length)
// logLinkedList(header)
// function reverseList(head: ListNode | null): ListNode | null {

// };