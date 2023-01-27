
function Item({ name, symbol, price }) {
    return (
        <div>{name} ({symbol}) : {price} $</div>
    )
}

export default Item