import React from 'react';
import { Mail, ChevronDown } from 'lucide-react';

function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ヘッダーセクション */}
      <header className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">弓道分析管理</h1>
          <p className="text-xl text-gray-600 mb-8">あなたの弓道の成長をサポート</p>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            お問い合わせ
          </button>
        </div>
        <div className="text-center mt-12">
          <ChevronDown
            className="mx-auto w-8 h-8 text-gray-400 animate-bounce cursor-pointer"
            onClick={() => scrollToSection('main')}
          />
        </div>
      </header>

      {/* メインコンテンツ */}
      <main id="main" className="max-w-4xl mx-auto px-4 py-16">
        {/* お問い合わせセクション */}
        <section id="contact" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">お問い合わせ</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-gray-600" />
              <a
                href="mailto:imanishidev@icloud.com"
                className="text-indigo-600 hover:text-indigo-700"
              >
                imanishidev@icloud.com
              </a>
            </div>
          </div>
        </section>

        {/* プライバシーポリシーセクション */}
        <section id="privacy" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">プライバシーポリシー</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600">
              弓道分析管理アプリは、ユーザーのプライバシーを尊重し、個人情報の保護に努めています。
              当アプリで収集する情報は、アプリの機能提供に必要な最小限のものに限定されます。
            </p>
            <p className="text-gray-600 mt-4">
              収集した情報は、サービスの提供・改善、およびユーザーサポートの目的にのみ使用され、
              ユーザーの同意なく第三者に提供されることはありません。
            </p>
            <p className="text-gray-600 mt-4">
              詳細なプライバシーポリシーについては、
              <a
                href="https://www.apple.com/legal/privacy/jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-700"
              >
                Appleのプライバシーポリシー
              </a>
              に準拠します。
            </p>
          </div>
        </section>
      </main>

      {/* フッター */}
      <footer className="bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center text-gray-600">
          <p>© 2024 弓道分析管理. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;