---
Title: Linear Combination of Random Variables
Date: 04/13/2023
Author: Sulav Jung Hamal
BookAuthor: Sulav Jung Hamal
Type: Class
Class: dataStructure
slug: overview
Genera: Data Science 
Status: Planning 🔗
Due_Date: 04/13/2023
Cover_Image: https://source.unsplash.com/9DaOYUYnOls/1320x400
Tag:
  - class
---

# Tree 
A **tree** is an abstract data type (ADT) or data structure that simulates a hierarchical tree structure, with a root value and subtrees of children, represented as a set of linked nodes. In computer science, trees are widely used to represent data that has a hierarchical structure, such as file systems, organization charts, and family trees.

#### Basic Terminologies of Trees

- ###### Node
	- A node is a fundamental part of a tree that contains data and a reference (or pointer) to its child nodes. The topmost node of a tree is called the root node. A node can have zero or more child nodes.

- ###### Degree
	- The degree of a node is the number of its child nodes. For example, a node with no children has a degree of 0, while a node with three children has a degree of 3.

- ###### Level
	- The level of a node indicates its distance from the root node. The root node is at level 1, its children are at level 2, their children are at level 3, and so on.

- ###### Height
	- The height of a tree is the length of the longest path from the root node to any leaf node. In other words, it is the number of levels in the tree.

- ###### Parent and Child
	- A node that has a child node is called the parent of that child node. Conversely, a node that has a parent node is called a child node of that parent. For example, if Node A has Node B as its child, then Node A is the parent of Node B, and Node B is the child of Node A.

- ###### Ancestor and Descendant
	- A node is said to be an ancestor of all the nodes in its subtree. Conversely, a node is said to be a descendant of all the nodes in its parent chain. For example, if Node A has Node B as its child, and Node B has Node C as its child, then Node A is an ancestor of Node C, and Node C is a descendant of Node A.

- ###### Leaf Node
	- A leaf node is a node that does not have any child nodes. It is also known as a terminal node or a external node. Leaf nodes can be located at any level of a tree.




#### Binary Tree:
- Has Two nodes only at most. Though, it can have one node only as well. Or, can have none node and that will be called the leave node. 
- So, the degree of the binary node is 2. 
- You can't remove the root node. 
- ##### Full Binary Tree: 
	- A tree of height h which has all leaf nodes at level h. 
	- All non-leaf nodes has exactly 2 childeren. 
- ##### Complete Binary Tree
	- Binary tree at all levels of which, except last, has as many nodes as posssible. 
	- Nodes on last level are filled from left to right. 
- ##### Balanced Binary Tree. 
	- The heights of left and right subtrees differs by no more than 1. 
- ##### Leftist(rightist) Binary Tree. 
	- a binary tree where all interior nodes have either only left(right) subtree. 
- ###### Binary Tree - Traversal(visitation of node)
	- Pre-order Traversal. 
		- node r, pre-order of all nodes in the left sub tree, then pre-order traversal of all nodes in the right sub tree. 
		- So, it will have parent, child, child,
	- In-order Traversal. 
		- in-order traversal of all nodes in the left sub tree of r, node r, and then in order traversal of all nodes in the righ sub tree.
		- So, it will have child, parent, child
	- Post-order Traversal. 
		- post-order traversal of all nodes in the left sub tree or r, post order traversal of all nodes in the right sub tree or r, node r.
		- So, it will have child, child, parent 
## In-order Traversal of Binary Tree. 
```js
public void inorderTraverse() {  
	inorderTraverse(root);  
} // end inorderTraverse

private void inorderTraverse(BinaryNode<T> node) {  
	if (node != null) {  
		inorderTraverse(node.getLeftChild());  
		System.out.println(node.getData());  
		inorderTraverse(node.getRightChild());  
	} // end if  
} // end inorderTraverse
```

## Binary Search Tree
```js
bstSearch (binarySearchTree, desiredObject) {  
// Searches a binary search tree for a given object.  
// Returns true if the object is found.  
	if (binarySearchTree is empty)  
		return false  
	else if (desiredObject == object in the root of binarySearchTree)  
		return true  
	else if (desiredObject < object in the root of binarySearchTree)  
		return bstSearch(left subtree of binarySearchTree, desiredObject)  
	else  
		return bstSearch(right subtree of binarySearchTree, desiredObject)  
}
```

