# TODO APP

👉 URL :  
👉 백엔드 레포지토리 :  
👉 프론트엔드 레포지토리 :

<br>

## 🌱 Intro

일정 관리 애플리케이션 프론트엔드 with React.js

<br>

## 🛠️ 기술 스택

- React.js
- JavaScript
- CSS
- NPM

<br>

## 🪵 브랜치 전략

- `main` : 제품으로 출시될 수 있는 브랜치
- `develop` : 다음 출시 버전을 개발하는 브랜치
- `feature` : 기능을 개발하는 브랜치
  - 네이밍 규칙 : `feature`/`feature-name`/`short-description`
- `release` : 이번 출시 버전을 준비하는 브랜치
  - 네이밍 규칙 : `release`/`version-number`
- `hotfix` : 출시 버전에서 발생한 버그를 수정 하는 브랜치
  - 네이밍 규칙 : `hotfix`/`issue-name`

<br>

## 💬 커밋 메세지 규칙

> Build : 빌드 업무 수정  
> Chore : 패키지 매니저 수정  
> Comment : 주석 추가 및 수정  
> Docs : 문서 수정  
> Feat : 새로운 기능 추가  
> Fix : 버그 수정  
> Style : 코드 스타일, 코드 포맷팅  
> Refactor : 코드 리팩토링  
> Rename : 파일/폴더 이름 수정 및 위치 변경  
> Remove : 파일 삭제  
> Test : 테스트 코드 추가 및 수정

<br>

## 🌳 프로젝트 폴더 구조

```
src
├── App.js
├── components
│   ├── atoms
│   ├── molecules
│   │   └── TodoItem
│   └── organisms
│       ├── BasicModal
│       ├── Header
│       ├── TodoEditor
│       └── TodoList
├── index.css
├── index.js
└── pages
    ├── Login
    ├── Main
    └── NotFound
```

> Atom : 더 이상 쪼갤 수 없는 디자인의 최소 단위  
> Molecule : 최소 한 가지 기능을 수행하는 atom의 조합  
> Organism : Molecule과 Atom을 조합하여 만들며, 사용자에게 의미와 역할이 존재하는 단위

#### 참고

[https://yozm.wishket.com/magazine/detail/1531/](https://yozm.wishket.com/magazine/detail/1531/)
