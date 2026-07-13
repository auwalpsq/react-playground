# React.js Learning Roadmap
### Core React Concepts Step-by-Step

Welcome to your React learning journey! We will learn React exactly like we learned AI: one step at a time, building a self-contained module for each core concept.

---

## 🗺️ The React Learning Modules

```
[Module 1] ───► [Module 2] ───► [Module 3] ───► [Module 4] ───► [Module 5] ───► [Module 6] ───► [Module 7]
JSX & Render    Props & Lists    useState & Event   Keys & Mapping  Controlled Forms  useEffect & APIs  Context API
```

---

## 📦 Module 1 — Introduction to React, JSX & Hello World 🔜 NEXT STEP
**Concept:** What is React? What is JSX, and how does React render HTML elements?
* **What you will learn:**
  - The virtual DOM concept and why React is so fast.
  - JSX syntax (writing HTML in JavaScript) and how it compiles.
  - Creating your first functional component.
* **Hands-on Goal:** Create a Greeting component that dynamically greets a user with the current time.

---

## 📦 Module 2 — Components & Props
**Concept:** Building reusable UI blocks by passing data down from parent to child components.
* **What you will learn:**
  - What are props (properties) in React?
  - Destructuring props for clean code.
  - Passing strings, numbers, booleans, and arrays as props.
* **Hands-on Goal:** Build a reusable `StudentCard` component and pass student details into it.

---

## 📦 Module 3 — State & Event Handling (Interactive UI)
**Concept:** Making your application respond to user interaction by storing dynamic data.
* **What you will learn:**
  - The `useState` hook (React's way of managing local memory).
  - Listening to user events (clicks, keypresses, mouse events).
  - Triggering UI re-renders automatically when state changes.
* **Hands-on Goal:** Create an interactive like-counter and a dynamic Dark Mode toggle for your student list.

---

## 📦 Module 4 — Lists, Keys, and Dynamic Rendering
**Concept:** Transforming raw data arrays into lists of UI components.
* **What you will learn:**
  - Mapping over arrays using `.map()` inside JSX.
  - Why the `key` prop is crucial for React's rendering efficiency.
  - Dynamically filtering lists.
* **Hands-on Goal:** Render a dynamic list of students that can be filtered by grade, and add a "Delete" button next to each student.

---

## 📦 Module 5 — Forms & Controlled Components
**Concept:** Capturing and validating user inputs in React.
* **What you will learn:**
  - The concept of "Controlled Components" (React state as the "single source of truth" for inputs).
  - Managing multiple inputs (text, select dropdown, checkbox) in a single state object.
  - Handling form submission (`onSubmit`) and basic validation.
* **Hands-on Goal:** Build a "Add Student" form that appends a new student to your list.

---

## 📦 Module 6 — Side Effects & API Integration (`useEffect`)
**Concept:** Synchronizing your React components with external systems (like fetching data from a database).
* **What you will learn:**
  - The `useEffect` hook and the dependency array.
  - Fetching data from a mock REST API using `fetch` or `axios`.
  - Managing loading states and error handling.
* **Hands-on Goal:** Fetch student records from a mock online API and display them in your styled list upon page load.

---

## 📦 Module 7 — Global State & Context API
**Concept:** Avoiding "prop drilling" by sharing state globally across components that aren't parent-child.
* **What you will learn:**
  - The `createContext` and `useContext` hooks.
  - Designing a global state provider.
* **Hands-on Goal:** Create a global Theme Context (Light/Dark mode) that styles the entire app, regardless of how deep the component is.

---

## 🛠️ Getting Started: Project Setup

To learn React, we will set up a modern **Vite + React** development environment in your `react-playground` directory.

We will keep everything clean, lightweight, and fully visible so you can see exactly how the code works under the hood. Let's initialize this space!
