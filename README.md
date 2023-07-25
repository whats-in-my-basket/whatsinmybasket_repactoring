# 💡 What's im my Basket ❓
> 기존에 개발했던 쇼핑 플랫폼 프로젝트를 Refactoring 해보자!

<br /><br />

# ⚽ Goal 
1️⃣ 클린 코드를 작성하여 **가독성**을 높이자


2️⃣ 사용자의 편의를 고려하여 **웹 성능**을 개선해보자

<br /><br />

## 🛠️ 기술 스택

<div align="left">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=TypeScript&logoColor=white"/>
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white"/> 
  <img src="https://img.shields.io/badge/Redux Toolkit-764ABC?style=flat&logo=Redux&logoColor=white"/> 
  <img src="https://img.shields.io/badge/React Router-CA4245?style=flat&logo=React Router&logoColor=white"/> 
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=flat&logo=Axios&logoColor=white"/> 
  <img src="https://img.shields.io/badge/SCSS-CC6699?style=flat&logo=Sass&logoColor=white"/>
  <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=flat&logo=Tailwind CSS&logoColor=white"/>
  <img src="https://img.shields.io/badge/Vercel-000000?style=flat&logo=Tailwind CSS&logoColor=white"/>
</div>

<br /><br />

## ⚙ Point Skills


|<img src="https://user-images.githubusercontent.com/111720709/230289866-7b7fba11-2deb-4632-b506-fb2f54190525.gif" width="100%"/>|<img src="https://user-images.githubusercontent.com/111720709/230307621-1245963f-4a4d-445e-b52a-1b73aeaa44db.gif" width="100%"/>|
|:---:|:---:|
|카테고리 필터 기능|검색 기능|


|<img src="https://user-images.githubusercontent.com/111720709/230308302-87979359-2732-4266-9667-436bfa233199.gif" width="100%"/>|<img src="https://user-images.githubusercontent.com/111720709/230308481-72b64222-7a7b-4d8e-86e8-081cb6c88abb.gif" width="100%"/> |
|:---:|:---:|
|장바구니 기능|



## 🚀 Refactoring Contents

### 1. 컴포넌트 구조 재설계


```
├──📂 public
    └──📁 icons
├──📁 src
    ├──📁 assets
        └──📂 images
    ├──📁 components
        ├──📁 main
        └──📁 category
    ├──📁 pages
        ├──Main.tsx
        └──Category.tsx
    ├──📁 styles
        ├──📁 abstracts
            └──_variables.scss
        ├──📁 base
            ├──_base.scss
            └──_reset.scss
        ├──📁 layout
            ├──📁 main
            └──📁 category
        ├──main.css
        └──main.scss
    ├──📁 hooks
    └──📁 store
├── App.tsx
└── main.tsx
```



## 🚀 Team 흑염룡🐲🔥


<a href="https://www.notion.so/trustmitt/Hey-Toss-me-8f477431f2ee42dcb7d34e70dd41cedb"><img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white"/></a>


|<img src="https://user-images.githubusercontent.com/111720709/230309092-b2850872-eed5-4220-b8ef-5418819b0b8d.jpg" width="120"/><br/>BE 이보미 <a href="https://github.com/lee-bomi">GitHub</a>|<img src="https://user-images.githubusercontent.com/111720709/230309112-e1625d7f-16b3-49d6-8bb3-a18ff75f7b0a.png" width="120"/><br/>BE 최웅준 <a href="https://github.com/bearjun05">GitHub</a>|<img src="https://user-images.githubusercontent.com/111720709/230309107-9b78021f-41ed-4aeb-b169-c3c8200d1e1e.jpg" width="120"/><br/>BE 허진혁 <a href="https://github.com/Jin-hyeok2">GitHub</a>|<img src="https://user-images.githubusercontent.com/111720709/230309102-14c56a20-cb52-4da4-a463-fd678865a090.jpg" width="120"/><br/>FE 박주경 <a href="https://github.com/trustmitt">GitHub</a>|<img src="https://user-images.githubusercontent.com/111720709/230309098-a2c05a53-753f-424d-b1a6-5e53a1b0cb87.jpg" width="120"/><br/>FE 김규리 <a href="https://github.com/rangggu">GitHub</a>|
|:---:|:---:|:---:|:---:|:---:|


## 🚀 파트 배분

> BE

**보미** 토큰 인증, FCM 알림, 북마크, 키워드, 알림 기능

**웅준** 소셜 로그인, 이미지 업로드, 회원가입, 로그인

**진혁** 채팅 기능, 상품 및 거래 내역 관리, 배포

> FE

**주경** 회원가입, 로그인, 비밀번호 찾기, 마이페이지, 메인 컴포넌트, 채팅 컴포넌트 UI 구현 및 기능 연동, 이미지 최적화, PWA 적용, 프론트 배포

**규리** 헤더 컴포넌트, 카테고리 페이지, 상품 디테일, 글쓰기 페이지, 알림 페이지 UI 구현 및 기능 연동, FCM 알림, 다크 모드 적용

