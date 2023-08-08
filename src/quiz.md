Quiz!

1. What is a React component?
A function that returns REACT elements

2. What's wrong with this code?
```js
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```
All component names should start with a capital letter
Example :
```js
function MyComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```

3. What's wrong with this code?
```js
function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

ReactDOM.render(<Header />, document.getElementById("root"))
```
This should be nested in a `<div></div>` or a fragment `<></>`
