const logoLink = document.querySelector('.logo-link');
const cartNotice = headerSearch.querySelector('.cart-notice');
const noCart = headerSearch.querySelector('.no-cart');
const signInBtns = modal.querySelectorAll('.sign-in-btn');
const headerNav = document.querySelector('.header__navbar');
const loginInfo = headerNav.querySelector('.item-login-info');
const logout = headerNav.querySelector('.log-out');
// console.log([loginInfo, loginLink]);

var loginStatus = false;
var loginAcount = [
    {
        userName: 'admin',
        pass: 'admin'
    }, 
    {
        userName: 'Quang',
        pass: 'quang'
    }
]

//Check login status
function checkLogin(check) {
    if (check) {
        cartNotice.style.display = 'block';
        noCart.style.display = 'none';
        loginLink.style.display = 'none';
        registerLink.style.display = 'none';
        loginInfo.style.display = 'block';
    } else {
        noCart.style.display = 'flex';
        cartNotice.style.display = 'none';
        loginLink.style.display = 'block';
        registerLink.style.display = 'block';
        loginInfo.style.display = 'none';
    }
}

//Test login
// logoLink.addEventListener('click', (e) => {
//     e.preventDefault();
//     if (loginStatus) {
//         loginStatus = false;
//         checkLogin(false);
//     } else {
//         loginStatus = true;
//         checkLogin(true);
//     }
    
// })

for(let i in signInBtns) {
    if(signInBtns.hasOwnProperty(i)) {
        signInBtns[i]. addEventListener('click', () => {
            //Login modal is true
            if(modalLogin.style.display == 'flex') {
                let userName = modal.querySelector('.login-user-name').value;
                let password = modal.querySelector('.login-password').value;
                let check = loginAcount.some((account) => account.userName === userName & account.pass === password);
                if (check) {
                    checkLogin(true);
                    modal.style.display = 'none';
                    showSuccessToast(`Đăng nhập thành công!`);
                } else {
                    showWarningToast('Sai tên đăng nhập hoặc mật khẩu');
                }
            //Register modal is true
            } else if (modalRegister.style.display = 'flex') {
                let userName = modal.querySelector('.register-user-name').value;
                let password = modal.querySelector('.register-password').value;
                let rePassword = modal.querySelector('.register-repassword').value;
                let checkAccount = loginAcount.some((account) => account.userName === userName);

                if (userName.length == 0 || password.length == 0 || rePassword.length == 0) {
                    showWarningToast('Vui lòng điền đủ thông tin');
                } else if (checkAccount) {
                    showWarningToast('Tên đăng nhập đã tồn tại');
                } else if (userName.match(/[^a-zA-Z0-9]/)) {
                    showWarningToast('Tên đăng nhập không hợp lệ')
                } else if (userName.length <6 || userName.length > 20) {
                    showWarningToast('Tên đăng nhập > 6 kí tự và < 20 kí tự');
                } else if (password.length <6 || password.length > 20) {
                    showWarningToast('Mật khẩu > 6 kí tự và < 20 kí tự');
                } else if (password != rePassword) {
                    showWarningToast('Nhập lại mật khẩu');  
                } else {
                    showSuccessToast(`Đăng ký thành công!`);
                    loginAcount.push({userName: userName, pass: password})
                }

            }
        })
    }
}

// console.log(logout)
logout.addEventListener('click', () => {
   checkLogin(false);
})

//Toast funtion
function toast({
    title = '',
    message = '',
    type = 'info',
    duration = 1000
}) {
    const main = document.getElementById('toast');
    if (main) {
        //Tạo thẻ div
        const toast = document.createElement('div');
        //Tạo list icon
        const icons = {
            success: 'fa-sharp fa-solid fa-circle-check',
            info: 'fa-sharp fa-solid fa-circle-info',
            error: 'fa-solid fa-circle-exclamation',
            warning: 'fa-sharp fa-solid fa-triangle-exclamation'
        }
        const icon = icons[type];
        const delay = (duration / 1000).toFixed(2)

        //Gỡ toast sau thời gian duration
        const removeToast = setTimeout(function () {
            main.removeChild(toast);
        }, duration + 1000)

        //Tắt toast khi bấm close
        toast.onclick = function (event) {
            if (event.target.closest(".toast__close")) {
                main.removeChild(toast);
                //Bỏ biến removeToast
                clearTimeout(removeToast);
            }
        }

        //Đặt tên <div class="toast toast--..."></div>
        toast.classList.add('toast', `toast--${type}`);
        //Thêm animation
        toast.style.animation = `slideInLeft ease 0.3s, fadeOut linear 1s ${delay}s forwards`;
        //Thêm phần HTML element
        toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${message}</p>
             </div>
            <div class="toast__close">
                <i class="fa-solid fa-rectangle-xmark"></i>
            </div>
        
        `;
        //Add toast vào main
        main.appendChild(toast);
    }
}
//Gọi hàm toast
// toast({
//     title: 'Success',
//     message: 'Đăng nhập thành công',
//     type: 'error',
//     duration: 3000
// });

function showSuccessToast(text) {
    toast({
        title: 'Success',
        message: text,
        type: 'success',
        duration: 3000
    });
}
function showErrorToast(text) {
    toast({
        title: 'Error',
        message: text,
        type: 'error',
        duration: 3000
    });
}
function showInfoToast(text) {
    toast({
        title: 'Info',
        message: text,
        type: 'info',
        duration: 3000
    });
}
function showWarningToast(text) {
    toast({
        title: 'warning',
        message: text,
        type: 'warning',
        duration: 3000
    });
}