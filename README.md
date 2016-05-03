# What is this?
This repo contains web components built with the [Google Polymer library](https://www.polymer-project.org/1.0/) that allow you to create [Express.js](https://github.com/expressjs/express) applications. If you have not heard of web components, then please [start learning today](http://webcomponents.org/). Web components offer a way to modularize and package functionality into reusable components that can be easily shared and composed to create entire applications. Currently they have been used mostly for front-end web development. Well, what about the back-end? Web components are not only useful for visual components, as the [Google Polymer project](https://www.polymer-project.org/1.0/) has shown us. Now you can build APIs and other server-side applications, leveraging the same declarativeness of the front-end world.

## Mini Application

```
<link rel="import" href="node_modules/@polymer/polymer/polymer.html">
<link rel="import" href="node_modules/express-web-components/express-app.html">
<link rel="import" href="node_modules/express-web-components/express-middleware.html">
<link rel="import" href="node_modules/express-web-components/express-router.html">

<dom-module id="example-app">
    <template>
        <express-app port="5000">
            <express-middleware method="get" path="/" callback="[[index]]"></express-middleware>
            <express-middleware callback="[[notFound]]"></express-middleware>
        </express-app>
    </template>

    <script>
        class ExampleAppComponent {
            beforeRegister() {
                this.is = 'example-app';
            }

            ready() {
                this.index = (req, res) => {
                    res.send('Hola mundo!');
                };
                
                this.notFound = (req, res) => {
                    res.status(404);
                    res.send('not found');
                };
            }
        }

        Polymer(ExampleAppComponent);
    </script>
</dom-module>
```

## Examples
Here are some example Express apps that have been or are in the process of being rewritten with these web components:
* https://github.com/scramjs/rest-api-express
* https://github.com/scramjs/node-api

## Installation
These web components are meant to be run using [ScramJS](https://github.com/scramjs/scram-engine), which provides access to the Electron runtime, and Express.js, which is one of the most popular web frameworks running on top of Node.js. You must install these dependencies into your project separately:

```
npm install --save express-web-components
npm install --save express
npm install --save electron-prebuilt
npm install --save scram-engine
```

## Usage
Currently the best place to learn how to use the components is to view this repo's [example](https://github.com/scramjs/express-web-components/tree/master/example/app/server).

### Components

#### `<express-app></express-app>`
Properties:
* port

#### `<express-middleware></express-middleware>`
Properties:
* method
* path
* callback
* callbacks

#### `<express-router></express-router>`
Properties:
* path

Node.js is a trademark of Joyent, Inc. and is used with its permission. We are not endorsed by or affiliated with Joyent.
