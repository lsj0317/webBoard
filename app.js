// app.js
import './nav.js';
import './main.js';
import './footer.js';

class AppLayout extends HTMLElement {
  connectedCallback() {
    this.className = "flex flex-col h-screen font-sans text-blue-gray-900";
    this.innerHTML = `
      <app-nav></app-nav>
      <app-main></app-main>
      <app-footer></app-footer>
    `;
  }
}
customElements.define('app-layout', AppLayout);

// HTML 바디에 렌더링
document.body.innerHTML = `<app-layout></app-layout>`;
