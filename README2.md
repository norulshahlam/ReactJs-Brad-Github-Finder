a) understanding the React structure.

App js is the root / main component where other components are being called. other components are being called into the rot comp by using the element tag ie <Person /> and all the contents of that comp will be added. this is similar to having a main method $() and inside we call many other functions, sometimes with parameters

b) Functional Components - Person.js - we will create our own component, something like App component. we will export this and import in App comp, the root comp.

`Functional component` is just a plain JavaScript function which accepts props as an argument and returns a React element.

referred to as “dumb” or “stateless” components as they simply accept data and display them in some form; that is they are mainly responsible for rendering UI.

c) use dymanic value in our component - it is a value that is not hardcoded, but rather values passed on as variables

d) using props to pass values. basically it starts in App comp we pass the args in Person element, and in Person comp we take the param and pass it to the return value

`Props` are arguments passed into React components.
`Props` are passed to components via HTML attributes.
React Props are like function arguments in JavaScript and attributes in HTML.

e)children props - adding content in btwn open & close element in root comp, eg

<Person>This is child prop!</>

and accessing it in person.js by using props.children

`props. children` - to display whatever you include between the opening and closing tags when invoking a component.

f) understanding state (and its properties) by configuring in App.js, and how to create event in root component to manage state, and how to use function to handle this events. State is one of react features of Hooks which is a newly introduced in 1.8 version

The `state` is an instance of React Component Class can be defined as an object of a set of observable properties that control the behavior of the component.

Why `State`?

it enables a component to keep track of changing information in between renders and for it to be dynamic and interactive.

g1) `hooks` - let you use state and other React features without writing a class.

we are using App2.js and restructure our components from Class based to function based components. later on we will cont to use back Class based components

g2)
`personsState` contains the values of the inital state array while
`setPersonsState` is the method that replaces the old values. this 2 can be named anything within the order of the parameters.

`useState` Returns a stateful value, and a function to update it

you can have many useState().

h) `stateless vs stateful components`

`Stateless` components contain no state. It is mostly used to build a template-like component that an app can use to avoid creating the same component multiple times from scratch. This means you can have as many stateless components in an app.

`Stateless` components can be a functional component or a class component, whichever you prefer.

`Stateful` components contain state. They are not used to build template-like components. This means you can use the template-like component from a stateless component, most likely in a separate file to pass data to it.

A `Stateful` component can be a functional component or a class component, whichever you prefer. React Hooks was introduced in React 16.8 to allow functional components to manage state

https://dev.to/bello/react-stateless-vs-stateful-components-3hfi
