import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, RotateCcw, Clock, Award, BookOpen } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  unit: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

const PracticeTestPage: React.FC = () => {
  const [selectedTest, setSelectedTest] = useState<string>('all');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(3600); // 60 minutes
  const [isActive, setIsActive] = useState(false);

  const questions: Question[] = [
    // Unit 1 Questions
    {
      id: 1,
      question: "What does WWW stand for?",
      options: ["World Wide Web", "World Web Wide", "Wide World Web", "Web World Wide"],
      correctAnswer: 0,
      explanation: "WWW stands for World Wide Web, which is an information system that enables documents and other web resources to be accessed over the Internet.",
      unit: "Unit 1",
      difficulty: "Easy"
    },
    {
      id: 2,
      question: "Which protocol is used for secure web communication?",
      options: ["HTTP", "HTTPS", "FTP", "SMTP"],
      correctAnswer: 1,
      explanation: "HTTPS (HyperText Transfer Protocol Secure) is used for secure web communication. It encrypts data between the browser and server using SSL/TLS.",
      unit: "Unit 1",
      difficulty: "Easy"
    },
    {
      id: 3,
      question: "What is the default port number for HTTP?",
      options: ["21", "25", "80", "443"],
      correctAnswer: 2,
      explanation: "Port 80 is the default port for HTTP communication. HTTPS uses port 443 by default.",
      unit: "Unit 1",
      difficulty: "Medium"
    },
    {
      id: 4,
      question: "Which organization develops web standards?",
      options: ["W3C", "IEEE", "ISO", "ANSI"],
      correctAnswer: 0,
      explanation: "W3C (World Wide Web Consortium) is the international standards organization that develops web standards and guidelines.",
      unit: "Unit 1",
      difficulty: "Easy"
    },
    {
      id: 5,
      question: "What does DNS stand for?",
      options: ["Domain Name System", "Dynamic Network Service", "Digital Name Server", "Domain Network System"],
      correctAnswer: 0,
      explanation: "DNS stands for Domain Name System, which translates human-readable domain names into IP addresses.",
      unit: "Unit 1",
      difficulty: "Easy"
    },
    {
      id: 6,
      question: "Which type of internet connection uses existing telephone lines?",
      options: ["Cable", "DSL", "Fiber", "Satellite"],
      correctAnswer: 1,
      explanation: "DSL (Digital Subscriber Line) uses existing telephone lines to provide internet connectivity while allowing simultaneous phone usage.",
      unit: "Unit 1",
      difficulty: "Medium"
    },
    {
      id: 7,
      question: "What is the purpose of a proxy server?",
      options: ["Store web pages", "Act as intermediary between client and server", "Provide internet connection", "Host websites"],
      correctAnswer: 1,
      explanation: "A proxy server acts as an intermediary between clients and servers, providing functions like caching, security, and content filtering.",
      unit: "Unit 1",
      difficulty: "Medium"
    },
    {
      id: 8,
      question: "Which web server is developed by Apache Software Foundation?",
      options: ["IIS", "Nginx", "Apache HTTP Server", "Lighttpd"],
      correctAnswer: 2,
      explanation: "Apache HTTP Server is developed by the Apache Software Foundation and is one of the most popular web servers.",
      unit: "Unit 1",
      difficulty: "Easy"
    },
    {
      id: 9,
      question: "What does ISP stand for?",
      options: ["Internet Service Provider", "Internet Security Protocol", "Internal Server Process", "Internet System Provider"],
      correctAnswer: 0,
      explanation: "ISP stands for Internet Service Provider, which is a company that provides internet access to customers.",
      unit: "Unit 1",
      difficulty: "Easy"
    },
    {
      id: 10,
      question: "Which protocol is connectionless and faster but less reliable?",
      options: ["TCP", "UDP", "HTTP", "FTP"],
      correctAnswer: 1,
      explanation: "UDP (User Datagram Protocol) is connectionless and faster than TCP but less reliable as it doesn't guarantee delivery or order.",
      unit: "Unit 1",
      difficulty: "Medium"
    },

    // Unit 2 Questions
    {
      id: 11,
      question: "What does HTML stand for?",
      options: ["HyperText Markup Language", "High Tech Modern Language", "HyperText Modern Language", "High Text Markup Language"],
      correctAnswer: 0,
      explanation: "HTML stands for HyperText Markup Language, which is the standard markup language for creating web pages.",
      unit: "Unit 2",
      difficulty: "Easy"
    },
    {
      id: 12,
      question: "Which HTML tag is used to create a hyperlink?",
      options: ["<link>", "<a>", "<href>", "<url>"],
      correctAnswer: 1,
      explanation: "The <a> (anchor) tag is used to create hyperlinks in HTML. The href attribute specifies the destination.",
      unit: "Unit 2",
      difficulty: "Easy"
    },
    {
      id: 13,
      question: "What is the correct HTML element for the largest heading?",
      options: ["<h6>", "<heading>", "<h1>", "<header>"],
      correctAnswer: 2,
      explanation: "<h1> is the HTML element for the largest heading. Headings range from <h1> (largest) to <h6> (smallest).",
      unit: "Unit 2",
      difficulty: "Easy"
    },
    {
      id: 14,
      question: "Which attribute is used to provide alternative text for images?",
      options: ["title", "alt", "src", "description"],
      correctAnswer: 1,
      explanation: "The 'alt' attribute provides alternative text for images, which is important for accessibility and SEO.",
      unit: "Unit 2",
      difficulty: "Easy"
    },
    {
      id: 15,
      question: "What does XHTML stand for?",
      options: ["eXtensible HyperText Markup Language", "eXtra HyperText Markup Language", "eXtended HTML", "eXtreme HTML"],
      correctAnswer: 0,
      explanation: "XHTML stands for eXtensible HyperText Markup Language, which is a stricter, XML-based version of HTML.",
      unit: "Unit 2",
      difficulty: "Medium"
    },
    {
      id: 16,
      question: "Which HTML element is used to create an unordered list?",
      options: ["<ol>", "<ul>", "<list>", "<li>"],
      correctAnswer: 1,
      explanation: "<ul> creates an unordered (bulleted) list, while <ol> creates an ordered (numbered) list. <li> defines list items.",
      unit: "Unit 2",
      difficulty: "Easy"
    },
    {
      id: 17,
      question: "What is the purpose of the <thead> element in HTML tables?",
      options: ["Table header section", "Table head cell", "Table title", "Table heading"],
      correctAnswer: 0,
      explanation: "<thead> defines the header section of an HTML table, typically containing column headers.",
      unit: "Unit 2",
      difficulty: "Medium"
    },
    {
      id: 18,
      question: "Which input type is used for email addresses in HTML5?",
      options: ["text", "email", "mail", "address"],
      correctAnswer: 1,
      explanation: "HTML5 introduced the 'email' input type which provides built-in email validation and appropriate mobile keyboards.",
      unit: "Unit 2",
      difficulty: "Medium"
    },
    {
      id: 19,
      question: "What does the 'colspan' attribute do in HTML tables?",
      options: ["Sets column width", "Spans multiple columns", "Colors the column", "Counts columns"],
      correctAnswer: 1,
      explanation: "The 'colspan' attribute makes a table cell span across multiple columns horizontally.",
      unit: "Unit 2",
      difficulty: "Medium"
    },
    {
      id: 20,
      question: "Which HTML element is used for the document title?",
      options: ["<title>", "<head>", "<header>", "<h1>"],
      correctAnswer: 0,
      explanation: "The <title> element, placed in the <head> section, defines the document title shown in the browser tab.",
      unit: "Unit 2",
      difficulty: "Easy"
    },

    // Unit 3 Questions
    {
      id: 21,
      question: "What does CSS stand for?",
      options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
      correctAnswer: 1,
      explanation: "CSS stands for Cascading Style Sheets, which is used to style and layout web pages.",
      unit: "Unit 3",
      difficulty: "Easy"
    },
    {
      id: 22,
      question: "Which CSS property is used to change the text color?",
      options: ["text-color", "font-color", "color", "text-style"],
      correctAnswer: 2,
      explanation: "The 'color' property is used to set the text color in CSS.",
      unit: "Unit 3",
      difficulty: "Easy"
    },
    {
      id: 23,
      question: "How do you select an element with id 'header' in CSS?",
      options: [".header", "#header", "header", "*header"],
      correctAnswer: 1,
      explanation: "The # symbol is used to select elements by their ID in CSS. So #header selects the element with id='header'.",
      unit: "Unit 3",
      difficulty: "Easy"
    },
    {
      id: 24,
      question: "Which CSS property controls the space between elements?",
      options: ["padding", "margin", "spacing", "gap"],
      correctAnswer: 1,
      explanation: "The 'margin' property controls the space outside an element, between it and other elements.",
      unit: "Unit 3",
      difficulty: "Easy"
    },
    {
      id: 25,
      question: "What is the correct way to add CSS to an HTML document externally?",
      options: ["<style src='style.css'>", "<link rel='stylesheet' href='style.css'>", "<css href='style.css'>", "<stylesheet src='style.css'>"],
      correctAnswer: 1,
      explanation: "The <link> element with rel='stylesheet' and href attributes is used to link external CSS files.",
      unit: "Unit 3",
      difficulty: "Medium"
    },
    {
      id: 26,
      question: "Which CSS property is used to make text bold?",
      options: ["font-weight", "text-weight", "font-style", "text-bold"],
      correctAnswer: 0,
      explanation: "The 'font-weight' property controls the thickness of text. Use 'bold' or numeric values like 700.",
      unit: "Unit 3",
      difficulty: "Easy"
    },
    {
      id: 27,
      question: "What does the 'display: none' property do?",
      options: ["Makes element transparent", "Hides element but keeps space", "Completely removes element from layout", "Makes element invisible"],
      correctAnswer: 2,
      explanation: "'display: none' completely removes the element from the layout as if it doesn't exist.",
      unit: "Unit 3",
      difficulty: "Medium"
    },
    {
      id: 28,
      question: "Which CSS property is used to set the background color?",
      options: ["bg-color", "background-color", "color-background", "background"],
      correctAnswer: 1,
      explanation: "The 'background-color' property sets the background color of an element.",
      unit: "Unit 3",
      difficulty: "Easy"
    },
    {
      id: 29,
      question: "What is the CSS box model?",
      options: ["A way to create boxes", "Content, padding, border, margin", "A layout technique", "A design pattern"],
      correctAnswer: 1,
      explanation: "The CSS box model consists of content, padding, border, and margin areas around every HTML element.",
      unit: "Unit 3",
      difficulty: "Medium"
    },
    {
      id: 30,
      question: "Which CSS selector has the highest specificity?",
      options: ["Element selector", "Class selector", "ID selector", "Universal selector"],
      correctAnswer: 2,
      explanation: "ID selectors have higher specificity than class selectors, which have higher specificity than element selectors.",
      unit: "Unit 3",
      difficulty: "Hard"
    },

    // Additional Mixed Questions
    {
      id: 31,
      question: "What is the difference between HTTP and HTTPS?",
      options: ["No difference", "HTTPS is faster", "HTTPS is encrypted", "HTTPS uses different ports only"],
      correctAnswer: 2,
      explanation: "HTTPS is the secure version of HTTP that encrypts data transmission using SSL/TLS protocols.",
      unit: "Unit 1",
      difficulty: "Medium"
    },
    {
      id: 32,
      question: "Which HTML5 input type is used for selecting dates?",
      options: ["datetime", "date", "calendar", "time"],
      correctAnswer: 1,
      explanation: "HTML5 introduced the 'date' input type which provides a date picker interface.",
      unit: "Unit 2",
      difficulty: "Medium"
    },
    {
      id: 33,
      question: "How do you center a block element horizontally in CSS?",
      options: ["text-align: center", "margin: 0 auto", "align: center", "center: true"],
      correctAnswer: 1,
      explanation: "Setting 'margin: 0 auto' centers a block element horizontally when it has a defined width.",
      unit: "Unit 3",
      difficulty: "Medium"
    },
    {
      id: 34,
      question: "What is the purpose of semantic HTML elements?",
      options: ["Better styling", "Improved SEO and accessibility", "Faster loading", "Cross-browser compatibility"],
      correctAnswer: 1,
      explanation: "Semantic HTML elements provide meaning to content, improving SEO, accessibility, and code maintainability.",
      unit: "Unit 2",
      difficulty: "Hard"
    },
    {
      id: 35,
      question: "Which CSS property is used for responsive design?",
      options: ["@media", "@responsive", "@screen", "@device"],
      correctAnswer: 0,
      explanation: "@media queries are used to apply different styles based on device characteristics like screen size.",
      unit: "Unit 3",
      difficulty: "Hard"
    }
  ];

  const filteredQuestions = selectedTest === 'all' 
    ? questions 
    : questions.filter(q => q.unit.toLowerCase().includes(selectedTest));

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft => timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setShowResults(true);
      setIsActive(false);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, timeLeft]);

  const startTest = () => {
    setIsActive(true);
    setShowResults(false);
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setTimeLeft(3600);
  };

  const handleAnswerSelect = (questionId: number, answerIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  const calculateScore = () => {
    let correct = 0;
    filteredQuestions.forEach(question => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getScoreColor = (score: number, total: number) => {
    const percentage = (score / total) * 100;
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  if (showResults) {
    const score = calculateScore();
    const total = filteredQuestions.length;
    const percentage = Math.round((score / total) * 100);

    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
          <div className="text-center mb-8">
            <Award className={`w-16 h-16 mx-auto mb-4 ${getScoreColor(score, total)}`} />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Test Results
            </h1>
            <div className={`text-4xl font-bold mb-2 ${getScoreColor(score, total)}`}>
              {score}/{total} ({percentage}%)
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              {percentage >= 80 ? 'Excellent work!' : 
               percentage >= 60 ? 'Good job!' : 
               'Keep studying!'}
            </p>
          </div>

          <div className="space-y-6">
            {filteredQuestions.map((question, index) => {
              const userAnswer = selectedAnswers[question.id];
              const isCorrect = userAnswer === question.correctAnswer;
              
              return (
                <div key={question.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                  <div className="flex items-start space-x-3 mb-4">
                    {isCorrect ? (
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    ) : (
                      <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    )}
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Question {index + 1}: {question.question}
                      </h3>
                      <div className="grid gap-2 mb-4">
                        {question.options.map((option, optionIndex) => (
                          <div
                            key={optionIndex}
                            className={`p-3 rounded-lg border ${
                              optionIndex === question.correctAnswer
                                ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-800 dark:text-green-200'
                                : optionIndex === userAnswer && userAnswer !== question.correctAnswer
                                ? 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-800 dark:text-red-200'
                                : 'bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600'
                            }`}
                          >
                            {option}
                            {optionIndex === question.correctAnswer && (
                              <span className="ml-2 text-green-600 font-semibold">✓ Correct</span>
                            )}
                            {optionIndex === userAnswer && userAnswer !== question.correctAnswer && (
                              <span className="ml-2 text-red-600 font-semibold">✗ Your answer</span>
                            )}
                          </div>
                        ))}
                      </div>
                      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                        <p className="text-blue-800 dark:text-blue-200 text-sm">
                          <strong>Explanation:</strong> {question.explanation}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center mt-8">
            <button
              onClick={startTest}
              className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              <RotateCcw className="w-5 h-5" />
              <span>Retake Test</span>
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
          Practice Tests
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Test your knowledge with comprehensive questions covering all units
        </p>
      </div>

      {!isActive ? (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
          <div className="text-center mb-8">
            <BookOpen className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Choose Your Test
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900 dark:text-white">Select Test Type:</h3>
              <div className="space-y-2">
                {[
                  { value: 'all', label: 'Complete Test (All Units)', count: questions.length },
                  { value: 'unit 1', label: 'Unit 1: Web Technology', count: questions.filter(q => q.unit === 'Unit 1').length },
                  { value: 'unit 2', label: 'Unit 2: Markup Languages', count: questions.filter(q => q.unit === 'Unit 2').length },
                  { value: 'unit 3', label: 'Unit 3: CSS', count: questions.filter(q => q.unit === 'Unit 3').length }
                ].map((test) => (
                  <label key={test.value} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="testType"
                      value={test.value}
                      checked={selectedTest === test.value}
                      onChange={(e) => setSelectedTest(e.target.value)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span className="text-gray-700 dark:text-gray-300">
                      {test.label} ({test.count} questions)
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Test Information:</h3>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>Time Limit: 60 minutes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FileText className="w-4 h-4" />
                  <span>Questions: {filteredQuestions.length}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4" />
                  <span>Passing Score: 60%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={startTest}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Start Test
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Question {currentQuestion + 1} of {filteredQuestions.length}
              </span>
              <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-2 w-48">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / filteredQuestions.length) * 100}%` }}
                />
              </div>
            </div>
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
              <Clock className="w-5 h-5" />
              <span className="font-mono text-lg">{formatTime(timeLeft)}</span>
            </div>
          </div>

          {filteredQuestions.length > 0 && (
            <div className="mb-8">
              <div className="mb-4">
                <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium mb-2">
                  {filteredQuestions[currentQuestion].unit} - {filteredQuestions[currentQuestion].difficulty}
                </span>
              </div>
              
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                {filteredQuestions[currentQuestion].question}
              </h2>

              <div className="space-y-3 mb-8">
                {filteredQuestions[currentQuestion].options.map((option, index) => (
                  <label
                    key={index}
                    className={`block p-4 border rounded-lg cursor-pointer transition-colors ${
                      selectedAnswers[filteredQuestions[currentQuestion].id] === index
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                        : 'border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name={`question-${filteredQuestions[currentQuestion].id}`}
                        value={index}
                        checked={selectedAnswers[filteredQuestions[currentQuestion].id] === index}
                        onChange={() => handleAnswerSelect(filteredQuestions[currentQuestion].id, index)}
                        className="w-4 h-4 text-blue-600"
                      />
                      <span className="text-gray-700 dark:text-gray-300">{option}</span>
                    </div>
                  </label>
                ))}
              </div>

              <div className="flex justify-between">
                <button
                  onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                  disabled={currentQuestion === 0}
                  className="px-6 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>

                {currentQuestion === filteredQuestions.length - 1 ? (
                  <button
                    onClick={() => setShowResults(true)}
                    className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Submit Test
                  </button>
                ) : (
                  <button
                    onClick={() => setCurrentQuestion(Math.min(filteredQuestions.length - 1, currentQuestion + 1))}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PracticeTestPage;