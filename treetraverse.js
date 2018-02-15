var getAncestorPath = function(target) { var arr = []; var helper = function(tree) { if (this === leaf) { arr.push(this.value); return; } else {
    helper(tree.child;
    }
  }
  helper(tree);
}
hello

/*
 * if this is target
 * return [this]
 hello* for each child in tree
 * found <- recurse on child
 hello* if found is not null
 * return [this] concat with found
 * return null
* /
if (this === target) {
  return [this];
  }
  for (var i =0; i<this.children.length; i++) {
    var pathFromChild =
      this.children[i].getAncestoryPath(target);
  }
  if (pathFromChild) {
    return [this].concat(pathFromChild); 
 }
 return null;
[[1,2],[[4],[5,[6,7]]]];
 var flatten = function(arr) {
  // if array is empty 
      // return null
  // recursively call the next array...
      //

 };
