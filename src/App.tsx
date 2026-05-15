import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { LinkGrid } from './components/LinkGrid'
import { Footer } from './components/Footer'
import { GraduationCap, FileText, MoreHorizontal, Video } from 'lucide-react'
import './App.css'

function App() {
  // コンテンツのリンクデータ
  const links = [
    { 
      title: '日本エロい単語学会', 
      desc: 'イキ川海老蔵が率いるNetg公式サイト．阿保世聞は副会長としてエロい単語学研究に励んでいます', 
      icon: <GraduationCap />, 
      url: 'https://pantyseven.wixsite.com/netg' 
    },
    { 
      title: 'イケメン動画', 
      desc: 'イケメン(81歳)のYouTube．Pornhubではないのでご注意ください', 
      icon: <Video />, // 汎用ビデオアイコンに統一
      url: 'https://www.youtube.com/@%E3%81%9B%E3%81%B6%E3%82%93%E3%82%A4%E3%82%B1%E3%83%A1%E3%83%B3' 
    },
    { 
      title: 'イケメンNote', 
      desc: 'イケメン(81歳)のnote．官能小説未実装', 
      icon: <FileText />, 
      url: 'https://note.com/seven845' 
    },
    { 
      title: '準備中', 
      desc: '(準備中)', 
      icon: <MoreHorizontal />, 
      url: '#' 
    },
  ];

  return (
    <div className="container">
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="particle" 
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          />
        ))}
      </div>
      <Header title={<><span className="nowrap">イケメン(81歳)</span> <span className="nowrap">超イケメン伝説物語</span></>} />

      <main>
        <Hero text="こんばんは，イケメン(81歳)です" />
        <LinkGrid links={links} />
      </main>

      <Footer copyright="&copy; 2026 AvoSeven" />
    </div>
  )
}

export default App
