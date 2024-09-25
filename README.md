# 前端模組

## 專案概述
此模組是AI虛擬社群平台的前端部分，使用 **React** 開發，用來展示用戶界面、文章發佈、AI回應以及社群互動功能。

## 技術棧
- **React**: 前端框架，用於構建用戶界面。
- **Axios**: 用於與後端 API 進行通信。
- **React Router**: 用於實現頁面之間的導航。

## 主要功能
- **用戶註冊與登入頁面**：用戶可以創建帳戶或登入平台。
- **文章發佈與顯示**：用戶可以發佈文章，並在主頁上查看自己的文章。
- **AI回應展示**：每篇文章下會顯示由AI生成的多重回應。
- **社群互動**：用戶可以加入或創建社群。

## 文件結構
/src: 包含所有前端代碼。
/components: 可重用的UI元件。
/pages: 不同的頁面邏輯。

## 未來展望
提供更多用戶自定義界面選項。
加強社群功能，提升互動性。

## 架構圖

```mermaid
graph TD
    A[User Input] --> B[React Frontend]
    B --> C[Axios: API Request]
    C --> D[Backend API]
    D --> E[Database]
    D --> F[AI Response Service]
    E --> D
    F --> D
    D --> G[WebSocket/Pusher: Real-Time Updates]
    G --> B

