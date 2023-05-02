import { BookCollapse } from "./collapse"
import { ShopBlocks } from "./shop-blocks"

const BookBlocksAndCollapse = () => {
    return <>
        <BookCollapse />
        <ShopBlocks type="paper" title="купить бумажную книгу" />
        <ShopBlocks type="ebook" title="купить электронную книгу" />
    </>
}

export default BookBlocksAndCollapse