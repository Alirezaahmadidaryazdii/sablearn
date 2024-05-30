import { countDataShop, dataShop } from "./dataShop.js"


let temp = `<button>
مشاهده همه
<i class="fas fa-arrow-left"></i>
</button> `

const template = document.createElement('template')
template.innerHTML = `
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">                                                      
<link rel="stylesheet" href="./css/body.css">
<section class="part3-body">
        <div class="header-main-part3">
            <div class="header-part3">
                <img src="./images//img4.svg" alt="">
                <h3>جدید ترین دوره های آموزشی</h3>
            </div>
            <div class="header2-part3">
            <button>
                <span>مشاهده همه</span>
            </button>
            </div>
        </div>
    </section>
`
const template2 = document.createElement('template')
template2.innerHTML = `
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">                                                      
<link rel="stylesheet" href="./librarys/bootstrap.fa.min (1).css"> 
<link rel="stylesheet" href="./css/body.css">
<div id='partes'>
    <slot name="item-product"></slot>
</div>
`
class Part3 extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
        this.shadowRoot.append(template.content.cloneNode(true))
        // console.log(this.shadowRoot)
    }
}
class Part3_2 extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode: 'open'})
        this.shadowRoot.append(template2.content.cloneNode(true))
    }
    connectedCallback(){
        const syncPointer = ({ x: pointerX, y: pointerY }) => {
            const x = pointerX.toFixed(2)
            const y = pointerY.toFixed(2)
            const xp = (pointerX / window.innerWidth).toFixed(2)
            const yp = (pointerY / window.innerHeight).toFixed(2)
            document.documentElement.style.setProperty('--x', x)
            document.documentElement.style.setProperty('--xp', xp)
            document.documentElement.style.setProperty('--y', y)
            document.documentElement.style.setProperty('--yp', yp)
        }
        document.body.addEventListener('pointermove', syncPointer)
        //! ///////////////////////////////////////////////////////////////
        let data = [
            { img: './images/git-scaled.jpg', title: 'دوره گیتهاب و گیت', price: 149000, disPrice: 300000, comment: 'اگر یک سری به آگهی های استخدامی بزنید بدون شک گیت و گیت هاب رو جز مهارت های ضروری استخدام میبینید این ابزار خفن به شما کمک میکنه پروژه هاتونو مدیریت کنید تیمی کار کنید عیب یابی کنید و ...' },
            { img: './images/Figma-scaled.jpg', title: 'دوره فیگما', price: 260000, disPrice: 460000, comment: 'فیگما یک ابزار طراحی هستش که باهاش طراحی های مختلفی رو انجام میدن مهم ترین وظیفه اش طراحی UI وبسایت هست و میتونید با یادگیری این ابزار در حوزه طراحی شروع به فعالیت کنید' },
            { img: './images/Html-scaled.jpg', title: 'دوره اچ تی ام ال', price: 300000, disPrice: 400000, comment: 'این دوره صفر تا صد اچ تی ام ال را به زبان ساده در کمترین زمان به شما آموزش داده میشه' },
            { img: './images/world.jpg', title: 'ورود به دنیای برنامه نویسی', price: 0, disPrice: 0, comment: 'اگر هیچ دانشی به برنامه نویسی وب نداری! اگر میخواهی برنامه نویسی رو یاد بگیری ولی مفاهیم رو نمیدونی!    !!!' },
            { img: './images/mega.jpg', title: 'مگا فرانت (دوره جامع فرانت اند)', price: 2449000, disPrice: 3500000, comment: 'با توجه به رشد و پیشرفت فناوری های امروزی، بزرگترین شرکت های جهان خدمات و محصولات خود را به صورت آنلاین و از طریق وب ارائه می دهنده' },
            { img: './images/react.jpg', title: 'دوره متخصص ری اکت', price: 2200000, disPrice: 3000000, comment: 'سلام این دوره هنوز آماده نشده، و در آینده آپلود خواهد شد ...' }
        ];
        this.addEventListener('click', async (e) => {
            if (e.target.getAttribute('id') == "add") {
                await new Promise(resolve => setTimeout(() => {
                    e.target.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
                    resolve();
                }, 1000));
                let dataFilter = data.filter(item=> item.title == e.target.parentElement.parentElement.querySelector('h3').textContent)
                dataShop.push(dataFilter)
                let header = document.querySelector('site-header').shadowRoot.querySelector('header').querySelector('.half2').querySelector('.part1 p')
                header.innerHTML = countDataShop().toLocaleString('fa-IR')
                this.createAlert(e.target.dataset.shop)
            }
        });
    }
    createAlert = (id) => {
        const toastDetails = {
            timer: 500,
            success: {
                icon: 'fa-circle-check',
                text: 'با موفقیت در سبد خرید اضافه شد',
            },
            error: {
                icon: 'fa-circle-xmark',
                text: 'Error: This is an error toast.',
            },
            warning: {
                icon: 'fa-triangle-exclamation',
                text: 'Warning: This is a warning toast.',
            },
            info: {
                icon: 'fa-circle-info',
                text: 'Info: This is an information toast.',
            }
        }
        // Getting the icon and text for the toast based on the id passed
        const { icon, text } = toastDetails[id];
        const toast = document.createElement("div"); // Creating a new 'li' element for the toast
        let messageShow = document.querySelector('#massage-show-detail')
        toast.className = `toast ${id} hidden`; // Setting the classes for the toast
        toast.id = "message";
        // Setting the inner HTML for the toast
        toast.innerHTML = `<div class="column">
                             <i class="fa-solid ${icon}"></i>
                             <span>${text}</span>
                          </div>
                          `;
        messageShow.appendChild(toast); // Append the toast to the notification ul
        // Setting a timeout to remove the toast after the specified duration
        toast.timeoutId = setTimeout(() => this.removeToast(toast), toastDetails.timer);
    }
    removeToast = (toast) => {
        toast.classList.add("show");
        if(toast.timeoutId) clearTimeout(toast.timeoutId); // Clearing the timeout for the toast
        setTimeout(() => toast.classList.remove('show') , 5000); // Removing the toast after 500ms
    }
}

export {Part3, Part3_2}