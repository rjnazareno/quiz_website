import { useState } from 'react'
import './App.css'

const quizData = [
  {
    question: "Which statement best distinguishes a brand from brand image?",
    options: [
      "A brand consists solely of a company's advertising slogans",
      "A brand is the identifying name or mark of an offering",
      "A brand image is the legal registration of a business name",
      "A brand image is the physical product design and packaging"
    ],
    correct: 1
  },
  {
    question: "Which of the following is an intangible element of brand image?",
    options: [
      "Packages and product labels",
      "Corporate culture and shared beliefs",
      "Company employees working in stores",
      "Retail outlets where the product is sold"
    ],
    correct: 1
  },
  {
    question: "From a consumer perspective, which benefit of brand image most directly reduces the time spent evaluating options?",
    options: [
      "Provides psychological reinforcement after purchase",
      "Reduces search time in a purchase decision",
      "Signals the company's corporate identity to competitors",
      "Provides confidence in purchase decisions"
    ],
    correct: 1
  },
  {
    question: "A regional fast‑food chain wants to strengthen its brand image. Based on the material, which plan is most likely to have the greatest impact?",
    options: [
      "Improve product quality and service consistency first",
      "Redesign the logo using brighter colors only",
      "Cut training and rely on social media buzz",
      "Open more stores before addressing operations"
    ],
    correct: 0
  },
  {
    question: "A consumer chooses a well‑known appliance brand despite little prior experience with it. Which reasoning most closely aligns with brand image benefits?",
    options: [
      "The brand offers the lowest price in the market",
      "The consumer trusts the brand's reputation and perceived quality",
      "The store had limited options available",
      "The appliance had the most features listed"
    ],
    correct: 1
  },
  {
    question: "Which statement best defines a brand alliance from a company perspective?",
    options: [
      "A retailer sells generic goods under store labels",
      "Two firms co-market a new product using both names",
      "A single firm extends its brand into new categories",
      "Consumers repeatedly buy the same brand over time"
    ],
    correct: 1
  },
  {
    question: "Which brand name category focuses on the specific purpose implied by the name, as in FedEx?",
    options: [
      "Overt names describing the product category",
      "Implied names suggesting a product function",
      "Conceptual names evoking a broader idea",
      "Iconoclastic names representing something unique"
    ],
    correct: 1
  },
  {
    question: "A company places Intel processors inside its laptops and highlights this on packaging. Which branding approach is this?",
    options: [
      "Cooperative branding joint venture",
      "Brand extension across unrelated services",
      "Complementary branding for co-consumption",
      "Ingredient branding within another brand"
    ],
    correct: 3
  },
  {
    question: "Which option correctly matches the type of co-branding with its core purpose?",
    options: [
      "Cooperative branding combines brands into a new offer",
      "Complementary branding integrates one brand inside another",
      "Family branding sells unrelated items under many labels",
      "Ingredient branding partners firms to launch a joint card"
    ],
    correct: 0
  },
  {
    question: "Which scenario best illustrates a family brand strategy?",
    options: [
      "An established name moved to unrelated services",
      "A new brand created in the same product class",
      "Many related products sold under one brand name",
      "Two brands advertised together for joint usage"
    ],
    correct: 2
  },
  {
    question: "Long-term patrons are best described as which of the following?",
    options: [
      "Shoppers attracted by high promotional price",
      "Customers switching brands for convenience",
      "Buyers loyal to a brand across purchases",
      "Consumers who test new brands every season"
    ],
    correct: 2
  },
  {
    question: "Which set best reflects the four tests of quality logos and names?",
    options: [
      "Recognizable, familiar, consensual meaning, evoke feelings",
      "Memorable, colorful, copyrighted, convey features",
      "Trendy, minimalist, symbolic, drive sales",
      "Complex, descriptive, unique font, show quality"
    ],
    correct: 0
  },
  {
    question: "A primary tip for creating logos is to make the logo simple so that it can be easily understood. Which additional action best supports this tip?",
    options: [
      "Copy popular symbols to improve recognition",
      "Include long taglines for better explanation",
      "Add multiple colors to show product variety",
      "Use professional designers with knowledge and expertise"
    ],
    correct: 3
  },
  {
    question: "Which scenario illustrates successful image rejuvenation for a mature brand?",
    options: [
      "Completely abandoning the original image and changing the firm name",
      "Replacing long‑time products with unrelated offerings immediately",
      "Keeping all visuals unchanged despite shrinking market segments",
      "Retaining core identity while adding elements to reach new audiences"
    ],
    correct: 3
  },
  {
    question: "A marketing team plans to develop a powerful brand. Which sequence shows appropriate first‑step questions to guide assessment?",
    options: [
      "What colors to choose now; logo size; billboard placements",
      "Who will approve ads now; celebrity options; contest rules",
      "Where does the brand stand now; objectives; actions to build the brand",
      "Which competitors to copy now; price cuts; staff headcount"
    ],
    correct: 2
  },
  {
    question: "Brand loyalty is best demonstrated when consumers do which of the following?",
    options: [
      "Follow social media accounts without purchasing the product",
      "Occasionally switch brands to chase seasonal discounts",
      "Try multiple brands to compare new features each month",
      "Repeat purchases of one brand regardless of price differences"
    ],
    correct: 3
  },
  {
    question: "Which statement best distinguishes brand equity from brand parity in mature markets?",
    options: [
      "Brand equity reflects unique, trusted brand characteristics",
      "Brand parity ensures the brand name implies product ownership",
      "Brand equity means all brands offer consistent quality",
      "Brand parity reflects a brand's financial accounting value"
    ],
    correct: 0
  },
  {
    question: "A manufacturer planning to reduce theft and improve shelf placement should prioritize which packaging purpose?",
    options: [
      "Protect product and ease shipping and handling",
      "Provide easy placement and prevent shoplifting",
      "Communicate benefits and support social media",
      "Increase loyalty and drive private label sales"
    ],
    correct: 1
  },
  {
    question: "A beverage company sells the same product and name worldwide with minimal changes. Which strategy is this?",
    options: [
      "Standardization strategy in global branding",
      "Adaptation strategy in global branding",
      "Localization of emotional equity",
      "Diversification of private label tactics"
    ],
    correct: 0
  },
  {
    question: "Which situation best exemplifies brand infringement as described in ethical issues of brand management?",
    options: [
      "A firm uses a name closely resembling a successful brand",
      "A retailer improves displays for its private brands",
      "A company lists nutrition facts to meet FDA rules",
      "A brand varies spice levels to suit local tastes"
    ],
    correct: 0
  }
]

function FloatingHearts() {
  const hearts = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 15,
    size: Math.random() * 15 + 10
  }))

  return (
    <div className="floating-hearts">
      {hearts.map(heart => (
        <span
          key={heart.id}
          className="heart"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`,
            fontSize: `${heart.size}px`
          }}
        >
          💖
        </span>
      ))}
    </div>
  )
}

function WelcomeScreen({ onStart }) {
  return (
    <div className="welcome-screen">
      <div className="profile-image">
        <img src="/rikky.png" alt="Rikky Mae" />
      </div>
      <p className="welcome-subtitle">Test your marketing knowledge!</p>
      <div className="welcome-name">💕 For Rikky Mae Fausto 💕</div>
      <button className="start-btn" onClick={onStart}>
        Start Quiz 🚀
      </button>
    </div>
  )
}

function QuizScreen({ question, questionIndex, totalQuestions, onAnswer, selectedAnswer, showResult, onNext }) {
  const letters = ['A', 'B', 'C', 'D']

  const getOptionClass = (index) => {
    if (!showResult) {
      return selectedAnswer === index ? 'selected' : ''
    }
    if (index === question.correct) return 'correct'
    if (selectedAnswer === index && index !== question.correct) return 'incorrect'
    return ''
  }

  return (
    <div className="quiz-container">
      <div className="progress-section">
        <div className="progress-text">
          <span>Question {questionIndex + 1} of {totalQuestions}</span>
          <span>{Math.round(((questionIndex + 1) / totalQuestions) * 100)}%</span>
        </div>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${((questionIndex + 1) / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      <div className="question-card">
        <span className="question-number">Question {questionIndex + 1}</span>
        <p className="question-text">{question.question}</p>
        
        <div className="options-list">
          {question.options.map((option, index) => (
            <button
              key={index}
              className={`option-btn ${getOptionClass(index)}`}
              onClick={() => onAnswer(index)}
              disabled={showResult}
            >
              <span className="option-letter">{letters[index]}</span>
              <span>{option}</span>
            </button>
          ))}
        </div>

        {showResult && (
          <div className={`feedback ${selectedAnswer === question.correct ? 'correct' : 'incorrect'}`}>
            {selectedAnswer === question.correct 
              ? '🎉 Correct! Amazing job!' 
              : `😅 Oops! The correct answer is ${letters[question.correct]}.`}
          </div>
        )}
      </div>

      {showResult && (
        <button className="next-btn" onClick={onNext}>
          {questionIndex === totalQuestions - 1 ? 'See Results 🏆' : 'Next Question →'}
        </button>
      )}
    </div>
  )
}

function ResultsScreen({ score, totalQuestions, onRestart }) {
  const percentage = Math.round((score / totalQuestions) * 100)
  
  const getMessage = () => {
    if (percentage >= 90) return "🌟 Outstanding! You're a branding genius!"
    if (percentage >= 80) return "🎯 Excellent work! You really know your stuff!"
    if (percentage >= 70) return "👏 Great job! Keep up the good work!"
    if (percentage >= 60) return "💪 Good effort! A little more practice will help!"
    return "📖 Keep studying! You've got this!"
  }

  const getEmoji = () => {
    if (percentage >= 90) return "🏆"
    if (percentage >= 80) return "🌟"
    if (percentage >= 70) return "🎉"
    if (percentage >= 60) return "👍"
    return "💪"
  }

  return (
    <div className="results-screen">
      <div className="results-card">
        <div className="results-emoji">{getEmoji()}</div>
        <h1 className="results-title">Quiz Complete!</h1>
        <p className="results-name">Great job, Rikky Mae! 💖</p>
        
        <div className="score-circle">
          <span className="score-number">{score}/{totalQuestions}</span>
          <span className="score-label">{percentage}%</span>
        </div>

        <p className="score-message">{getMessage()}</p>

        <button className="restart-btn" onClick={onRestart}>
          Try Again 🔄
        </button>
      </div>
    </div>
  )
}

function App() {
  const [gameState, setGameState] = useState('welcome')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showResult, setShowResult] = useState(false)

  const handleStart = () => {
    setGameState('quiz')
    setCurrentQuestion(0)
    setScore(0)
    setSelectedAnswer(null)
    setShowResult(false)
  }

  const handleAnswer = (answerIndex) => {
    if (showResult) return
    setSelectedAnswer(answerIndex)
    setShowResult(true)
    if (answerIndex === quizData[currentQuestion].correct) {
      setScore(score + 1)
    }
  }

  const handleNext = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      setGameState('results')
    }
  }

  const handleRestart = () => {
    setGameState('welcome')
    setCurrentQuestion(0)
    setScore(0)
    setSelectedAnswer(null)
    setShowResult(false)
  }

  return (
    <div className="app">
      <FloatingHearts />
      
      {gameState === 'welcome' && (
        <WelcomeScreen onStart={handleStart} />
      )}

      {gameState === 'quiz' && (
        <QuizScreen
          question={quizData[currentQuestion]}
          questionIndex={currentQuestion}
          totalQuestions={quizData.length}
          onAnswer={handleAnswer}
          selectedAnswer={selectedAnswer}
          showResult={showResult}
          onNext={handleNext}
        />
      )}

      {gameState === 'results' && (
        <ResultsScreen
          score={score}
          totalQuestions={quizData.length}
          onRestart={handleRestart}
        />
      )}
    </div>
  )
}

export default App
