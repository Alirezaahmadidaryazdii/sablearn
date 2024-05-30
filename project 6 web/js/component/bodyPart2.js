
const template = document.createElement('template')
template.innerHTML = `
<link rel="stylesheet" href="./css/body.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
<section class="body-part2">
    <div class="cards">
        <slot name="item-cards"></slot>
    </div>
</section>    
`

class Part2 extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode: 'open'})
        this.shadowRoot.append(template.content.cloneNode(true))
    }
}

export {Part2}