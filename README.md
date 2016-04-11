# coffeescript-unittest-poc

## Installation

In the project root directory run the following commands:
```sh
$ npm install
```

## Test
In the project root directory run the following commands:


__DEV__
```sh
$ karma start
```

the default karma configuration (see __karma.conf.js__) is set to support development env. This configuration will support debugging and auto relood files

__CI__

```sh
$ karma start --single-run --browsers PhantomJS2
```

The CI command overwrites the dev configuration with the PhantomJS2 browser and a single-run.
