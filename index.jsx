// const h1 = document.createElement("h1")
// h1.textContent = "Hello world"
// h1.className = "header"
// console.log(h1)

// JSX
// Also, classes are written as `className=""` which is jsx syntax
// You can use one element. But in case you need to use multiple ones, you should wrap the component in a parent element (mostly used `<div></div>` or `<></>` -> fragments). Which means it will take the parent element as one and render it.


// const page = (
//     <div>
//         <h1 className="header">This is JSX</h1>
//         <p>This is a paragraph</p>
//         <p>Using JSX</p>
//     </div>
// );
// ReactDOM.render(
//     page,
//     document.getElementById("root")
// );


// Learned you can only render one REACT component t a time in one js file. By default REACT renders the last component if two of them exist in one file as it is shown in this file
/*
Challenge: 

Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/
const navbar = (
    <nav>
        <h1>website</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
            <li>Hello there</li>
        </ul>
    </nav>
);

ReactDOM.render(
    navbar,
    document.getElementById("root")
);