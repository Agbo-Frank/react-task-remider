import Button from "./button"

function Header({ onToggle }){
    return(
        <header className="header">
            <h1>Task Trackers</h1>
            <Button color='green' text='Add' onToggle={onToggle}/>
        </header>
    )
}

export default Header