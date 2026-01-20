import './component/nav.js';
import './component/main.js';
import './component/footer.js';
// pages 폴더 안의 컴포넌트들을 import
import './pages/auth.js'; 
import './pages/join.js'; // 게시판 목록 컴포넌트가 있다고 가정

const routes = {
  '': 'app-content',      // 홈 (게시판 목록)
  'login': 'app-login',   // 로그인 페이지
  'signup': 'app-signup'  // 회원가입 페이지
};

class AppLayout extends HTMLElement {
  connectedCallback() {
    this.className = "flex flex-col h-screen font-sans text-blue-gray-900";
    this.innerHTML = `
      <app-nav></app-nav>
      <app-main></app-main>
      <app-footer></app-footer>
    `;
    
    // 페이지 로드 시 및 URL 해시 변경 시 라우팅 실행
    window.addEventListener('hashchange', () => this.router());
    this.router();
  }

  router() {
    // URL에서 # 뒤의 값을 가져옴 (예: #login -> login)
    const hash = window.location.hash.replace('#', '');
    const componentName = routes[hash] || 'app-content'; // 매칭되는 게 없으면 기본 홈

    // app-main 안에 있는 app-content 영역을 찾아 교체
    const mainArea = document.querySelector('app-main');
    if (mainArea) {
      // 기존에 들어있던 자식 컴포넌트(content, login, signup 중 하나)를 찾아 교체
      const oldContent = mainArea.querySelector('app-content, app-login, app-signup');
      const newContent = document.createElement(componentName);
      
      // Tailwind 디자인 유지를 위해 클래스 추가
      newContent.className = "flex-1 overflow-y-auto bg-gray-50 p-6";
      
      if (oldContent) {
        mainArea.replaceChild(newContent, oldContent);
      }
    }
  }
}

customElements.define('app-layout', AppLayout);
document.body.innerHTML = `<app-layout></app-layout>`;
