// ==================== DỮ LIỆU SẢN PHẨM ====================
var products = [
    { id: 1, category: 'GAME', name: 'Định vị moco', duration: 'VĨNH VIỄN', sold: 99, price: 0, stock: 999, badge: 'HOT', img: 'freefire', downloadLink: 'https://www.mediafire.com/file/rbh9kfdmzz9wnh4/Dragon_Injector_V2.apk/file', downloadText: 'Tải APK' },
    { id: 2, category: 'TỐI ƯU', name: 'File tối ưu giảm lag ADR', duration: 'MỚI NHẤT', sold: 150, price: 0, stock: 999, badge: 'HOT', img: 'file', downloadLink: 'https://link4m.com/4mZKZR', downloadText: 'Tải Xuống' },
    { id: 3, category: 'TỐI ƯU', name: 'File nhạy cho ADR máy yếu', duration: 'MỚI NHẤT', sold: 89, price: 0, stock: 999, badge: '', img: 'file', downloadLink: 'https://link4m.com/t35Dtr', downloadText: 'Tải Xuống' },
    { id: 4, category: 'TRỢ NĂNG', name: 'File trợ năng SS', duration: 'MỚI NHẤT', sold: 200, price: 0, stock: 999, badge: 'HOT', img: 'file', downloadLink: 'https://link4m.com/vTCRA', downloadText: 'Tải Xuống' },
    { id: 5, category: 'REDMI', name: 'File Redmi', duration: 'MỚI NHẤT', sold: 45, price: 0, stock: 999, badge: '', img: 'file', downloadLink: 'https://link4m.com/vOhZitQA', downloadText: 'Tải Xuống' },
    { id: 6, category: 'OPPO', name: 'File Oppo', duration: 'MỚI NHẤT', sold: 60, price: 0, stock: 999, badge: '', img: 'file', downloadLink: 'https://link4m.com/32HsAJ', downloadText: 'Tải Xuống' },
    { id: 7, category: 'NHẠY', name: 'File nhạy ngày', duration: 'MỚI NHẤT', sold: 120, price: 0, stock: 999, badge: 'HOT', img: 'file', downloadLink: 'https://link4m.com/HCiWS62T', downloadText: 'Tải Xuống' },
    { id: 8, category: 'AIMLOCK', name: 'File Aimlock 💝', duration: 'MỚI NHẤT', sold: 300, price: 0, stock: 999, badge: 'HOT', img: 'aim', downloadLink: 'https://link4m.com/V6Jii8', downloadText: 'Tải Xuống' },
    { id: 9, category: 'DPI', name: 'DPI Oppo ngày', duration: 'MỚI NHẤT', sold: 70, price: 0, stock: 999, badge: '', img: 'file', downloadLink: 'https://link4m.com/A5YS6yK', downloadText: 'Tải Xuống' },
    { id: 11, category: 'AIMLOCK', name: 'Aimlock Mode IOS&ADR', duration: 'MỚI NHẤT', sold: 210, price: 0, stock: 999, badge: 'HOT', img: 'aim', downloadLink: 'https://link4m.com/qLFbt', downloadText: 'Tải Xuống' },
    { id: 12, category: 'AIMLOCK', name: 'Aimlock Venia', duration: 'MỚI NHẤT', sold: 95, price: 0, stock: 999, badge: '', img: 'aim', downloadLink: 'https://link4m.com/QbY7AjW6', downloadText: 'Tải Xuống' },
    { id: 13, category: 'AIMLOCK', name: 'Aimlock Musy', duration: 'MỚI NHẤT', sold: 110, price: 0, stock: 999, badge: 'MỚI', img: 'aim', downloadLink: 'https://link4m.com/S0E57', downloadText: 'Tải Xuống' },
    { id: 14, category: 'KODER', name: 'Koder Pro', duration: 'MỚI NHẤT', sold: 40, price: 0, stock: 999, badge: '', img: 'file', downloadLink: 'https://link4m.com/cvV1E', downloadText: 'Tải Xuống' },
    { id: 15, category: 'AIMLOCK', name: 'File Aimlock 4/3', duration: '04/03', sold: 85, price: 0, stock: 999, badge: '', img: 'aim', downloadLink: 'https://link4m.com/FS3xL5l', downloadText: 'Tải Xuống' },
    { id: 16, category: 'AIMLOCK', name: 'Aimlock v2', duration: 'MỚI NHẤT', sold: 130, price: 0, stock: 999, badge: '', img: 'aim', downloadLink: 'https://link4m.com/CKNQD', downloadText: 'Tải Xuống' },
    { id: 17, category: 'AIMLOCK', name: 'Aimlock Bin', duration: 'MỚI NHẤT', sold: 55, price: 0, stock: 999, badge: '', img: 'aim', downloadLink: 'https://link4m.com/zoeczLvi', downloadText: 'Tải Xuống' },
    { id: 18, category: 'IOS', name: 'Aimlock IOS', duration: 'MỚI NHẤT', sold: 160, price: 0, stock: 999, badge: 'HOT', img: 'aim', downloadLink: 'https://link4m.com/AI2u7', downloadText: 'Tải Xuống' },
    { id: 19, category: 'DPI', name: 'DPI Redmi', duration: 'MỚI NHẤT', sold: 75, price: 0, stock: 999, badge: '', img: 'file', downloadLink: 'https://link4m.com/8jfhxGcx', downloadText: 'Tải Xuống' },
    { id: 20, category: 'DPI', name: 'DPI Oppo', duration: 'MỚI NHẤT', sold: 90, price: 0, stock: 999, badge: '', img: 'file', downloadLink: 'https://link4m.com/FUyFizy', downloadText: 'Tải Xuống' },
    { id: 21, category: 'TỐI ƯU', name: 'Game Turbo X Pro 4.5', duration: 'MỚI NHẤT', sold: 99, price: 0, stock: 999, badge: 'MỚI', img: 'file', downloadLink: 'https://fnote.net/notes/7Ha4kJ', downloadText: 'Tải Xuống' },
    { id: 22, category: 'TỐI ƯU', name: 'Nebula Touch Premium', duration: 'V1.0.9 BETA', sold: 45, price: 0, stock: 999, badge: 'HOT', img: 'aim', downloadLink: 'https://www.mediafire.com/file/tzp1g3kxn694er1/Nebula+Touch+v1.0.9+Beta_crack.apk/file', downloadText: 'Tải APK' }
];

// ==================== QUẢN LÝ GIỎ HÀNG ====================
function loadCart() {
    var data = localStorage.getItem('cart');
    return data ? JSON.parse(data) : [];
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// ==================== BIẾN TOÀN CỤC ====================
var cart = [];
var currentFilter = 'all';

// ==================== DOM ELEMENTS ====================
var productGrid = document.getElementById('productGrid');
var productCountBadge = document.getElementById('productCountBadge');
var cartOverlay = document.getElementById('cartOverlay');
var openCartBtn = document.getElementById('openCart');
var closeCartBtn = document.getElementById('closeCart');
var cartItemsEl = document.getElementById('cartItems');
var cartCountEl = document.getElementById('cartCount');
var cartTotalEl = document.getElementById('cartTotal');
var checkoutBtn = document.getElementById('checkoutBtn');
var categoryFilter = document.getElementById('categoryFilter');
var supportToggle = document.getElementById('supportToggle');
var supportOptions = document.getElementById('supportOptions');

// ==================== HÀM TIỆN ÍCH ====================
function formatPrice(price) {
    if (price === 0) return 'Miễn phí';
    return price.toLocaleString('vi-VN') + ' ₫';
}

function showShop() {
    productCountBadge.textContent = products.length + ' sản phẩm';
    cart = loadCart();
    renderProducts();
    updateCartUI();
}

// ==================== HIỂN THỊ SẢN PHẨM ====================
function renderProducts() {
    var html = '';
    var filteredProducts = products;

    if (currentFilter !== 'all') {
        filteredProducts = products.filter(function(p) {
            return p.category === currentFilter;
        });
    }

    for (var i = 0; i < filteredProducts.length; i++) {
        var p = filteredProducts[i];
        var imageHTML = '';
        
        if (p.img === 'freefire') {
            imageHTML = '<div class="card-image">';
            if (p.badge) imageHTML += '<span class="badge">' + p.badge + '</span>';
            imageHTML += '<div class="freefire-icon">🔥</div></div>';
        } else if (p.img === 'aim') {
            imageHTML = '<div class="card-image">';
            if (p.badge) imageHTML += '<span class="badge">' + p.badge + '</span>';
            imageHTML += '<div style="font-size: 2.5rem;">🎯</div></div>';
        } else {
            imageHTML = '<div class="card-image">';
            if (p.badge) imageHTML += '<span class="badge">' + p.badge + '</span>';
            imageHTML += '<div style="font-size: 2.5rem;">📁</div></div>';
        }

        var buttonHTML = '';
        if (p.downloadLink) {
            buttonHTML = '<a href="' + p.downloadLink + '" target="_blank" class="card-btn download">' + (p.downloadText || 'Tải xuống') + '</a>';
        } else {
            buttonHTML = '<button class="card-btn" data-id="' + p.id + '">Thêm vào giỏ</button>';
        }

        html += '<div class="product-card">' +
                    imageHTML +
                    '<div class="card-content">' +
                        '<div class="card-category">' + p.category + '</div>' +
                        '<div class="card-title">' + p.name + '</div>' +
                        '<div class="card-meta">' +
                            '<span>' + p.duration + '</span>' +
                            '<span>' + p.sold + ' đã bán</span>' +
                        '</div>' +
                        '<div class="card-bottom">' +
                            '<div class="card-price">' + formatPrice(p.price) + '</div>' +
                            '<div class="card-stock">Còn ' + p.stock + ' sản phẩm</div>' +
                            buttonHTML +
                        '</div>' +
                    '</div>' +
                '</div>';
    }
    productGrid.innerHTML = html;
}

// ==================== CẬP NHẬT GIỎ HÀNG ====================
function updateCartUI() {
    var totalItems = 0;
    var totalPrice = 0;
    for (var i = 0; i < cart.length; i++) {
        totalItems += cart[i].qty;
        totalPrice += cart[i].price * cart[i].qty;
    }
    
    cartCountEl.textContent = totalItems;

    if (cart.length === 0) {
        cartItemsEl.innerHTML = '<div class="empty-cart">Giỏ hàng trống</div>';
    } else {
        var html = '';
        for (var i = 0; i < cart.length; i++) {
            var item = cart[i];
            html += '<div class="cart-item">' +
                        '<div class="cart-item-info">' +
                            '<span class="cart-item-name">' + item.name + '</span>' +
                            '<span class="cart-item-price">' + formatPrice(item.price) + '</span>' +
                        '</div>' +
                        '<div class="cart-item-qty">' +
                            '<button class="qty-btn" data-id="' + item.id + '" data-action="decrease">−</button>' +
                            '<span>' + item.qty + '</span>' +
                            '<button class="qty-btn" data-id="' + item.id + '" data-action="increase">+</button>' +
                            '<button class="remove-btn" data-id="' + item.id + '" data-action="remove">🗑️</button>' +
                        '</div>' +
                    '</div>';
        }
        cartItemsEl.innerHTML = html;
    }

    cartTotalEl.textContent = formatPrice(totalPrice);
}

// ==================== THÊM VÀO GIỎ ====================
function addToCart(id) {
    var product = null;
    for (var i = 0; i < products.length; i++) {
        if (products[i].id === id) {
            product = products[i];
            break;
        }
    }
    if (!product) return;

    var existing = null;
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].id === id) {
            existing = cart[i];
            break;
        }
    }

    if (existing) {
        existing.qty++;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            qty: 1
        });
    }
    saveCart(cart);
    updateCartUI();
    openCart();
}

// ==================== THAY ĐỔI SỐ LƯỢNG ====================
function changeQty(id, action) {
    var item = null;
    var index = -1;
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].id === id) {
            item = cart[i];
            index = i;
            break;
        }
    }
    if (!item) return;

    if (action === 'increase') {
        item.qty++;
    } else if (action === 'decrease') {
        item.qty--;
        if (item.qty <= 0) {
            cart.splice(index, 1);
        }
    } else if (action === 'remove') {
        cart.splice(index, 1);
    }
    saveCart(cart);
    updateCartUI();
}

// ==================== MỞ / ĐÓNG GIỎ HÀNG ====================
function openCart() {
    cartOverlay.classList.add('open');
}

function closeCart() {
    cartOverlay.classList.remove('open');
}

// ==================== THANH TOÁN ====================
function checkout() {
    if (cart.length === 0) {
        alert('Giỏ hàng của bạn đang trống!');
        return;
    }
    var totalPrice = 0;
    for (var i = 0; i < cart.length; i++) {
        totalPrice += cart[i].price * cart[i].qty;
    }
    alert('Cảm ơn bạn đã mua hàng!\nTổng thanh toán: ' + formatPrice(totalPrice));
    cart = [];
    saveCart(cart);
    updateCartUI();
    closeCart();
}

// ==================== GẮN SỰ KIỆN ====================
categoryFilter.addEventListener('change', function(e) {
    currentFilter = e.target.value;
    renderProducts();
});

productGrid.addEventListener('click', function (e) {
    var target = e.target.closest('button') || e.target.closest('a');
    if (!target) return;
    
    if (target.classList.contains('card-btn') && !target.classList.contains('download')) {
        var id = Number(target.dataset.id);
        addToCart(id);
    }
});

cartItemsEl.addEventListener('click', function (e) {
    var target = e.target.closest('button');
    if (!target) return;
    var id = Number(target.dataset.id);
    var action = target.dataset.action;
    if (id && action) {
        changeQty(id, action);
    }
});

openCartBtn.addEventListener('click', openCart);
closeCartBtn.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', function (e) {
    if (e.target === cartOverlay) closeCart();
});
checkoutBtn.addEventListener('click', checkout);

// Toggle Support Widget
supportToggle.addEventListener('click', function () {
    supportOptions.classList.toggle('show');
    supportToggle.classList.toggle('active');
    // Đổi icon khi mở/đóng
    if(supportOptions.classList.contains('show')) {
        supportToggle.innerHTML = '✖';
    } else {
        supportToggle.innerHTML = '💬';
    }
});

// ==================== KHỞI TẠO ====================
showShop();