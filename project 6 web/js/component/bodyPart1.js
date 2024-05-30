const template = document.createElement('template')

template.innerHTML = `
<link rel="stylesheet" href="./css/body.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
<link rel="stylesheet" href="./librarys/bootstrap.fa.min (1).css">
    <section class="body-part1 row m-2"dir="rtl">       
        <div class="half1 col-12 col-md-6">
            <h3 class="txth3-half1">آموزشگاه آنلاین ساب لرن</h3>
            <p class="txtp-half1">ساب لرن، جایی که اعتماد شما برای ما ارزشمند است و ما به تمام قدرت خود متعهدیم تا تجربه‌ای بی‌نظیر و مفید را برای شما به ارمغان بیاوریم. با ما همراه شوید و به آرزوهای برنامه نویسی خود پر پرواز دهید!</p>
            <div class="buttons">
                <button class="btn1-half1">
                    <p>دوره مگا فرانت</p>
                </button>
                <button class="btn2-half1">
                    <p>آشنایی با برنامه نویسی</p>
                </button>
            </div>
            <div class="services">
                <div class="item">
                    <img src="./images/img1.svg" alt="">
                    <p>بیش از 4 سال فعالیت حرفه ای</p>
                </div>
                <div class="item">
                    <img src="./images/img2.svg" alt="">
                    <p>ضمانت بازگشت وجه</p>
                </div>
                <div class="item">
                    <img src="./images/img3.svg" alt="">
                    <p>یادگیری با تمرین و آزمون</p>
                </div>
                <div class="item">
                    <img src="./images/img4.svg" alt="">
                    <p>پشتیبانی ۲۴ساعته</p>
                </div>
            </div>
        </div>
        <div class="half2 col-12 col-md-6">
            <img src="./images/HeaderImg.svg" class="w-100" alt="">
        </div>
    </section>
`

class Part1 extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}

export {Part1}