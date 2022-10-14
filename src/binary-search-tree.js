const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootData = null;
  }

  root() {
    return this.rootData;
  }

  add(data) {
    this.rootData = addWithin(this.rootData, data)

    function addWithin(node, data) {
      if (!node) {
        return new Node(data) // если узла не существует - создаем его
      }
      if (node.data === data) {
        return node //если текущий узел уже существует, то ничего не делаем
      }
      if (data < node.data) {
        node.left = addWithin(node.left, data)
      } else {
        node.right = addWithin(node.right, data)
      }

      return node
    }
  }

  has(data) {
    return search(this.rootData, data)
    function search(node, data) {
      if (!node) return false
      if (node.data === data) return true
      return (data < node.data) ? search(node.left, data) : search(node.right, data)
    }
  }

  find(data) {
    return search(this.rootData, data);

    function search(node, data) {
      if (!node) return null;
      if (node.data === data) return node
      return (data > node.data) ? search(node.right, data) : search(node.left, data);
    }
  }
  remove(data) {
    this.rootData = removeNode(this.rootData, data)

    function removeNode(node, data) {
      if (!node) null

      if (data < node.data) {
        node.left = removeNode(node.left, data)
        return node
      } else if (data > node.data) {
        node.right = removeNode(node.right, data)
        return node
      } else {
        if (!node.left && !node.right) {
          return null
        }
        if (!node.left) {
          node = node.right
          return node
        }
        if (!node.right) {
          node = node.left
          return node
        }

        let minFromRight = node.right
        while (minFromRight.left) {
          minFromRight = minFromRight.left
        }
        node.data = minFromRight.data
        node.right = removeNode(node.right, minFromRight.data)
        return node
      }
    }

    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    if (!this.rootData) {
      return null
    }

    let node = this.rootData
    while (node.left) {
      node = node.left
    }
    return node.data
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    if (!this.rootData) {
      return null
    }

    let node = this.rootData
    while (node.right) {
      node = node.right
    }
    return node.data
  }
}

module.exports = {
  BinarySearchTree
};