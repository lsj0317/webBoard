class ContentComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="max-w-5xl mx-auto">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-2xl font-semibold text-blue-gray-800">게시판 목록</h2>
          <button id="write-btn" class="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 shadow-md">
            <span class="material-icons text-sm">edit</span> 글쓰기
          </button>
        </div>
        <div class="bg-white rounded-xl shadow-sm border border-blue-gray-50 overflow-hidden">
          <div id="board-container">
             <p class="p-10 text-center text-blue-gray-400">데이터를 불러오는 중...</p>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define('app-content', ContentComponent);
