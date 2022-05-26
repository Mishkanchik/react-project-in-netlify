import React from 'react';
import  ReactDOM  from 'react-dom/client';

// const el = (
//     <div>
//         <div>
//             <ul>
//                 <li>list item 1 </li>
//                 <li>list item 1 </li>
//                 <li>list item 1 </li>
//                 <li>list item 1 </li>
//                 <li>list item 1 </li>
//             </ul>
//         </div>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio expedita totam iusto! Nobis ea esse quae veniam magnam omnis numquam, id eligendi harum! Harum consectetur repellendus eligendi nihil quibusdam minima.</p>
//     </div>
// )

function App () {
    return(
        <h1> hello App.js</h1>
    )

}


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)

