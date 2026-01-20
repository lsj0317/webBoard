class AsideComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <aside class="w-64 h-full bg-white border-r border-blue-gray-50 hidden md:block">
        <div class="p-4 flex flex-col gap-2">
          <button class="flex items-center gap-3 w-full p-3 rounded-lg bg-blue-50 text-blue-700">
            <span class="material-icons">list</span> <span class="font-medium">전체 게시글</span>
          </button>
          <button class="flex items-center gap-3 w-full p-3 rounded-lg text-blue-gray-600 hover:bg-blue-gray-50">
            <span class="material-icons">star</span> <span class="font-medium">즐겨찾기</span>
          </button>
        </div>
      </aside>
    `;
  }
}
customElements.define('app-aside', AsideComponent);
