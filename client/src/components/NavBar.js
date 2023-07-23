import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Header, Input, Divider } from 'semantic-ui-react'

function NavBar({ user, setUser }) {
    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE"}).then((r) => {
            if (r.ok) {
                setUser(null)
            }
        })
    }

    return (
<div>
<Menu pointing secondary size='huge'>
    <Menu.Item style={{ fontFamily: 'Papyrus' }} as={NavLink} to='/' name='home' />
    <Menu.Item style={{ fontFamily: 'Papyrus' }} as={NavLink} to='/my_reviewed_items' name='my reviewed items' />
    <Menu.Item style={{ fontFamily: 'Papyrus' }} as={NavLink} to='/new' name='new item' />
    <Menu.Menu position='right'>
    <Menu.Item>
        <Input icon='search' placeholder='Search...' />
    </Menu.Item>
    <Menu.Item style={{ fontFamily: 'Papyrus' }} onClick={handleLogoutClick} name='logout' />
    </Menu.Menu>
</Menu>
<Divider hidden />
</div>
    )

}

export default NavBar 