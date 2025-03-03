# 2025-03-03-context-API

## Context API in short

Context is a global state management system that cna handle the entire state, or part of the state in an application. Instead of relying on passing down props to child components and if existing, grand-child components, we can instead extract the state outside of the components hierarchy and let components 'subscribe' to the state if they need it.

This removes the need of 'props drilling' which can be hard to control when the application gets bigger.

Props drilling is the 'concept' when you pass props down through components that don't have any use whatsoever of the state in question. The state might be needed in a child componet farther down in the component tree but in order to get there in must pass through other components.

You can read more about it here:

- [Context API - React Docs](https://react.dev/reference/react/useContext)
- [Context API - Free Code Camp](https://www.freecodecamp.org/news/react-context-api-explained-with-examples/)

[Back to the top](#2025-03-03-context-api)

## Create Context

First things first, in order to use Context you need to access to Context API in React and that is done with a method that is provided for you.

```js
import { createContext } from 'react';

export const TodoContext = createContext();
```

This variable that is being returned contains the Context functionality, including a very import JSX componentet that you must use to wrap the entire, or parts of, application. But that comes later. When you have the Context variable, you must set the default value of it, the default state in other words. If you leave it empty, which is fine in JS, the default value will be undefined.

When you have created this variable it's time to configurate how the state is going to look like, which state variables are there, and which, if any, methods exists on the state that other parts of you appliation can use.

You will need a component for this, or it's the most readable way and easiest way. Call this component something with 'Context' combined with 'Provider' and the state. In my case it will be 'TodoContextProvider

```jsx
export function TodoContextProvider({ children }) {
  const values = {};

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
}
```

This is the base. You have a special JSX-element that is accessed through the TodoContext variable. It accepts a prop called `value` which is the data that is to be shared from this Context. Since The `TodoContextProvider` will wrap parts of your application, the `children` props 'acts' as a placeholder for those parts of the appilication. It must also be defined as a prop for the component itself inside the parenthesis.

Let's add som data that will be shared.

```jsx
export function TodoContextProvider({ children }) {
  const [todos, setTodos] = useState([
    { id: uuidv4(), content: 'Buy a Ferrari', completed: false },
    { id: uuidv4(), content: 'But steaks', completed: true },
    { id: uuidv4(), content: 'Party', completed: false },
  ]);

  const addTodo = (newTodoContent) => {
    const newTodo = {
      id: uuidv4(),
      content: newTodoContent,
      completed: false,
    };

    const updatedTodos = [newTodo, ...todos];
    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    const updatedTodos = todos.filter((t) => t.id !== id);
    setTodos(updatedTodos);
  };

  const updateCompletedStatus = (id) => {
    const updatedTodos = todos.map((t) => {
      return t.id === id ? { ...t, completed: !t.completed } : t;
    });

    setTodos(updatedTodos);
  };

  const values = { addTodo, removeTodo, todos, updateCompletedStatus };

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
}
```

One state variable, and a few methods. Everything that is need to add new todos, remove and update them. Everything is also added to the `values` object that defines what is to be shared from the Context. Remember, everything inside a Context doesn't have to be shared. Methods that are being used for external, calculation, modifying, checking stuff and so on doesn't have to be shared.

Now what is left is to implement it in our `main.jsx` or in another fitting place.

```jsx
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router.jsx';
import { TodoContextProvider } from './TodoContextProvider.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <TodoContextProvider>
    <RouterProvider router={router} />
  </TodoContextProvider>
);
```

[Back to the top](#2025-03-03-context-api)

## Use Context

Now that we have Context defined and implemented in our project we can start using ut. And, as suggested by the name we will use a hook _(of course! )_ called `useContext` that is available for import in React.

```jsx
export function Todo({ todo }) {
  const { updateCompletedStatus, removeTodo } = useContext(TodoContext);

  return (
    <article className={`todo ${todo.completed ? 'completed' : ''}`}>
      <p>{todo.content}</p>
      <button onClick={() => updateCompletedStatus(todo.id)}>Update status</button>
      <button onClick={() => removeTodo(todo.id)}>Remove</button>
    </article>
  );
}
```

The hook itself will take a Context object as its parameter and return an object representing the things that are being shared by that context. Which means, all the things that is defined whitin the `values`-objects inside the ContextProvider, or rather, the value that the `value` prop has on the `Context.Provider` element in side the ContextProvider.

There you go, now you have a component that 'subscribes' to the Context and will rerender whenever the state inside the Context updates.

You can have several Context files tha handles different parts of the state if you would like to, you can you also use several `useContext` inside a component to 'subscribe' to different Contexts.

