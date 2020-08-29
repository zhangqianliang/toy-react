import { Component, createElement, render } from './toy-react.js';

class MyComponent1 extends Component {
    render() {
        return <div>
            <h1>my componnet 1</h1>
            {this.children}
        </div>
    }
}

class MyComponent2 extends Component {
    render() {
        return <div>
            <h1>my componnet 2</h1>
            {this.children}
        </div>
    }
}

render(<MyComponent1 id="a" class="c">
    <div>abc</div>
    <MyComponent2 id="e" class="f">
        <div>123</div>
        <div></div>
    </MyComponent2>
    <div></div>
    <div></div>
</MyComponent1>, document.body);