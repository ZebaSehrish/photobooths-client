import React from 'react';
import { Helmet } from 'react-helmet';

const Blog = () => {
    return (
        <div>
            <p className='text-center text-stone-500 text-3xl font-bold'>Blogs</p>
            <div className='sm:grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 m-24 gap-6 mt-10 text-stone-600 '>
                <Helmet><title>PhotoBooths-Blog</title></Helmet>
                < div className="card bg-stone-100 mb-3 shadow-xl rounded-sm" >
                    <div className="card-body">
                        <h2 className="card-title"> State difference between SQL and NoSQL</h2>
                        <p>SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
                    </div>
                </div >
                <div className="card  bg-stone-100 mb-3 shadow-xl rounded-sm">
                    <div className="card-body">
                        <h2 className="card-title"> What is JWT, and how does it work?</h2>
                        <p>JSON Web Token is an open industry standard used to share information between two entities, usually a client (app's frontend) and a server (app's backend).In authentication, when the user successfully logs in using their credentials, a JSON Web Token will be returned. Since tokens are credentials, great care must be taken to prevent security issues. In general, you should not keep tokens longer than required. The server's protected routes will check for a valid JWT in the Authorization header, and if it's present, the user will be allowed to access protected resources.</p>
                    </div>
                </div>
                <div className="card bg-stone-100 mb-3 shadow-xl rounded-sm">
                    <div className="card-body">
                        <h2 className="card-title"> What is the difference between javascript and NodeJS?</h2>
                        <p>avaScript is a programming language, which runs in web browsers. Whereas Node.js is an interpreter or running environment for JavaScript, which holds a lot of requiring libraries and all. JavaScript is basically one standard defining programming language; it can run any browser with a default browser running environment. NodeJS is actually a kind of environment or interpreter that can represent JavaScript or run any javascript program. </p>
                    </div>
                </div>
                <div className="card  bg-stone-100 mb-3 shadow-xl rounded-sm">
                    <div className="card-body">
                        <h2 className="card-title"> How does NodeJS handle multiple requests at the same time?</h2>
                        <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. As soon as Node js starts, it initializes an event loop. The event loop works on a queue (which is called an event queue) and performs tasks in FIFO(First In First Out) order.</p>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default Blog;