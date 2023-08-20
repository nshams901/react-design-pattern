const RegularList = ( { items, resourceName, itemComponent: ItemComponent}) => {

    return (
        <>
            {
                items.map((item) => {
                    return (
                        <ItemComponent {...{ [resourceName]: item}} />
                    )
                })
            }
        </>
    )
}

export default RegularList;