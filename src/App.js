import logo from "./logo.svg";
import "./App.css";
import Timer from "./component/Timer";
import { useState } from 'react';
import { useRef } from 'react';
import { ThemeContext } from "./context/ThemeContext";
import { UserContext } from "./context/UserContext";
import Page from "./component/page";

// function App() {
//     const [showTimer, setShowTimer] = useState(false);
//     return (
//         <div className="App">
//             {showTimer && <Timer />}
//             <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
//         </div>
//     );
// }

// export default App;

// function App() {
//     const [count, setcount] = useState(0);
//     const countRef = useRef(0); // countRef.current

//     console.log('렌더링~~')

//     const increaseCountsState = () => {
//         setcount(count + 1)
//     }
    
//     const increaseCountsRef = () => {
//         countRef.current = countRef.current + 1;
//     }
//     return (
//         <div className="App">
//             <p>State: {count}</p>
//             <p>Ref: {countRef.current}</p>
//             <button onClick={increaseCountsState}>State 올려</button>
//             <button onClick={increaseCountsRef}>Ref 올려</button>
//         </div>
//     );
// }

// export default App;

function App() {
    const [isDark, setIsDark] = useState(false);

    return (
        <UserContext.Provider value={'사용자'}>
            <ThemeContext.Provider value={{isDark, setIsDark}}>
                <Page />
            </ThemeContext.Provider>
        </UserContext.Provider>
    )
}

export default App;
