# array-flat

This small function provides the functionality to flatten an array in JavaScript without the use of its built-in `Array.flat` function. It uses a reducer to recursively pull out all node values and push them into a flat array.

## Usage (hypothetical)

```
const arrayFlat = require('array-flat')

const flattenedArray = arrayFlat([[1, 2, [3]], 4])
```

This will result in a flattened array.

## Testing

```
yarn test
```

## License

This package is released under the [the MIT License](LICENSE).