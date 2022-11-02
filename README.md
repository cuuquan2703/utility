## About

- Repos chứa ultility cho Hackathon
- Sử dụng [NextJS](#nextjs) và [Tailwindcss](#tailwindcss)
- Đã config xong ESlint và Tailwindcss

## How to use

- Clone Repos
- Tạo branch của mình

```bash
git branch <Name>
git checkout <Name>

```

- Implement trên branch này và push lên github

- Để chạy

```bash
npm run dev
# or
yarn dev
```

## Component

- Danh sách Component mẫu sẽ được implement
  - [Carousel](#)
  - [Header](#)
  - [Footer](#)
  - [LogIn/LogOut](#)

## Hooks

- Danh sách các custom Hooks
  - [useEventListenver](./hooks)
  - [useWindowSize](./hooks)
  - [useClickOutSize](./hooks)

## NextJS

- Tham khảo [Doc](#https://nextjs.org/docs/getting-started)
- Là framework của ReactJS
- Về cơ bản, cú pháp không khác react nhưng tổ chức file sẽ khác biệt
- Sử dụng NextJS sẽ không phải đụng tới React Router => Giảm thời gian config
- Mỗi folder trong `.\pages` là một entry point
  VD: `.\pages\index.js` sẽ tương tự Entry point mặc định (Home page)
  `.\pages\Login` tương tự khi vào `localhost/login` và component Login sẽ được define trong này

## Tailwindcss

- Tham khảo [Doc](#https://tailwindcss.com/docs/installation)
- Là css engine
- Thời gian render khá nhanh
- Viết css tiện nên sẽ tiết kiệm thời gian viết css và tạo file css
- Searching:
  - `Ctr K`
  - Thuộc tính css
    VD: flex
  - Nó sẽ hiện ra danh sách các thuộc tính và cách viết tương ứng trong taiwind
