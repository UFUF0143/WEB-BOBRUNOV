// Импортируем React для создания компонентов
import React from 'react'

// Импортируем Link из react-router-dom для навигации между страницами
import { Link } from 'react-router-dom'

// Импортируем файл стилей
import '../style/style.css'

// Массив вопросов для квиза
const questions = [
	{
		// Текст вопроса
		title: 'Можно ли употреблять алкоголь перед сеансом?',
		// Варианты ответов
		variants: [
			'да',
			'нет',
		],
		// Индекс правильного ответа
		correct: 1,
	},
    {
		title: 'Можно ли употреблять таблетки перед сеансом?',
		variants: [
            'да',
			'нет',
		],
		correct: 1,
	},
    {
		title: 'Может ли мастер работать без перчаток?',
		variants: [
            'да',
			'нет',
		],
		correct: 1,
	},
	{
		title: 'Можно ли вам трогать аппаратуру тату-мастера?',
		variants: [
            'да',
			'нет',
		],
		correct: 1,
	},
	{
		title: 'Можно ли вам после сеанса чесать татуировку?',
		variants: [
			'да',
			'нет',
		],
		correct: 1,
	},
]

// Компонент для отображения результата квиза
function Result({ correct }) {
	return (
		<div className='result'>
			<h3>
				Ваш результат: {correct} из {questions.length}
			</h3>
			{/* Ссылка для перезапуска квиза */}
			<Link to='/'>
				<button>Вернуться на главную</button>
			</Link>
		</div>
	)
}

// Компонент для отображения текущего вопроса и вариантов ответа
function Game({ question, onClickVariant }) {
	return (
		<>
			<div className='questions'>
				{/* Заголовок вопроса */}
				<h1>{question.title}</h1>
				<ul>
					{/* Перебираем варианты ответов */}
					{question.variants.map((text, index) => (
						<li onClick={() => onClickVariant(index)} key={text}>
							{text}
						</li>
					))}
				</ul>
			</div>
		</>
	)
}

// Основной компонент квиза
function Quiz() {
	// Хук состояния для отслеживания текущего вопроса
	const [step, setStep] = React.useState(0)
	
	// Хук состояния для отслеживания количества правильных ответов
	const [correct, setCorrect] = React.useState(0)
	
	// Текущий вопрос
	const question = questions[step]

	// Функция, которая обрабатывает выбор ответа
	const onClickVariant = index => {
		console.log(step, index) // Логирование для отладки
		
		// Переход к следующему вопросу
		setStep(step + 1)

		// Проверка, был ли ответ правильным
		if (index === question.correct) {
			// Если правильный, увеличиваем счетчик правильных ответов
			setCorrect(correct + 1)
		}
	}

	return (
		<>
        <header>
            <div class="container">
                <div class="header-line">
                    <div class="header-logo">
                        <Link class="nav-item" to="/">Главная</Link>
                    </div>
                    <h1>Проверь свои знания перед сеансом</h1>
                    <h2>+7 950 077 92 19</h2>
                </div>
            </div>
        </header>

			<div className='App'>
				{step !== questions.length ? (
					<Game question={question} onClickVariant={onClickVariant} />
				) : (
					<Result correct={correct} />
				)}
			</div>

			<footer>
				<div class="footer-text">
					<p>Сделал студент Бобрунов Егор | email: <a href="mailto:ebobrunov@mail.ru">ebobrunov@mail.ru</a></p>
				</div>
			</footer>
		</>
	)
}

// Экспортируем компонент Quiz для использования в других частях приложения
export default Quiz
