// main.js 내부에서 aside와 content를 함께 렌더링
class MainComponent extends HTMLElement {
  connectedCallback() {
    this.className = "flex flex-1 overflow-hidden";
    this.innerHTML = `
      <app-aside></app-aside>
      <app-content class="flex-1 overflow-y-auto bg-gray-50 p-6"></app-content>
    `;
  }
}
customElements.define('app-main', MainComponent);
