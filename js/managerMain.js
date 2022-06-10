   // 관리자 계정 로그인 
const managerAvailCheck = () => {
    if(!managerId.value || !managerPwd.value) return;
    
    const superManagers = [{managerId:'manager1', managerPwd:'manager1'},{managerId:'manager2', managerPwd:'manager2'},{managerId:'manager3', managerPwd:'manager3'}];

    if(Array.isArray(superManagers)) {
        const managerInfo = superManagers.find(manager => manager.managerId === managerId.value);
        if(managerInfo) {
            if(managerInfo.managerPwd === managerPwd.value) {
                console.log('로그인 성공')
                managerId.value = '';
                managerPwd.value = '';
                managerLoginIsTrue(managerInfo.managerId, managerInfo.managerPwd);
                window.location.href = "index.html";
                return;
            } else {
                alert('비밀번호가 일치하지 않습니다.');
                window.location.href = "managerMain.html";
                return;
            }
        } else {
            alert('존재하지 않는 매니저 아이디입니다.');
            window.location.href = "managerMain.html";
            return;
        }
    }
};

managerAvailCheck();

// 매니저 로그인 회원 정보 클래스
class LoginManager {
    constructor(managerId, managerPwd, permission) {
        this.managerId = managerId;
        this.managerPwd = managerPwd;
        this.permission = permission;
    }    
};

// 매니저 로그인 회원 정보저장
const managerLoginIsTrue = (managerId, managerPwd) => {
    const loginManager = new LoginManager(managerId, managerPwd, 'admin');
    const loginManagerData = JSON.stringify(loginManager);
    localStorage.setItem("loginInfo", loginManagerData);
};


// 관리자모드 로그인 시 헤더에 표시
const loginInfo = () => {
    const loginData = JSON.parse(localStorage.getItem("loginInfo"));
    const loginMemberInfoDiv = document.querySelector(".loginMemberInfo");
    
    if(loginData) {
        if(loginData.permission === 'normal') {
            loginMemberInfoDiv.innerHTML = `${loginData.userName}님, 환영합니다!`;
            loginText.innerHTML = `LOGOUT`;
            joinText.innerHTML = '';
        } else if(loginData.permission === 'admin') {
            loginMemberInfoDiv.innerHTML = `매니저 ${loginData.managerId} 계정으로 접속되었습니다.`;
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

// 비밀번호 창에서 엔터 입력 시
document.querySelector("#managerPwd").addEventListener('keyup', (event) => {
    if(event.key === 'Enter') managerAvailCheck();
    else return;
});

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