const homeProduct = document.querySelector('.home-product');
const rowProduct = homeProduct.querySelector('.row-product');
const category = document.querySelector('.category');
const categoryList = category.querySelectorAll('li');
const homeFilter = document.querySelector('.home-filter');
const pageNum = homeFilter.querySelector('.home-filter-page');
const pagePre = homeFilter.querySelector('.page-pre');
const pageTotal = homeFilter.querySelector('.page-total');
const pageControlIcons = homeFilter.querySelectorAll('.page-control-btn');
const pageControlLeft = pageControlIcons[0];
const pageControlRight = pageControlIcons[1];
const pagination = document.querySelector('.pagination');
const listSoftFilters = homeFilter.querySelectorAll('.select-input-option li');
const filterSelectPrice = homeFilter.querySelector('.filter-select-price');
const listFilterBtns = homeFilter.querySelectorAll('.filter-btn');
const headerSearch = document.querySelector('.header__searchbar');
const searchList = headerSearch.querySelectorAll('.search-item');
const mainPage = document.querySelector('.main-page');
const productPage = document.querySelector('.product-page');


// console.log(mainPage);
// console.log(productPage);

//Add product info
var listProducts = [
    {
        category: 'Toner',
        image: './asset/img/Product/product2.jpg',
        name: 'Toner Simple Kind To Skin Soothing Facial',
        oldPrice: 89000,
        newPrice: 49000,
        like: true,
        vote: 4,
        origin: 'Simple',
        info: '200ml',
        filter: 'Da khô'
    },
    {
        category: 'Sữa rửa mặt',
        image: './asset/img/Product/product9.jpg',
        name: 'Sữa Rửa Mặt Senana Lấy Sạch Bụi Bẩn Giúp Da Trắng Sáng-Y3-K6T3',
        oldPrice: 180000,
        newPrice: 135000,
        like: false,
        vote: 3,
        origin: 'Cosrx',
        info: '150ml',
        filter: 'Da mụn'
    },
    {
        category: 'Sữa rửa mặt',
        image: './asset/img/Product/product10.jpg',
        name: 'Sữa rửa mặt trà xanh mẫu mới 150ml',
        oldPrice: 30000,
        newPrice: 25000,
        like: false,
        vote: 4,
        origin: 'Innisfree',
        info: '150ml',
        filter: 'Da dầu'
    },
    {
        category: 'Toner',
        image: './asset/img/Product/product3.jpg',
        name: 'Cenota Daisy Toner Dưỡng Ẩm',
        oldPrice: 159000,
        newPrice: 109000,
        like: false,
        vote: 4,
        origin: 'Cénota',
        info: '250ml',
        filter: 'Da khô'
    },
    {
        category: 'Toner',
        image: './asset/img/Product/product4.jpg',
        name: 'Nước Hoa Hồng Không Cồn Thayers Lavender',
        oldPrice: 300000,
        newPrice: 285000,
        like: true,
        vote: 5,
        origin: 'Thayers',
        info: '355ml',
        filter: 'Da mụn'
    },
    {
        category: 'Toner',
        image: './asset/img/Product/product5.jpg',
        name: 'Chinoshio Dokudami Natural Skin Lotion',
        oldPrice: 180000,
        newPrice: 109000,
        like: false,
        vote: 3,
        origin: 'Chinoshio',
        info: '500ml',
        filter: 'Da dầu'
    },
    {
        category: 'Toner',
        image: './asset/img/Product/product8.jpg',
        name: 'Nước Hoa Hồng Ý Dĩ Dưỡng Sáng, Chống Lão Hóa Reihaku Hatomugi Moisturizing & Conditioning Lotion 500ml Và 1000ml',
        oldPrice: 225000,
        newPrice: 129000,
        like: false,
        vote: 3,
        origin: 'Reihaku',
        info: '500ml',
        filter: 'Da khô'
    },
    {
        category: 'Sữa rửa mặt',
        image: './asset/img/Product/product9.jpg',
        name: 'Sữa Rửa Mặt Senana Lấy Sạch Bụi Bẩn Giúp Da Trắng Sáng-Y3-K6T3',
        oldPrice: 180000,
        newPrice: 135000,
        like: false,
        vote: 3,
        origin: 'Cosrx',
        info: '150ml',
        filter: 'Da mụn'
    },
    {
        category: 'Sữa rửa mặt',
        image: './asset/img/Product/product10.jpg',
        name: 'Sữa rửa mặt trà xanh mẫu mới 150ml',
        oldPrice: 30000,
        newPrice: 25000,
        like: false,
        vote: 4,
        origin: 'Innisfree',
        info: '150ml',
        filter: 'Da dầu'
    },
    {
        category: 'Sữa rửa mặt',
        image: './asset/img/Product/product11.jpg',
        name: 'Sữa Rửa Mặt Cetaphil Gentle Skin Cleanser',
        oldPrice: 339000,
        newPrice: 315000,
        like: false,
        vote: 5,
        origin: 'Cetaphil',
        info: '500ml',
        filter: 'Da dầu'
    },
    {
        category: 'Sữa rửa mặt',
        image: './asset/img/Product/product12.jpg',
        name: 'Sữa rửa mặt Nam trắng da sạch mụn Dabo Black Force Hàn Quốc 120ml - Hàng Chính Hãngl',
        oldPrice: 180000,
        newPrice: 95000,
        like: false,
        vote: 3,
        origin: 'Dabu',
        info: '120ml',
        filter: 'Da dầu'
    },
    {
        category: 'Sữa rửa mặt',
        image: './asset/img/Product/product13.jpg',
        name: 'Sữa Rửa Mặt CeraVe Foaming Cleanser Giúp Làm Sạch Sâu Dành Cho Da Dầu 236ml',
        oldPrice: 300000,
        newPrice: 285000,
        like: false,
        vote: 3,
        origin: 'CeraVe',
        info: '336ml',
        filter: 'Da dầu'
    },
    {
        category: 'Toner',
        image: './asset/img/Product/product8.jpg',
        name: 'Nước Hoa Hồng Ý Dĩ Dưỡng Sáng, Chống Lão Hóa Reihaku Hatomugi Moisturizing & Conditioning Lotion 500ml Và 1000ml',
        oldPrice: 225000,
        newPrice: 129000,
        like: false,
        vote: 3,
        origin: 'Reihaku',
        info: '500ml',
        filter: 'Da khô'
    },
    {
        category: 'Toner',
        image: './asset/img/Product/product8.jpg',
        name: 'Nước Hoa Hồng Ý Dĩ Dưỡng Sáng, Chống Lão Hóa Reihaku Hatomugi Moisturizing & Conditioning Lotion 500ml Và 1000ml',
        oldPrice: 225000,
        newPrice: 129000,
        like: false,
        vote: 3,
        origin: 'Reihaku',
        info: '500ml',
        filter: 'Da khô'
    },
    {
        category: 'Toner',
        image: './asset/img/Product/product8.jpg',
        name: 'Nước Hoa Hồng Ý Dĩ Dưỡng Sáng, Chống Lão Hóa Reihaku Hatomugi Moisturizing & Conditioning Lotion 500ml Và 1000ml',
        oldPrice: 225000,
        newPrice: 129000,
        like: false,
        vote: 3,
        origin: 'Reihaku',
        info: '500ml',
        filter: 'Da khô'
    },
    {
        category: 'Toner',
        image: './asset/img/Product/product2.jpg',
        name: 'Toner Simple Kind To Skin Soothing Facial',
        oldPrice: 89000,
        newPrice: 49000,
        like: true,
        vote: 4,
        origin: 'Simple',
        info: '200ml',
        filter: 'Da khô'
    },
    {
        category: 'Toner',
        image: './asset/img/Product/product3.jpg',
        name: 'Cenota Daisy Toner Dưỡng Ẩm',
        oldPrice: 159000,
        newPrice: 109000,
        like: false,
        vote: 4,
        origin: 'Cénota',
        info: '250ml',
        filter: 'Da khô'
    },
    {
        category: 'Toner',
        image: './asset/img/Product/product4.jpg',
        name: 'Nước Hoa Hồng Không Cồn Thayers Lavender',
        oldPrice: 300000,
        newPrice: 285000,
        like: true,
        vote: 5,
        origin: 'Thayers',
        info: '355ml',
        filter: 'Da mụn'
    },
    {
        category: 'Toner',
        image: './asset/img/Product/product5.jpg',
        name: 'Chinoshio Dokudami Natural Skin Lotion',
        oldPrice: 180000,
        newPrice: 109000,
        like: false,
        vote: 3,
        origin: 'Chinoshio',
        info: '500ml',
        filter: 'Da dầu'
    },
    {
        category: 'Toner',
        image: './asset/img/Product/product8.jpg',
        name: 'Nước Hoa Hồng Ý Dĩ Dưỡng Sáng, Chống Lão Hóa Reihaku Hatomugi Moisturizing & Conditioning Lotion 500ml Và 1000ml',
        oldPrice: 225000,
        newPrice: 129000,
        like: false,
        vote: 3,
        origin: 'Reihaku',
        info: '500ml',
        filter: 'Da khô'
    },
    {
        category: 'Sữa rửa mặt',
        image: './asset/img/Product/product9.jpg',
        name: 'Sữa Rửa Mặt Senana Lấy Sạch Bụi Bẩn Giúp Da Trắng Sáng-Y3-K6T3',
        oldPrice: 180000,
        newPrice: 135000,
        like: false,
        vote: 3,
        origin: 'Cosrx',
        info: '150ml',
        filter: 'Da mụn'
    },
    {
        category: 'Sữa rửa mặt',
        image: './asset/img/Product/product10.jpg',
        name: 'Sữa rửa mặt trà xanh mẫu mới 150ml',
        oldPrice: 30000,
        newPrice: 25000,
        like: false,
        vote: 4,
        origin: 'Innisfree',
        info: '150ml',
        filter: 'Da dầu'
    },
    {
        category: 'Sữa rửa mặt',
        image: './asset/img/Product/product11.jpg',
        name: 'Sữa Rửa Mặt Cetaphil Gentle Skin Cleanser',
        oldPrice: 339000,
        newPrice: 315000,
        like: false,
        vote: 5,
        origin: 'Cetaphil',
        info: '500ml',
        filter: 'Da dầu'
    },
    {
        category: 'Sữa rửa mặt',
        image: './asset/img/Product/product12.jpg',
        name: 'Sữa rửa mặt Nam trắng da sạch mụn Dabo Black Force Hàn Quốc 120ml - Hàng Chính Hãngl',
        oldPrice: 180000,
        newPrice: 95000,
        like: false,
        vote: 3,
        origin: 'Dabu',
        info: '120ml',
        filter: 'Da dầu'
    },
    {
        category: 'Sữa rửa mặt',
        image: './asset/img/Product/product13.jpg',
        name: 'Sữa Rửa Mặt CeraVe Foaming Cleanser Giúp Làm Sạch Sâu Dành Cho Da Dầu 236ml',
        oldPrice: 300000,
        newPrice: 285000,
        like: false,
        vote: 3,
        origin: 'CeraVe',
        info: '336ml'
    }, {
        category: 'Toner',
        image: './asset/img/Product/product2.jpg',
        name: 'Toner Simple Kind To Skin Soothing Facial',
        oldPrice: 89000,
        newPrice: 49000,
        like: true,
        vote: 4,
        origin: 'Simple',
        info: '200ml',
        filter: 'Da khô'
    },
    {
        category: 'Sữa rửa mặt',
        image: './asset/img/Product/product9.jpg',
        name: 'Sữa Rửa Mặt Senana Lấy Sạch Bụi Bẩn Giúp Da Trắng Sáng-Y3-K6T3',
        oldPrice: 180000,
        newPrice: 135000,
        like: false,
        vote: 3,
        origin: 'Cosrx',
        info: '150ml',
        filter: 'Da mụn'
    },
    {
        category: 'Sữa rửa mặt',
        image: './asset/img/Product/product10.jpg',
        name: 'Sữa rửa mặt trà xanh mẫu mới 150ml',
        oldPrice: 30000,
        newPrice: 25000,
        like: false,
        vote: 4,
        origin: 'Innisfree',
        info: '150ml',
        filter: 'Da dầu'
    },
    {
        category: 'Toner',
        image: './asset/img/Product/product3.jpg',
        name: 'Cenota Daisy Toner Dưỡng Ẩm',
        oldPrice: 159000,
        newPrice: 109000,
        like: false,
        vote: 4,
        origin: 'Cénota',
        info: '250ml',
        filter: 'Da khô'
    },
    {
        category: 'Toner',
        image: './asset/img/Product/product4.jpg',
        name: 'Nước Hoa Hồng Không Cồn Thayers Lavender',
        oldPrice: 300000,
        newPrice: 285000,
        like: true,
        vote: 5,
        origin: 'Thayers',
        info: '355ml',
        filter: 'Da mụn'
    },
    {
        category: 'Toner',
        image: './asset/img/Product/product5.jpg',
        name: 'Chinoshio Dokudami Natural Skin Lotion',
        oldPrice: 180000,
        newPrice: 109000,
        like: false,
        vote: 3,
        origin: 'Chinoshio',
        info: '500ml',
        filter: 'Da dầu'
    },
    {
        category: 'Toner',
        image: './asset/img/Product/product8.jpg',
        name: 'Nước Hoa Hồng Ý Dĩ Dưỡng Sáng, Chống Lão Hóa Reihaku Hatomugi Moisturizing & Conditioning Lotion 500ml Và 1000ml',
        oldPrice: 225000,
        newPrice: 129000,
        like: false,
        vote: 3,
        origin: 'Reihaku',
        info: '500ml',
        filter: 'Da khô'
    },
    {
        category: 'Sữa rửa mặt',
        image: './asset/img/Product/product9.jpg',
        name: 'Sữa Rửa Mặt Senana Lấy Sạch Bụi Bẩn Giúp Da Trắng Sáng-Y3-K6T3',
        oldPrice: 180000,
        newPrice: 135000,
        like: false,
        vote: 3,
        origin: 'Cosrx',
        info: '150ml',
        filter: 'Da mụn'
    },
    {
        category: 'Sữa rửa mặt',
        image: './asset/img/Product/product10.jpg',
        name: 'Sữa rửa mặt trà xanh mẫu mới 150ml',
        oldPrice: 30000,
        newPrice: 25000,
        like: false,
        vote: 4,
        origin: 'Innisfree',
        info: '150ml',
        filter: 'Da dầu'
    },
    {
        category: 'Sữa rửa mặt',
        image: './asset/img/Product/product11.jpg',
        name: 'Sữa Rửa Mặt Cetaphil Gentle Skin Cleanser',
        oldPrice: 339000,
        newPrice: 315000,
        like: false,
        vote: 5,
        origin: 'Cetaphil',
        info: '500ml',
        filter: 'Da dầu'
    },
    {
        category: 'Sữa rửa mặt',
        image: './asset/img/Product/product12.jpg',
        name: 'Sữa rửa mặt Nam trắng da sạch mụn Dabo Black Force Hàn Quốc 120ml - Hàng Chính Hãngl',
        oldPrice: 180000,
        newPrice: 95000,
        like: false,
        vote: 3,
        origin: 'Dabu',
        info: '120ml',
        filter: 'Da dầu'
    },
    {
        category: 'Sữa rửa mặt',
        image: './asset/img/Product/product13.jpg',
        name: 'Sữa Rửa Mặt CeraVe Foaming Cleanser Giúp Làm Sạch Sâu Dành Cho Da Dầu 236ml',
        oldPrice: 300000,
        newPrice: 285000,
        like: false,
        vote: 3,
        origin: 'CeraVe',
        info: '336ml',
        filter: 'Da dầu'
    },
    {
        category: 'Toner',
        image: './asset/img/Product/product8.jpg',
        name: 'Nước Hoa Hồng Ý Dĩ Dưỡng Sáng, Chống Lão Hóa Reihaku Hatomugi Moisturizing & Conditioning Lotion 500ml Và 1000ml',
        oldPrice: 225000,
        newPrice: 129000,
        like: false,
        vote: 3,
        origin: 'Reihaku',
        info: '500ml',
        filter: 'Da khô'
    },
    {
        category: 'Toner',
        image: './asset/img/Product/product8.jpg',
        name: 'Nước Hoa Hồng Ý Dĩ Dưỡng Sáng, Chống Lão Hóa Reihaku Hatomugi Moisturizing & Conditioning Lotion 500ml Và 1000ml',
        oldPrice: 225000,
        newPrice: 129000,
        like: false,
        vote: 3,
        origin: 'Reihaku',
        info: '500ml',
        filter: 'Da khô'
    },
    {
        category: 'Toner',
        image: './asset/img/Product/product8.jpg',
        name: 'Nước Hoa Hồng Ý Dĩ Dưỡng Sáng, Chống Lão Hóa Reihaku Hatomugi Moisturizing & Conditioning Lotion 500ml Và 1000ml',
        oldPrice: 225000,
        newPrice: 129000,
        like: false,
        vote: 3,
        origin: 'Reihaku',
        info: '500ml',
        filter: 'Da khô'
    },
    {
        category: 'Toner',
        image: './asset/img/Product/product2.jpg',
        name: 'Toner Simple Kind To Skin Soothing Facial',
        oldPrice: 89000,
        newPrice: 49000,
        like: true,
        vote: 4,
        origin: 'Simple',
        info: '200ml',
        filter: 'Da khô'
    },
    {
        category: 'Toner',
        image: './asset/img/Product/product3.jpg',
        name: 'Cenota Daisy Toner Dưỡng Ẩm',
        oldPrice: 159000,
        newPrice: 109000,
        like: false,
        vote: 4,
        origin: 'Cénota',
        info: '250ml',
        filter: 'Da khô'
    },
    {
        category: 'Toner',
        image: './asset/img/Product/product4.jpg',
        name: 'Nước Hoa Hồng Không Cồn Thayers Lavender',
        oldPrice: 300000,
        newPrice: 285000,
        like: true,
        vote: 5,
        origin: 'Thayers',
        info: '355ml',
        filter: 'Da mụn'
    },
    {
        category: 'Mặt nạ',
        image: './asset/img/Product/product5.jpg',
        name: 'Chinoshio Dokudami Natural Skin Lotion',
        oldPrice: 180000,
        newPrice: 109000,
        like: false,
        vote: 3,
        origin: 'Chinoshio',
        info: '500ml',
        filter: 'Da dầu'
    },
    {
        category: 'Toner',
        image: './asset/img/Product/product8.jpg',
        name: 'Nước Hoa Hồng Ý Dĩ Dưỡng Sáng, Chống Lão Hóa Reihaku Hatomugi Moisturizing & Conditioning Lotion 500ml Và 1000ml',
        oldPrice: 225000,
        newPrice: 129000,
        like: false,
        vote: 3,
        origin: 'Reihaku',
        info: '500ml',
        filter: 'Da khô'
    },
    {
        category: 'Sữa rửa mặt',
        image: './asset/img/Product/product9.jpg',
        name: 'Sữa Rửa Mặt Senana Lấy Sạch Bụi Bẩn Giúp Da Trắng Sáng-Y3-K6T3',
        oldPrice: 180000,
        newPrice: 135000,
        like: false,
        vote: 3,
        origin: 'Cosrx',
        info: '150ml',
        filter: 'Da mụn'
    },
    {
        category: 'Mặt nạ',
        image: './asset/img/Product/product10.jpg',
        name: 'Sữa rửa mặt trà xanh mẫu mới 150ml',
        oldPrice: 30000,
        newPrice: 25000,
        like: false,
        vote: 4,
        origin: 'Innisfree',
        info: '150ml',
        filter: 'Da dầu'
    },
    {
        category: 'Sữa rửa mặt',
        image: './asset/img/Product/product11.jpg',
        name: 'Sữa Rửa Mặt Cetaphil Gentle Skin Cleanser',
        oldPrice: 339000,
        newPrice: 315000,
        like: false,
        vote: 5,
        origin: 'Cetaphil',
        info: '500ml',
        filter: 'Da dầu'
    },
    {
        category: 'Mặt nạ',
        image: './asset/img/Product/product12.jpg',
        name: 'Sữa rửa mặt Nam trắng da sạch mụn Dabo Black Force Hàn Quốc 120ml - Hàng Chính Hãngl',
        oldPrice: 180000,
        newPrice: 95000,
        like: false,
        vote: 3,
        origin: 'Dabu',
        info: '120ml',
        filter: 'Da dầu'
    },
    {
        category: 'Dưỡng ẩm',
        image: './asset/img/Product/product13.jpg',
        name: 'Sữa Rửa Mặt CeraVe Foaming Cleanser Giúp Làm Sạch Sâu Dành Cho Da Dầu 236ml',
        oldPrice: 300000,
        newPrice: 285000,
        like: false,
        vote: 3,
        origin: 'CeraVe',
        info: '336ml',
        filter: 'Da dầu'
    },
    {
        category: 'Sữa rửa mặt',
        image: './asset/img/Product/product13.jpg',
        name: 'Sữa Rửa Mặt CeraVe Foaming Cleanser Giúp Làm Sạch Sâu Dành Cho Da Dầu 236ml',
        oldPrice: 300000,
        newPrice: 285000,
        like: false,
        vote: 3,
        origin: 'CeraVe',
        info: '336ml'
    },


];

var listProductsSelected = listProducts;
var smallListProduct = listProducts;

//Number of page
var pagePreNum = 1;
var pageTotalNum = Math.ceil(listProducts.length / 10);

function sale(a, b) {
    return Math.floor((a - b) / a * 100);
}

//Add product to home -product
function addProduct(list, page) {
    rowProduct.innerHTML = '';
    for (let i = 0; i < 10; i++) {
        let num = (page - 1) * 10 + i;
        if (!(list[num] === undefined)) {
            // Like or Dislike icon
            let liked = (!list[num].like)
                ? `<i class="product__action--like fa-regular fa-heart"></i>`
                : `<i class="product__action--dislike fa-solid fa-heart"></i>`;
            let vote = '';

            //Votes for product 
            for (let j = 0; j < 5 - list[num].vote; j++) {
                vote += `<i class="fa-regular fa-star"></i>`
            }
            for (let k = 0; k < list[num].vote; k++) {
                vote += `<i class="fa-solid fa-star"></i>`
            }

            //code HTML for product
            rowProduct.innerHTML += 
                `<div class="grid__column-2-4">
                <a class="home-product-item menu-list-item_table" href="#">
                <!-- Tạo image trong thẻ div -->
                        <div class="product__image" style="background-image: url(${list[num].image});">
                            <!-- <img class="product__image-img" src="./asset/img/Product/product1.jpg" alt=""> -->
                        </div>
                        <h4 class="product__content">${list[num].name}</h4>
                        <div class="product__price">
                            <span class="product__price--old">${list[num].oldPrice}đ</span>
                            <span class="product__price--new">${list[num].newPrice}đ</span>
                        </div>
                        <div class="product__action">
                            ${liked}
                            <div class="product__action--vote">
                                ${vote}
                            </div>
                        </div>
                        <div class="product__info">
                            <span>${list[num].info}</span>
                            <span>${list[num].origin}</span>
                        </div>
                        <div class="product__tick">
                            <i class="fa-solid fa-check"></i>
                            <span>Yêu thích</span>
                        </div>
                        <div class="product__sale">
                            <span class="product__sale--num">${sale(list[num].oldPrice, list[num].newPrice)}%</span>
                            <span class="product__sale--title">Giảm</span>
                        </div>
                </a>
            </div>`;
        }
    }
    
    //Set event listeners for product
    let productItems = rowProduct.querySelectorAll('.home-product-item');

    for( let k in productItems) {
        if(productItems.hasOwnProperty(k)) {
            let num = (page - 1) * 10 + parseInt(k);
            productItems[k].addEventListener('click', () => {
                productPage.style.display = 'block';
                productPage.querySelector('.product-page-link :nth-child(3)').innerText= list[num].category;
                productPage.querySelector('.product-page-link span').innerText = list[num].name;
                productPage.querySelector('.main-img img').src = list[num].image;
                productPage.querySelector('.page-content-name :nth-child(2)').innerText = list[num].name;
                productPage.querySelector('.content-vote-number').innerText = list[num].vote;
                productPage.querySelector('.price-sale--old').innerText = `${list[num].oldPrice} ₫` ;
                productPage.querySelector('.price-sale--new').innerText = `${list[num].newPrice} ₫`;
                productPage.querySelector('.price-sale--sale').innerText = `${sale(list[num].oldPrice, list[num].newPrice)} % Giảm`;
                mainPage.style.display = 'none';
            });
        }
    }
}

addProduct(listProducts, 1);
setPagination(pageTotalNum);
setSelectPagination(pagePreNum);

addActionListenerForFilter(categoryList);
addActionListenerForFilter(searchList);
//total page
pageTotal.innerText = Math.ceil(listProducts.length / 10);

//Select a list of products for the selected
function selectProduct(category) {
    return listProducts.filter((product) => product.category === category);
}

//Select a list of products for the filter
function selectProductByFilter(filter) {
    return listProductsSelected.filter((product) => product.filter === filter);
}

//add products with selected filter (category, menu)
function addActionListenerForFilter(list) {
    for (let i in list) {
        if (list.hasOwnProperty(i)) {
            list[i].addEventListener('click', (e) => {
                e.preventDefault();          
                addProductForFilter(e.target.innerText, i);
            })
        }
    }
}

//add products with selected filter (category, menu)
function addProductForFilter(text, num) {
    //Remove old selected category
    for (let j in categoryList) {
        if (categoryList.hasOwnProperty(j)) {
            if (categoryList[j].classList.contains('category-item--active')) {
                categoryList[j].classList.remove('category-item--active');
            }
        }
    }
    categoryList[num].classList.add('category-item--active');

    if (text === 'Tất cả sản phẩm') {
        listProductsSelected = listProducts;
    } else {
        listProductsSelected = selectProduct(text);
    }

    pagePreNum = 1;
    addProduct(listProductsSelected, 1);
    pageTotalNum = Math.ceil(listProductsSelected.length / 10);
    pageTotal.innerText = pageTotalNum;
    setPagination(pageTotalNum);
    setSelectPagination(1);
    checkPageNumber(pagePreNum, pageTotalNum);
}

//switch pages
pageControlRight.addEventListener('click', (e) => {
    e.preventDefault();
    pagePreNum++;
    checkPageNumber(pagePreNum, pageTotalNum);
    addProduct(listProductsSelected, pagePreNum);
    setSelectPagination(pagePreNum);
})

pageControlLeft.addEventListener('click', (e) => {
    e.preventDefault();
    pagePreNum--;
    checkPageNumber(pagePreNum, pageTotalNum);
    addProduct(listProductsSelected, pagePreNum);
    setSelectPagination(pagePreNum);
})

function checkPageNumber(pre, total) {
    let paginationLeft = pagination.querySelector('.left');
    let paginationRight = pagination.querySelector('.right');

    if (total === 1) {
        paginationLeft.classList.add('disable-btn');
        paginationRight.classList.add('disable-btn');
        pageControlLeft.classList.add('disable-btn');
        pageControlRight.classList.add('disable-btn');
    } else {
        pageControlLeft.classList.remove('disable-btn');
        pageControlRight.classList.remove('disable-btn');
        paginationLeft.classList.remove('disable-btn');
        paginationRight.classList.remove('disable-btn');
        switch (pre) {
            case 1:
                pageControlLeft.classList.add('disable-btn');
                paginationLeft.classList.add('disable-btn');
                break;
            case total:
                pageControlRight.classList.add('disable-btn');
                paginationRight.classList.add('disable-btn');
                break;
        }
    }
    pagePre.innerText = pre;
}

//Pagination
function setPagination(num) {
    let pagHTML = '';
    pagHTML +=
        `<li class="pagination-item">
            <a href="" class="pagination-item__link left disable-btn">
                <i class=" pagination-item__icon fa-solid fa-chevron-left"></i>
            </a>
        </li>`;

    for (let i = 0; i < num; i++) {
        pagHTML +=
            `<li class="pagination-item">
            <a href="" class="pagination-item__link number">
                ${i + 1}
            </a>
        </li>`;
    }

    pagHTML +=
        `<li class="pagination-item">
            <a href="" class="pagination-item__link right">
                <i class="  pagination-item__icon fa-solid fa-chevron-right"></i>
            </a>
        </li>`;

    pagination.innerHTML = pagHTML;

    let paginationList = pagination.querySelectorAll('.number');
    let paginationLeft = pagination.querySelector('.left');
    let paginationRight = pagination.querySelector('.right');

    paginationLeft.addEventListener('click', (e) => {
        e.preventDefault();
        pagePreNum--;
        checkPageNumber(pagePreNum, pageTotalNum);
        addProduct(listProductsSelected, pagePreNum);
        setSelectPagination(pagePreNum);
    })

    paginationRight.addEventListener('click', (e) => {
        e.preventDefault();
        pagePreNum++;
        checkPageNumber(pagePreNum, pageTotalNum);
        addProduct(listProductsSelected, pagePreNum);
        setSelectPagination(pagePreNum);
    })

    for (let j in paginationList) {

        if (paginationList.hasOwnProperty(j)) {

            paginationList[j].addEventListener('click', (e) => {
                e.preventDefault();
                if (j != pagePreNum - 1) {
                    pagePreNum = parseInt(j) + 1;
                    addProduct(listProductsSelected, pagePreNum);
                    setSelectPagination(pagePreNum);
                    checkPageNumber(pagePreNum, pageTotalNum);
                }
            })
        }
    }
}

function setSelectPagination(num) {
    let paginationList = pagination.querySelectorAll('.number');
    if (paginationList.length != 0) {
        for (let i in paginationList) {
            if (paginationList.hasOwnProperty(i)) {
                if (paginationList[i].classList.contains('active')) {
                    paginationList[i].classList.remove('active');
                }
            }
        }
        paginationList[num - 1].classList.add('active');
    }
}
//sort by price
for (let i in listSoftFilters) {
    if (listSoftFilters.hasOwnProperty(i)) {
        listSoftFilters[i].addEventListener('click', () => {
            if (i == 0) {
                smallListProduct.sort((a, b) => (a.oldPrice - b.oldPrice));
            } else {
                smallListProduct.sort((a, b) => (b.oldPrice - a.oldPrice));
            }
            addProduct(smallListProduct, 1);
            pageTotalNum = Math.ceil(smallListProduct.length / 10);
            pageTotal.innerText = pageTotalNum;
            setPagination(pageTotalNum);
            setSelectPagination(1)
            checkPageNumber(pagePreNum, pageTotalNum);
            filterSelectPrice.innerText = listSoftFilters[i].innerText;
        })
    }
}

//Filter Btn Click
for (let i in listFilterBtns) {
    if (listFilterBtns.hasOwnProperty(i)) {
        listFilterBtns[i].addEventListener('click', (e) => {
            let newList = [];
            let flatList = [];
            listFilterBtns[i].classList.toggle('primary-btn');

            for (let j in listFilterBtns) {
                if (listFilterBtns.hasOwnProperty(j)) {
                    if (listFilterBtns[j].classList.contains('primary-btn')) {
                        let filterList = selectProductByFilter(listFilterBtns[j].innerText);
                        newList.push(filterList);
                    }
                }
            }

            if (newList.length != 0) {
                flatList = newList.reduce(function (newArray, depth) {
                    return newArray.concat(depth);
                }, []);

            } else {
                flatList = listProductsSelected;
            }
            smallListProduct = flatList;
            pagePreNum = 1;
            addProduct(smallListProduct, 1);
            pageTotalNum = Math.ceil(smallListProduct.length / 10);
            pageTotal.innerText = pageTotalNum;
            setPagination(pageTotalNum);
            setSelectPagination(1)
            checkPageNumber(pagePreNum, pageTotalNum);
        })
    }
}

//product page action
productPage.querySelector('.product-page-link :nth-child(3)').addEventListener('click', (e) => {
    e.preventDefault();
    console.log('text 1: ', e.target.innerText);
    let i = 0;
    for (i in categoryList) {
        if (categoryList.hasOwnProperty(i)) {
            if (searchList[i].innerText == e.target.innerText) {
                break;
            }
        }
    }
    console.log(i)
    addProductForFilter(e.target.innerText, i);
    mainPage.style.display = 'flex';
    productPage.style.display = 'none';
})