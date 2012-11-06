
# take

  take N elements from array

## Installation

    $ component install yields/take

## API

#### take(arr, n)

```javascript
take([1, 2, 3], 2);
// > [1, 2]
take([1, 2, 3], function () {});
// > []
take([1, 2, 3], function (i, el) { return 3 == el });
// > [3]
```

## License

  MIT
