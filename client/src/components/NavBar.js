import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Header, Input, Divider, Search } from 'semantic-ui-react'

function NavBar({ user, setUser }) {
    const [searchWord, setSearchWord] = useState("")
    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE"}).then((r) => {
            if (r.ok) {
                setUser(null)
            }
        })
    }


    return (
<div>
<Menu pointing secondary size='massive'>
    <Menu.Item style={{ fontFamily: 'Papyrus' }} as={NavLink} to='/' name='home' />
    <Menu.Item style={{ fontFamily: 'Papyrus' }} as={NavLink} to='/my_reviewed_items' name='my reviewed items' />
    <Menu.Item style={{ fontFamily: 'Papyrus' }} as={NavLink} to='/new' name='new item' />
    <Menu.Menu position='right'>
    <Menu.Item style={{ fontFamily: 'Papyrus' }} onClick={handleLogoutClick} name='logout' />
    </Menu.Menu>
</Menu>
<Divider hidden />
</div>
    )

}

export default NavBar 