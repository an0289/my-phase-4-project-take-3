import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Header, Input, Divider } from 'semantic-ui-react'

function NavBar() {
    return (
<div>
<Menu pointing secondary size='huge'>
    <Menu.Item as={NavLink} to='/' name='home' />
    <Menu.Item as={NavLink} to='/my_items' name='my items' />
    <Menu.Item as={NavLink} to='/new' name='new item' />
    <Menu.Menu position='right'>
    <Menu.Item>
        <Input icon='search' placeholder='Search...' />
    </Menu.Item>
    <Menu.Item as={NavLink} to='/logout' name='logout' />
    </Menu.Menu>
</Menu>
<Divider hidden />
</div>
    )

}

export default NavBar 