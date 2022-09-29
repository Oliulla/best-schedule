import React from 'react';
import './Blog.css';

const sampleCode = `<h1>Hello</h1>`;
const sampleCode2 = `React.createElement("h1", {}, "Hello")`;

const Blog = () => {
    return (
        <div>
            <div className='all-blogs-container'>
                <h2 className="text-blog">All Blogs</h2>
                <div className="blog">
                    <h3>How Does React Works Under The Hood</h3>
                    <i>Ans:</i>
                    <p>
                        React With JSX. JSX stands for JavaScript XML. But What is JSX? Well,
                        There's nothing like JSX - neither to JavaScript, nor to the browser. 
                        JSX is simply syntactic sugar for creating very specific JavaScript objects.
                    </p>
                    <br />
                    <br />
                    <p>
                        When we write something like:
                        <em className='code-em'>
                            {sampleCode}
                        </em>
                    </p>
                    <p>
                        When we are actually doing this:
                        <em className='code-em'>
                            {sampleCode2}
                        </em>
                    </p>
                    <p>
                        Interisting, Right? This is React do under the hood. React render 
                        their components in browser through virtual DOM.
                    </p>
                </div>
                <div className="blog">
                    <h3>Differences Between Props And States In React</h3>
                    <i>Ans:</i>
                    <div className='props-sates'>
                        <div>
                            <h3>States</h3>
                            <ol className='order-list'>
                                <li>
                                    State changes can be asynchronous.
                                </li>
                                <li>
                                    Stats are mutable.
                                </li>
                                <li>
                                    State holds information about the components.
                                </li>
                                <li>
                                    State cannot be accessed by child components.
                                </li>
                                <li>
                                    States can be used for rendering dynamic changes with the component.
                                </li>
                                <li>
                                    Stateless components cannot have State
                                </li>
                                <li>
                                    State cannot make components reusable.
                                </li>
                                <li>
                                    The State is internal and controlled by the React Component itself.
                                </li>
                            </ol>
                        </div>
                        <div>
                            <h3>Props</h3>
                            <ol className='order-list'>
                                <li>
                                    Props are read-only.
                                </li>
                                <li>
                                    Props are immutable.
                                </li>
                                <li>
                                    Props allow you to pass data from one component to other components as an argument.
                                </li>
                                <li>
                                    Props can be accessed by the child component.
                                </li>
                                <li>
                                    Props are used to communicate between components.
                                </li>
                                <li>
                                    Stateless component can have Props.
                                </li>
                                <li>
                                    Props make components reusable.
                                </li>
                                <li>
                                    Props are external and controlled by whatever renders the component.
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div className="blog">
                    <h3>What Are The Purpose Of Using React 'useEffect' Hook Except Data Fetch?</h3>
                    <i>Ans:</i>
                   <div>
                        <p>
                            Except data fetching by useEffect() hook it has some use case.
                        </p>
                        <p>
                            The useEffect hook allows components to react to lifecycle events
                            such as mounting to the DOM, re-rendering, and unmounting.
                        </p>
                        <p>
                            Actually the useEffect hook used when react works side effect. So, With useEffect, 
                            we invoke side effects from within functional components, which is an important concept 
                            to understand in the React Hooks era.
                        </p>
                        <div className="margin-t">
                            <h4>Some react useEffect use case: </h4>
                            <ul className='unorder-list'>
                                <li>Running on <b>state change</b>: validating input field</li>
                                <li>Running on <b>state change</b>: live filtering</li>
                                <li>Running on <b>state change</b>: trigger animation on new array value</li>
                                <li>Running on <b>props change</b>: update paragraph list on fetched API data update</li>
                            </ul>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;