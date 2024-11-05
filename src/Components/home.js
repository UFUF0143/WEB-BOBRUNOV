// Импорт компонента Link из react-router-dom для навигации по страницам
import { Link } from 'react-router-dom'

// Импорт CSS файла для применения стилей
import '../style/style.css'

// Определение функционального компонента Main
function Main() {
    return (
        <>
       
        <body>

  <noscript>
    <div class="noscript-message">
      <p>Внимание! Для корректной работы сайта включите JavaScript в настройках вашего браузера.</p>
    </div>
  </noscript>

  <header>
    <nav>
      <div class="container">
        <div class="header-line">
            <div class="header-logo">
                <Link class="nav-item" to="/">Главная</Link>
            </div>

            <Link class="nav-item" to="/quiz">Опрос</Link>
            <Link class="nav-item" to="/catalog">Каталог</Link>
            <h2>+7 950 077 92 19</h2>
        </div>
      </div>
    </nav>
  </header>

  <main>
    <div class="main-down">
        
         <div class="main-text">
            <div class="main-title">
              ТАТУ САЛОН БОБЕР
            </div>
            <div class="main-suptitle">
            Добро пожаловать в нашу хатку, уважаемые водные архитекторы. Наши мастера-бобры с острыми зубами и упорным характером готовы выточить на вашей коже самые креативные и дерзкие дизайны.
            Сделайте запоминающееся погружение в мир татуировок и выплывите на берег с шедеврами, которые сразят наповал ваших друзей, семью и всех вокруг.
            </div>
         </div>
        <div class="main-img"></div>
    </div>
  </main>

  <footer>
    <div class="footer-text">
      <p>Сделал студент Бобрунов Егор | email: <a href="mailto:ebobrunov@mail.ru">ebobrunov@mail.ru</a></p>
    </div>
  </footer>

</body>
</>
    )
}
// Экспорт компонента Main для использования в других частях приложения
export default Main