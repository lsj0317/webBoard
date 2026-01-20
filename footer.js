class FooterComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="p-4 bg-white border-t border-blue-gray-50 text-center text-sm text-blue-gray-500">
        &copy; 2024 JS Board with Google Sheets. All rights reserved.
      </footer>
    `;
  }
}
customElements.define('app-footer', FooterComponent);
