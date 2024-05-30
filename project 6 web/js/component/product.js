
import { dataShop, countDataShop, totalCountProduct } from "./dataShop.js"
const template = document.createElement('template')
template.innerHTML= `
<link rel="stylesheet" href="./css/product.css">
    <p>سبد خرید</p>
    <div class="row-product">
    </div>
`
class Product extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode: 'open'})
        this.shadowRoot.append(template.content.cloneNode(true))
    }
    connectedCallback(){
        console.log(dataShop)
        let product = this.shadowRoot.querySelector('.row-product')
        dataShop.forEach(item=>{
            let pattern = `
                <div class="product-item">
                <img src=${item[0].img} />
                <p>${item[0].title}</p>
                <p>${item.price}</p>
                </div>
            `
            product.insertAdjacentHTML('beforeend', pattern)
        })
    }
}

export {Product}