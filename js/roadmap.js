const applyEffect = (element) => {
    const car = document.querySelector(".carImage");
    const stationLeftTopOffset = element.parentElement.offsetLeft;
    const mainTitle = element.nextElementSibling.firstElementChild;
    const subTitle = element.nextElementSibling.lastElementChild;

    car.style.left = `${stationLeftTopOffset}px`;
    car.style.transition = '1s ease-out';
    mainTitle.style.opacity = '1';
    subTitle.style.opacity = '1';
    subTitle.style.transform = 'translateX(0)'
};

const removeEffect = (element) => {
    const mainTitle = element.nextElementSibling.firstElementChild;
    const subTitle = element.nextElementSibling.lastElementChild;
    
    mainTitle.style.opacity = '0.5';
    subTitle.style.opacity = '0';
    subTitle.style.transform = 'translateX(-100%)';
};

const moveCarRestore = (element) => {
    const car = document.querySelector(".carImage");
    const mainTitle = element.nextElementSibling.firstElementChild;
    const subTitle = element.nextElementSibling.lastElementChild;

    setTimeout(() => {
        car.style.left = '-100px';
        car.style.transition = '0s ease-out';
    }, 1000);
    car.style.left = '1024px'
    mainTitle.style.opacity = '0.5';
    subTitle.style.opacity = '0';
    subTitle.style.transform = 'translateX(-100%)';
}

// 로그인 시 헤더에 표시
const loginInfo = () => {
    const loginData = JSON.parse(localStorage.getItem("loginInfo"));
    const loginMemberInfoDiv = document.querySelector(".loginMemberInfo");
    
    if(loginData) {
        if(loginData.permission === 'normal') {
            loginMemberInfoDiv.innerHTML = `<a href='myPage.html'>${loginData.userName}</a>님, 환영합니다!`;
            loginText.innerHTML = `LOGOUT`;
            joinText.innerHTML = '';
        } else if(loginData.permission === 'admin') {
            loginMemberInfoDiv.innerHTML = `<a href='managerPage.html'>매니저 ${loginData.managerId}</a> 계정으로 접속되었습니다.`;
            loginText.innerHTML = `LOGOUT`;
            joinText.innerHTML = '';
        }
    } else {
        loginMemberInfoDiv.innerHTML = '';
        loginText.innerHTML = 'LOGIN';
        joinText.innerHTML = 'JOIN';
    }
};

loginInfo();

const loginBtn = (element) => {
    const loginMemberInfoDiv = document.querySelector(".loginMemberInfo");
    
    if(element.innerHTML === 'LOGIN') {
        window.location.href = "login.html";
        return;
    }

    if(element.innerHTML === 'LOGOUT') {
        const flag = confirm("로그아웃 하시겠습니까?");
        if(flag) {
            localStorage.removeItem('loginInfo');
            loginMemberInfoDiv.innerHTML = '';
            loginText.innerHTML = 'LOGIN';
            joinText.innerHTML = 'JOIN';
            window.location.href = 'index.html';
        } else {
            return;
        }
    }
};