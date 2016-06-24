class ExampleBearComponent {
    public index;
    public one;
    public two;
    public three;
    public getTitle;

    beforeRegister() {
        this.is = 'example-bear';
    }

    ready() {
        this.initHandlers();
    }

    initHandlers() {
        this.index = (req, res) => {
            res.send('bear index');
        };

        this.one = (req, res) => {
            res.send('bear one');
        };

        this.two = (req, res) => {
            res.send('bear two');
        };

        this.three = (req, res) => {
            res.send('bear three');
        };

        this.getTitle = (app) => {
            console.log('title', app.get('title'));
        };
    }
}

Polymer(ExampleBearComponent);
