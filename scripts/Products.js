import { getProducts } from "./database.js"

const products = getProducts()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.dataset.type === "product") {
                const price = itemClicked.dataset.price
            for (const product of products) {
                if (product.id === parseInt(itemClicked.dataset.id)) {

                    window.alert(`${product.name} costs ${price} `)
                }    
                
            }
        }
    }
)


export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li data-id = "${product.id}" 
                    data-price = "${product.price}"
                    data-type ="product">
                    ${product.name}
                    </li>`
    }

    html += "</ul>"

    return html
}

