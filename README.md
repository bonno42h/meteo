# meteorus.
Meteorite explorer.  
React-based data representation table.  
Made from scratch by [bonno](https://github.com/bonno42h).

The deployed application can be found here: https://meteorus.herokuapp.com

## Setup locally guidelines
 * Clone the repository;
 * `cd` into the project's folder and run `npm install`;
 * To run the app, execute `REACT_APP_MAPS_API_KEY='XXX' npm start` where `XXX` is your Google Maps API key (see https://developers.google.com/maps/documentation/javascript/get-api-key). _**OR** simply start with_ `npm start` _to run without the Google Maps feature_;
 
## Features involved: 
 * Paged view;
 * Records to show per page;
 * Endless (infinite) scroll;
 * Click on table header to sort by the selected attribute;
 * Click on a record to display more info;
 * See the location of the fallen meteorite on Google Maps;
 
 ## Technologies used:
 * React 16.12.0;
   * Context API to manage state;
   * React Hooks;
 * react-copy-to-clipboard - click on a record's property (e.g. name) to copy it to a clipboard;
 * date-fns - for more readable date manipulation;
 * rc-notification - to display error in a notification in case of a network issue;
 * React icons - icon library;
 * react-spring - for animations;
 * react-switch - draggable toggle switch;
 * Google Map React - to display the location of a meteorite;
 * prop-types - prop type checking;
 * node-sass - for sass stylesheets + modules;
 * axios - promise-based HTTP client for the browser;
 
 ## Possible improvements:
 * Implement a search bar;
 * Make it mobile-friendly;
 
 ## To be added:
 * Unit tests;
