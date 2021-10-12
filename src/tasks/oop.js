class Component {
    #elem;

    constructor(props) {
        this.props = props;
    }

    render() {
        this.#elem = document.createElement('div');

        return this.#elem;
    }

    mounted() {
        
    }
}