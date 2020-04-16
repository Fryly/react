import React, {Component} from 'react'
import classesName from './Layout.css'

// export default class Layout extends Component {
//     render(){
//         return(

//                 <main className={classesName.Layout}>
//                     {this.children}
//                 </main>

//         )
//     }
// }

const Layout = props => {
    return props.children
}

export default Layout