class NavbarComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="flex items-center justify-between px-6 py-3 bg-white shadow-md border-b border-blue-gray-50">
        <div class="flex items-center gap-2">
          <span class="material-icons text-blue-500">dashboard</span>
          <h1 class="text-xl font-bold text-blue-gray-900">SheetBoard</h1>
        </div>
        <div class="flex gap-4">
          <button class="px-4 py-2 text-sm font-medium text-blue-gray-700 hover:bg-blue-gray-50 rounded-lg transition-all">Home</button>
          <button class="px-4 py-2 text-sm font-bold text-white bg-blue-500 hover:shadow-lg rounded-lg transition-all">Sign In</button>
        </div>
      </nav>
    `;
  }
}
customElements.define('app-nav', NavbarComponent);
