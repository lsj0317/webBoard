
// 2. 회원가입 컴포넌트
class SignupComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="flex items-center justify-center min-h-[70vh]">
        <div class="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl border border-blue-gray-50">
          <div class="text-center mb-8">
            <h2 class="text-3xl font-bold text-blue-gray-900">회원가입</h2>
            <p class="text-blue-gray-500 mt-2">새로운 계정을 생성합니다.</p>
          </div>
          <form id="signup-form" class="space-y-4">
            <div>
              <label class="block mb-2 text-sm font-medium text-blue-gray-700">이름</label>
              <input type="text" id="signup-name" class="w-full px-4 py-2 rounded-lg border border-blue-gray-200 focus:ring-2 focus:ring-blue-400 outline-none" placeholder="홍길동" required>
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-blue-gray-700">이메일</label>
              <input type="email" id="signup-email" class="w-full px-4 py-2 rounded-lg border border-blue-gray-200 focus:ring-2 focus:ring-blue-400 outline-none" placeholder="name@mail.com" required>
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-blue-gray-700">비밀번호</label>
              <input type="password" id="signup-pw" class="w-full px-4 py-2 rounded-lg border border-blue-gray-200 focus:ring-2 focus:ring-blue-400 outline-none" placeholder="8자리 이상 입력" required>
            </div>
            <button type="submit" class="w-full py-3 mt-4 font-bold text-white bg-green-600 rounded-lg hover:bg-green-700 shadow-md transition-all">가입하기</button>
          </form>
          <div class="mt-6 text-center">
            <button id="go-login" class="text-sm text-blue-gray-600 hover:underline">이미 계정이 있나요? 로그인</button>
          </div>
        </div>
      </div>
    `;
  }
}


customElements.define('app-signup', SignupComponent);
