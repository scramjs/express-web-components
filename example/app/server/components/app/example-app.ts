class ExampleAppComponent {
    public port;
    public appListen;
    public index;
    public seven;
    public notFound
    public setTitle;

    beforeRegister() {
        this.is = 'example-app';
    }

    ready() {
        this.port = process.env.PORT || 5000;

        this.appListen = () => {
            console.log('the app is listening on port: ' + this.port);
        };

        this.initHandlers();
    }

    initHandlers() {
        this.index = (req, res) => {
            res.send('Hola mundo!');
        };

        this.seven = (req, res) => {
            res.send('Nice job, 7 levels deep');
        };

        this.notFound = (req, res) => {
            res.send('404 not found');
        };

        this.setTitle = (app, express) => {
            app.set('title', 'Animal API');
            express.static //available if you need it
            express.Router //create routes imperatively if you want to
        };
    }
}

Polymer(ExampleAppComponent);
