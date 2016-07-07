# What is this?
This repo contains web components built with the [Google Polymer library](https://www.polymer-project.org/1.0/) that allow you to create [Express.js](https://github.com/expressjs/express) applications. If you have not heard of web components, then please [start learning today](http://webcomponents.org/). Web components offer a way to modularize and package functionality into reusable components that can be easily shared and composed to create entire applications. Currently they have been used mostly for front-end web development. Well, what about the back-end? Web components are not only useful for visual components, as the [Google Polymer project](https://www.polymer-project.org/1.0/) has shown us. Now you can build APIs and other server-side applications, leveraging the same declarativeness of the front-end world.

## Mini Application
Just a preview of what you can expect server-side web component code to look like:

```
<link rel="import" href="bower_components/polymer/polymer.html">
<link rel="import" href="bower_components/express-web-components/express-app.html">
<link rel="import" href="bower_components/express-web-components/express-middleware.html">
<link rel="import" href="bower_components/express-web-components/express-router.html">

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
Here are some example Express.js apps that have been rewritten with these web components:
* https://github.com/scramjs/rest-api-express
* https://github.com/scramjs/node-api
* https://github.com/scramjs/node-todo
* https://github.com/scramjs/node-tutorial-2-restful-app
* https://github.com/scramjs/node-tutorial-for-frontend-devs

Here is a [live example](http://scramjs.org/), built with web components on the front-end and the back-end.

## Installation
These web components are meant to be run using [Scram.js](https://github.com/scramjs/scram-engine), which provides access to the Electron runtime, and Express.js, which is one of the most popular web frameworks running on top of Node.js. You must install these dependencies into your project separately:

```
bower install --save express-web-components
npm install --save express
npm install --save electron-prebuilt
npm install --save scram-engine
```

[See here](https://github.com/scramjs/scram-engine) for information on how to use these components with Scram.js.

## Usage
In addition to the documentation below, a great place to learn how to use the components is to view this repo's [example](https://github.com/scramjs/express-web-components/tree/master/example/app/server).

Also, in the documentation I'm attempting to describe the API using TypeScript types. Not all of the types I'm using are real TypeScript types, I'm just hoping it helps describe what is expected. You do not need to use TypeScript to use these components.

### Components

## `<express-app></express-app>`

Creates an Express application and calls the Express [app.listen](http://expressjs.com/en/4x/api.html#app.listen) function.
This component is the parent of all other components that you inted 
to be a part of the Express application created. As long as you use different ports,
you can have multiple Express applications running for each instance of `<express-app></express-app>`.

##### Properties

`port: string | number`

The port the Express application will run on, as specified by [app.listen](http://expressjs.com/en/4x/api.html#app.listen).

`hostname?: string`

An optional hostname the Express application will run on, as specified by [app.listen](http://expressjs.com/en/4x/api.html#app.listen).


`backlog?: number`

An optional backlog the Express application will use, as specified by [app.listen](http://expressjs.com/en/4x/api.html#app.listen), and for more info see [server.listen](https://nodejs.org/api/http.html#http_server_listen_port_hostname_backlog_callback).

`callback?: (e: NodeListeningEvent) => any`

An optional callback function to be invoked by app.listen, as specified by [app.listen](http://expressjs.com/en/4x/api.html#app.listen)

## `<express-config></express-config>`

Allows specifying a callback function to be invoked with the current pertinent objects of the parent Express application. This is useful for setting configurations, such as calling `express.static(root, [options])`.

##### Properties

`callback: (app: express.Application, express: Express, router: express.Router, route: express.Route) => any`

A callback function that will be invoked with the the current Express application, the current Express object (from `require('express')`), the current parent router, and the current parent route.

## `<express-middleware></express-middleware>`

Allows hooking up Express middleware, i.e. performs the equivalent of [app.use](http://expressjs.com/en/4x/api.html#app.use), [app.get](http://expressjs.com/en/4x/api.html#app.get.method), [app.post](http://expressjs.com/en/4x/api.html#app.post.method), etc.

##### Properties

`method?: string`

An optional HTTP method to associate the middleware with, as defined by the Express [app.METHOD](http://expressjs.com/en/4x/api.html#app.METHOD). You must specify a path if you specify a method.

`path?: string`

The optional URL path that the middleware will be associated with. The path will default to `/` if no method is specified. You must specify a path if you specify a method.

`callback: (req: express.Request, res: express.Response, next: express.NextFunction) => any`

The callback function to be invoked on a matching request.

`callbacks?: (req: express.Request, res: express.Response, next: express.NextFunction) => any[]`

An optional list of callback functions to be invoked on a matching request.

## `<express-router></express-router>`

Creates an Express [router](http://expressjs.com/en/4x/api.html#router). All child components are hooked up to this router.

##### Properties

`path?: string`

The optional URL path that the router will be associated with. Defaults to `/`.

## `<express-route></express-route>`

Creates an Express [route](http://expressjs.com/en/4x/api.html#router.route). All child components are hooked up to this route.

##### Properties

`path: string`

The URL path that the route will be associated with.

Node.js is a trademark of Joyent, Inc. and is used with its permission. We are not endorsed by or affiliated with Joyent.
