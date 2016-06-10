class ExampleLionComponent {
    public index;
    public one;
    public two;
    public three;

    beforeRegister() {
        this.is = 'example-lion';
    }

    get behaviors() {
        return [ExpressParentBehavior];
    }

    ready() {
        this.initHandlers();
    }

    initHandlers() {
        this.index = (req, res) => {
            res.send('lion index');
        };

        this.one = (req, res) => {
            res.send('lion one');
        };

        this.two = (req, res) => {
            res.send('lion two');
        };

        this.three = (req, res) => {
            res.send('lion three');
        };
    }
}

Polymer(ExampleLionComponent);
