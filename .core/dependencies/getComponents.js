import React, { Suspense, lazy } from 'react';

export default (elms = []) => {
    let cmps = {};
    if (typeof window !== 'undefined') {
        const contexts = require('manifest').contexts;

        // Traverse the Array of bindable elements and require the components for them
        elms.forEach(({ type, path }) => {
            let req;

            // The path to the component
            path = !path ? type : path;
            Object.entries(contexts).forEach(([name, context]) => {
                [
                    `./${path}/index.js`,
                    `./${path}/index.jsx`,
                    `./${path}.js`,
                    `./${path}.jsx`,
                ].forEach(attempt => {
                    // Exit if the component has already been defined
                    if (cmps[type]) {
                        return;
                    }

                    const found = context.keys().find(key => key === attempt);
                    if (found) {
                        req = context(attempt);
                    }

                    if (req) {
                        const Found = lazy(() => req);
                        const Component = () => (
                            <Suspense
                                fallback={
                                    <div className='get-components-loading'>
                                        Loading...
                                    </div>
                                }>
                                <Found />
                            </Suspense>
                        );
                        cmps[type] = Component;
                    }
                });
            });
        });
    }

    // SSR and not found component cases
    elms.forEach(({ type, path }) => {
        if (!cmps[type]) {
            cmps[type] = () => null;
        }
    });

    // Output the Components Object
    return cmps;
};
