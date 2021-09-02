# Event

## 클릭한 메뉴버튼의 색깔이 바뀌게 해보자!

### Code
#### Before
```javascript
<body>
    <h1 id="main-title">Event</h1>
    <nav class="menu">
      <a href="#" class="menu-link" data-menu="1">menu 1</a>
      <a href="#" class="menu-link" data-menu="2">menu 2</a>
      <a href="#" class="menu-link" data-menu="3">menu 3</a>
    </nav>
    <script>
      let currentMenu; // 현재 활성화된 메뉴를 담을 변수
      let menuLinks = document.querySelectorAll(".menu-link");

      function clickMenuHandeler() {
        if (currentMenu) {
          currentMenu.classList.remove("menu-active");
        }
        this.classList.add("menu-active");
        currentMenu = this;
        console.log(currentMenu);
      }
      for (let i = 0; i < menuLinks.length; i++) {
        menuLinks[i].addEventListener("click", clickMenuHandeler);
      }
    </script>
</body>
```
- [설명]
    - menuLinks 변수에 className이 `menu-link`인 모든 class들을 담는다. `querySelectorAll` 사용
    - for문을 돌면서 해당 `menuLink`가 클릭되면 `addEventListener`를 통해 `clickMenuHandeler`함수가 실행되게 한다.
    - `currentMenu` 변수에 현재 활성화된 메뉴를 담고, `currentMenu`가 있으면 그 메뉴의 `menu-active` class를 지운다.
    - 그리고 현재 클릭된 메뉴에 `menu-active`를 추가한다.
    - `currentMenu`에 현재 클릭된 메뉴를 담는다.
- [회고]
    - 처음에 변수를 선언할 때 `const`를 쓰니까 제대로 동작이 안되었다. `let`이나 `var`로 고치니 제대로 동작하였다.
    - 여기서 다시 복습하는 `const` 특징! 변수의 값을 변경할 수 없다. <a href="https://ko.javascript.info/variables">변수와 상수 참고</a>

#### After refactoring (event 위임 활용)
```javascript
let currentMenu;
let menu = document.querySelector(".menu");

function clickMenuHandeler(e) {
if (currentMenu) {
  currentMenu.classList.remove("menu-active");
}
e.target.classList.add("menu-active");
currentMenu = e.target;
console.log(currentMenu);
}
menu.addEventListener("click", clickMenuHandeler);
```
- [설명]
    - for문을 쓰지 않고 `e.target`을 활용함
    - `e.currentTarget`은 `this`와 같은 역할.
   
### CSS
```javascript
<style>
  body {
    font-size: 3rem;
  }
  h1 {
    background: #fff000;
  }
  .menu {
    display: flex;
  }
  .menu-link {
    margin: 0.1em;
    padding: 0.3em;
    text-decoration: none;
    background: dodgerblue;
    color: #ffffff;
    list-style: none;
  }
  .menu-active {
    background: orange;
  }
</style>
```
### Demo
<img src="https://user-images.githubusercontent.com/60775453/127089572-df722da6-94bb-4d5d-a071-5862f1e971a6.gif" width="50%" height="50%">
