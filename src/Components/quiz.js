import React from 'react'
import { Link } from 'react-router-dom'
import '../style/style.css'

// Вопросы
const questions = [
	{
		title: 'Можно ли употреблять алкоголь перед сеансом?',
		variants: [
			'да',
			'нет',
		],
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

// Отображение результата
function Result({ correct }) {
	return (
		<div className='result'>
			<h3>
				Ваш результат: {correct} из {questions.length}
			</h3>
			<Link to='/quiz'>
                <button onClick={() => window.location.reload()}>
				    Пройти заново
			    </button>
			</Link>
		</div>
	)
}

// Блок с вопросами
function Game({ question, onClickVariant }) {
	return (
		<>
			<div className='questions'>
				<h1>{question.title}</h1>
				<ul>
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

// Функция отображения
function Quiz() {
	const [step, setStep] = React.useState(0)
	const [correct, setCorrect] = React.useState(0)
	const question = questions[step]

	const onClickVariant = index => {
		console.log(step, index)
		setStep(step + 1)

		if (index === question.correct) {
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

export default Quiz