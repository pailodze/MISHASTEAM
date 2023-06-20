import { useState } from "react"

export default () => {

    const [showMenu, setShowMenu] = useState(false)

    const onChange = () => {
        setShowMenu(!showMenu)
    }
    
    return (
        <>
            <div onClick={onChange}>{showMenu ? 'Hide menu' : 'Show Menu'}</div>
            {
                showMenu &&
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                    </ul>
            }
        </>
    )
}