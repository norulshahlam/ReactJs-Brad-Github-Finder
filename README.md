## Learn Modern React 16.8+ Including Hooks, Context API, Full Stack MERN & Redux By Building Real Life Projects - Part 1

`Instructor: Brad Traversy`

[https://www.udemy.com/course/modern-react-front-to-back/learn/lecture/14969910#overview]

#### a) understanding the React structure.

App js is the root / main component where other components are being called. other components are being called into the rot comp by using the element tag ie <Person /> and all the contents of that comp will be added. this is similar to having a main method $() and inside we call many other functions, sometimes with parameters

#### b) Functional Components

- Person.js - we will create our own component, something like App component. we will export this and import in App comp, the root comp.

  `Functional component` is just a plain JavaScript function which accepts props as an argument and returns a React element.

referred to as “dumb” or “stateless” components as they simply accept data and display them in some form; that is they are mainly responsible for rendering UI.

#### c) use dymanic value in our component -

it is a value that is not hardcoded, but rather values passed on as variables

#### d) props

to pass values. basically it starts in App comp we pass the args in Person element, and in Person comp we take the param and pass it to the return value

`Props` are arguments passed into React components.
`Props` are passed to components via HTML attributes.

React Props are like function arguments in JavaScript and attributes in HTML.

A special keyword in React, which stands for properties and is being used for passing data from one component to another. But the important part here is that data with props are being passed in a uni-directional flow. (one way from parent to child or App to Navbar)
Furthermore, props data is read-only, which means that data coming from the parent should not be changed by child components.

https://itnext.io/what-is-props-and-how-to-use-it-in-react-da307f500da0

`children props` - adding content in btwn open & close element in root comp, eg

<Person>This is child prop!</>

and accessing it in person.js by using props.children

`props. children` - to display whatever you include between the opening and closing tags when invoking a component.

`default props`

A property in React component used to set default values for the props argument. It will get replaced if the prop property is passed.

https://blog.bitsrc.io/understanding-react-default-props-5c50401ed37d

`PropTypes`

defines type and which props are required. it's basically type checking. It will tell you if you know your prop should be a string or a number or an array or object or anything like that.

https://developer.fortnox.se/blog/proptypes-in-react-js/

f) understanding state (and its properties) by configuring in App.js, and how to create event in root component to manage state, and how to use function to handle this events. State is one of react features of Hooks which is a newly introduced in 1.8 version

`f) unique key prop`

Assigning a unique key to each of our Todo items allow React to be able match our items against their key, so even if our users sort the list in by importance, recently created or some other pattern, React will know which ones it needs to create or update and which ones it can simply pass over.

https://dev.to/keevcodes/the-unique-key-prop-in-jsx-4bf3

#### d) State

React components has a built-in state object. The state object is where you store property values that belongs to the component. When the state object changes, the component re-renders.

In other words, the State of a component is an object that holds some information that may change over the lifetime of the component

refers to a structure that keeps track of how data changes over time in your application

https://www.digitalocean.com/community/tutorials/how-to-manage-state-on-react-class-components

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

#### e) destructuring

simplifying the state values - pulling items out of the object state or props so you can call the object by the key or directly, leading to shorter codes

#### f) stateless vs stateful components

`Stateless` components contain no state. It is mostly used to build a template-like component that an app can use to avoid creating the same component multiple times from scratch. This means you can have as many stateless components in an app.

`Stateless` components can be a functional component or a class component, whichever you prefer.

`Stateful` components contain state. They are not used to build template-like components. This means you can use the template-like component from a stateless component, most likely in a separate file to pass data to it.

A `Stateful` component can be a functional component or a class component, whichever you prefer. React Hooks was introduced in React 16.8 to allow functional components to manage state

for this project we will be using funct-based component for all components

a good guideline:
for class-based: use `this.` to get props
for func-based: use `props` to get props

https://dev.to/bello/react-stateless-vs-stateful-components-3hfi

`g) componentDidMount()`

These methods are called in the following order when an instance of a component is being created and inserted into the DOM:

constructor()
static getDerivedStateFromProps()
render()
componentDidMount()

componentDidMount() is invoked immediately after a component is mounted (inserted into the tree). Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request.

https://reactjs.org/docs/react-component.html#mounting
https://reactjs.org/docs/react-component.html#componentdidmount

[

`h) axios` -

Apromise-based HTTP client, which gives you the ability to take advantage of JavaScript’s async and await for more readable asynchronous code. run `npm i axios` to install Axios

`i)setState on fetch data`

The reason to have loading is because there's going to be a moment in time before we actually get the data back.
So while that's happening while basically while it's fetching and before we want loading to be true and then as soon as it's fetched we'll change it back to FALSE that way in our UI we can say if this data isn't loaded then let's show us a spinner else we'll show the data.

`j) Fragment`

React fragments let you group a list of children without adding extra nodes to the DOM because fragments are not rendered to the DOM. So basically we use React.Fragment where we would normally use a wrapper div.

https://dev.to/tumee/react-fragments-what-why-how-2kh1

`k) env variables`

If you are using some external APIs for data you must use the .env file to store your sensitive credentials like API keys. Environment variables can also help us to store our API link in one location so that we don’t have to change the link in each file manually and access it anywhere as it is stored globally

https://create-react-app.dev/docs/adding-custom-environment-variables/#what-other-env-files-can-be-used

`l) spinner`

to load spinner when page is loading.

`m) event binding`

in search comp, we have 2 events. 1 - onChange handler uses arrow func, 2 - onSubmit handler doesnt.

When we bind the this of the event handler to the component instance in the constructor, we can pass it as a callback without worrying about it losing its context. Arrow functions are exempt from this behavior because they use lexical this binding which automatically binds them to the scope they are defined in

`n) send props up`

`o) show 'clear btn' only when results displayed`

`p) react-router-DOM`

A tool that allows you to handle routes in a web app, using dynamic routing.
A router allows your application to navigate between different components, changing the browser URL, modifying the browser history, and keeping the UI state in sync.

https://blog.logrocket.com/react-router-dom-set-up-essential-components-parameterized-routes-505dc93642f1/#:~:text=react%2Drouter%2Ddom%20%3A%20It,development%20environment%20using%20React%20Native
https://www.educative.io/edpresso/what-is-a-react-router

https://medium.com/the-andela-way/understanding-the-fundamentals-of-routing-in-react-b29f806b157e

<Router>: The router that keeps the UI in sync with the URL

<Link>: Renders a navigation link
<Route>: Renders a UI component depending on the URL
<Switch> render only the first route that matches the location:
render prop provides the ability for inline rendering and passing extra props to the element

https://stackoverflow.com/questions/45122800/react-router-switch-behavior

**\*\*\*\***\***\*\*\*\*** NOTES \***\*\*\*\*\***\*\*\*\***\*\*\*\*\***

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
