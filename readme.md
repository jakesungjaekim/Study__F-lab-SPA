# How to Install & start
```
git clone [Repo-Address]
index.html을 마우스 우클릭 후 "Open Live server" 클릭 실행
```

# Installed libraries
```
npm
tailwindcss
```
node_modules를 설치한 이유는 npm run watch 모드를 작동시켜 실시간으로 웹 변화를 확인하고 작업하기 위해서였습니다.

# Folder Structure
```
f-lab-spa/
---| constants  // 상수값들을 저장할 것들이 생기면 저장시킬려고 만든 폴더
---| css // tailwindcss를 담는 global css 폴더
---| images // 이미지를 담는 폴더
---| pages // 세부 리스트 페이지를 담는 폴더
    ---| list01.html
    ---| list02.html
    ---| list03.html
    ---| list04.html
    ---| list05.html
---| index.html // 메인 html
---| index.js // 메인 js
---| README.md
```

# Project explanation
### Index.html
- index.html은 toss.tech의 메인 페이지를 담당합니다.
- 해당 페이지는 Header, Main, Footer 영역으로 나뉘어 Sementic web으로 구성했습니다.
- Header 영역의 Hamburger Menu버튼에 JS를 통한 상호작용을 넣었습니다.
- Mobile-First 목적으로 작업했습니다. (모바일 화면을 기준으로 작업했습니다.) 이후 md point까지 반응형 웹을 구현하려고 생각하고 있습니다.

### List0#.html
- index.html의 Main Article 태그에 해당 하는 리스트들의 세부 영역을 담당합니다.
- index.html의 공통되는 Header, Footer 코드를 넣어두고, Main 영역은 각각의 리스트에 맞게 작업될 수 있도록 영역만 생성해두었습니다.


