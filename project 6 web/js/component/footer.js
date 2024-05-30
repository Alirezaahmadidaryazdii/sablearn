
const template = document.createElement('template')
template.innerHTML = `
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
<link rel="stylesheet" href="./librarys/bootstrap.fa.min (1).css">
<link rel="stylesheet" href="./css/footer.css">
<section class="footer p-3">
    <div class="footer-part1">
        <div class="row">
            <div class="col-lg-3 col-md-6 col-12">
                <div class="flex-footer">
                    <i class="fa-solid fa-graduation-cap"></i>
                    <h3 class="title-footer">
                        دوره های با کیفیت</h3>
                </div>
                <div class="comment-footer">
                    <p class="comment-footer">براساس جدیدترین مباحث</p>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-12">
                <div class="flex-footer">
                    <i class="fa-solid fa-headphones"></i>
                    <h3 class="title-footer">پشتیبانی 24 ساعته</h3>
                </div>
                <div class="comment-footer">
                    <p class="comment-footer">سیستم ارسال تیکت حرفه ای</p>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-12">
                <div class="flex-footer">
                    <i class="fa-solid fa-money-bill"></i>
                    <h3 class="title-footer">
                        قیمت مناسب</h3>
                </div>
                <div class="comment-footer">
                    <p class="comment-footer">آموزش دیدن یک سرمایه گذاریه</p>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-12">
                <div class="flex-footer">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <h3 class="title-footer">
                        خرید آسان و امن</h3>
                </div>
                <div class="comment-footer">
                    <p class="comment-footer">در کمترین زمان امن خرید کنید</p>
                </div>
            </div>
        </div>
    </div>
    <div class="footer-part2">
        <div class="row">
            <div class="col-lg-3 col-md-6 col-12">
                <h3 class="header-footer">لیست مدیران</h3>
                <div class="user-footer d-flex">
                    <i class="fa-regular fa-circle"></i>
                    <p class="nameUser-footer">امیر مهدی باقری زاده</p>
                </div>
                <div class="user-footer d-flex">
                    <i class="fa-regular fa-circle"></i>
                    <p class="nameUser-footer">محمدرضا خرسند</p>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-12 m-auto">
                <div class="data-footer d-flex">
                    <i class="dataI-footer fa-solid fa-location-dot m-1 text-danger"></i>
                    <p class="dataP-footer text-muted">قم میدان پلیس</p>
                </div>
                <div class="data-footer d-flex">
                    <i class="dataI-footer fa-solid fa-envelope m-1"></i>
                    <p class="dataP-footer text-muted">sabnewqo@gmail.com</p>
                </div>
            </div>
        </div>
    </div>
    <hr/>
    <div class="footer-part3">
        <h3 class="footer-title-part3">آکادمی آموزشی ساب لرن</h3>
        <p class="paragraf-footer">
            هدف ساب لرن ارائه بهترین دوره های آموزش برنامه نویسی به دانشجویان برای ورود به بازار کار است،این آکادمی سعی دارد با استفاده از مدرسینی که خودشان برنامه نویس هستند شما رو به بهترین شکل ممکن وارد بازار کار کنند و با آموزش تئوری ،عملی و تجربی پاسخگو تمامی نیاز های شما باشند
        </p>
    </div>
</section>
`

class Footer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
        this.shadowRoot.append(template.content.cloneNode(true))
    }
}


export {Footer}