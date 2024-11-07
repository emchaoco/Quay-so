// app.js

// Mảng để lưu trữ người dùng đã đăng ký
let users = [];

// Hiển thị danh sách người dùng đã đăng ký
function displayUserList() {
    const userListBody = document.querySelector('#userList tbody');
    userListBody.innerHTML = ''; // Xóa nội dung cũ
    users.forEach(user => {
        const userRow = document.createElement('tr');
        userRow.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.password}</td>
            <td>${user.phone}</td>
            <td>${user.address}</td>
        `;
        userListBody.appendChild(userRow);
    });
}

// Hiển thị phần đăng ký
document.getElementById('showRegistrationButton').onclick = function() {
    document.getElementById('registrationSection').style.display = 'block';
    document.getElementById('adminLoginSection').style.display = 'none';
    document.getElementById('spinSection').style.display = 'none';
};

// Hiển thị phần đăng nhập admin
document.getElementById('showAdminLoginButton').onclick = function() {
    document.getElementById('adminLoginSection').style.display = 'block';
    document.getElementById('registrationSection').style.display = 'none';
    document.getElementById('spinSection').style.display = 'none';
};

// Xử lý đăng ký
document.getElementById('registrationForm').onsubmit = function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    // Lưu thông tin người dùng vào mảng
    users.push({ name, email, password, phone, address });
    document.getElementById('registrationMessage').textContent = "Đăng ký thành công!";

    // Ẩn phần đăng ký và hiện phần quay số
    document.getElementById('registrationSection').style.display = 'none';
    document.getElementById('spinSection').style.display = 'block';
};

// Xử lý đăng nhập admin
document.getElementById('adminLoginForm').onsubmit = function(e) {
    e.preventDefault();
    const adminPassword = document.getElementById('adminPassword').value;
    const correctPassword = 'admin123'; // Mật khẩu admin

    if (adminPassword === correctPassword) {
        document.getElementById('adminLoginSection').style.display = 'none';
        document.getElementById('userListSection').style.display = 'block'; // Hiện danh sách người dùng
        displayUserList(); // Cập nhật danh sách
    } else {
        document.getElementById('loginMessage').textContent = "Mật khẩu không chính xác!";
    }
};

// Xóa tất cả người dùng
document.getElementById('clearUsersButton').onclick = function() {
    users = []; // Xóa tất cả người dùng
    displayUserList(); // Cập nhật danh sách
};

// Quay số
document.getElementById('spinButton').onclick = function() {
    const randomNumberSquare = document.getElementById('randomNumberSquare');
    let randomNumber = 0;
    let spinCount = 0;
    
    const spinInterval = setInterval(() => {
        randomNumber = Math.floor(Math.random() * 10); // Giả sử bạn có 10 giải thưởng
        randomNumberSquare.textContent = randomNumber;
        spinCount++;
        if (spinCount >= 30) { // Dừng sau 30 lần quay
            clearInterval(spinInterval);
            randomNumberSquare.textContent = randomNumber; // Cập nhật số cuối cùng
        }
    }, 100);
};
