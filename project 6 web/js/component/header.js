const template = document.createElement('template');
template.innerHTML = `
<link rel="stylesheet" href="./css/header.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
<header>
<img src="./images/download (21).png" alt="" id="omg">
<button class="menu-button ">
<i class="fa-solid fa-bars"></i>
</button>
<ul class="ul-header">
    <li class="item-li">صفحه اصلی</li>
    <li class="item-li">دوره ها</li>
    <li class="item-li">وبلاگ</li>
    <li class="item-li">درباره ما</li>
    <li class="item-li">تماس با ما</li>
</ul>
<div class="half2">
<div class="part1">
    <p id="show-count-product">0</p>
    <i class="fa-solid fa-bag-shopping"></i>
</div>
</div>
<div class="part2">
    <div class="toggle">
        <input type="checkbox" />
        <label></label>
    </div>
</div>
<div class="part3">
    <a href="./login.html" >
        <i class="fa-solid fa-user"></i>
        <p> ورود / عضویت</p>
    </a>
</div>
</div>
</header>
`;

class Header extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        let darkMode = localStorage.getItem('dark') === 'true';
        this.applyTheme(darkMode);

        let body = document.body;
        let header = this.shadowRoot.querySelector('header');
        let footer = document.querySelector('site-footer');
        let bodyPart1 = document.querySelector('site-body-part1');

        this.shadowRoot.querySelector('.toggle input').checked = darkMode;

        this.shadowRoot.querySelector('.toggle').addEventListener('click', e => {
            darkMode = !darkMode;
            this.applyTheme(darkMode);

            localStorage.setItem('dark', darkMode);
        });
        let isOpen=false;
        header.querySelector('.menu-button').addEventListener('click', function() {
            isOpen = !isOpen;
            header.querySelector('.ul-header').classList.toggle('open');
            isOpen ? 
            header.querySelector('.menu-button i').className = 'fa-regular fa-circle-xmark'
            : header.querySelector('.menu-button i').className = 'fa-solid fa-bars'
            
        });

        // this.shadowRoot.querySelector('.part3').addEventListener('click', (e)=>{
        //     const template = `
        //     <site-login></site-login>
        //     `
        //     document.body.style.background = 'black'
        //     document.body.style.color = 'black'
        //     document.body.innerHTML = ""
        //     document.body.innerHTML = template
        //     window.history.pushState({}, "", '/login');
        // })
    }

    applyTheme(darkMode) {
        let body = document.body;
        let header = this.shadowRoot.querySelector('header');
        let footer = document.querySelector('site-footer');
        let bodyPart1 = document.querySelector('site-body-part1');

        if (!darkMode) {
            document.body.style.background = '#FEFEFE';
            document.body.style.color = 'black';
            header.style.background = 'rgb(255, 255, 255)';
            header.style.color = 'black';

            if (footer && footer.shadowRoot) {
                footer.shadowRoot.querySelector('.footer').style.background = 'rgb(255, 255, 255)';
                footer.shadowRoot.querySelector('.footer').style.color = 'black';
                footer.shadowRoot.querySelector('.footer-part2 h3.header-footer').style.color = 'black';
                footer.shadowRoot.querySelector('.footer-part3 .paragraf-footer').style.color = 'black';
            }

            if (bodyPart1 && bodyPart1.shadowRoot) {
                bodyPart1.shadowRoot.querySelector('.half1 .txth3-half1').style.color = 'rgb(75, 81, 90)';
            }

            document.documentElement.style.setProperty('--bg', 'white');
        } else {
            document.body.style.background = 'rgb(16,18,20)';
            document.body.style.color = 'white';
            header.style.background = 'rgb(26, 29, 31)';
            header.style.color = 'rgb(255, 255, 255)';

            if (footer && footer.shadowRoot) {
                footer.shadowRoot.querySelector('.footer').style.background = 'rgb(26, 29, 31)';
                footer.shadowRoot.querySelector('.footer').style.color = 'white';
                footer.shadowRoot.querySelector('.footer-part2 h3.header-footer').style.color = 'white';
                footer.shadowRoot.querySelector('.footer-part3 .paragraf-footer').style.color = 'white';
            }

            if (bodyPart1 && bodyPart1.shadowRoot) {
                bodyPart1.shadowRoot.querySelector('.half1 .txth3-half1').style.color = 'white';
            }

            document.documentElement.style.setProperty('--bg', 'hsl(0 0% 10%)');
        }
    }
}
export { Header };
