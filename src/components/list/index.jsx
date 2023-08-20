import RegularList from "./RegularList"
import { people, products } from "./data"
import { LargePersonListItem } from "./person/LargePersonListItem"
import { SmallPersonListItem } from "./person/SmallPersonListItem"
import { LargProductListItem } from "./product/LargeProductListItem"
import { SmallProductListItem } from "./product/SmallProductListItem"

const List = () => {
    return (
        <>

            <RegularList
                items={people}
                resourceName={'person'}
                itemComponent={SmallPersonListItem}
            />
            <RegularList
                items={people}
                resourceName={'person'}
                itemComponent={ LargePersonListItem }
            />

            <RegularList
                items={products}
                resourceName={'product'}
                itemComponent={SmallProductListItem}
            />
            <RegularList
                items={products}
                resourceName={'product'}
                itemComponent={ LargProductListItem}
            />
        </>
    )
}

export default List;