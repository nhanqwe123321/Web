// ==================== ADMIN PASSWORD ====================
const PWD_ADMIN = "nhan";

const welcomeOverlay = document.getElementById('welcomeOverlay');
const choiceButtons = document.getElementById('choiceButtons');
const adminPwdForm = document.getElementById('adminPwdForm');
const passwordInput = document.getElementById('passwordInput');
const passwordSubmit = document.getElementById('passwordSubmit');
const passwordError = document.getElementById('passwordError');
const togglePassword = document.getElementById('togglePassword');
const headerLogoutBtn = document.getElementById('headerLogoutBtn');

let isAdmin = false;

// Kiểm tra phiên đăng nhập đã lưu
const savedRole = localStorage.getItem('shopRole');
if (savedRole === 'admin') {
    isAdmin = true;
    welcomeOverlay.classList.add('hidden');
    applyRole();
} else if (savedRole === 'user') {
    welcomeOverlay.classList.add('hidden');
    applyRole();
}

// ==================== WELCOME SCREEN LOGIC ====================
document.getElementById('guestBtn').addEventListener('click', () => {
    isAdmin = false;
    localStorage.setItem('shopRole', 'user');
    welcomeOverlay.classList.add('hidden');
    applyRole();
    renderProducts();
});

document.getElementById('adminChoiceBtn').addEventListener('click', () => {
    choiceButtons.style.display = 'none';
    adminPwdForm.classList.add('show');
    passwordInput.focus();
});

document.getElementById('backBtn').addEventListener('click', () => {
    adminPwdForm.classList.remove('show');
    choiceButtons.style.display = 'flex';
    passwordInput.value = '';
    passwordError.style.display = 'none';
});

function checkPassword() {
    const val = passwordInput.value.trim();
    if (val === PWD_ADMIN) {
        isAdmin = true;
        localStorage.setItem('shopRole', 'admin');
        welcomeOverlay.classList.add('hidden');
        applyRole();
        renderProducts();
    } else {
        passwordError.style.display = 'block';
        passwordInput.value = '';
        passwordInput.focus();
        passwordError.style.animation = 'none';
        void passwordError.offsetHeight;
        passwordError.style.animation = 'shake .3s';
    }
}

passwordInput.addEventListener('input', () => { passwordError.style.display = 'none'; });
passwordSubmit.addEventListener('click', checkPassword);
passwordInput.addEventListener('keypress', e => { if (e.key === 'Enter') checkPassword(); });
togglePassword.addEventListener('click', () => {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    togglePassword.textContent = type === 'password' ? '👁️' : '🙈';
});

// ==================== ROLE MANAGEMENT ====================
function applyRole() {
    const adminBtn = document.getElementById('adminPanelBtn');
    const adminBadge = document.getElementById('adminBadge');
    const adminActions = document.querySelectorAll('.admin-card-actions');
    const loggedIn = localStorage.getItem('shopRole') !== null;
    if (isAdmin) {
        adminBtn.classList.add('show');
        adminBadge.classList.add('show');
        adminActions.forEach(el => el.classList.add('show'));
    } else {
        adminBtn.classList.remove('show');
        adminBadge.classList.remove('show');
        adminActions.forEach(el => el.classList.remove('show'));
    }
    if (loggedIn) headerLogoutBtn.classList.add('show');
    else headerLogoutBtn.classList.remove('show');
}

// ==================== LOGOUT ====================
function headerLogout() {
    if (!confirm('Bạn có chắc muốn đăng xuất không?')) return;
    localStorage.removeItem('shopRole');
    isAdmin = false;
    applyRole();
    adminOverlay.classList.remove('open');
    welcomeOverlay.classList.remove('hidden');
    choiceButtons.style.display = 'flex';
    adminPwdForm.classList.remove('show');
    passwordInput.value = '';
    renderProducts();
}
headerLogoutBtn.addEventListener('click', headerLogout);

// ==================== PRODUCTS DATA ====================
const DEFAULT_PRODUCTS = [
    { id: 1, category: 'GAME', name: 'Định vị moco', duration: 'VĨNH VIỄN', sold: 99, price: 0, stock: 999, badge: 'HOT', img: 'freefire', image: '', downloadLink: 'https://www.mediafire.com/file/rbh9kfdmzz9wnh4/Dragon_Injector_V2.apk/file', downloadText: 'Tải APK' },
    { id: 8, category: 'AIMLOCK', name: 'File Aimlock 💝', duration: 'MỚI NHẤT', sold: 300, price: 0, stock: 999, badge: 'HOT', img: 'aim', image: '', downloadLink: 'https://link4m.com/V6Jii8', downloadText: 'Tải Xuống' },
    { id: 21, category: 'TỐI ƯU', name: 'Game Turbo X Pro 4.5', duration: 'MỚI NHẤT', sold: 99, price: 0, stock: 999, badge: 'MỚI', img: 'file', image: '', downloadLink: 'https://fnote.net/notes/7Ha4kJ', downloadText: 'Tải Xuống' },
    { id: 22, category: 'TỐI ƯU', name: 'Nebula Touch Premium', duration: 'V1.0.9 BETA', sold: 45, price: 0, stock: 999, badge: 'HOT', img: 'aim', image: '', downloadLink: 'https://www.mediafire.com/file/tzp1g3kxn694er1/Nebula+Touch+v1.0.9+Beta_crack.apk/file', downloadText: 'Tải APK' },
    { id: 23, category: 'AIMLOCK', name: 'Aimlock Mode', duration: 'MỚI NHẤT', sold: 0, price: 0, stock: 999, badge: 'MỚI', img: 'aim', image: '', downloadLink: 'https://www.mediafire.com/file/drcdhofk7fc7s0u/', downloadText: 'Tải Xuống' },
    { id: 24, category: 'AIMLOCK', name: 'Aimlock Plus', duration: 'MỚI NHẤT', sold: 0, price: 0, stock: 999, badge: 'MỚI', img: 'aim', image: '', downloadLink: 'https://www.mediafire.com/file/ofymzx6bv4a39t4/AIMLOCK+H%E1%BB%96+TR%E1%BB%A2+FULL+%C4%90%E1%BB%8E+!!!!%F0%9F%AA%BD.zip/file', downloadText: 'Tải Xuống' },
    { id: 25, category: 'AIMLOCK', name: 'AIMLOCK FULLRED', duration: 'MỚI NHẤT', sold: 0, price: 0, stock: 999, badge: 'MỚI', img: 'aim', image: '', downloadLink: 'https://www.mediafire.com/file/0h152k2zfdukhkd/AIMLOCK+FULLRED.zip/file?dkey=g63ydm99lav&r=994&zarsrc=1303', downloadText: 'Tải Xuống' },
    { id: 26, category: 'AIMLOCK', name: 'Aim Head + Fix Rung', duration: 'MỚI NHẤT', sold: 0, price: 0, stock: 999, badge: 'MỚI', img: 'aim', image: '', downloadLink: 'https://link4m.org/go/aDPGEeJ', downloadText: 'Tải Xuống' }
];

let products = JSON.parse(localStorage.getItem('shopProducts')) || DEFAULT_PRODUCTS;
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentFilter = 'all';
let currentImageBase64 = '';

const saveProducts = () => localStorage.setItem('shopProducts', JSON.stringify(products));
const saveCart = () => localStorage.setItem('cart', JSON.stringify(cart));

// ==================== DOM ELEMENTS ====================
const productGrid = document.getElementById('productGrid');
const productCountBadge = document.getElementById('productCountBadge');
const cartOverlay = document.getElementById('cartOverlay');
const cartItemsEl = document.getElementById('cartItems');
const cartCountEl = document.getElementById('cartCount');
const cartTotalEl = document.getElementById('cartTotal');
const categoryFilter = document.getElementById('categoryFilter');
const supportToggle = document.getElementById('supportToggle');
const supportOptions = document.getElementById('supportOptions');
const adminOverlay = document.getElementById('adminOverlay');
const adminPanelBtn = document.getElementById('adminPanelBtn');
const adminProductList = document.getElementById('adminProductList');
const adminProductCount = document.getElementById('adminProductCount');
const imageInput = document.getElementById('imageInput');
const imagePreview = document.getElementById('imagePreview');
const pickImageBtn = document.getElementById('pickImageBtn');
const removeImageBtn = document.getElementById('removeImageBtn');

// ==================== HELPERS ====================
const createEl = (tag, className = '', text = '') => {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (text) el.textContent = text;
    return el;
};
const formatPrice = price => price === 0 ? 'Miễn phí' : Number(price).toLocaleString('vi-VN') + ' ₫';

// ==================== IMAGE UPLOAD ====================
function setImagePreview(base64) {
    currentImageBase64 = base64 || '';
    imagePreview.innerHTML = '';
    if (currentImageBase64) {
        const img = document.createElement('img');
        img.src = currentImageBase64;
        img.alt = 'Preview';
        imagePreview.appendChild(img);
        removeImageBtn.style.display = 'inline-flex';
    } else {
        const ph = createEl('span', 'placeholder', '🖼️');
        imagePreview.appendChild(ph);
        removeImageBtn.style.display = 'none';
    }
}

pickImageBtn.addEventListener('click', () => imageInput.click());

imageInput.addEventListener('change', e => {
    const file = e.target.files[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) return alert('Vui lòng chọn file ảnh!');
    if (file.size > 20 * 1024 * 1024) return alert('❌ Ảnh quá lớn! Vui lòng chọn ảnh dưới 20MB.');
    if (file.size > 2 * 1024 * 1024) {
        const sizeMB = (file.size / 1024 / 1024).toFixed(1);
        const ok = confirm('⚠️ Ảnh của bạn khá lớn (' + sizeMB + 'MB).\n\nViệc dùng ảnh lớn có thể làm trang chậm, tràn bộ nhớ.\n\nBạn có muốn tiếp tục không?\n(Khuyến nghị: ảnh < 2MB)');
        if (!ok) { imageInput.value = ''; return; }
    }
    const reader = new FileReader();
    reader.onload = ev => setImagePreview(ev.target.result);
    reader.readAsDataURL(file);
    imageInput.value = '';
});

removeImageBtn.addEventListener('click', () => setImagePreview(''));

// ==================== RENDER PRODUCTS ====================
function renderProducts() {
    productCountBadge.textContent = products.length + ' sản phẩm';
    productGrid.innerHTML = '';
    const filtered = currentFilter === 'all' ? products : products.filter(p => p.category === currentFilter);
    const fragment = document.createDocumentFragment();
    filtered.forEach(p => {
        const card = createEl('div', 'product-card');
        if (isAdmin) {
            const actions = createEl('div', 'admin-card-actions show');
            const editBtn = createEl('button', 'btn-edit', '✏️');
            editBtn.onclick = () => openEditForm(p.id);
            const delBtn = createEl('button', 'btn-delete', '🗑️');
            delBtn.onclick = () => deleteProduct(p.id);
            actions.append(editBtn, delBtn);
            card.appendChild(actions);
        }
        const imgDiv = createEl('div', 'card-image');
        if (p.badge) imgDiv.appendChild(createEl('span', 'badge', p.badge));
        if (p.image) {
            const img = document.createElement('img');
            img.src = p.image;
            img.alt = p.name;
            imgDiv.appendChild(img);
        } else {
            const iconDiv = createEl('div');
            if (p.img === 'freefire') { iconDiv.className = 'freefire-icon'; iconDiv.textContent = '🔥'; }
            else if (p.img === 'aim') { iconDiv.style.fontSize = '2.5rem'; iconDiv.textContent = '🎯'; }
            else { iconDiv.style.fontSize = '2.5rem'; iconDiv.textContent = '📁'; }
            imgDiv.appendChild(iconDiv);
        }
        const contentDiv = createEl('div', 'card-content');
        contentDiv.appendChild(createEl('div', 'card-category', p.category));
        contentDiv.appendChild(createEl('div', 'card-title', p.name));
        const metaDiv = createEl('div', 'card-meta');
        metaDiv.appendChild(createEl('span', '', p.duration));
        metaDiv.appendChild(createEl('span', '', p.sold + ' đã bán'));
        contentDiv.appendChild(metaDiv);
        const bottomDiv = createEl('div', 'card-bottom');
        bottomDiv.appendChild(createEl('div', 'card-price', formatPrice(p.price)));
        bottomDiv.appendChild(createEl('div', 'card-stock', 'Còn ' + p.stock + ' sản phẩm'));
        let btn;
        if (p.downloadLink) {
            btn = createEl('a', 'card-btn download', p.downloadText || 'Tải xuống');
            btn.href = p.downloadLink;
            btn.target = '_blank';
        } else {
            btn = createEl('button', 'card-btn', 'Thêm vào giỏ');
            btn.dataset.id = p.id;
        }
        bottomDiv.appendChild(btn);
        contentDiv.appendChild(bottomDiv);
        card.appendChild(imgDiv);
        card.appendChild(contentDiv);
        fragment.appendChild(card);
    });
    productGrid.appendChild(fragment);
}

// ==================== RENDER CART ====================
function renderCart() {
    const totalItems = cart.reduce((s, i) => s + i.qty, 0);
    cartCountEl.textContent = totalItems;
    cartItemsEl.innerHTML = '';
    if (cart.length === 0) {
        cartItemsEl.appendChild(createEl('div', 'empty-cart', 'Giỏ hàng trống'));
        cartTotalEl.textContent = formatPrice(0);
        return;
    }
    const fragment = document.createDocumentFragment();
    let totalPrice = 0;
    cart.forEach(item => {
        totalPrice += item.price * item.qty;
        const itemDiv = createEl('div', 'cart-item');
        const infoDiv = createEl('div', 'cart-item-info');
        infoDiv.appendChild(createEl('span', 'cart-item-name', item.name));
        infoDiv.appendChild(createEl('span', 'cart-item-price', formatPrice(item.price)));
        const qtyDiv = createEl('div', 'cart-item-qty');
        const decBtn = createEl('button', 'qty-btn', '−');
        decBtn.dataset.id = item.id;
        decBtn.dataset.action = 'decrease';
        const qtySpan = createEl('span', '', item.qty);
        const incBtn = createEl('button', 'qty-btn', '+');
        incBtn.dataset.id = item.id;
        incBtn.dataset.action = 'increase';
        const remBtn = createEl('button', 'remove-btn', '🗑️');
        remBtn.dataset.id = item.id;
        remBtn.dataset.action = 'remove';
        qtyDiv.append(decBtn, qtySpan, incBtn, remBtn);
        itemDiv.append(infoDiv, qtyDiv);
        fragment.appendChild(itemDiv);
    });
    cartItemsEl.appendChild(fragment);
    cartTotalEl.textContent = formatPrice(totalPrice);
}

// ==================== RENDER ADMIN LIST ====================
function renderAdminList() {
    adminProductCount.textContent = products.length;
    adminProductList.innerHTML = '';
    products.forEach(p => {
        const item = createEl('div', 'admin-product-item');
        const info = createEl('div', 'info');
        if (p.image) {
            const thumb = document.createElement('img');
            thumb.className = 'thumb';
            thumb.src = p.image;
            info.appendChild(thumb);
        }
        const textDiv = document.createElement('div');
        textDiv.innerHTML = '<strong>' + p.name + '</strong><span>' + p.category + ' • ' + p.duration + '</span>';
        info.appendChild(textDiv);
        const actions = createEl('div', 'actions');
        const editBtn = createEl('button', 'btn-edit', '✏️');
        editBtn.onclick = () => openEditForm(p.id);
        const delBtn = createEl('button', 'btn-delete', '🗑️');
        delBtn.onclick = () => deleteProduct(p.id);
        actions.append(editBtn, delBtn);
        item.append(info, actions);
        adminProductList.appendChild(item);
    });
}

// ==================== CART LOGIC ====================
function addToCart(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;
    const existing = cart.find(item => item.id === id);
    if (existing) existing.qty++;
    else cart.push({ id: product.id, name: product.name, price: product.price, qty: 1 });
    saveCart();
    renderCart();
    openCart();
}

function changeQty(id, action) {
    const index = cart.findIndex(item => item.id === id);
    if (index === -1) return;
    if (action === 'increase') cart[index].qty++;
    else if (action === 'decrease') { cart[index].qty--; if (cart[index].qty <= 0) cart.splice(index, 1); }
    else if (action === 'remove') cart.splice(index, 1);
    saveCart();
    renderCart();
}

function openCart() { cartOverlay.classList.add('open'); }
function closeCart() { cartOverlay.classList.remove('open'); }

function checkout() {
    if (cart.length === 0) return alert('Giỏ hàng của bạn đang trống!');
    const totalPrice = cart.reduce((s, i) => s + i.price * i.qty, 0);
    alert('Cảm ơn bạn đã mua hàng!\nTổng thanh toán: ' + formatPrice(totalPrice));
    cart = [];
    saveCart();
    renderCart();
    closeCart();
}

// ==================== ADMIN LOGIC ====================
function openAdminPanel() {
    renderAdminList();
    adminOverlay.classList.add('open');
}
function closeAdminPanel() {
    adminOverlay.classList.remove('open');
    resetForm();
}
function resetForm() {
    document.getElementById('editId').value = '';
    document.getElementById('pName').value = '';
    document.getElementById('pCategory').value = 'AIMLOCK';
    document.getElementById('pDuration').value = 'MỚI NHẤT';
    document.getElementById('pPrice').value = '0';
    document.getElementById('pBadge').value = '';
    document.getElementById('pImg').value = 'aim';
    document.getElementById('pLink').value = '';
    document.getElementById('pLinkText').value = 'Tải Xuống';
    setImagePreview('');
}
function openEditForm(id) {
    const p = products.find(x => x.id === id);
    if (!p) return;
    document.getElementById('editId').value = p.id;
    document.getElementById('pName').value = p.name;
    document.getElementById('pCategory').value = p.category;
    document.getElementById('pDuration').value = p.duration;
    document.getElementById('pPrice').value = p.price;
    document.getElementById('pBadge').value = p.badge || '';
    document.getElementById('pImg').value = p.img;
    document.getElementById('pLink').value = p.downloadLink || '';
    document.getElementById('pLinkText').value = p.downloadText || 'Tải Xuống';
    setImagePreview(p.image || '');
    adminOverlay.classList.add('open');
}
function saveProduct() {
    const name = document.getElementById('pName').value.trim();
    if (!name) return alert('Vui lòng nhập tên sản phẩm!');
    const editId = document.getElementById('editId').value;
    const data = {
        name: name,
        category: document.getElementById('pCategory').value,
        duration: document.getElementById('pDuration').value.trim() || 'MỚI NHẤT',
        price: Number(document.getElementById('pPrice').value) || 0,
        badge: document.getElementById('pBadge').value.trim(),
        img: document.getElementById('pImg').value,
        image: currentImageBase64,
        downloadLink: document.getElementById('pLink').value.trim(),
        downloadText: document.getElementById('pLinkText').value.trim() || 'Tải Xuống'
    };
    if (editId) {
        const idx = products.findIndex(p => p.id === Number(editId));
        if (idx !== -1) products[idx] = { ...products[idx], ...data };
        alert('✅ Đã cập nhật sản phẩm!');
    } else {
        const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
        products.push({ id: newId, sold: 0, stock: 999, ...data });
        alert('✅ Đã thêm sản phẩm mới!');
    }
    saveProducts();
    resetForm();
    renderProducts();
    renderAdminList();
}
function deleteProduct(id) {
    if (!confirm('Bạn có chắc muốn xóa sản phẩm này?')) return;
    products = products.filter(p => p.id !== id);
    saveProducts();
    renderProducts();
    renderAdminList();
}

function logout() {
    localStorage.removeItem('shopRole');
    isAdmin = false;
    applyRole();
    adminOverlay.classList.remove('open');
    welcomeOverlay.classList.remove('hidden');
    choiceButtons.style.display = 'flex';
    adminPwdForm.classList.remove('show');
    passwordInput.value = '';
    renderProducts();
}

// ==================== EXPORT CODE ====================
function exportHTML() {
    if (!confirm('📥 Xuất file HTML mới?\n\n• Sản phẩm + ảnh hiện tại sẽ được lưu vào code\n• Người vào sẽ chọn Khách hoặc Admin')) return;
    try {
        let currentHtml = document.documentElement.outerHTML;
        currentHtml = currentHtml.split('<' + '/script>').join('<\\/script>');

        const clean = (sel, cls) => {
            const regex = new RegExp('class="([^"]*)' + cls + '([^"]*)"', 'g');
            currentHtml = currentHtml.replace(regex, 'class="$1$2"');
        };
        clean('#cartOverlay', 'open');
        clean('#adminOverlay', 'open');
        clean('#welcomeOverlay', 'hidden');
        clean('.admin-card-actions', 'show');
        clean('.admin-badge', 'show');
        clean('.admin-btn', 'show');
        clean('.header-logout-btn', 'show');
        clean('.support-options', 'show');
        clean('.support-toggle', 'active');
        clean('#adminPwdForm', 'show');

        currentHtml = currentHtml.replace(/<div class="product-grid" id="productGrid">[\s\S]*?<\/div>/, '<div class="product-grid" id="productGrid"></div>');
        currentHtml = currentHtml.replace(/<div class="cart-items" id="cartItems">[\s\S]*?<\/div>/, '<div class="cart-items" id="cartItems"></div>');
        currentHtml = currentHtml.replace(/<div id="adminProductList">[\s\S]*?<\/div>/, '<div id="adminProductList"></div>');
        currentHtml = currentHtml.replace(/<div class="image-preview" id="imagePreview">[\s\S]*?<\/div>/, '<div class="image-preview" id="imagePreview"><span class="placeholder">🖼️</span></div>');
        currentHtml = currentHtml.replace(/value="[^"]*" id="passwordInput"/, 'value="" id="passwordInput"');

        const prodRegex = /const DEFAULT_PRODUCTS = \[[\s\S]*?\];/;
        currentHtml = currentHtml.replace(prodRegex, 'const DEFAULT_PRODUCTS = ' + JSON.stringify(products) + ';');

        currentHtml = currentHtml.split('<\\/script>').join('<' + '/script>');

        const blob = new Blob([currentHtml], { type: 'text/html;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'index.html';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        alert('✅ Đã xuất file index.html!\n\nHãy thay thế file HTML cũ bằng file mới.');
    } catch (e) {
        alert('❌ Lỗi xuất file: ' + e.message);
    }
}

// ==================== EVENTS ====================
document.getElementById('saveProduct').addEventListener('click', saveProduct);
document.getElementById('exportCodeBtn').addEventListener('click', exportHTML);
document.getElementById('closeAdmin').addEventListener('click', closeAdminPanel);
document.getElementById('logoutBtn').addEventListener('click', logout);
adminPanelBtn.addEventListener('click', openAdminPanel);
adminOverlay.addEventListener('click', e => { if (e.target === adminOverlay) closeAdminPanel(); });

categoryFilter.addEventListener('change', e => {
    currentFilter = e.target.value;
    renderProducts();
});

productGrid.addEventListener('click', e => {
    const target = e.target.closest('.card-btn');
    if (target && !target.classList.contains('download')) addToCart(Number(target.dataset.id));
});

cartItemsEl.addEventListener('click', e => {
    const target = e.target.closest('button');
    if (target && target.dataset.id && target.dataset.action) {
        changeQty(Number(target.dataset.id), target.dataset.action);
    }
});

document.getElementById('openCart').addEventListener('click', openCart);
document.getElementById('closeCart').addEventListener('click', closeCart);
cartOverlay.addEventListener('click', e => { if (e.target === cartOverlay) closeCart(); });
document.getElementById('checkoutBtn').addEventListener('click', checkout);

supportToggle.addEventListener('click', () => {
    supportOptions.classList.toggle('show');
    supportToggle.classList.toggle('active');
    supportToggle.innerHTML = supportOptions.classList.contains('show') ? '✖' : '💬';
});

// ==================== INIT ====================
renderProducts();
renderCart();