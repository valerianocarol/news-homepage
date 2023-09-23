import React from 'react';
import Header from './components/Header';
import forms from './assets/images/image-web-3-desktop.jpg'
import NoticeCard from './components/NoticeCard';
import Separator from './components/Separator';
import Card from './components/Card';
import computer from './assets/images/image-retro-pcs.jpg';
import laptop from './assets/images/image-top-laptops.jpg';
import game from './assets/images/image-gaming-growth.jpg'
import styles from './app.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.container}>
        <div className={styles.left}>
          <img src={forms} alt="forms" />
          <div className={styles.leftText}>
            <h1>The Bright Future of Web 3.0?</h1>
            <div className={styles.readMore}>
              <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
              <button>READ MORE</button>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <h1>New</h1>
          <NoticeCard title={'Hydrogen VS Electric Cars'} description={'Will hydrogen-fueled cars ever catch up to EVs?'} />
          <Separator />
          <NoticeCard title={'The Downside of AI Artistry'} description={'What are the possible adverse effects of on-demand AI image generation?'} />
          <Separator />
          <NoticeCard title={'Is VC Funding Drying up?'} description={'Private funding by VC firms in down 50% YOY. We take a look at what that means.'} />
        </div>
      </div>
      <div className={styles.cardsContainer}>
        <Card image={computer} number={'01'} title={'Reviving Retro PCs'} description={'What happens when old PCs are given modern upgrades?'} />
        <Card image={laptop} number={'02'} title={'Top 10 Laptops of 2022'} description={'Our best picks for various needs and budgets.'} />
        <Card image={game} number={'03'} title={'The Growth of Gaming'} description={'How the pandemic has sparked fresh opportunities.'} />
      </div>
    </div>
  );
}

export default App;
