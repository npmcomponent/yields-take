*This repository is a mirror of the [component](http://component.io) module [yields/take](http://github.com/yields/take). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/yields-take`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*

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

## Test

```bash
$ make test
```

## License

  MIT
