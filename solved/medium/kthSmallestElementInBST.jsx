/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 230
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
const kthSmallest = function(root, k) {
  const sorting = [];
  const helperFunction = function(tree) {
    if (tree === null) {
      return [];
    }
    if (tree.left === null && tree.right === null) {
      return [tree.val];
    }
    return sorting
      .concat(helperFunction(tree.left))
      .concat(tree.val)
      .concat(helperFunction(tree.right));
  };

  const sorted = helperFunction(root, sorting);
  return sorted[k - 1];
};
