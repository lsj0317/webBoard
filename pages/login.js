// 1. 로그인 컴포넌트
class LoginComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="flex items-center justify-center min-h-[70vh]">
        <div class="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl border border-blue-gray-50">
          <div class="text-center mb-8">
            <h2 class="text-3xl font-bold text-blue-gray-900">로그인</h2>
            <p class="text-blue-gray-500 mt-2">서비스를 이용하려면 로그인하세요.</p>
          </div>
          <form id="login-form" class="space-y-6">
            <div>
              <label class="block mb-2 text-sm font-medium text-blue-gray-700">이메일</label>
              <input type="email" id="login-email" class="w-full px-4 py-3 rounded-lg border border-blue-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="name@mail.com" required>
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-blue-gray-700">비밀번호</label>
              <input type="password" id="login-pw" class="w-full px-4 py-3 rounded-lg border border-blue-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="••••••••" required>
            </div>
            <button type="submit" class="w-full py-3 font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 shadow-md transition-all">로그인</button>
          </form>
          <div class="mt-6 text-center">
            <p class="text-sm text-blue-gray-600">계정이 없으신가요? <button id="go-signup" class="text-blue-600 font-bold hover:underline">회원가입</button></p>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('app-login', LoginComponent);
