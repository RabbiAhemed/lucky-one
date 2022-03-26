import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './components/Shop/Shop.css'
import './App.css';
import Header from './components/Header/header'
import Shop from './components/Shop/Shop'

function App() {
  return (
    <div>
      <Header></Header>
      <Shop></Shop>
      <Answer></Answer>

    </div>
  );
}
const Answer = () => {
  return (
    <div className='mx-auto bg-red'>
      <h2>Q1.How react works</h2>
      <h3>Ans: React implements a virtual DOM that is basically a DOM tree representation in JavaScript.So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM.
        React has 6 core.
        Jsx allows us to write code like html.component is one kind of function through which react shows data.props is the set of data parameter for a component.state is the state of a component.it detects if the websites state is changed if changed useEffect works according to that.Event handler can be added to react and external data can be loaded using fetch inside useEffect.</h3>

      <h1>Q2: Difference between props and state?</h1>
      <h4>Props is properties.it is used to pass data from one component to another component.props is immutable it is read only property.it stores the value of attribute
        State is is representation of an application that can change.every component can have state each.it is mutable and accesed /local for the component only means the data is passed only in the component.it is the heart of ract component.it represent the components local state.State is updatable</h4>

      <h1>Q3:How useState Works?</h1>
      <h3>useState is a hook.it is a special function it takes initial state as argument and returns an array .</h3></div>
  )
}
export default App;
