// The Conditional Rendering Shortcut
{condition && <Component />}

// The Default Props Shortcut
const {prop = defaultValue} = props;
// Real-World Example
const Button = ({ size = 'medium', children }) => {
  return <button className={`btn-${size}`}>{children}</button>;
};

// The State Update Shortcut
setCount(prevCount => prevCount + 1);

// The Array Manipulation Shortcut
setItems(prevItems => [...prevItems, newItem]);
// Practical Application
const addTask = (newTask) => {
  setTasks(prevTasks => [...prevTasks, newTask]);
};

// The Object Update Shortcut
setUser(prevUser => ({ ...prevUser, name: 'New Name' }));

// The Ref Callback Shortcut - This creates an input element that automatically focuses when it's rendered.
<input ref={node => node && node.focus()} />
// How It Works The ref callback receives the DOM node as an argument. This one-liner checks if the node exists (to avoid errors if the ref is null) and then calls the focus method on it.
// Perfect Use Case This technique is great for creating accessible forms where you want to automatically focus on the first input field when the form loads.

// The Style Shortcut
<div style={{ color: 'red', fontSize: '14px' }} />

// The Class Name Shortcut
<div className={`base-class ${condition ? 'active' : ''}`} />

// The Error Boundary Shortcut
class ErrorBoundary extends React.Component { state = { hasError: false }; static getDerivedStateFromError = () => ({ hasError: true }); render = () => this.state.hasError ? <h1>Something went wrong.</h1> : this.props.children; }

// The Memo Shortcut
const MemoizedComponent = React.memo(({ prop1, prop2 }) => <div>{prop1} {prop2}</div>);
// This creates a memoized version of a functional component that only re-renders if its props change.
// The Magic Touch React.memo is a higher-order component that skips rendering when props are the same, which can be a big performance boost for components that render often with the same props.
// Best Used For This is great for pure functional components that are expensive to render or are deep in the component tree and receive the same props frequently.








