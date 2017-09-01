This is a completed project for React Course Project: MyReads.

## Installing
On Terminal type `npm install` or `yarn install`.

## Launching
On Terminal type `npm start` or `yarn start`.

## What You're Getting
```
+--public/    
 |-- index.html - DO NOT MODIFY
 |-- favicon.ico - React Icon, You may change if you wish.
+-- src/
 +-- icons/ - Helpful images for your app. Use at your discretion.
  |-- add.svg
  |-- arrow-back.svg
  |-- arrow-drop-down.svg
 +-- Components/ - All the components you need to make work this application
  +-- Books/
   |-- Book.js - Component to render Searches and Shelves
  +-- Shelves/
   +-- Shelf/
    |-- Shelf.js - Component to render a single Shelf
   |-- index.js - Component to render Shelves
  +-- Search/
   |-- index.js - Component to render Searches
 |-- App.js - This is the root of your app. Contains static HTML right now.
 |-- App.css - Styles for your app. Feel free to customize this as you desire.
 |-- App.test.js - Used for testing. Provided with Create React App.
 Testing is encouraged, but not required.
 |-- BooksAPI.js - A JavaScript API for the provided Udacity backend.
 Instructions for the methods are below.
 |-- index.js - You should not need to modify this file. It is used for DOM rendering only.
 |-- index.css - Global styles. You probably won't need to change anything here.
|-- .gitignore
|-- CONTRIBUTING.MD - Information about contributing to this repo.
TL;DR - Fork and clone your own version of this to use it.
|-- README.MD - This README file.
|-- SEARCH_TERMS.md - The whitelisted short collection of available search terms
for you to use with your app.
|-- package.json - npm package manager file. It's unlikely that you'll need to modify this.
```

## Additional Functionalities

To make all the Shelves / Search experience prettier, some built in functionalities are added like:

### Preloading Icons
![Preloading Icons](https://github.com/s1m0n3ak1/my-reads-udacity/blob/master/gifs/loading_shelves.gif "Preload Icons Demo")

### Book Details Panel
![Book Details](https://github.com/s1m0n3ak1/my-reads-udacity/blob/master/gifs/detail_panel.gif "Book Details Demo")

### Book Checkmark on Search Results
![Book Checkmark](https://github.com/s1m0n3ak1/my-reads-udacity/blob/master/gifs/onsearch_checkmark.gif "Book Details Demo")

### If Shelves are empty message
![Empty Shelf](https://github.com/s1m0n3ak1/my-reads-udacity/blob/master/gifs/shlef_placeholder.gif "Empty Shelf Demo")

## Additional Libraries

To integrate some functions and effects.

### React Ionicons
`react-ionicons` included in `package.json`, used to add loading effect on Shelves `http://localhost:3000/`
* [npm](https://www.npmjs.com/package/react-ionicons "Ionicons npm")
* [Github](https://github.com/zamarrowski/react-ionicons "Ionicons Github")
* [Website and Full List of icons](https://zamarrowski.github.io/react-ionicons/ "Ionicons Specs")

### React Rater
`react-rater` included in `package.json`, used to add a star rating on Search `http://localhost:3000/search`
* [npm](https://www.npmjs.com/package/react-rater "react-rater npm")
* [Github](https://github.com/NdYAG/react-rater "react-rater Github")

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

### `getAll()`
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update(book, shelf)`
* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search(query, maxResults)`
* query: `<String>`
* maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.
