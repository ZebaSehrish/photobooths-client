import React from 'react';

const Blog = () => {
    return (
        <div className='sm:grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 m-24 gap-3  mt-20 text-stone-600 '>
            < div className="card bg-stone-100 mb-3 shadow-xl" >
                <div className="card-body">
                    <h2 className="card-title"> What is cors?</h2>
                    <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.</p>
                </div>
            </div >
            <div className="card  bg-stone-100 mb-3 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title"> Why are you using firebase? What other options do you have to implement authentication?</h2>
                    <p>Firebase provides detailed documentation and cross-platform SDKs to help you build and ship apps on Android, iOS, the web, C++, and Unity. It Firebase provides detailed documentation and cross-platform SDKs to help you build and ship apps on Android, iOS, the web, C++, and Unity.</p>
                </div>
            </div>
            <div className="card bg-stone-100 mb-3 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title"> How does the private route work?</h2>
                    <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
                </div>
            </div>
            <div className="card  bg-stone-100 mb-3 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title"> What is Node? How does Node work?</h2>
                    <p>Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return. It is a used as backend service where javascript works on the server-side of the application.</p>
                </div>
            </div>
        </div >
    );
};

export default Blog;