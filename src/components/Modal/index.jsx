import { products } from "../list/data";
import { LargProductListItem } from "../list/product/LargeProductListItem";
import { Modal } from "./Modal"

const MainModal = () => {
    return (
        <Modal>
            <LargProductListItem product={products[0]}/>
        </Modal>
    )
}

export default MainModal;