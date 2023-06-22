import React from 'react'
import "./Blog.css"
function Blog() {
  return (
    <div>
    <div className='all-articles'>
    <div className="article-preview">
  <a href="https://www.alexmjonthego.com/blog-on-the-go/filmer-la-nuit-basse-lumiere">
    <img src="https://images.squarespace-cdn.com/content/v1/5f1efe228adc640fb1ed604e/1620585803500-17XX0BQ1W8K6PBLFXR2U/Alex-MJ-On-the-GO-8-techniques-filmer-la-nuit_feu_d%27artifices.jpg?format=2500w"/>
    <h2>Filmer de nuit</h2>
    <p>8 techniques pour réussir à bien filmer la nuit ou en soirée</p>
  </a>
</div>

<div className="article-preview">
  <a href="https://ns-communication.fr/blog-audiovisuel/les-avantages-d-une-visite-virtuelle">
    <img src="https://ns-communication.fr/images/raxo_thumbs/amp/tb-w246-h150-crop-int-84cfaf6f943f53471a0c431c77d9f6f9.jpg"/>
    <h2>Visite virtuelle</h2>
    <p>La visite virtuelle vous offre un réel gain de temps</p>
  </a>
</div>

<div className="article-preview">
  <a href="https://www.lamobylettejaune.com/videos-360-brand-content-innovant">
    <img src="https://www.lamobylettejaune.com/wp-content/webpc-passthru.php?src=https://www.lamobylettejaune.com/wp-content/uploads/2019/11/360-article-lamob.jpg&nocache=1"/>
    <h2>La démocratisation des vidéos 360°</h2>
    <p>Grâce aux vidéos immersives le public peut désormais véritablement faire partie de l’histoire.</p>
  </a>
</div>

<div className="article-preview">
  <a href="https://www.alexmjonthego.com/blog-on-the-go/filmer-la-nuit-basse-lumiere">
    <img src="https://www.lamobylettejaune.com/wp-content/webpc-passthru.php?src=https://www.lamobylettejaune.com/wp-content/uploads/2019/04/art-deco-motif-300x300.jpg&nocache=1"/>
    <h2>L'art déco</h2>
    <p>On retrouve des motifs art déco dans les logos des marques notamment.</p>
  </a>
</div>

</div>
<div className='voirPlus'>
    <button>VOIR PLUS</button>
</div>

</div>
  )
}

export default Blog