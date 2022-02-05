export const myCartHtml = function (html) {
  let price;
  const num = html.price.toString();
  num.length > 3 ? (price = num.slice(-4, -3) + "," + num.slice(-3)) : (price = num);
  return `
      <div class="products-info">
        <div class="product-img">
          <img
            src="${html.imgURL}"
            alt=""
          />
        </div>
        <div class="product-info">
          <div class="product-brand">${html.brand}</div>
          <div class="product-description">${html.description.slice(0, 63) + "..."}</div>
          <div class="product-seller">Seller:SandSMarketing</div>
          <div class="product-price">₹${price}</div>
          <div class="product-decision">
            <a href="#">SAVE FOR LATER</a>
            <a href="#" data-remove="${html.id}" class="product-remove">REMOVE</a>
          </div>
        </div>
      </div>
    `;
};

export const sectionGridChild = function (html) {
  let price;
  const num = html.price.toString();
  num.length > 3 ? (price = num.slice(-4, -3) + "," + num.slice(-3)) : (price = num);
  return `
              <div class="cloth-frame">
                  <div class="cloth-img">
                    <img src="${html.imgURL}" alt="cloths" />
                  </div>
                  <div class="cloth-text">
                      <div class="cloth-band-selector">
                          <p class="cloth-brand">${html.brand}</p>
                          <div class="cloth-cart">
                              <svg xmlns="http://www.w3.org/2000/svg" data-category = ${html.category} data-add = "${
    html.id
  }" class="cloth-icon cloth-add" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" data-category = ${html.category} data-remove = "${
    html.id
  }" class="cloth-icon cloth-remove" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                              </svg>
                          </div>
                      </div>
                      <div class="cloth-assured-description">
                      <p class="cloth-description">${html.description.slice(0, 15) + "..."}</p>
                      <div class="assured">
                        <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png" alt="" class="assured--img" />
                      </div>
                    </div>
                      <p class="cloth-price">₹${price}</p>
                  </div>
              </div>
      `;
};

export const fashionsHtml = function (cloth) {
  return `
      <div class="fashion">
        <div class="fashion-selector">
                <a href="#" class="fashion-men">MEN</a>
                <a href="#" class="fashion-women">WOMEN</a>
              </div>
        <div class="fashion-cloths">
        ${cloth}
        </div>
      </div>
  `;
};
export const electronicsHtml = function (cloth) {
  return `
      <div class="fashion">
        <div class="fashion-selector">
               
              </div>
        <div class="fashion-cloths">
        ${cloth}
        </div>
      </div>
  `;
};

export const emptyMarkup = function () {
  return `
<div class ="flex-center">
<h1 class="emptyCart">Your Cart is Empty!</h1>
</div>
`;
};

export const myCartParentHtml = function (bookmarks) {
  const checkCartLen = Boolean(bookmarks.length);
  const totalAmt = bookmarks.reduce((acc, mark) => acc + mark.price, 0);

  let price;
  const num = totalAmt.toString();
  num.length > 3 ? (price = num.slice(-4, -3) + "," + num.slice(-3)) : (price = num);

  return `
<div class="myCart">
<div class="myCart-products">
<div class="myCart-name">My Cart</div>
${checkCartLen ? bookmarks.map((html) => myCartHtml.call(this, html)).join("") : emptyMarkup()}
      </div>
      <div class="myCart-details">
        <div class="products-detail-name">Price Details</div>
        <div class="products-details">
          <div class="products-detail-total-price">
            <div class="detail-price">Price</div>
            <div class="detail-total-price">₹${totalAmt}</div>
          </div>
          <div class="products-detail-discount-price">
            <div class="detail-discount">Discount</div>
            <div class="detail-discount-fee green-text">₹${totalAmt > 0 ? 100 : 0}</div>
          </div>
          <div class="products-detail-delivery-fee">
            <div class="detail-delivery">delivery charges</div>
            <div class="detail-delivery-fee green-text">FREE</div>
          </div>
          <div class="detail-sum-amt">
            <div class="detail-sum">TOTAL AMOUNT</div>
            <div class="detail-amt">₹${totalAmt > 0 ? price : 0}</div>
          </div>
        </div>
      </div>
    </div>
`;
};
