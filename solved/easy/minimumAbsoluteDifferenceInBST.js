/**
 * 530 Easy
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
  var prev = null;
  var totalMin = null;

  const traverse = (node) => {
    if (!node) {
      return;
    }
    traverse(node.left);

    totalMin = Math.min(totalMin, Math.abs(node.val - prev));
    prev = node.val;

    traverse(node.right);
  };
  traverse(root);

  return totalMin;
};
