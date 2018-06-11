import React from 'react';
import Markdown from 'reactium-core/components/Toolkit/Markdown';

/**
 * -----------------------------------------------------------------------------
 * Readme
 * -----------------------------------------------------------------------------
 */
 const content = `
 # Testing
 _does this work?_

 ## Hmmm..
 **I think so**

 <p>What about inline HTML?</p>

${'`'}
code
${'`'}
${'```js'}
let inlineCode = () => {
    console.log('Whoa dude!');
};
${'```'}
`;


/**
 * -----------------------------------------------------------------------------
 * DO NOT EDIT BELOW HERE
 * -----------------------------------------------------------------------------
 */
const readme = () => <Markdown>{content}</Markdown>;
export default readme;
