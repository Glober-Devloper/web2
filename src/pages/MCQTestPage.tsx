import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, RotateCcw, Clock, Award, Zap, Target } from 'lucide-react';

interface MCQQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  unit: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  points: number;
}

const MCQTestPage: React.FC = () => {
  const [selectedTest, setSelectedTest] = useState<string>('quick');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isActive, setIsActive] = useState(false);
  const [testQuestions, setTestQuestions] = useState<MCQQuestion[]>([]);
  const [showFinalResults, setShowFinalResults] = useState(false);

  const allMCQs: MCQQuestion[] = [
    // Quick Test Questions (Easy)
    {
      id: 1,
      question: "What does HTML stand for?",
      options: ["HyperText Markup Language", "High Tech Modern Language", "HyperText Modern Language", "Home Tool Markup Language"],
      correctAnswer: 0,
      explanation: "HTML stands for HyperText Markup Language, the standard markup language for creating web pages.",
      unit: "Unit 2",
      difficulty: "Easy",
      points: 1
    },
    {
      id: 2,
      question: "Which CSS property is used to change text color?",
      options: ["text-color", "font-color", "color", "foreground-color"],
      correctAnswer: 2,
      explanation: "The 'color' property in CSS is used to set the text color of an element.",
      unit: "Unit 3",
      difficulty: "Easy",
      points: 1
    },
    {
      id: 3,
      question: "What does WWW stand for?",
      options: ["World Wide Web", "World Web Wide", "Wide World Web", "Web World Wide"],
      correctAnswer: 0,
      explanation: "WWW stands for World Wide Web, an information system that enables documents to be accessed over the Internet.",
      unit: "Unit 1",
      difficulty: "Easy",
      points: 1
    },
    {
      id: 4,
      question: "Which HTML tag is used to create a hyperlink?",
      options: ["<link>", "<a>", "<href>", "<url>"],
      correctAnswer: 1,
      explanation: "The <a> (anchor) tag is used to create hyperlinks in HTML.",
      unit: "Unit 2",
      difficulty: "Easy",
      points: 1
    },
    {
      id: 5,
      question: "How do you select an element with id 'header' in CSS?",
      options: [".header", "#header", "header", "*header"],
      correctAnswer: 1,
      explanation: "The # symbol is used to select elements by their ID in CSS.",
      unit: "Unit 3",
      difficulty: "Easy",
      points: 1
    },
    {
      id: 6,
      question: "Which protocol is used for secure web communication?",
      options: ["HTTP", "HTTPS", "FTP", "SMTP"],
      correctAnswer: 1,
      explanation: "HTTPS (HyperText Transfer Protocol Secure) provides encrypted communication over the web.",
      unit: "Unit 1",
      difficulty: "Easy",
      points: 1
    },
    {
      id: 7,
      question: "What is the correct HTML element for the largest heading?",
      options: ["<h6>", "<heading>", "<h1>", "<header>"],
      correctAnswer: 2,
      explanation: "<h1> is the HTML element for the largest heading.",
      unit: "Unit 2",
      difficulty: "Easy",
      points: 1
    },
    {
      id: 8,
      question: "Which CSS property controls the space outside an element?",
      options: ["padding", "margin", "border", "spacing"],
      correctAnswer: 1,
      explanation: "The 'margin' property controls the space outside an element's border.",
      unit: "Unit 3",
      difficulty: "Easy",
      points: 1
    },
    {
      id: 9,
      question: "What is the default port for HTTP?",
      options: ["21", "25", "80", "443"],
      correctAnswer: 2,
      explanation: "Port 80 is the default port for HTTP communication.",
      unit: "Unit 1",
      difficulty: "Easy",
      points: 1
    },
    {
      id: 10,
      question: "Which HTML attribute provides alternative text for images?",
      options: ["title", "alt", "src", "description"],
      correctAnswer: 1,
      explanation: "The 'alt' attribute provides alternative text for images, important for accessibility.",
      unit: "Unit 2",
      difficulty: "Easy",
      points: 1
    },

    // Medium Questions
    {
      id: 11,
      question: "What is the CSS box model?",
      options: ["A way to create boxes", "Content, padding, border, margin", "A layout technique", "A design pattern"],
      correctAnswer: 1,
      explanation: "The CSS box model consists of content, padding, border, and margin areas around every HTML element.",
      unit: "Unit 3",
      difficulty: "Medium",
      points: 2
    },
    {
      id: 12,
      question: "Which HTML5 input type provides email validation?",
      options: ["text", "email", "mail", "validate"],
      correctAnswer: 1,
      explanation: "The HTML5 'email' input type provides built-in email validation.",
      unit: "Unit 2",
      difficulty: "Medium",
      points: 2
    },
    {
      id: 13,
      question: "What does DNS stand for?",
      options: ["Domain Name System", "Dynamic Network Service", "Digital Name Server", "Domain Network System"],
      correctAnswer: 0,
      explanation: "DNS stands for Domain Name System, which translates domain names to IP addresses.",
      unit: "Unit 1",
      difficulty: "Medium",
      points: 2
    },
    {
      id: 14,
      question: "How do you center a block element horizontally in CSS?",
      options: ["text-align: center", "margin: 0 auto", "align: center", "center: true"],
      correctAnswer: 1,
      explanation: "Setting 'margin: 0 auto' centers a block element horizontally when it has a defined width.",
      unit: "Unit 3",
      difficulty: "Medium",
      points: 2
    },
    {
      id: 15,
      question: "What does the 'colspan' attribute do in HTML tables?",
      options: ["Sets column width", "Spans multiple columns", "Colors the column", "Counts columns"],
      correctAnswer: 1,
      explanation: "The 'colspan' attribute makes a table cell span across multiple columns.",
      unit: "Unit 2",
      difficulty: "Medium",
      points: 2
    },
    {
      id: 16,
      question: "Which organization develops web standards?",
      options: ["W3C", "IEEE", "ISO", "ANSI"],
      correctAnswer: 0,
      explanation: "W3C (World Wide Web Consortium) develops web standards and guidelines.",
      unit: "Unit 1",
      difficulty: "Medium",
      points: 2
    },
    {
      id: 17,
      question: "What does 'display: none' do in CSS?",
      options: ["Makes element transparent", "Hides element but keeps space", "Completely removes element from layout", "Makes element invisible"],
      correctAnswer: 2,
      explanation: "'display: none' completely removes the element from the layout.",
      unit: "Unit 3",
      difficulty: "Medium",
      points: 2
    },
    {
      id: 18,
      question: "Which HTML element is used to group table header content?",
      options: ["<header>", "<thead>", "<th>", "<table-head>"],
      correctAnswer: 1,
      explanation: "<thead> is used to group header content in an HTML table.",
      unit: "Unit 2",
      difficulty: "Medium",
      points: 2
    },
    {
      id: 19,
      question: "What is the purpose of a proxy server?",
      options: ["Store web pages", "Act as intermediary", "Provide internet connection", "Host websites"],
      correctAnswer: 1,
      explanation: "A proxy server acts as an intermediary between clients and servers.",
      unit: "Unit 1",
      difficulty: "Medium",
      points: 2
    },
    {
      id: 20,
      question: "Which CSS property is used to make text bold?",
      options: ["font-weight", "text-weight", "font-style", "text-bold"],
      correctAnswer: 0,
      explanation: "The 'font-weight' property controls the thickness of text.",
      unit: "Unit 3",
      difficulty: "Medium",
      points: 2
    },

    // Hard Questions
    {
      id: 21,
      question: "Which CSS selector has the highest specificity?",
      options: ["Element selector", "Class selector", "ID selector", "Universal selector"],
      correctAnswer: 2,
      explanation: "ID selectors have the highest specificity among basic selectors.",
      unit: "Unit 3",
      difficulty: "Hard",
      points: 3
    },
    {
      id: 22,
      question: "What is the difference between semantic and non-semantic HTML?",
      options: ["No difference", "Semantic has meaning", "Non-semantic is faster", "Semantic is newer"],
      correctAnswer: 1,
      explanation: "Semantic HTML elements provide meaning to content, improving SEO and accessibility.",
      unit: "Unit 2",
      difficulty: "Hard",
      points: 3
    },
    {
      id: 23,
      question: "Which protocol is connectionless and faster but less reliable?",
      options: ["TCP", "UDP", "HTTP", "FTP"],
      correctAnswer: 1,
      explanation: "UDP is connectionless and faster than TCP but doesn't guarantee delivery.",
      unit: "Unit 1",
      difficulty: "Hard",
      points: 3
    },
    {
      id: 24,
      question: "What is CSS specificity calculation for '#nav .menu li'?",
      options: ["0,0,1,2", "0,1,1,1", "1,1,0,1", "0,1,0,2"],
      correctAnswer: 1,
      explanation: "ID selector (1) + class selector (1) + element selector (1) = 0,1,1,1",
      unit: "Unit 3",
      difficulty: "Hard",
      points: 3
    },
    {
      id: 25,
      question: "What is the purpose of the DOCTYPE declaration?",
      options: ["Define document type", "Set character encoding", "Link CSS files", "Create comments"],
      correctAnswer: 0,
      explanation: "DOCTYPE tells the browser which version of HTML the document uses.",
      unit: "Unit 2",
      difficulty: "Hard",
      points: 3
    }
  ];

  const testTypes = {
    quick: { name: 'Quick Test', questions: 10, time: 30, difficulty: 'Easy' },
    medium: { name: 'Medium Test', questions: 15, time: 45, difficulty: 'Medium' },
    expert: { name: 'Expert Test', questions: 20, time: 60, difficulty: 'Hard' },
    mixed: { name: 'Mixed Test', questions: 25, time: 75, difficulty: 'Mixed' }
  };

  const generateTestQuestions = (testType: string) => {
    let questions: MCQQuestion[] = [];
    const testConfig = testTypes[testType as keyof typeof testTypes];
    
    switch (testType) {
      case 'quick':
        questions = allMCQs.filter(q => q.difficulty === 'Easy').slice(0, testConfig.questions);
        break;
      case 'medium':
        questions = allMCQs.filter(q => q.difficulty === 'Medium').slice(0, testConfig.questions);
        break;
      case 'expert':
        questions = allMCQs.filter(q => q.difficulty === 'Hard').slice(0, testConfig.questions);
        break;
      case 'mixed':
        const easy = allMCQs.filter(q => q.difficulty === 'Easy').slice(0, 8);
        const medium = allMCQs.filter(q => q.difficulty === 'Medium').slice(0, 10);
        const hard = allMCQs.filter(q => q.difficulty === 'Hard').slice(0, 7);
        questions = [...easy, ...medium, ...hard];
        break;
    }
    
    return questions.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft => timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0 && isActive) {
      handleNextQuestion();
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, timeLeft]);

  const startTest = () => {
    const questions = generateTestQuestions(selectedTest);
    setTestQuestions(questions);
    setIsActive(true);
    setCurrentQuestion(0);
    setScore(0);
    setQuestionsAnswered(0);
    setSelectedAnswer(null);
    setShowAnswer(false);
    setShowFinalResults(false);
    setTimeLeft(testTypes[selectedTest as keyof typeof testTypes].time);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (showAnswer) return;
    setSelectedAnswer(answerIndex);
    setShowAnswer(true);
    
    if (answerIndex === testQuestions[currentQuestion].correctAnswer) {
      setScore(prev => prev + testQuestions[currentQuestion].points);
    }
    setQuestionsAnswered(prev => prev + 1);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < testQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setShowAnswer(false);
      setTimeLeft(testTypes[selectedTest as keyof typeof testTypes].time);
    } else {
      setShowFinalResults(true);
      setIsActive(false);
    }
  };

  const resetTest = () => {
    setIsActive(false);
    setShowFinalResults(false);
    setCurrentQuestion(0);
    setScore(0);
    setQuestionsAnswered(0);
    setSelectedAnswer(null);
    setShowAnswer(false);
  };

  const getScoreColor = (percentage: number) => {
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const calculateMaxScore = () => {
    return testQuestions.reduce((total, question) => total + question.points, 0);
  };

  if (showFinalResults) {
    const maxScore = calculateMaxScore();
    const percentage = Math.round((score / maxScore) * 100);

    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
          <div className="text-center mb-8">
            <Award className={`w-16 h-16 mx-auto mb-4 ${getScoreColor(percentage)}`} />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Test Complete!
            </h1>
            <div className={`text-4xl font-bold mb-2 ${getScoreColor(percentage)}`}>
              {score}/{maxScore} points ({percentage}%)
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Questions Answered: {questionsAnswered}/{testQuestions.length}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <Target className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-600">{percentage}%</div>
              <div className="text-sm text-blue-800 dark:text-blue-200">Accuracy</div>
            </div>
            <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-600">{score}</div>
              <div className="text-sm text-green-800 dark:text-green-200">Points Earned</div>
            </div>
            <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <Zap className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-purple-600">{testQuestions.length}</div>
              <div className="text-sm text-purple-800 dark:text-purple-200">Questions</div>
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <button
              onClick={resetTest}
              className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              <RotateCcw className="w-5 h-5" />
              <span>Try Again</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          MCQ Tests
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Quick multiple-choice questions with instant feedback and scoring
        </p>
      </div>

      {!isActive ? (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
          <div className="text-center mb-8">
            <Zap className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Choose Your Challenge
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {Object.entries(testTypes).map(([key, config]) => (
              <label
                key={key}
                className={`block p-6 border-2 rounded-xl cursor-pointer transition-all ${
                  selectedTest === key
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                    : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                }`}
              >
                <input
                  type="radio"
                  name="testType"
                  value={key}
                  checked={selectedTest === key}
                  onChange={(e) => setSelectedTest(e.target.value)}
                  className="sr-only"
                />
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {config.name}
                  </h3>
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center justify-center space-x-4">
                      <span className="flex items-center space-x-1">
                        <Target className="w-4 h-4" />
                        <span>{config.questions} questions</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{config.time}s per question</span>
                      </span>
                    </div>
                    <div className="text-center">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        config.difficulty === 'Easy' ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-200' :
                        config.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-200' :
                        config.difficulty === 'Hard' ? 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-200' :
                        'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-200'
                      }`}>
                        {config.difficulty}
                      </span>
                    </div>
                  </div>
                </div>
              </label>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={startTest}
              className="bg-yellow-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors shadow-lg hover:shadow-xl"
            >
              Start MCQ Test
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Question {currentQuestion + 1} of {testQuestions.length}
              </span>
              <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-2 w-48">
                <div 
                  className="bg-yellow-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / testQuestions.length) * 100}%` }}
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-sm text-gray-500 dark:text-gray-400">Score</div>
                <div className="text-xl font-bold text-yellow-600">{score}</div>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <Clock className="w-5 h-5" />
                <span className="font-mono text-lg">{timeLeft}s</span>
              </div>
            </div>
          </div>

          {testQuestions.length > 0 && (
            <div className="mb-8">
              <div className="mb-4">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                  testQuestions[currentQuestion].difficulty === 'Easy' ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-200' :
                  testQuestions[currentQuestion].difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-200' :
                  'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-200'
                }`}>
                  {testQuestions[currentQuestion].difficulty} - {testQuestions[currentQuestion].points} points
                </span>
              </div>
              
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                {testQuestions[currentQuestion].question}
              </h2>

              <div className="space-y-3 mb-6">
                {testQuestions[currentQuestion].options.map((option, index) => {
                  let buttonClass = "block w-full p-4 border rounded-lg text-left transition-colors ";
                  
                  if (showAnswer) {
                    if (index === testQuestions[currentQuestion].correctAnswer) {
                      buttonClass += "border-green-500 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200";
                    } else if (index === selectedAnswer && selectedAnswer !== testQuestions[currentQuestion].correctAnswer) {
                      buttonClass += "border-red-500 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200";
                    } else {
                      buttonClass += "border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300";
                    }
                  } else {
                    buttonClass += "border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 cursor-pointer";
                  }

                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      disabled={showAnswer}
                      className={buttonClass}
                    >
                      <div className="flex items-center justify-between">
                        <span>{option}</span>
                        {showAnswer && index === testQuestions[currentQuestion].correctAnswer && (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        )}
                        {showAnswer && index === selectedAnswer && selectedAnswer !== testQuestions[currentQuestion].correctAnswer && (
                          <XCircle className="w-5 h-5 text-red-500" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {showAnswer && (
                <div className="mb-6">
                  <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                    <p className="text-blue-800 dark:text-blue-200 text-sm">
                      <strong>Explanation:</strong> {testQuestions[currentQuestion].explanation}
                    </p>
                  </div>
                  
                  <div className="flex justify-center mt-4">
                    <button
                      onClick={handleNextQuestion}
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      {currentQuestion === testQuestions.length - 1 ? 'Finish Test' : 'Next Question'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MCQTestPage;