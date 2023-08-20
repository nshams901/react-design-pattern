export const LargProductListItem = ( { product }) => {
    const { name, price, description } = product;
console.log(product, 'KKKKKKKKKKKK');
    return (
        <>
            <h3>{name}</h3>
            <p>{ price }</p>
            <h3>Description</h3>
            <p>{description}</p>

        </>
    )
}