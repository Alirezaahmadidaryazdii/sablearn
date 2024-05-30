
const template = document.createElement('template')

template.innerHTML = `
<link rel="stylesheet" href="./css/body.css">
<link rel="stylesheet" href="./librarys/bootstrap.fa.min (1).css">
<section class='main-part4'>
    <img src="" alt="" id="img-part4-header" />
    <div class="body-part4 row mt-5">
        <div class="item-prt4-header col-md-2 col-12">
            <h3 class='txt-part4'>مطالب خواندی سبزلرن</h3>
            <button class='seeMore-part4'>مشاهده بیشتر</button>
        </div>
        <div class="item-prt4 col-md-5">
            <div class='item2-part4 row'>
                <img src="./images/nuxt.jpg" alt=''id="item-part4-img" class='img-item2-part4 col-md-6'/>
                <img src="./images/software.jpeg" alt=''id="item-part4-img" class='img-item2-part4 col-md-6'/>
            </div>
            <div class='item1-part4'>
                <img src="./images/hacker.jpg" alt=''id="item-part4-img" class='img-item2-part4'/>
            </div>
        </div>
        <div class="item-prt4 col-md-5">
            <div class='item1-part4'>
                <img src="./images/joje.png" alt=''id="item-part4-img" class='img-item2-part4'/>
            </div>
            <div class='item2-part4 row'>
                <img src="./images/backgroundPhone.jpg" id="item-part4-img"  alt='' class='img-item2-part4 col-md-6'/>
                <img src="./images/ddd.jpg" alt='' id="item-part4-img"  class='img-item2-part4 col-md-6'/>
            </div>
        </div>
    </div>
    
</section>
`


class Part4 extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode: 'open'})
        this.shadowRoot.append(template.content.cloneNode(true))
    }
    connectedCallback () {
        this.shadowRoot.querySelector('#img-part4-header').src = this.getAttribute('img')
    }

    static observedAttributes () {
        return ['img']
    }
}

export {Part4}