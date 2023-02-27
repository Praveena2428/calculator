const Button=({symbol,handleClick})=>{
    return(
        <div onClick={()=>handleClick(symbol)}
        className="button" >
            
            {symbol}

        </div>
    )
}
export default Button