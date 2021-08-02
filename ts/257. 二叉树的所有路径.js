/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
 var binaryTreePaths = function(root) {
    let res = []
    if (root == null) 
        return res
    if (root.left == null & root.right == null) {
        res.push(root.val)
        return res
    }

    let leftS = binaryTreePaths(root.left)
    leftS.map(item => {
        res.push(root.val + '->' + item)
    })
    let rightS = binaryTreePaths(root.right)
    rightS.map(item => {
        res.push(root.val + '->' + item)
    })
    return res
};