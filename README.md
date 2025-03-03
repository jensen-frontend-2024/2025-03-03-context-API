# 2025-03-03-context-API

## Context API in short
Context is a global state management system that cna handle the entire state, or part of the state in an application. Instead of relying on passing down props to child components and if existing, grand-child components, we can instead extract the state outside of the components hierarchy and let components 'subscribe' to the state if they need it. 

This removes the need of 'props drilling' which can be hard to control when the application gets bigger. 

Props drilling is the 'concept' when you pass props down through components that don't have any use whatsoever of the state in question. The state might be needed in a child componet farther down in the component tree but in order to get there in must pass through other components.

You can read more about it here:

- [Context API]()
- [Context API]()

## Create Context


