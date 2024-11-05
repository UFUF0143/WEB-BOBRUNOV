import { Link } from 'react-router-dom'
import '../style/style.css'

function Catalog() {
    return (
        <body>

    <header>
        <div class="container">
            <div class="header-line">
                <div class="header-logo">
                    <Link class="nav-item" to="/">Главная</Link>
                </div>
                <h1>В нашем салоне мы работаем с разными стилями</h1>
                <h2>+7 950 077 92 19</h2>
            </div>
        </div>
    </header>
    <main>
        <div class="textcols">
            <div class="textcols-item">
                <div className='first'></div>
                <b class="textcols-item-text">Графика в татуировке отличается использованием резких контрастов и насыщенных черных линий. Этот стиль часто включает элементы, похожие на гравюры и силуэты, и может изображать как абстрактные узоры, так и детализированные сцены.</b>
            </div>
            
            <div class="textcols-item">
                <div className='second'></div>
                <b class="textcols-item-text">Минимализм в татуировке сосредоточен на простоте и чистоте форм. Основой могут служить тонкие линии и небольшое количество деталей. Этот стиль часто предпочитают те, кто ценит элегантные и ненавязчивые дизайны.</b>
            </div>

            <div class="textcols-item">
                <div className='third'></div>  
                <b class="textcols-item-text">Скетч стайл имитирует рисунки карандашом или чернилами, создавая ощущение незаконченности. Линии могут быть намеренно небрежными, а композиции — динамичными и живыми, будто они только что перенесены с эскиза на кожу.</b>
            </div>
        </div>
    </main>
    <footer>
        <div class="footer-text">
          <p>Сделал студент Бобрунов Егор | email: <a href="mailto:ebobrunov@mail.ru">ebobrunov@mail.ru</a></p>
        </div>
      </footer>

</body> 
    )
}

export default Catalog