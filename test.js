import test from 'tape'
import partition from './'

test('depth: 1', t => {
  const tree = {
    value: 2,
    children: [
      { value: 4 },
      { value: 8 }
    ]
  }

  const nodes = partition()(tree)

  t.equal(nodes[1].value, 4, 'preserves leaf value')
  t.equal(nodes[2].value, 8, 'preserves leaf value')
  t.equal(nodes[0].value, 2 + 8 + 4, 'updates parent value')
  t.end()
})

test('depth: 2', t => {
  const tree = {
    value: 2,
    children: [
      { value: 4 },
      { value: 8 },
      {
        value: 3,
        children: [
          { value: 5 },
          { value: 6 }
        ]
      },
      {
        value: 0,
        children: [
          { value: 0 },
          { value: 1 }
        ]
      }
    ]
  }

  const nodes = partition()(tree)

  t.equal(nodes[0].value, 2 + 4 + 8 + 3 + 5 + 6 + 1, 'root is sum of all children and self')
  t.equal(nodes[1].value, 4, 'leaf unaffected')
  t.equal(nodes[2].value, 8, 'leaf unaffected')
  t.equal(nodes[3].value, 3 + 5 + 6, 'inner child node is sum of all children and self')
  t.equal(nodes[4].value, 5, 'leaf unaffected')
  t.equal(nodes[5].value, 6, 'leaf unaffected')
  t.equal(nodes[6].value, 1, 'inner child node is sum of all children and self')
  t.equal(nodes[7].value, 0, 'leaf unaffected')
  t.equal(nodes[8].value, 1, 'leaf unaffected')

  t.end()
})
