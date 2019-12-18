const arrayFlat = require('./arrayFlat')

describe('Basic usage', () => {
  test('flattens nested array with primitive values', () => {
    expect(arrayFlat([[1, 2, [3]], 4])).toEqual([1, 2, 3, 4])
  })
  
  test('flattens nested array with objects as values', () => {
    const inputArray = [{ foo: 'bar'}, [[{ bar: 'baz' }, { test: 'test' }], [{ nested: 'a lot' }]], { good: 'array' }]
    const expected = [{ foo: 'bar'}, { bar: 'baz' }, { test: 'test' }, { nested: 'a lot' }, { good: 'array' }]
  
    expect(arrayFlat(inputArray)).toEqual(expected)
  })
})

describe('Edge cases', () => {
  test('flattens an already flattened array', () => {
    expect(arrayFlat([1, 2, 3, 4])).toEqual([1, 2, 3, 4])
  })

  test('flattens a nested array with all falsy values', () => {
    expect(arrayFlat([['', 0, [false], [[null], undefined], NaN]])).toEqual(['', 0, false, null, undefined, NaN])
  })

  test('returns empty array if one was provided as the input', () => {
    expect(arrayFlat([])).toEqual([])
  })

  test('flattens nested empty arrays into an empty array', () => {
    expect(arrayFlat([[[[]], []], []])).toEqual([])
  })

  test('throws an exception on invalid input', () => {
    expect(() => arrayFlat('foo')).toThrow()
  })
})