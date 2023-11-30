import {NavLink} from 'react-router-dom'
function NavBar(){
    return(
<nav>
    <ul>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/about'>about</NavLink></li>
      <li><NavLink to='/login'>login</NavLink></li>
      <li><NavLink to='/products'>products</NavLink></li>
      
    </ul>
   </nav>
    )
    

}
export default NavBar


