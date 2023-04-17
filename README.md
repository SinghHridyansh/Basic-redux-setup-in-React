# Basic Setup of redux in react

This project consist of 5 files namely:
-store.js
-reducer.js
-InputComp.jsx
-App.js
-index.js

## store.js

Here I'm creating a global redux store using the legacy_createStore

## reducer.js

A reducer can store default data in the redux store using the first parameter.
Here the reducer function is responsible for updating the value in the store.
If and only if the action.type is equal to the "name", the "name" will be updated by action.username whic his being passed in the dispatch function as a parameter.
And then atlast the overall storeData is being returned.

### InputComp.jsx

In this Component we have a basic form setup with textbox and a submit button. The text box is bounded with an onChange handler that sets the state to the value entered inide the text box. The submit button is bound with an onClick eventhandler that whenever triggered executes a callDispatch function.
callDispatch fuctiom is used to call reducer and pass the action object to the reducer.
Then reducer which in our case is basicReducer will be called intrenally.

### App.js

This is just a container for InputComp.jsx

### index.js

In index.js I'm wrapping up my App component inside Provider Component and passing the store as myStore.
#   B a s i c - r e d u x - s e t u p - i n - R e a c t  
 