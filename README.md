# deep-hierarchy

A fork of [d3](http://github.com/mbostock/d3)'s [hierarchy base layout](https://github.com/d3/d3-hierarchy/blob/master/src/hierarchy.js) which includes the values of inner nodes in its final sums.

## Usage

### `hierarchy = Hierarchy()`

Creates a new hierarchy layout instance.

### `hierarchy.children([children])`

If children is specified, sets the specified children accessor function. If children is not specified, returns the current children accessor function, which by default assumes that the input data is an object with a children array:

``` javascript
function children(d) {
  return d.children
}
```

### `hierarchy.value([value])`

If value is specified, sets the value accessor to the specified function. If value is not specified, returns the current value accessor, which assumes that the input data is an object with a numeric value attribute:

``` javascript
function value(d) {
  return d.value
}
```

***Note:*** *multiple calls to `hierarchy.nodes` on the same root node will result in re-accummulating each node's values. It's wise to have your `value` accessor set to something other than the default to avoid unexpected results.*

### `hierarchy.sort([comparator])`

If comparator is specified, sets the sort order of sibling nodes for the layout using the specified comparator function. If comparator is not specified, returns the current group sort order, which defaults to descending order by the associated input data's numeric value attribute:

``` javascript
function comparator(a, b) {
  return b.value - a.value
}
```

### `hierarchy.nodes(root)`

Runs the hierarchy layout, returning the array of nodes associated with the specified root node. In the process of doing so, the following properties will be added to each node in your tree:

* `parent`: the parent node, or null for the root.
* `children`: the array of child nodes, or null for leaf nodes.
* `value`: the node value, as returned by the value accessor.
* `depth`: the depth of the node, starting at 0 for the root.

## Authors and Contributors

<table><tbody>
<tr><th align="left">Hugh Kennedy</th><td><a href="https://github.com/hughsk">GitHub/hughsk</a></td><td><a href="http://twitter.com/hughskennedy">Twitter/@hughskennedy</a></td></tr>
</tbody></table>

Contributions are welcomed from anyone wanting to improve this project!

## License & Copyright

**deep-hierarchy** is Copyright (c) 2015 NodeSource and licensed under the MIT license. All rights not explicitly granted in the MIT license are reserved. See the included [LICENSE.md](./LICENSE.md) file for more details.
