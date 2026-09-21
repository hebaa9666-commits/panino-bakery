document.addEventListener("DOMContentLoaded", function () {

    /* ==================================================
       MOBILE MENU
    ================================================== */

    const menuBtn = document.querySelector(".menu-btn");
    const mobileMenu = document.querySelector(".mobile-menu");
    const closeMenu = document.querySelector(".close-menu");
    const menuOverlay = document.querySelector(".menu-overlay");

    function openMobileMenu() {
        if (mobileMenu) {
            mobileMenu.classList.add("active");
        }

        if (menuOverlay) {
            menuOverlay.classList.add("active");
        }
    }

    function closeMobileMenu() {
        if (mobileMenu) {
            mobileMenu.classList.remove("active");
        }

        if (menuOverlay) {
            menuOverlay.classList.remove("active");
        }
    }

    if (menuBtn) {
        menuBtn.addEventListener("click", function (e) {
            e.preventDefault();
            e.stopPropagation();
            openMobileMenu();
        });
    }

    if (closeMenu) {
        closeMenu.addEventListener("click", function (e) {
            e.preventDefault();
            e.stopPropagation();
            closeMobileMenu();
        });
    }

    if (menuOverlay) {
        menuOverlay.addEventListener("click", function () {
            closeMobileMenu();
        });
    }

    document.querySelectorAll(".mobile-menu a").forEach(function (link) {
        link.addEventListener("click", function () {
            closeMobileMenu();
        });
    });


    /* ==================================================
       LOCATION / DELIVERY
    ================================================== */

    const locationOverlay = document.getElementById("location-overlay");
    const openLocationBtn = document.getElementById("open-location-btn");
    const closeLocationBtn = document.getElementById("close-location");

    const cityStep = document.getElementById("city-step");
    const areaStep = document.getElementById("area-step");
    const districtStep = document.getElementById("district-step");

    const areaTitle = document.getElementById("area-title");
    const districtTitle = document.getElementById("district-title");

    const areaOptions = document.getElementById("area-options");
    const districtOptions = document.getElementById("district-options");

    const backToCity = document.getElementById("back-to-city");
    const backToArea = document.getElementById("back-to-area");

    const selectedLocation = document.getElementById("selected-location");
    const finalLocation = document.getElementById("final-location");
    const confirmLocation = document.getElementById("confirm-location");

    const selectedLocationText =
        document.getElementById("selected-location-text");


    let selectedCity = "";
    let selectedArea = "";
    let selectedDistrict = "";


    const locationData = {

        "القاهرة": {

            areas: [
                "حلوان",
                "مدينة نصر",
                "مصر الجديدة",
                "المعادي",
                "التجمع",
                "الشروق",
                "العبور"
            ],

            districts: {

                "حلوان": [
                    "حلوان",
                    "15 مايو",
                    "المعصرة",
                    "حدائق حلوان",
                    "وادي حوف"
                ],

                "مدينة نصر": [
                    "الحي الأول",
                    "الحي السابع",
                    "الحي العاشر",
                    "عباس العقاد",
                    "مكرم عبيد"
                ],

                "مصر الجديدة": [
                    "روكسي",
                    "الميرغني",
                    "الكوربة",
                    "أرض الجولف"
                ],

                "المعادي": [
                    "المعادي القديمة",
                    "زهراء المعادي",
                    "دجلة",
                    "حدائق المعادي"
                ],

                "التجمع": [
                    "التجمع الأول",
                    "التجمع الثالث",
                    "التجمع الخامس",
                    "النرجس",
                    "اللوتس"
                ],

                "الشروق": [
                    "الحي الأول",
                    "الحي الثاني",
                    "الحي الثالث",
                    "الحي الخامس"
                ],

                "العبور": [
                    "الحي الأول",
                    "الحي الثاني",
                    "الحي الثالث",
                    "الحي الخامس"
                ]

            }
        },


        "الجيزة": {

            areas: [
                "الهرم",
                "فيصل",
                "6 أكتوبر",
                "الشيخ زايد",
                "الدقي",
                "المهندسين"
            ],

            districts: {

                "الهرم": [
                    "الهرم",
                    "مشعل",
                    "المريوطية",
                    "كعابيش"
                ],

                "فيصل": [
                    "فيصل",
                    "الطالبية",
                    "المطبعة",
                    "العشرين"
                ],

                "6 أكتوبر": [
                    "الحي الأول",
                    "الحي الثاني",
                    "الحي الثالث",
                    "الحي السادس",
                    "الحي السابع"
                ],

                "الشيخ زايد": [
                    "الحي الأول",
                    "الحي الثاني",
                    "الحي الثالث",
                    "الحي السادس عشر"
                ],

                "الدقي": [
                    "الدقي",
                    "ميدان المساحة",
                    "شارع التحرير"
                ],

                "المهندسين": [
                    "جامعة الدول",
                    "البطل أحمد عبد العزيز",
                    "سوريا",
                    "شهاب"
                ]

            }
        },


        "المحافظات": {

            areas: [
                "الإسكندرية",
                "الشرقية",
                "الدقهلية",
                "الغربية",
                "المنوفية",
                "البحيرة",
                "الإسماعيلية",
                "السويس",
                "بورسعيد",
                "دمياط",
                "بني سويف",
                "الفيوم",
                "المنيا",
                "أسيوط",
                "سوهاج",
                "قنا",
                "الأقصر",
                "أسوان"
            ],

            districts: {

                "الإسكندرية": [
                    "سموحة",
                    "سيدي جابر",
                    "ميامي",
                    "العصافرة",
                    "العجمي"
                ],

                "الشرقية": [
                    "الزقازيق",
                    "العاشر من رمضان",
                    "بلبيس"
                ],

                "الدقهلية": [
                    "المنصورة",
                    "طلخا",
                    "ميت غمر"
                ],

                "الغربية": [
                    "طنطا",
                    "المحلة الكبرى",
                    "زفتى"
                ],

                "المنوفية": [
                    "شبين الكوم",
                    "مدينة السادات",
                    "منوف"
                ],

                "البحيرة": [
                    "دمنهور",
                    "كفر الدوار",
                    "رشيد"
                ],

                "الإسماعيلية": [
                    "الإسماعيلية",
                    "فايد",
                    "القنطرة"
                ],

                "السويس": [
                    "السويس",
                    "عتاقة",
                    "فيصل"
                ],

                "بورسعيد": [
                    "بورسعيد",
                    "بورفؤاد"
                ],

                "دمياط": [
                    "دمياط",
                    "رأس البر",
                    "دمياط الجديدة"
                ],

                "بني سويف": [
                    "بني سويف",
                    "الواسطي",
                    "الفشن"
                ],

                "الفيوم": [
                    "الفيوم",
                    "سنورس",
                    "إطسا"
                ],

                "المنيا": [
                    "المنيا",
                    "ملوي",
                    "سمالوط"
                ],

                "أسيوط": [
                    "أسيوط",
                    "ديروط",
                    "منفلوط"
                ],

                "سوهاج": [
                    "سوهاج",
                    "أخميم",
                    "جرجا"
                ],

                "قنا": [
                    "قنا",
                    "نجع حمادي",
                    "الأقصر"
                ],

                "الأقصر": [
                    "الأقصر",
                    "إسنا",
                    "الطود"
                ],

                "أسوان": [
                    "أسوان",
                    "إدفو",
                    "كوم أمبو"
                ]

            }
        }
    };


    function showStep(step) {

        if (cityStep) {
            cityStep.classList.remove("active");
        }

        if (areaStep) {
            areaStep.classList.remove("active");
        }

        if (districtStep) {
            districtStep.classList.remove("active");
        }

        if (step === "city" && cityStep) {
            cityStep.classList.add("active");
        }

        if (step === "area" && areaStep) {
            areaStep.classList.add("active");
        }

        if (step === "district" && districtStep) {
            districtStep.classList.add("active");
        }
    }


    function openLocation() {

        if (!locationOverlay) {
            return;
        }

        locationOverlay.classList.add("active");

        showStep("city");
    }


    function closeLocation() {

        if (!locationOverlay) {
            return;
        }

        locationOverlay.classList.remove("active");
    }


    if (openLocationBtn) {

        openLocationBtn.addEventListener("click", function (e) {

            e.preventDefault();
            e.stopPropagation();

            openLocation();

        });

    }


    if (closeLocationBtn) {

        closeLocationBtn.addEventListener("click", function (e) {

            e.preventDefault();
            e.stopPropagation();

            closeLocation();

        });

    }


    if (locationOverlay) {

        locationOverlay.addEventListener("click", function (e) {

            if (e.target === locationOverlay) {
                closeLocation();
            }

        });

    }


    /* ==================================================
       CITY SELECTION
    ================================================== */

    document
        .querySelectorAll("#city-step .location-option")
        .forEach(function (button) {

            button.addEventListener("click", function (e) {

                e.preventDefault();
                e.stopPropagation();

                selectedCity = this.dataset.city;

                if (!locationData[selectedCity]) {
                    return;
                }

                const data = locationData[selectedCity];

                selectedArea = "";
                selectedDistrict = "";

                if (areaOptions) {
                    areaOptions.innerHTML = "";
                }

                if (areaTitle) {

                    areaTitle.textContent =
                        selectedCity === "المحافظات"
                            ? "اختر المحافظة"
                            : "اختر المنطقة";

                }

                data.areas.forEach(function (area) {

                    const areaButton =
                        document.createElement("button");

                    areaButton.type = "button";

                    areaButton.className =
                        "location-option";

                    areaButton.innerHTML = `
                        <i class="fa-solid fa-location-dot"></i>
                        <span>${area}</span>
                    `;

                    areaButton.addEventListener(
                        "click",
                        function (e) {

                            e.preventDefault();
                            e.stopPropagation();

                            selectedArea = area;

                            loadDistricts(selectedArea);

                        }
                    );

                    if (areaOptions) {
                        areaOptions.appendChild(areaButton);
                    }

                });

                showStep("area");

            });

        });


    function loadDistricts(area) {

        if (!locationData[selectedCity]) {
            return;
        }

        const districts =
            locationData[selectedCity].districts[area] || [area];

        selectedDistrict = "";

        if (districtOptions) {
            districtOptions.innerHTML = "";
        }

        if (districtTitle) {
            districtTitle.textContent =
                "اختر الحي أو المنطقة";
        }

        districts.forEach(function (district) {

            const districtButton =
                document.createElement("button");

            districtButton.type = "button";

            districtButton.className =
                "location-option";

            districtButton.innerHTML = `
                <i class="fa-solid fa-location-dot"></i>
                <span>${district}</span>
            `;

            districtButton.addEventListener(
                "click",
                function (e) {

                    e.preventDefault();
                    e.stopPropagation();

                    selectedDistrict = district;

                    showSelectedLocation();

                }
            );

            if (districtOptions) {
                districtOptions.appendChild(districtButton);
            }

        });

        showStep("district");
    }


    function showSelectedLocation() {

        const fullLocation =
            `${selectedCity} - ${selectedArea} - ${selectedDistrict}`;

        if (finalLocation) {
            finalLocation.textContent = fullLocation;
        }

        if (selectedLocation) {
            selectedLocation.style.display = "flex";
        }

        if (confirmLocation) {
            confirmLocation.style.display = "block";
        }

        showStep("district");
    }


    if (backToCity) {

        backToCity.addEventListener("click", function (e) {

            e.preventDefault();
            e.stopPropagation();

            showStep("city");

            if (selectedLocation) {
                selectedLocation.style.display = "none";
            }

            if (confirmLocation) {
                confirmLocation.style.display = "none";
            }

        });

    }


    if (backToArea) {

        backToArea.addEventListener("click", function (e) {

            e.preventDefault();
            e.stopPropagation();

            showStep("area");

            if (selectedLocation) {
                selectedLocation.style.display = "none";
            }

            if (confirmLocation) {
                confirmLocation.style.display = "none";
            }

        });

    }


    if (confirmLocation) {

        confirmLocation.addEventListener("click", function (e) {

            e.preventDefault();
            e.stopPropagation();

            if (!selectedCity || !selectedArea || !selectedDistrict) {
                return;
            }

            const fullLocation =
                `${selectedCity} - ${selectedArea} - ${selectedDistrict}`;

            try {
                localStorage.setItem(
                    "paninoLocation",
                    fullLocation
                );
            } catch (error) {
                console.log("LocalStorage error:", error);
            }

            if (selectedLocationText) {
                selectedLocationText.textContent =
                    `التوصيل إلى ${fullLocation}`;
            }

            closeLocation();

        });

    }


    /* ==================================================
       RESTORE LOCATION
    ================================================== */

    try {

        const savedLocation =
            localStorage.getItem("paninoLocation");

        if (savedLocation && selectedLocationText) {

            selectedLocationText.textContent =
                `التوصيل إلى ${savedLocation}`;

        }

    } catch (error) {

        console.log("Location storage error:", error);

    }


    /* ==================================================
       CART SYSTEM
    ================================================== */

    let cart = [];

    try {

        const savedCart =
            localStorage.getItem("paninoCart");

        if (savedCart) {

            const parsedCart =
                JSON.parse(savedCart);

            if (Array.isArray(parsedCart)) {
                cart = parsedCart;
            }

        }

    } catch (error) {

        cart = [];

        console.log("Cart storage error:", error);

    }


    function saveCart() {

        try {

            localStorage.setItem(
                "paninoCart",
                JSON.stringify(cart)
            );

        } catch (error) {

            console.log("Could not save cart:", error);

        }

    }


    function getCartCount() {

        return cart.reduce(function (total, item) {

            return total +
                Number(item.quantity || 0);

        }, 0);

    }


    function updateCartCount() {

        const cartCounts =
            document.querySelectorAll(".cart-count");

        const count = getCartCount();

        cartCounts.forEach(function (cartCount) {

            cartCount.textContent = count;

        });

    }


    function getProductData(button) {

        const productCard =
            button.closest(
                ".menu-product-card, .product-card"
            );

        if (!productCard) {
            return null;
        }

        const nameElement =
            productCard.querySelector("h3");

        if (!nameElement) {
            return null;
        }

        const name =
            nameElement.textContent.trim();

        let priceElement =
            productCard.querySelector(".menu-price");

        if (!priceElement) {

            priceElement =
                productCard.querySelector(".new-price");

        }

        if (!priceElement) {
            return null;
        }

        const priceText =
            priceElement.textContent
                .replace(/[^\d.]/g, "");

        const price =
            parseFloat(priceText) || 0;

        const imageElement =
            productCard.querySelector("img");

        const image =
            imageElement
                ? imageElement.getAttribute("src")
                : "";

        return {

            id: name,

            name: name,

            price: price,

            image: image,

            quantity: 1

        };

    }


    function addToCart(product) {

        if (!product) {
            return;
        }

        const existing =
            cart.find(function (item) {

                return item.id === product.id;

            });


        if (existing) {

            existing.quantity =
                Number(existing.quantity || 0) + 1;

        } else {

            cart.push(product);

        }


        saveCart();

        updateCartCount();

        showCartMessage(product.name);

    }


    /* ==================================================
       CART MESSAGE
    ================================================== */

    function showCartMessage(name) {

        let message =
            document.querySelector(".cart-message");


        if (!message) {

            message =
                document.createElement("div");

            message.className =
                "cart-message";

            message.style.position = "fixed";
            message.style.bottom = "90px";
            message.style.right = "20px";
            message.style.zIndex = "20000";
            message.style.background = "#4b2e1f";
            message.style.color = "#fff";
            message.style.padding = "14px 20px";
            message.style.borderRadius = "12px";
            message.style.fontSize = "14px";
            message.style.boxShadow =
                "0 5px 20px rgba(0,0,0,.2)";

            document.body.appendChild(message);

        }


        message.textContent =
            `تم إضافة ${name} إلى السلة`;

        message.style.display = "block";


        clearTimeout(message.timer);


        message.timer =
            setTimeout(function () {

                message.style.display = "none";

            }, 2000);

    }


    /* ==================================================
       CREATE CART MODAL
    ================================================== */

    function createCartModal() {

        let modal =
            document.getElementById("cart-modal");

        if (modal) {
            return;
        }


        modal =
            document.createElement("div");

        modal.id = "cart-modal";


        modal.innerHTML = `

            <div class="cart-overlay" id="cart-overlay">

                <div class="cart-box">

                    <div class="cart-header">

                        <div>

                            <span>طلبك</span>

                            <h2>
                                سلة المشتريات
                            </h2>

                        </div>

                        <button
                            type="button"
                            class="close-cart"
                            id="close-cart">

                            <i class="fa-solid fa-xmark"></i>

                        </button>

                    </div>


                    <div
                        class="cart-items"
                        id="cart-items">
                    </div>


                    <div
                        class="cart-empty"
                        id="cart-empty">

                        <i class="fa-solid fa-basket-shopping"></i>

                        <h3>
                            السلة فارغة
                        </h3>

                        <p>
                            أضف المنتجات التي تريدها إلى السلة
                        </p>

                    </div>


                    <div
                        class="cart-footer"
                        id="cart-footer">

                        <div class="cart-total">

                            <span>
                                الإجمالي
                            </span>

                            <strong id="cart-total">
                                0 جنيه
                            </strong>

                        </div>


                        <button
                            type="button"
                            class="checkout-btn"
                            id="checkout-btn">

                            إتمام الطلب

                        </button>

                    </div>

                </div>

            </div>

        `;


        document.body.appendChild(modal);

        renderCart();

    }


    /* ==================================================
       OPEN / CLOSE CART
       FIXED
    ================================================== */

    function openCart() {

        createCartModal();

        const modal =
            document.getElementById("cart-modal");

        const overlay =
            document.getElementById("cart-overlay");

        if (modal) {
            modal.classList.add("active");
        }

        if (overlay) {
            overlay.classList.add("active");
        }

        document.body.style.overflow = "hidden";

        renderCart();

    }


    function closeCart() {

        const modal =
            document.getElementById("cart-modal");

        const overlay =
            document.getElementById("cart-overlay");

        if (overlay) {
            overlay.classList.remove("active");
        }

        if (modal) {
            modal.classList.remove("active");
        }

        document.body.style.overflow = "";

    }


    /* ==================================================
       CART CLICK EVENTS
    ================================================== */

    document.addEventListener("click", function (e) {

        /* Add to cart */

        const addButton =
            e.target.closest(".add-cart");

        if (addButton) {

            e.preventDefault();
            e.stopPropagation();

            const product =
                getProductData(addButton);

            if (product) {
                addToCart(product);
            }

            return;
        }


        /* Cart button */

        const cartButton =
            e.target.closest(".cart-btn");

        if (cartButton) {

            e.preventDefault();
            e.stopPropagation();

            openCart();

            return;
        }


        /* Close cart */

        const closeCartButton =
            e.target.closest("#close-cart");

        if (closeCartButton) {

            e.preventDefault();
            e.stopPropagation();

            closeCart();

            return;
        }


        /* Cart overlay */

        if (
            e.target.id === "cart-overlay"
        ) {

            closeCart();

            return;
        }


        /* Quantity buttons */

        const quantityButton =
            e.target.closest(".quantity-btn");

        if (quantityButton) {

            e.preventDefault();
            e.stopPropagation();

            const index =
                parseInt(
                    quantityButton.dataset.index,
                    10
                );

            const action =
                quantityButton.dataset.action;

            if (
                Number.isNaN(index) ||
                !cart[index]
            ) {
                return;
            }


            if (action === "increase") {

                cart[index].quantity =
                    Number(cart[index].quantity || 0) + 1;

            }


            if (action === "decrease") {

                cart[index].quantity =
                    Number(cart[index].quantity || 0) - 1;

                if (cart[index].quantity <= 0) {

                    cart.splice(index, 1);

                }

            }


            saveCart();

            updateCartCount();

            renderCart();

            return;
        }


        /* Remove item */

        const removeButton =
            e.target.closest(".remove-cart-item");

        if (removeButton) {

            e.preventDefault();
            e.stopPropagation();

            const index =
                parseInt(
                    removeButton.dataset.index,
                    10
                );

            if (
                !Number.isNaN(index) &&
                cart[index]
            ) {

                cart.splice(index, 1);

                saveCart();

                updateCartCount();

                renderCart();

            }

            return;
        }


        /* Checkout */

        const checkoutButton =
            e.target.closest("#checkout-btn");

        if (checkoutButton) {

            e.preventDefault();
            e.stopPropagation();

            checkout();

            return;
        }

    });


    /* ==================================================
       RENDER CART
    ================================================== */

    function renderCart() {

        const itemsContainer =
            document.getElementById("cart-items");

        const empty =
            document.getElementById("cart-empty");

        const footer =
            document.getElementById("cart-footer");

        const totalElement =
            document.getElementById("cart-total");


        if (!itemsContainer) {
            return;
        }


        itemsContainer.innerHTML = "";


        if (cart.length === 0) {

            if (empty) {
                empty.style.display = "flex";
            }

            if (footer) {
                footer.style.display = "none";
            }

            return;

        }


        if (empty) {
            empty.style.display = "none";
        }

        if (footer) {
            footer.style.display = "block";
        }


        let total = 0;


        cart.forEach(function (item, index) {

            const price =
                Number(item.price) || 0;

            const quantity =
                Number(item.quantity) || 0;

            const itemTotal =
                price * quantity;

            total += itemTotal;


            const cartItem =
                document.createElement("div");

            cartItem.className =
                "cart-item";


            cartItem.innerHTML = `

                <div class="cart-item-image">

                    ${
                        item.image
                        ? `
                            <img
                                src="${item.image}"
                                alt="${item.name}">
                          `
                        : `
                            <i class="fa-solid fa-bread-slice"></i>
                          `
                    }

                </div>


                <div class="cart-item-info">

                    <h3>
                        ${item.name}
                    </h3>

                    <strong>
                        ${price} جنيه
                    </strong>


                    <div class="cart-quantity">

                        <button
                            type="button"
                            class="quantity-btn"
                            data-action="increase"
                            data-index="${index}">

                            +

                        </button>


                        <span>
                            ${quantity}
                        </span>


                        <button
                            type="button"
                            class="quantity-btn"
                            data-action="decrease"
                            data-index="${index}">

                            -

                        </button>

                    </div>

                </div>


                <button
                    type="button"
                    class="remove-cart-item"
                    data-index="${index}">

                    <i class="fa-solid fa-trash"></i>

                </button>

            `;


            itemsContainer.appendChild(cartItem);

        });


        if (totalElement) {

            totalElement.textContent =
                `${total} جنيه`;

        }

    }


    /* ==================================================
       CHECKOUT / WHATSAPP
    ================================================== */

    function checkout() {

        if (cart.length === 0) {
            return;
        }


        let message =
            "طلب جديد من موقع بانينو\n\n";


        cart.forEach(function (item) {

            const quantity =
                Number(item.quantity) || 0;

            const price =
                Number(item.price) || 0;

            message +=
                `${item.name} - الكمية: ${quantity} - ${price * quantity} جنيه\n`;

        });


        const total =
            cart.reduce(function (sum, item) {

                return sum +
                    Number(item.price || 0) *
                    Number(item.quantity || 0);

            }, 0);


        message +=
            `\nالإجمالي: ${total} جنيه`;


        const whatsappNumber =
            "201099944329";


        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


        window.open(
            whatsappURL,
            "_blank",
            "noopener,noreferrer"
        );

    }


    /* ==================================================
       SWIPER
    ================================================== */

    if (typeof Swiper !== "undefined") {


        /* Hero Slider */

        const heroSlider =
            document.querySelector(".heroSlider");


        if (heroSlider) {

            const pagination =
                heroSlider.querySelector(
                    ".swiper-pagination"
                );


            new Swiper(heroSlider, {

                loop: true,

                autoplay: {

                    delay: 4000,

                    disableOnInteraction: false

                },

                speed: 800,

                pagination: pagination
                    ? {
                        el: pagination,
                        clickable: true
                    }
                    : undefined,

                effect: "slide"

            });

        }


        /* Testimonials */

        const testimonialsSlider =
            document.querySelector(
                ".testimonials-slider"
            );


        if (testimonialsSlider) {

            const pagination =
                testimonialsSlider.querySelector(
                    ".swiper-pagination"
                );


            new Swiper(
                testimonialsSlider,
                {

                    loop: true,

                    autoplay: {

                        delay: 3500,

                        disableOnInteraction: false

                    },

                    speed: 700,

                    slidesPerView: 1,

                    spaceBetween: 20,

                    pagination: pagination
                        ? {
                            el: pagination,
                            clickable: true
                        }
                        : undefined,

                    breakpoints: {

                        768: {
                            slidesPerView: 2
                        },

                        1024: {
                            slidesPerView: 3
                        }

                    }

                }
            );

        }

    }


    /* ==================================================
       SCROLL TOP
    ================================================== */

    const scrollTop =
        document.querySelector(".scroll-top");


    if (scrollTop) {

        scrollTop.addEventListener(
            "click",
            function (e) {

                e.preventDefault();

                window.scrollTo({

                    top: 0,

                    behavior: "smooth"

                });

            }
        );


        window.addEventListener(
            "scroll",
            function () {

                if (window.scrollY > 400) {

                    scrollTop.style.opacity = "1";

                    scrollTop.style.visibility =
                        "visible";

                } else {

                    scrollTop.style.opacity = "0";

                    scrollTop.style.visibility =
                        "hidden";

                }

            },
            { passive: true }
        );

    }


    /* ==================================================
       INITIALIZE
    ================================================== */

    updateCartCount();

});
