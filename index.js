export default function Partition () {
  var sort = (a, b) => b.value - a.value
  var children = d => d.children
  var value = d => d.value

  partition.nodes = partition
  partition.sort = (...x) => x.length ? (sort = x[0], partition) : partition
  partition.value = (...x) => x.length ? (value = x[0], partition) : partition
  partition.children = (...x) => x.length ? (children = x[0], partition) : partition

  return partition

  function partition (root) {
    var stack = [root]
    var nodes = []
    var child
    var node

    root.parent = 0
    root.depth = 0

    while (typeof (node = stack.pop()) !== 'undefined') {
      nodes.push(node)

      var childs = children.call(partition, node, node.depth)
      var n = childs && childs.length
      if (n) {
        while (--n >= 0) {
          stack.push(child = childs[n])
          child.depth = node.depth + 1
          child.parent = node
        }
      }

      node.children = childs || null
      node.value = +value.call(partition, node, node.depth) || 0
    }

    visitAfter(root, function (node) {
      var childs = node.children
      var parent = node.parent
      if (sort && childs) childs.sort(sort)
      if (value && parent) parent.value += node.value
    })

    return nodes
  }
}

function visitAfter (node, callback) {
  var nodes = [node]
  var nodes2 = []
  while ((node = nodes.pop()) != null) {
    var children
    var n

    nodes2.push(node)

    if ((children = node.children) && (n = children.length)) {
      var i = -1
      while (++i < n) nodes.push(children[i])
    }
  }
  while ((node = nodes2.pop()) != null) {
    callback(node)
  }
}
