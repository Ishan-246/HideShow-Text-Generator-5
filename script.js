
import React, { useState } from 'react';
function ToggleText() {
 const [show, setShow] = useState(true);
 return (
 <div>
 <button onClick={() => setShow(!show)}>
 {show ? "Hide" : "Show"} Text
 </button>
 {show && <p>Hello, this is the text!</p>}
 </div>
 );
}
export default ToggleText;


