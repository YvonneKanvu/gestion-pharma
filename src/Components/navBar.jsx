import {NavLink} from 'react-router-dom'
function NavBar(){
    return(
<nav>
    <ul>
      <li><NavLink to='/'>login</NavLink></li>
      <li><NavLink to='/home'>Home</NavLink></li>
      <li><NavLink to='/about'>about</NavLink></li>
      <li><NavLink to='/products'>products</NavLink></li>
      
    </ul>
   </nav>
    )
    

}
export default NavBar


