'use client';
import Header from "./components/Header";
import TopSection from "./components/TopSection";
import Services from "./components/Services";
import Lenis from 'lenis';
import textContent from '../../public/textContent';
import { useState } from 'react';

const lenis = new Lenis();
function raf(time: any) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

function getLocale() {
  const browserLang = navigator.language.split('-')[0];
  return (textContent as any)[browserLang] ? browserLang : 'en';
}

const Home = () => {
  const [text, setText] = useState((textContent as any)[getLocale()]); 

  const changeLang = (lang: string) => {
    console.log(lang);
    setText((textContent as any)[lang]);
  }

  return (
    <main className="main-page">
      <Header text={text.header} changeLang={changeLang} />
      <TopSection text={text.topSection} />
      <Services text={text.services} />
      <section className="test-section">
        <h1><br /><br />Hello, world!</h1>
        <img width={500} height={600} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Field_in_K%C3%A4rk%C3%B6l%C3%A4.jpg/1920px-Field_in_K%C3%A4rk%C3%B6l%C3%A4.jpg" alt="hehe" />
      </section>
      <div className="testbottom"></div>
    </main>
  );
}

export default Home;