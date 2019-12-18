module.exports = function arrayFlat(array) {
  if (!Array.isArray(array)) {
    throw new Error('Invalid input: Expected array.')
  }

  const flatten = (accummulator, currentValue) => {
    if (Array.isArray(currentValue)) {
      return currentValue.reduce(flatten, accummulator)
    }

    accummulator.push(currentValue)

    return accummulator
  }

  return array.reduce(flatten, [])
}
