# Hide/Show Text Generator - 5

A basic React toggle app that shows or hides a paragraph using a button.

##  Features
- Show/hide functionality
- Button toggles text
- Simple useState usage

##  Tech Stack
- React.js
- JavaScript
- CSS

##  How to Run
1. Clone this repo
2. Run `npm install`
3. Run `npm start`


## OUTPUT OF THIS CODE 

<img width="815" height="685" alt="Screenshot (94)" src="https://github.com/user-attachments/assets/e85fd495-2ad7-4338-8c78-a75dcb8ccc7d" />

<img width="821" height="778" alt="Screenshot (93)" src="https://github.com/user-attachments/assets/cf21f855-f101-4b47-bf46-95ce6ad7c692" />


## What I learned from this code 

How to write code for show text  and meaning of it [   const [show, setShow] = useState(true); ]

 Learned the meaning of this line [onClick={() => setShow(!show)}]   which triggers when clicked



 ## LINE BY LINE EXPLANATION


 A)   import React, { useState } from 'react';  =

Imports React and the useState hook from the React library.
useState allows the component to maintain and update internal state.


B)    function ToggleText() {  =

Declares a functional React component named ToggleText.
 

 C)     const [show, setShow] = useState(true); =
 
Declares a state variable show initialized to true.
setShow is a function to update the value of show.
show is used to control whether a certain piece of text is visible. 


D)       return (   =
Begins the JSX return statement, defining what this component renders.
jsx

 <div>  =
Creates a <div> element as a container for the button and text.
jsx
 
 <button onClick={() => setShow(!show)}>  =
Adds a <button> element.
The onClick event is attached with an inline arrow function.
When clicked, it calls setShow(!show) which toggles the value of show between true and false.
jsx


 E)     {show ? "Hide" : "Show"} Text  =
 
Sets the button label with a conditional expression:
If show is true, the button displays "Hide Text".
If show is false, the button displays "Show Text"


F)   {show && <p>Hello, this is the text!</p>} =

Conditionally renders a paragraph <p> with the text "Hello, this is the text!".
Uses the logical AND (&&) operator:
If show is true, the paragraph appears.
If show is false, nothing is rendered.




##  Author
Made by Ishan-246
