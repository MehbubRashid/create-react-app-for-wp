# create-react-app-for-wp

  Create a react app that can be used in WordPress Theme & Plugins.

## Installation

    $ npx create-react-app-for-wp

* This will install the app in your current directory. So, make sure you are in the right directory where you want to install React.
* Write your React components in the `src/components` folder. Entry point is `src/components/App.js`.
* Now run `npm run build` - It will continuously watch your code and produce a single javascript file called `build/index.js`.
* Enqueue this `build/index.js` file in your theme or plugin using `wp_enqueue_script`.
* Make sure you have a `<div id="react-js-in-wp"></div>` in your webpage. React will be rendered in this div.
* After you have finished building your application, run `npm run prod` to make a minified production build.
