import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

function NavBar() {
    return (
<div>
<Menu>
<Menu.Item as={NavLink} to='/' name='home' />
<Menu.Item as={NavLink} to='/my_items' name='my items' />
<Menu.Item as={NavLink} to='/new' name='new review' />
</Menu>
</div>
    )

}

export default NavBar 