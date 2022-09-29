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

            </div>
        </div>
    );
};

export default Blog;