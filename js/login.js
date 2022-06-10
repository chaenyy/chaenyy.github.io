// 로그인 버튼 클릭
document.querySelector("#finalLoginBtn").addEventListener('click', () => {
    loginIsvalid();
});
// 아이디 창에서 엔터 입력 시
document.querySelector("#userId").addEventListener('keyup', (event) => {
    if(event.key === 'Enter') {
        alert("비밀번호를 입력해주세요.");
    } else return;
    userPwd.focus();
});
// 비밀번호 창에서 엔터 입력 시
document.querySelector("#userPwd").addEventListener('keyup', (event) => {
    if(event.key === 'Enter') loginIsvalid();
    else return;
});

// 로그인 유효성 검사
const loginIsvalid = () => {
    if(!userId.value || !userPwd.value) return;

    const members = JSON.parse(localStorage.getItem("members"));

    if(Array.isArray(members)) {
        const memberInfo = members.find(member => member.userId === userId.value);
        if(memberInfo) {
            if(memberInfo.userPwd === userPwd.value) {
                userId.value = '';
                userPwd.value = '';
                loginIsTrue(memberInfo.userId, memberInfo.userName);
                window.location.href = "index.html";
                return;
            } else {
                alert('비밀번호가 일치하지 않습니다.');
                window.location.href = "login.html";
                return;
            }
        } else {
            alert('존재하지 않는 아이디입니다. 회원가입을 진행해주세요.');
            window.location.href = "join.html";
            return;
        }
    }
};

// 로그인 회원 정보 클래스
class LoginMember {
    constructor(userId, userName, permission) {
        this.userId = userId;
        this.userName = userName;
        this.permission = permission;
    }    
};

// 로그인 회원 정보저장
const loginIsTrue = (userId, userName) => {
    const loginMember = new LoginMember(userId, userName, 'normal');
    const loginMemberData = JSON.stringify(loginMember);
    localStorage.setItem("loginInfo", loginMemberData);
};

class Manager {
    constructor(managerId, managerPwd) {
        this.managerId = managerId;
        this.managerPwd = managerPwd;
    }
};

document.querySelector("#managerLoginBtn").addEventListener('click', () => {
    window.location.href = 'managerMain.html';
});

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

// 회원가입 버튼 클릭
document.querySelector("#joinBtn").addEventListener('click', (event) => {
    userId.value = '';
    userPwd.value = '';

    window.location.href = "join.html";
});