class ExampleMonkeyComponent {
    public index;
    public one;
    public two;
    public three;

    beforeRegister() {
        this.is = 'example-monkey';
    }

    get behaviors() {
        return [ExpressParentBehavior];
    }

    ready() {
        this.initHandlers();
    }

    initHandlers() {
        this.index = (req, res) => {
            res.send('monkey index');
        };

        this.one = (req, res) => {
            res.send('monkey one');
        };

        this.two = (req, res) => {
            res.send('monkey two');
        };

        this.three = (req, res) => {
            res.send('monkey three');
        };
    }
}

Polymer(ExampleMonkeyComponent);
