
//import React from 'react'
//import ReactDOM from 'react'

// function MyNavbar() {
//     return (
//         <h1> Hallo Semua Selamt Pagi</h1>
//     )
// }

// const page = (
//     <div>
        
//         <img src="./logo192.png"/>
//         <h1> Hello</h1>
//         <ul>
//             <li> Was first release in 2013</li>
//             <li>Was originally creted by Jordan Walke</li>
//             <li>Has well over 100K star on Github</li>
//             <li>Is maintained by Facebook</li>
//             <li> Powers thousand of enterprise apps, including mobile apps</li>
//         </ul>
//     </div>
// )

// ReactDOM.render(page,document.querySelector('#root'))


// import React from 'react'
// import ReactDOM from 'react-dom'

// const page = (

// )




import React from 'react'
import  ReactDOM  from 'react-dom'



import Body from "./Body"
import Header from "./Header"
import Footer from "./Footer"
// const Body = require('./Body')
// const Header = require('./Header')
// const Footer = require('./Footer')



function App(){
    return (
        <div>
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}

ReactDOM.render(<App/>,document.querySelector('#root'))