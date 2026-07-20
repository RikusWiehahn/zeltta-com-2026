
export const DetectInactivityReact = `

# How to detect inactivity and auto-reset a React app

## Background
Sometimes an application needs to be reset after a certain period of inactivity, for example, public apps on 'kiosk' tablets, or banking and finance applications. To keep user data private and secure we need to be able to safely reset these if a user accidentally leaves before properly exiting.

Here's a guide on how to make a simple react component that auto resets an application after one minute of inactivity. I am using Next.js but the same principles would work with Create React App and React Router Dom.

## 1. Create a whitelist (optional)
Create a list of all pages where you don't want to trigger an auto-reset. Or, if you only need a few pages to auto-reset, make a blacklist that only includes these pages.

\`\`\`
const whitelist = [
  '/',
  '/admin',
  '/results',
  '/profile'
];
\`\`\`

## 2. Create Component

Build the component, place it early in your app's component tree for the best results, ideally inside your top level App component or just inside your Redux Provider Component (if using one).

\`\`\`
import React from 'react'

const whitelist = [
  '/',
  '/admin',
  '/results',
  '/profile'
];

const IdleTimer = () => {
  return <div />; // must show something on the screem
};
\`\`\`

## 3. Call a function every time the page changes
We will set up a **useEffect** hook that watches for changes to the current page's pathname and executes the code inside it every time the page changes.

\`\`\`
import React from 'react'
import { useRouter } from 'next/router';

const IdleTimer = () => {
  const router = useRouter();
  
  useEffect(() => {
    // code here will run everytime the page changes
  }, [router.pathname]); 
  
  return <div />;
};
\`\`\`

## 4. Stop the pages in your whitelist from executing
Inside the  **useEffect** hook, set up a check to make sure the reset will only occur on the pages you want.
\`\`\`
  ...
  useEffect(() => {
    let preventReset = false;
    for (const path of whitelist) {
      if (path === router.pathname) {
        preventReset = true;
      }
    }
    if (preventReset) {
      return;
    }
    /* 
      code here will run everytime the page changes & the 
      current page is NOT in the whitelist 
    */
  }, [router.pathname]);
  ...
\`\`\`

Or if you want to be fancy, you can do this with reduce

\`\`\`
  ...
  useEffect(() => {
    const preventReset = whitelist
      .map(path => path === router.pathname ? 1 : 0)
      .reduce((prev, curr) => prev + curr, 0)
    if (preventReset) {
      return;
    }
    /* 
      code here will run everytime the page changes & the 
      current page is NOT in the whitelist 
    */
  }, [router.pathname]);
  ...
\`\`\`

## 5. Create the timeout
We need to create a timer that will reset the app after a period of time.

So, at the top of the **IdleTimer** component, initiate a variable 'timeout' to which you will assign a Javascript timeout.

> Note: we must assign the timeout to a variable in order to clear it and restart it each time user activity is detected.

\`\`\`
const IdleTimer = (props: Props) => {
  const router = useRouter();
  let timeout = null; // <- Javascript
  // Typescript -> let timeout: NodeJS.Timeout | null = null 
...
\`\`\`

Then create a function inside the component to handle the reset timer. This will be called any time user activity is detected and starts the countdown again from zero.

\`\`\`
...
  const restartAutoReset = () => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      // Insert your code to reset you app here
    }, 1000 * 60); // 60 Seconds
  };
...
\`\`\`

Make sure the timeout starts up at the beginning of each page load by putting it inside the **usEffect** hook under the whitelist code.

\`\`\`
  ...
  useEffect(() => {
    ...
    if (preventReset) {
      return;
    }
    
    // initiate timeout
    restartAutoReset();
    
  }, [router.pathname]);
  ...
\`\`\`

The **IdleTimer** component will now trigger your reset code exactly one minute after it mounts. The next step is to cancel and restart this timeout every time we detect user activity.

## 6. Listen for user activity
Now the last thing we need to do is listen for user activity and reset the timer if the user is still active.

We will achieve this by listening to the global **onmousemove** event.

Create the function that will fire every time the mouse moves and call the timer resetting function we created in the previous step.

\`\`\`
  const onMouseMove = () => {
    restartAutoReset();
  };
\`\`\`

Now we must make sure that we start listening for mouse movement when the page loads and the **IdleTimer** component mounts.

Inside the **useEffect **hook, underneath the whitelist code and timeout initiation code, add an event listener that will fire every time mouse movement is detected.

\`\`\`
  ...
  useEffect(() => {
    ...
    if (preventReset) {
      return;
    }
    
    // initiate timeout
    restartAutoReset();
    
    // listen for mouse events
    window.addEventListener('mousemove', _onMouseMove);
    
  }, [router.pathname]);
  ...
\`\`\`

The **IdleTimer** component will now trigger your reset code exactly one minute after the last detected mouse movement.

One more thing!
The last thing we need to do is make sure we cancel the timeout and stop listening for mouse activity when the page changes and the component unmounts. 

If we do not explicitly stop Javascript timeouts and event listeners they will just carry on running on the next pages and we'll end up initiating more and more of them and it will cause mayhem.

The fix is to include a cleanup function inside the **useEffect** hook that runs whenever the component is about to be unmounted from the screen. Here we will clear out the timer and mouse movement event listener.

\`\`\`
    ...
    // inside useEffect hook
    
    // initiate timeout
    restartAutoReset();

    // listen for mouse events
    window.addEventListener('mousemove', onMouseMove);

    // cleanup
    return () => {
      if (timeout) {
        clearTimeout(timeout);
        window.removeEventListener('mousemove', onMouseMove);
      }
    };
  }, [router.pathname]);
  ...
\`\`\`

The **IdleTimer** component will now trigger your reset code exactly one minute after the last detected mouse movement. It will clear itself and restart every time the user changes pages.

Completed code
\`\`\`
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';

const whitelist = [
  '/',
  '/admin',
  '/results',
  '/profile'
];

export const IdleTimer = () => {
  const router = useRouter();
  let timeout: NodeJS.Timeout | null = null;

  const goBackToHome = () => {
     // code to reset the application
  };

  const restartAutoReset = () => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      goBackToHome();
    }, 1000 * 60);
  };

  const onMouseMove = () => {
    restartAutoReset();
  };

  useEffect(() => {
    // Whitelist certain pages
    let preventResett = false;
    for (const path of whitelist) {
      if (path === router.pathname) {
        preventReset = true;
      }
    }
    if (preventReset) {
      return;
    }

    // initiate timeout
    restartAutoReset();

    // listen for mouse events
    window.addEventListener('mousemove', _onMouseMove);

    // cleanup
    return () => {
      if (timeout) {
        clearTimeout(timeout);
        window.removeEventListener('mousemove', _onMouseMove);
      }
    };
  }, [router.pathname]);
  return <div />;
};
\`\`\`

There you have it! Hope you found this useful!

`;