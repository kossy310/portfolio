<template>
  <main>
    <h1>ABOUT ME</h1>
    <div class="workItemArea">
      <h2>クライアントファーストな<br class="sp" />クリエイティブ。</h2>
      <p>
        はじめまして。ディレクション・ウェブデザインを主たる仕事としている中越と申します。
        早いものでもう２０年以上制作現場に携わっております。
      </p>
      <p>
        高校時代裏原系ファッションにどっぷりハマり、将来は宝島社のsmartの編集になりたいという気持ちから大学卒業後出版社に入社しました。
        <br />宝島社に入社できなかったものの出版社に入り、それからはファッションへの興味よりも出版というビジネスモデルに惹かれ、編集管理・広告営業・広告代理店管理・印刷クオリティ管理などを経験し、編集長も務めました。
      </p>
      <p>
        その後、アパレルモデル撮影のディレクション、ブッキング、デザイン・各種宣伝ツール制作、新規雑誌の立ち上げや写真集編集、イベントオーガナイズなどをしていたもの紙媒体への見えない未来を感じ、反比例するかのように輝かしく見えるweb業界にジョブチェンジをすることにしました。
      </p>
      <p>
        web業界は絶えず新しい技術がでてくる諸行無常な業界だと思いますが、私は趣味が勉強と仕事なので完全に向いていると感じました。<br />2024年現在はAWSなどのクラウドサービスとjavascriptの進化系（Jamstack）を活用して、クライアント様によりリーズナブル・スケーラブル・セキュアな提案ができると考え模索しております。
      </p>
      <p>
        また第５次産業革命とまでいわれるDX（デジタルトランスフォーメーション）に着目し、既存のやり方すべてを変革し利益を生むような提案をしていきたいと考えております。
      </p>
      <p>
        もしなんとなく私を気になっていただけましたら、ZOOMなどでもいいですし、都内でしたらスグに呼びつけてください。自分でいうのもなんですが、とんでもなくフットワークが軽く行動力もあります。
      </p>
      <p>
        お仕事のご相談・お見積りなどお気軽にお待ちしております。<br />
        お問い合わせメールアドレス：<a href="mailto:nakakoshi3100@gmail.com"
          >nakakoshi3100@gmail.com</a
        >
      </p>
    </div>
  </main>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script&family=Hind+Vadodara:wght@300&family=Playfair+Display&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap");

h1 {
  margin-top: 50px;
  margin-bottom: 50px;
  text-align: center;
  font-family: "Hind Vadodara", sans-serif;
  text-decoration: none;
  background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
  background: -webkit-linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media screen and (max-width: 768px) {
    font-size: 20px;
    margin-top: 50px;
    margin-bottom: 20px;
  }
}

h2 {
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 4vw;
  text-align: center;
}

@media (max-width: 1024px) {
  h2 {
    font-size: 24px;
  }
}

h3 {
  font-family: "Noto Sans JP", sans-serif;
  font-weight: 700;
  font-family: "Noto Sans JP", sans-serif;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
}

@media (min-width: 1024px) {
  .sp {
    display: none;
  }
}

p {
  margin-bottom: 3vw;
  @media screen and (max-width: 768px) {
    font-size: 12px;
    margin-bottom: 8vw;
  }
}
li img {
  width: 100%;
  height: auto;
  border-radius: 20px;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.35);
  transition: 0.3s;
}

img:hover {
  transform: scale(1.05);
}
img + img {
  margin-top: 20px;
}
</style>
