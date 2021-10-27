function Button ({ color, text, onToggle }){
    return(
        <button 
        className="btn"
        style={{
            backgroundColor: color
        }}
        onClick={() => onToggle()}>{ text }</button>
    )
}

export default Button