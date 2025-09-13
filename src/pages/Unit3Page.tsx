import React, { useState } from 'react';
import { ChevronRight, Clock, CheckCircle, Palette, Code, Layout } from 'lucide-react';
import { useProgress } from '../context/ProgressContext';
import CodeExample from '../components/CodeExample';

const Unit3Page: React.FC = () => {
  const { markAsCompleted, isCompleted } = useProgress();
  const [activeSection, setActiveSection] = useState('css-intro');

  const sections = [
    { 
      id: 'css-intro', 
      title: 'Introduction to CSS', 
      icon: Palette,
      content: <CSSIntroSection />
    },
    { 
      id: 'css-syntax', 
      title: 'CSS Syntax & Selectors', 
      icon: Code,
      content: <CSSSyntaxSection />
    },
    { 
      id: 'css-implementation', 
      title: 'How to Add CSS', 
      icon: Layout,
      content: <CSSImplementationSection />
    },
    { 
      id: 'css-properties', 
      title: 'CSS Properties', 
      icon: Palette,
      content: <CSSPropertiesSection />
    },
    { 
      id: 'css-layout', 
      title: 'Layout Properties', 
      icon: Layout,
      content: <CSSLayoutSection />
    },
    { 
      id: 'css-advanced', 
      title: 'Advanced CSS Features', 
      icon: Code,
      content: <CSSAdvancedSection />
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Unit III: Cascading Style Sheets (CSS)
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Master CSS styling, selectors, properties, and layout techniques (10 Hours)
        </p>
        <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
          <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> 10 Hours</span>
          <span>6 Sections</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Navigation Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-4 sticky top-24">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Sections</h3>
            <nav className="space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => {
                    setActiveSection(section.id);
                    markAsCompleted(`unit3-${section.id}`);
                  }}
                  className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors ${
                    activeSection === section.id
                      ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                      : 'hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <section.icon className="w-4 h-4" />
                    <span className="text-sm">{section.title}</span>
                  </div>
                  {isCompleted(`unit3-${section.id}`) && (
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  )}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-3">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
            {sections.find(s => s.id === activeSection)?.content}
          </div>
        </div>
      </div>
    </div>
  );
};

// Individual Section Components
const CSSIntroSection: React.FC = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
      Introduction to CSS
    </h2>
    
    <div className="prose dark:prose-invert max-w-none">
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation 
        of HTML documents. It controls the visual appearance, layout, and formatting of web pages, 
        separating content from presentation.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">What is CSS?</h3>
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
        <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">CSS Key Concepts:</h4>
        <ul className="list-disc list-inside text-blue-800 dark:text-blue-200 space-y-1">
          <li><strong>Cascading:</strong> Styles cascade from multiple sources with priority rules</li>
          <li><strong>Style Sheets:</strong> Collections of style rules that define presentation</li>
          <li><strong>Separation of Concerns:</strong> Content (HTML) separate from presentation (CSS)</li>
          <li><strong>Selectors:</strong> Patterns that target HTML elements for styling</li>
          <li><strong>Properties:</strong> Style attributes like color, font-size, margin</li>
          <li><strong>Values:</strong> Specific settings for properties</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Benefits of CSS</h3>
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
          <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Development Benefits</h4>
          <div className="space-y-2 text-sm text-green-800 dark:text-green-200">
            <p><strong>Maintainability:</strong> Centralized styling makes updates easier</p>
            <p><strong>Reusability:</strong> Same styles can be applied to multiple elements</p>
            <p><strong>Consistency:</strong> Uniform appearance across the website</p>
            <p><strong>Efficiency:</strong> Faster development and smaller file sizes</p>
          </div>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
          <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">User Benefits</h4>
          <div className="space-y-2 text-sm text-purple-800 dark:text-purple-200">
            <p><strong>Better UX:</strong> Improved visual design and layout</p>
            <p><strong>Faster Loading:</strong> Cached stylesheets reduce load times</p>
            <p><strong>Accessibility:</strong> Better support for screen readers</p>
            <p><strong>Responsive Design:</strong> Adapts to different screen sizes</p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">CSS Evolution</h3>
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-6">
        <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-3">CSS Version History:</h4>
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <div className="bg-yellow-200 dark:bg-yellow-700 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-bold text-yellow-800 dark:text-yellow-200">1</span>
            </div>
            <div className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>CSS1 (1996):</strong> Basic styling properties, fonts, colors, margins
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="bg-yellow-200 dark:bg-yellow-700 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-bold text-yellow-800 dark:text-yellow-200">2</span>
            </div>
            <div className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>CSS2 (1998):</strong> Positioning, z-index, media types, table styling
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="bg-yellow-200 dark:bg-yellow-700 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-bold text-yellow-800 dark:text-yellow-200">2.1</span>
            </div>
            <div className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>CSS2.1 (2011):</strong> Refined CSS2, fixed errors, better browser support
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="bg-yellow-200 dark:bg-yellow-700 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-bold text-yellow-800 dark:text-yellow-200">3</span>
            </div>
            <div className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>CSS3 (2011+):</strong> Modular approach, animations, flexbox, grid, transforms
            </div>
          </div>
        </div>
      </div>

      <CodeExample
        title="CSS vs HTML Styling Comparison"
        code={`<!-- OLD WAY: HTML with inline styling (NOT RECOMMENDED) -->
<html>
<body bgcolor="#f0f0f0">
    <table width="100%" cellpadding="10">
        <tr>
            <td>
                <font face="Arial" size="4" color="blue">
                    <b>Welcome to Our Website</b>
                </font>
                <br><br>
                <font face="Arial" size="2" color="black">
                    This is some content with inline styling.
                </font>
            </td>
        </tr>
    </table>
</body>
</html>

<!-- MODERN WAY: HTML with CSS (RECOMMENDED) -->
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            background-color: #f0f0f0;
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
        }
        
        .header {
            font-size: 24px;
            color: blue;
            font-weight: bold;
            margin-bottom: 20px;
        }
        
        .content {
            font-size: 14px;
            color: black;
            line-height: 1.6;
        }
    </style>
</head>
<body>
    <div class="header">Welcome to Our Website</div>
    <div class="content">This is some content styled with CSS.</div>
</body>
</html>`}
        language="html"
      />

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">CSS and Web Standards</h3>
      <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-4 mb-6">
        <h4 className="font-semibold text-teal-900 dark:text-teal-100 mb-2">W3C CSS Standards:</h4>
        <p className="text-teal-800 dark:text-teal-200 mb-3">
          The World Wide Web Consortium (W3C) develops and maintains CSS specifications to ensure 
          consistency across browsers and platforms.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h5 className="font-medium text-teal-900 dark:text-teal-100 mb-2">Current CSS Modules:</h5>
            <ul className="list-disc list-inside text-sm text-teal-800 dark:text-teal-200 space-y-1">
              <li>CSS Selectors Level 4</li>
              <li>CSS Grid Layout Module</li>
              <li>CSS Flexbox Layout Module</li>
              <li>CSS Animations and Transitions</li>
              <li>CSS Custom Properties (Variables)</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-teal-900 dark:text-teal-100 mb-2">Browser Support:</h5>
            <ul className="list-disc list-inside text-sm text-teal-800 dark:text-teal-200 space-y-1">
              <li>Modern browsers support CSS3 features</li>
              <li>Progressive enhancement for older browsers</li>
              <li>Vendor prefixes for experimental features</li>
              <li>Feature detection with @supports</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">CSS in Modern Web Development</h3>
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
          <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Responsive Design</h4>
          <div className="space-y-1 text-sm text-red-800 dark:text-red-200">
            <p>Media queries for different screen sizes</p>
            <p>Flexible layouts with Grid and Flexbox</p>
            <p>Mobile-first design approach</p>
          </div>
        </div>

        <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-4">
          <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">CSS Frameworks</h4>
          <div className="space-y-1 text-sm text-indigo-800 dark:text-indigo-200">
            <p>Bootstrap, Tailwind CSS, Bulma</p>
            <p>Component-based styling</p>
            <p>Utility-first approaches</p>
          </div>
        </div>

        <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
          <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">CSS Preprocessors</h4>
          <div className="space-y-1 text-sm text-orange-800 dark:text-orange-200">
            <p>Sass, Less, Stylus</p>
            <p>Variables, nesting, mixins</p>
            <p>Build tools and compilation</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">CSS Learning Path:</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h5 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Fundamentals:</h5>
            <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <li>Selectors and specificity</li>
              <li>Box model and positioning</li>
              <li>Typography and colors</li>
              <li>Layout techniques</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Advanced Topics:</h5>
            <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <li>CSS Grid and Flexbox</li>
              <li>Animations and transitions</li>
              <li>Custom properties (variables)</li>
              <li>Performance optimization</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const CSSSyntaxSection: React.FC = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
      CSS Syntax & Selectors
    </h2>
    
    <div className="prose dark:prose-invert max-w-none">
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        CSS syntax consists of selectors, properties, and values. Understanding the syntax and 
        different types of selectors is fundamental to writing effective CSS.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">CSS Syntax Structure</h3>
      <CodeExample
        title="Basic CSS Syntax"
        code={`/* CSS Rule Structure */
selector {
    property: value;
    property: value;
}

/* Example CSS Rules */
h1 {
    color: blue;
    font-size: 24px;
    margin-bottom: 10px;
}

.highlight {
    background-color: yellow;
    padding: 5px;
}

#main-content {
    width: 80%;
    margin: 0 auto;
}

/* Multiple selectors */
h1, h2, h3 {
    font-family: Arial, sans-serif;
    color: #333;
}

/* Descendant selector */
.container p {
    line-height: 1.6;
    margin-bottom: 15px;
}

/* CSS Comments */
/* This is a single-line comment */

/*
This is a
multi-line comment
that spans several lines
*/`}
        language="css"
      />

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">CSS Selector Types</h3>
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Basic Selectors</h4>
          <div className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
            <p><strong>Universal:</strong> * (selects all elements)</p>
            <p><strong>Type:</strong> h1, p, div (selects by tag name)</p>
            <p><strong>Class:</strong> .classname (selects by class attribute)</p>
            <p><strong>ID:</strong> #idname (selects by id attribute)</p>
            <p><strong>Attribute:</strong> [attribute] (selects by attribute)</p>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
          <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Combinator Selectors</h4>
          <div className="space-y-2 text-sm text-green-800 dark:text-green-200">
            <p><strong>Descendant:</strong> div p (space)</p>
            <p><strong>Child:</strong> div {'>'} p (direct child)</p>
            <p><strong>Adjacent Sibling:</strong> h1 + p (next sibling)</p>
            <p><strong>General Sibling:</strong> h1 ~ p (all siblings)</p>
          </div>
        </div>
      </div>

      <CodeExample
        title="CSS Selector Examples"
        code={`<!DOCTYPE html>
<html>
<head>
    <style>
        /* Universal Selector */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        /* Type Selectors */
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
        }
        
        h1 {
            color: #2c3e50;
            border-bottom: 2px solid #3498db;
        }
        
        p {
            margin-bottom: 15px;
        }
        
        /* Class Selectors */
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
        
        .highlight {
            background-color: #f39c12;
            color: white;
            padding: 5px 10px;
            border-radius: 3px;
        }
        
        .btn {
            display: inline-block;
            padding: 10px 20px;
            background-color: #3498db;
            color: white;
            text-decoration: none;
            border-radius: 5px;
        }
        
        .btn:hover {
            background-color: #2980b9;
        }
        
        /* ID Selectors */
        #header {
            background-color: #34495e;
            color: white;
            padding: 20px 0;
        }
        
        #main-content {
            min-height: 500px;
            padding: 30px 0;
        }
        
        #footer {
            background-color: #95a5a6;
            text-align: center;
            padding: 15px 0;
        }
        
        /* Attribute Selectors */
        input[type="text"] {
            border: 1px solid #bdc3c7;
            padding: 8px;
            border-radius: 3px;
        }
        
        input[type="email"] {
            border: 1px solid #bdc3c7;
            padding: 8px;
            border-radius: 3px;
        }
        
        a[href^="https://"] {
            color: #27ae60;
        }
        
        a[href$=".pdf"] {
            color: #e74c3c;
        }
        
        img[alt*="logo"] {
            max-width: 200px;
        }
        
        /* Combinator Selectors */
        
        /* Descendant Selector */
        .container p {
            font-size: 16px;
            text-align: justify;
        }
        
        /* Child Selector */
        .nav > li {
            display: inline-block;
            margin-right: 20px;
        }
        
        /* Adjacent Sibling Selector */
        h2 + p {
            font-weight: bold;
            color: #2c3e50;
        }
        
        /* General Sibling Selector */
        h2 ~ p {
            margin-left: 20px;
        }
        
        /* Pseudo-class Selectors */
        a:link { color: #3498db; }
        a:visited { color: #9b59b6; }
        a:hover { color: #e74c3c; }
        a:active { color: #f39c12; }
        
        li:first-child {
            font-weight: bold;
        }
        
        li:last-child {
            border-bottom: none;
        }
        
        tr:nth-child(even) {
            background-color: #ecf0f1;
        }
        
        input:focus {
            outline: 2px solid #3498db;
            border-color: #3498db;
        }
        
        /* Pseudo-element Selectors */
        p::first-line {
            font-weight: bold;
            color: #2c3e50;
        }
        
        p::first-letter {
            font-size: 2em;
            float: left;
            margin-right: 5px;
        }
        
        .quote::before {
            content: """;
            font-size: 2em;
            color: #95a5a6;
        }
        
        .quote::after {
            content: """;
            font-size: 2em;
            color: #95a5a6;
        }
        
        /* Multiple Selectors */
        h1, h2, h3, h4, h5, h6 {
            font-family: Georgia, serif;
            margin-bottom: 10px;
        }
        
        .btn, .button, input[type="submit"] {
            cursor: pointer;
            transition: all 0.3s ease;
        }
    </style>
</head>
<body>
    <div id="header">
        <div class="container">
            <h1>CSS Selectors Demo</h1>
        </div>
    </div>
    
    <div id="main-content">
        <div class="container">
            <h2>Welcome to CSS Selectors</h2>
            <p>This paragraph follows an h2 element (adjacent sibling).</p>
            <p>This paragraph is also a sibling of h2 (general sibling).</p>
            
            <p class="highlight">This paragraph has a highlight class.</p>
            
            <ul class="nav">
                <li>First item (first-child)</li>
                <li>Second item</li>
                <li>Third item</li>
                <li>Last item (last-child)</li>
            </ul>
            
            <p class="quote">This is a quote with pseudo-elements.</p>
            
            <form>
                <input type="text" placeholder="Text input">
                <input type="email" placeholder="Email input">
                <input type="submit" value="Submit">
            </form>
            
            <p>
                <a href="https://example.com">External link</a> |
                <a href="document.pdf">PDF link</a> |
                <a href="internal.html">Internal link</a>
            </p>
            
            <img src="company-logo.png" alt="Company logo image">
        </div>
    </div>
    
    <div id="footer">
        <div class="container">
            <p>&copy; 2024 CSS Demo</p>
        </div>
    </div>
</body>
</html>`}
        language="html"
      />

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">CSS Specificity</h3>
      <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4 mb-6">
        <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Specificity Hierarchy (Highest to Lowest):</h4>
        <div className="space-y-2 text-sm text-orange-800 dark:text-orange-200">
          <p><strong>1. Inline styles:</strong> style="color: red;" (1000 points)</p>
          <p><strong>2. IDs:</strong> #header (100 points)</p>
          <p><strong>3. Classes, attributes, pseudo-classes:</strong> .nav, [type="text"], :hover (10 points)</p>
          <p><strong>4. Elements and pseudo-elements:</strong> div, p, ::before (1 point)</p>
          <p><strong>5. Universal selector:</strong> * (0 points)</p>
        </div>
      </div>

      <CodeExample
        title="CSS Specificity Examples"
        code={`/* Specificity Examples */

/* Specificity: 1 (element) */
p {
    color: black;
}

/* Specificity: 10 (class) */
.text {
    color: blue;
}

/* Specificity: 100 (ID) */
#content {
    color: green;
}

/* Specificity: 11 (element + class) */
p.text {
    color: red;
}

/* Specificity: 101 (ID + element) */
#content p {
    color: purple;
}

/* Specificity: 110 (ID + class) */
#content .text {
    color: orange;
}

/* Specificity: 111 (ID + class + element) */
#content p.text {
    color: yellow;
}

/* Important declaration overrides specificity */
p {
    color: pink !important;
}

/* Calculating Specificity Examples */
/* div.container #main p.highlight a:hover */
/* = 1 + 10 + 100 + 1 + 10 + 1 + 10 = 133 */

/* #sidebar ul li.active */
/* = 100 + 1 + 1 + 10 = 112 */

/* .nav .menu-item:nth-child(2) */
/* = 10 + 10 + 10 = 30 */`}
        language="css"
      />

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Advanced Selectors</h3>
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
          <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Pseudo-classes</h4>
          <div className="space-y-1 text-sm text-purple-800 dark:text-purple-200">
            <p><strong>:hover</strong> - Mouse over state</p>
            <p><strong>:focus</strong> - Element has focus</p>
            <p><strong>:active</strong> - Element is being activated</p>
            <p><strong>:first-child</strong> - First child element</p>
            <p><strong>:nth-child(n)</strong> - Nth child element</p>
            <p><strong>:not(selector)</strong> - Not matching selector</p>
          </div>
        </div>

        <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-4">
          <h4 className="font-semibold text-teal-900 dark:text-teal-100 mb-2">Pseudo-elements</h4>
          <div className="space-y-1 text-sm text-teal-800 dark:text-teal-200">
            <p><strong>::before</strong> - Insert content before element</p>
            <p><strong>::after</strong> - Insert content after element</p>
            <p><strong>::first-line</strong> - First line of text</p>
            <p><strong>::first-letter</strong> - First letter of text</p>
            <p><strong>::selection</strong> - Selected text</p>
            <p><strong>::placeholder</strong> - Input placeholder text</p>
          </div>
        </div>
      </div>

      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
        <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">CSS Selector Best Practices:</h4>
        <ul className="list-disc list-inside text-sm text-red-800 dark:text-red-200 space-y-1">
          <li>Use classes for styling, IDs for JavaScript targeting</li>
          <li>Keep specificity low for maintainable CSS</li>
          <li>Avoid using !important unless absolutely necessary</li>
          <li>Use semantic class names that describe purpose, not appearance</li>
          <li>Group related selectors to reduce code duplication</li>
          <li>Use descendant selectors carefully to avoid performance issues</li>
          <li>Prefer classes over complex attribute selectors for better performance</li>
        </ul>
      </div>
    </div>
  </div>
);

const CSSImplementationSection: React.FC = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
      How to Add CSS
    </h2>
    
    <div className="prose dark:prose-invert max-w-none">
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        There are three main ways to add CSS to HTML documents: inline, internal, and external. 
        Each method has its use cases, advantages, and disadvantages.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">1. Inline CSS</h3>
      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-6">
        <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Inline CSS Characteristics:</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h5 className="font-medium text-red-800 dark:text-red-200 mb-2">Advantages:</h5>
            <ul className="list-disc list-inside text-sm text-red-700 dark:text-red-300 space-y-1">
              <li>Highest specificity (overrides other styles)</li>
              <li>Quick for testing and debugging</li>
              <li>No additional HTTP requests</li>
              <li>Useful for dynamic styling with JavaScript</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-red-800 dark:text-red-200 mb-2">Disadvantages:</h5>
            <ul className="list-disc list-inside text-sm text-red-700 dark:text-red-300 space-y-1">
              <li>Not reusable across elements</li>
              <li>Makes HTML cluttered and hard to maintain</li>
              <li>Violates separation of concerns</li>
              <li>Difficult to override without !important</li>
            </ul>
          </div>
        </div>
      </div>

      <CodeExample
        title="Inline CSS Examples"
        code={`<!DOCTYPE html>
<html>
<head>
    <title>Inline CSS Examples</title>
</head>
<body>
    <!-- Basic inline styling -->
    <h1 style="color: blue; font-size: 28px; text-align: center;">
        Welcome to Inline CSS
    </h1>
    
    <!-- Multiple properties -->
    <p style="
        color: #333;
        font-family: Arial, sans-serif;
        line-height: 1.6;
        margin: 20px 0;
        padding: 15px;
        background-color: #f9f9f9;
        border-left: 4px solid #007acc;
    ">
        This paragraph has multiple inline styles applied.
    </p>
    
    <!-- Inline styling for layout -->
    <div style="
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        background-color: #e9ecef;
        border-radius: 8px;
        margin: 20px 0;
    ">
        <span style="font-weight: bold; color: #495057;">Left Content</span>
        <span style="color: #6c757d; font-style: italic;">Right Content</span>
    </div>
    
    <!-- Inline styling for buttons -->
    <button style="
        background-color: #007bff;
        color: white;
        border: none;
        padding: 12px 24px;
        font-size: 16px;
        border-radius: 4px;
        cursor: pointer;
        margin-right: 10px;
        transition: background-color 0.3s ease;
    " 
    onmouseover="this.style.backgroundColor='#0056b3'"
    onmouseout="this.style.backgroundColor='#007bff'">
        Primary Button
    </button>
    
    <button style="
        background-color: transparent;
        color: #007bff;
        border: 2px solid #007bff;
        padding: 10px 22px;
        font-size: 16px;
        border-radius: 4px;
        cursor: pointer;
    ">
        Secondary Button
    </button>
    
    <!-- Inline styling for images -->
    <img src="example.jpg" alt="Example" style="
        width: 100%;
        max-width: 400px;
        height: auto;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        margin: 20px 0;
        display: block;
    ">
    
    <!-- Inline styling for tables -->
    <table style="
        width: 100%;
        border-collapse: collapse;
        margin: 20px 0;
        font-family: Arial, sans-serif;
    ">
        <tr style="background-color: #f8f9fa;">
            <th style="
                border: 1px solid #dee2e6;
                padding: 12px;
                text-align: left;
                font-weight: bold;
                color: #495057;
            ">Name</th>
            <th style="
                border: 1px solid #dee2e6;
                padding: 12px;
                text-align: left;
                font-weight: bold;
                color: #495057;
            ">Age</th>
            <th style="
                border: 1px solid #dee2e6;
                padding: 12px;
                text-align: left;
                font-weight: bold;
                color: #495057;
            ">City</th>
        </tr>
        <tr>
            <td style="border: 1px solid #dee2e6; padding: 12px;">John Doe</td>
            <td style="border: 1px solid #dee2e6; padding: 12px;">30</td>
            <td style="border: 1px solid #dee2e6; padding: 12px;">New York</td>
        </tr>
        <tr style="background-color: #f8f9fa;">
            <td style="border: 1px solid #dee2e6; padding: 12px;">Jane Smith</td>
            <td style="border: 1px solid #dee2e6; padding: 12px;">25</td>
            <td style="border: 1px solid #dee2e6; padding: 12px;">Los Angeles</td>
        </tr>
    </table>
</body>
</html>`}
        language="html"
      />

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">2. Internal CSS</h3>
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
        <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Internal CSS Characteristics:</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h5 className="font-medium text-blue-800 dark:text-blue-200 mb-2">Advantages:</h5>
            <ul className="list-disc list-inside text-sm text-blue-700 dark:text-blue-300 space-y-1">
              <li>Styles are contained within the document</li>
              <li>No additional HTTP requests</li>
              <li>Good for single-page styling</li>
              <li>Can use all CSS features and selectors</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-blue-800 dark:text-blue-200 mb-2">Disadvantages:</h5>
            <ul className="list-disc list-inside text-sm text-blue-700 dark:text-blue-300 space-y-1">
              <li>Not reusable across multiple pages</li>
              <li>Increases HTML file size</li>
              <li>Styles are not cached separately</li>
              <li>Harder to maintain for large sites</li>
            </ul>
          </div>
        </div>
      </div>

      <CodeExample
        title="Internal CSS Example"
        code={`<!DOCTYPE html>
<html>
<head>
    <title>Internal CSS Example</title>
    <style>
        /* Reset and base styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f8f9fa;
        }
        
        /* Header styles */
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 2rem 0;
            text-align: center;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        .header h1 {
            font-size: 2.5rem;
            margin-bottom: 0.5rem;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        
        .header p {
            font-size: 1.2rem;
            opacity: 0.9;
        }
        
        /* Container and layout */
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        .main-content {
            background: white;
            margin: 2rem auto;
            padding: 2rem;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        /* Typography */
        h2 {
            color: #2c3e50;
            margin-bottom: 1rem;
            padding-bottom: 0.5rem;
            border-bottom: 2px solid #3498db;
        }
        
        p {
            margin-bottom: 1rem;
            text-align: justify;
        }
        
        /* Card layout */
        .card-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin: 2rem 0;
        }
        
        .card {
            background: white;
            padding: 1.5rem;
            border-radius: 8px;
            box-shadow: 0 3px 10px rgba(0,0,0,0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }
        
        .card h3 {
            color: #e74c3c;
            margin-bottom: 1rem;
        }
        
        /* Button styles */
        .btn {
            display: inline-block;
            padding: 12px 24px;
            background-color: #3498db;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            transition: all 0.3s ease;
            border: none;
            cursor: pointer;
            font-size: 16px;
        }
        
        .btn:hover {
            background-color: #2980b9;
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }
        
        .btn-secondary {
            background-color: #95a5a6;
        }
        
        .btn-secondary:hover {
            background-color: #7f8c8d;
        }
        
        /* Form styles */
        .form-group {
            margin-bottom: 1.5rem;
        }
        
        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: bold;
            color: #2c3e50;
        }
        
        .form-group input,
        .form-group textarea {
            width: 100%;
            padding: 12px;
            border: 2px solid #bdc3c7;
            border-radius: 5px;
            font-size: 16px;
            transition: border-color 0.3s ease;
        }
        
        .form-group input:focus,
        .form-group textarea:focus {
            outline: none;
            border-color: #3498db;
            box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
        }
        
        /* Navigation */
        .nav {
            background-color: #34495e;
            padding: 1rem 0;
        }
        
        .nav ul {
            list-style: none;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
        }
        
        .nav li {
            margin: 0 1rem;
        }
        
        .nav a {
            color: white;
            text-decoration: none;
            padding: 0.5rem 1rem;
            border-radius: 3px;
            transition: background-color 0.3s ease;
        }
        
        .nav a:hover {
            background-color: #2c3e50;
        }
        
        /* Footer */
        .footer {
            background-color: #2c3e50;
            color: white;
            text-align: center;
            padding: 2rem 0;
            margin-top: 3rem;
        }
        
        /* Responsive design */
        @media (max-width: 768px) {
            .header h1 {
                font-size: 2rem;
            }
            
            .container {
                padding: 0 15px;
            }
            
            .main-content {
                margin: 1rem auto;
                padding: 1.5rem;
            }
            
            .card-grid {
                grid-template-columns: 1fr;
                gap: 1rem;
            }
            
            .nav ul {
                flex-direction: column;
                align-items: center;
            }
            
            .nav li {
                margin: 0.25rem 0;
            }
        }
    </style>
</head>
<body>
    <header class="header">
        <div class="container">
            <h1>Internal CSS Demo</h1>
            <p>Styles defined within the HTML document</p>
        </div>
    </header>
    
    <nav class="nav">
        <div class="container">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>
    
    <main class="main-content">
        <div class="container">
            <h2>Welcome to Internal CSS</h2>
            <p>This page demonstrates internal CSS styling. All styles are defined within the &lt;style&gt; tag in the document head.</p>
            
            <div class="card-grid">
                <div class="card">
                    <h3>Feature One</h3>
                    <p>This card showcases how internal CSS can create beautiful, reusable components within a single document.</p>
                    <a href="#" class="btn">Learn More</a>
                </div>
                
                <div class="card">
                    <h3>Feature Two</h3>
                    <p>Internal CSS is perfect for single-page applications or when you want to keep styles contained within one document.</p>
                    <a href="#" class="btn btn-secondary">Explore</a>
                </div>
                
                <div class="card">
                    <h3>Feature Three</h3>
                    <p>You can use all CSS features including animations, transitions, and responsive design with internal CSS.</p>
                    <a href="#" class="btn">Get Started</a>
                </div>
            </div>
            
            <h2>Contact Form</h2>
            <form>
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required>
                </div>
                
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>
                </div>
                
                <div class="form-group">
                    <label for="message">Message:</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                
                <button type="submit" class="btn">Send Message</button>
            </form>
        </div>
    </main>
    
    <footer class="footer">
        <div class="container">
            <p>&copy; 2024 Internal CSS Demo. All rights reserved.</p>
        </div>
    </footer>
</body>
</html>`}
        language="html"
      />

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">3. External CSS</h3>
      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-6">
        <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">External CSS Characteristics:</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h5 className="font-medium text-green-800 dark:text-green-200 mb-2">Advantages:</h5>
            <ul className="list-disc list-inside text-sm text-green-700 dark:text-green-300 space-y-1">
              <li>Reusable across multiple HTML pages</li>
              <li>Separation of concerns (content vs presentation)</li>
              <li>Cached by browsers for better performance</li>
              <li>Easier to maintain and update</li>
              <li>Smaller HTML file sizes</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-green-800 dark:text-green-200 mb-2">Disadvantages:</h5>
            <ul className="list-disc list-inside text-sm text-green-700 dark:text-green-300 space-y-1">
              <li>Additional HTTP request required</li>
              <li>Page may load unstyled briefly (FOUC)</li>
              <li>Dependency on external file availability</li>
              <li>Slightly more complex setup</li>
            </ul>
          </div>
        </div>
      </div>

      <CodeExample
        title="External CSS Implementation"
        code={`<!-- HTML File: index.html -->
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>External CSS Example</title>
    
    <!-- Link to external CSS file -->
    <link rel="stylesheet" href="styles.css">
    
    <!-- Multiple CSS files can be linked -->
    <link rel="stylesheet" href="reset.css">
    <link rel="stylesheet" href="layout.css">
    <link rel="stylesheet" href="components.css">
    <link rel="stylesheet" href="responsive.css">
    
    <!-- CSS from CDN -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    
    <!-- Preload CSS for better performance -->
    <link rel="preload" href="critical.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
    
    <!-- Media-specific CSS -->
    <link rel="stylesheet" href="print.css" media="print">
    <link rel="stylesheet" href="mobile.css" media="screen and (max-width: 768px)">
</head>
<body>
    <header class="site-header">
        <div class="container">
            <h1 class="site-title">External CSS Demo</h1>
            <nav class="main-nav">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
    
    <main class="main-content">
        <section class="hero">
            <div class="container">
                <h2>Welcome to External CSS</h2>
                <p>This page uses external stylesheets for clean, maintainable code.</p>
                <a href="#learn-more" class="btn btn-primary">Learn More</a>
            </div>
        </section>
        
        <section class="features">
            <div class="container">
                <div class="feature-grid">
                    <div class="feature-card">
                        <i class="fas fa-code"></i>
                        <h3>Clean Code</h3>
                        <p>Separation of HTML and CSS keeps code organized and maintainable.</p>
                    </div>
                    
                    <div class="feature-card">
                        <i class="fas fa-sync-alt"></i>
                        <h3>Reusable</h3>
                        <p>One CSS file can style multiple HTML pages consistently.</p>
                    </div>
                    
                    <div class="feature-card">
                        <i class="fas fa-tachometer-alt"></i>
                        <h3>Performance</h3>
                        <p>CSS files are cached by browsers for faster subsequent loads.</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
    
    <footer class="site-footer">
        <div class="container">
            <p>&copy; 2024 External CSS Demo</p>
        </div>
    </footer>
</body>
</html>

/* CSS File: styles.css */
/* Reset and base styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #fff;
}

/* Container */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header */
.site-header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 1rem 0;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.site-header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.site-title {
    font-size: 1.8rem;
    font-weight: bold;
}

.main-nav ul {
    list-style: none;
    display: flex;
    gap: 2rem;
}

.main-nav a {
    color: white;
    text-decoration: none;
    transition: opacity 0.3s ease;
}

.main-nav a:hover {
    opacity: 0.8;
}

/* Hero section */
.hero {
    background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), 
                url('hero-bg.jpg') center/cover;
    color: white;
    text-align: center;
    padding: 6rem 0;
}

.hero h2 {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.hero p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
}

/* Buttons */
.btn {
    display: inline-block;
    padding: 12px 30px;
    text-decoration: none;
    border-radius: 5px;
    transition: all 0.3s ease;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.btn-primary {
    background-color: #3498db;
    color: white;
}

.btn-primary:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

/* Features section */
.features {
    padding: 4rem 0;
    background-color: #f8f9fa;
}

.feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.feature-card {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
}

.feature-card:hover {
    transform: translateY(-5px);
}

.feature-card i {
    font-size: 3rem;
    color: #3498db;
    margin-bottom: 1rem;
}

.feature-card h3 {
    margin-bottom: 1rem;
    color: #2c3e50;
}

/* Footer */
.site-footer {
    background-color: #2c3e50;
    color: white;
    text-align: center;
    padding: 2rem 0;
}

/* Responsive design */
@media (max-width: 768px) {
    .site-header .container {
        flex-direction: column;
        gap: 1rem;
    }
    
    .main-nav ul {
        gap: 1rem;
    }
    
    .hero h2 {
        font-size: 2rem;
    }
    
    .feature-grid {
        grid-template-columns: 1fr;
    }
}

/* CSS File: print.css */
@media print {
    .site-header,
    .site-footer,
    .btn {
        display: none;
    }
    
    body {
        font-size: 12pt;
        line-height: 1.4;
        color: black;
        background: white;
    }
    
    .hero {
        background: none;
        color: black;
        padding: 2rem 0;
    }
}`}
        language="html"
      />

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">CSS Comments</h3>
      <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4 mb-6">
        <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">CSS Comment Syntax:</h4>
        <p className="text-purple-800 dark:text-purple-200 mb-3">
          CSS uses /* */ for comments. Comments are ignored by browsers but help developers 
          understand and maintain code.
        </p>
      </div>

      <CodeExample
        title="CSS Comments Examples"
        code={`/* Single-line comment */
body {
    margin: 0; /* Remove default margin */
    padding: 0;
}

/*
Multi-line comment
for longer explanations
or documentation
*/

/* ================================
   HEADER STYLES
   ================================ */
.header {
    background-color: #333;
    color: white;
}

/* TODO: Add responsive styles for mobile */
/* FIXME: Fix alignment issue in IE11 */
/* NOTE: This style is deprecated, use flexbox instead */

/* Temporarily disabled
.old-style {
    display: table;
    width: 100%;
}
*/

/* ================================
   UTILITY CLASSES
   ================================ */

/* Text alignment utilities */
.text-left { text-align: left; }
.text-center { text-align: center; }
.text-right { text-align: right; }

/* Spacing utilities */
.m-0 { margin: 0; }           /* No margin */
.p-1 { padding: 0.25rem; }    /* Small padding */
.p-2 { padding: 0.5rem; }     /* Medium padding */

/* 
Color scheme:
Primary: #3498db
Secondary: #2ecc71
Accent: #e74c3c
Background: #ecf0f1
Text: #2c3e50
*/

.btn-primary {
    background-color: #3498db; /* Primary blue */
    color: white;
}

/* Media queries for responsive design */
@media (max-width: 768px) {
    /* Mobile styles */
    .container {
        padding: 0 15px; /* Reduced padding on mobile */
    }
}

/* Browser-specific hacks (use sparingly) */
/* .ie-only { display: none; } /* IE only */

/* Performance note: Avoid expensive selectors */
/* BAD: * { box-sizing: border-box; } */
/* GOOD: Use on specific elements or with inheritance */`}
        language="css"
      />

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
        <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">Best Practices for Adding CSS:</h4>
        <ul className="list-disc list-inside text-sm text-yellow-800 dark:text-yellow-200 space-y-1">
          <li><strong>Prefer external CSS</strong> for multi-page websites and maintainability</li>
          <li><strong>Use internal CSS</strong> for single-page applications or page-specific styles</li>
          <li><strong>Avoid inline CSS</strong> except for dynamic styling or quick testing</li>
          <li><strong>Organize CSS files</strong> logically (reset, base, layout, components, utilities)</li>
          <li><strong>Use meaningful comments</strong> to document complex styles or browser hacks</li>
          <li><strong>Minify CSS</strong> for production to reduce file size</li>
          <li><strong>Use CSS preprocessors</strong> (Sass, Less) for advanced features</li>
          <li><strong>Implement critical CSS</strong> for above-the-fold content optimization</li>
        </ul>
      </div>
    </div>
  </div>
);

const CSSPropertiesSection: React.FC = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
      CSS Properties
    </h2>
    
    <div className="prose dark:prose-invert max-w-none">
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        CSS properties control the visual appearance and behavior of HTML elements. 
        Understanding these properties is essential for creating well-designed web pages.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Background Properties</h3>
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
        <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Background Property Types:</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h5 className="font-medium text-blue-800 dark:text-blue-200 mb-2">Basic Properties:</h5>
            <ul className="list-disc list-inside text-sm text-blue-700 dark:text-blue-300 space-y-1">
              <li><strong>background-color:</strong> Solid background color</li>
              <li><strong>background-image:</strong> Background image</li>
              <li><strong>background-repeat:</strong> Image repetition</li>
              <li><strong>background-position:</strong> Image position</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-blue-800 dark:text-blue-200 mb-2">Advanced Properties:</h5>
            <ul className="list-disc list-inside text-sm text-blue-700 dark:text-blue-300 space-y-1">
              <li><strong>background-size:</strong> Image scaling</li>
              <li><strong>background-attachment:</strong> Scroll behavior</li>
              <li><strong>background-clip:</strong> Background area</li>
              <li><strong>background-origin:</strong> Position area</li>
            </ul>
          </div>
        </div>
      </div>

      <CodeExample
        title="Background Properties Examples"
        code={`/* Background Color */
.bg-color {
    background-color: #3498db;
    background-color: rgb(52, 152, 219);
    background-color: rgba(52, 152, 219, 0.8);
    background-color: hsl(204, 70%, 53%);
    background-color: hsla(204, 70%, 53%, 0.8);
}

/* Background Image */
.bg-image {
    background-image: url('background.jpg');
    background-image: url('data:image/svg+xml;base64,PHN2Zy4uLg==');
    background-image: linear-gradient(45deg, #ff6b6b, #4ecdc4);
    background-image: radial-gradient(circle, #ff6b6b, #4ecdc4);
}

/* Background Repeat */
.bg-repeat {
    background-repeat: repeat;        /* Default */
    background-repeat: no-repeat;     /* No repetition */
    background-repeat: repeat-x;      /* Horizontal only */
    background-repeat: repeat-y;      /* Vertical only */
    background-repeat: space;         /* Space between images */
    background-repeat: round;         /* Scale to fit */
}

/* Background Position */
.bg-position {
    background-position: top left;
    background-position: center;
    background-position: bottom right;
    background-position: 50% 25%;
    background-position: 10px 20px;
    background-position: left 10px top 20px;
}

/* Background Size */
.bg-size {
    background-size: auto;           /* Original size */
    background-size: cover;          /* Cover entire area */
    background-size: contain;        /* Fit within area */
    background-size: 100% 100%;      /* Stretch to fit */
    background-size: 200px 150px;    /* Specific dimensions */
}

/* Background Attachment */
.bg-attachment {
    background-attachment: scroll;   /* Default - scrolls with content */
    background-attachment: fixed;    /* Fixed to viewport */
    background-attachment: local;    /* Scrolls with element content */
}

/* Multiple Backgrounds */
.multiple-bg {
    background-image: 
        url('overlay.png'),
        linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
        url('main-bg.jpg');
    background-position: 
        center,
        center,
        center;
    background-size: 
        auto,
        cover,
        cover;
    background-repeat: 
        no-repeat,
        no-repeat,
        no-repeat;
}

/* Background Shorthand */
.bg-shorthand {
    /* background: color image repeat position / size attachment; */
    background: #fff url('bg.jpg') no-repeat center / cover fixed;
}

/* Gradient Backgrounds */
.gradient-linear {
    background: linear-gradient(to right, #ff7e5f, #feb47b);
    background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
    background: linear-gradient(to bottom, #ff0000 0%, #00ff00 50%, #0000ff 100%);
}

.gradient-radial {
    background: radial-gradient(circle, #ff7e5f, #feb47b);
    background: radial-gradient(ellipse at center, #667eea 0%, #764ba2 100%);
    background: radial-gradient(circle at top left, #ff0000, #00ff00);
}

.gradient-conic {
    background: conic-gradient(from 0deg, red, yellow, green, blue, red);
    background: conic-gradient(from 45deg at 50% 50%, #ff0000, #00ff00, #0000ff);
}

/* Advanced Background Examples */
.hero-section {
    background: 
        linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),
        url('hero-bg.jpg') center/cover no-repeat fixed;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;
}

.pattern-bg {
    background-image: 
        repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(255,255,255,0.1) 10px,
            rgba(255,255,255,0.1) 20px
        );
    background-color: #3498db;
}

.animated-bg {
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradientShift 15s ease infinite;
}

@keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}`}
        language="css"
      />

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Border Properties</h3>
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
          <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Border Components</h4>
          <div className="space-y-1 text-sm text-green-800 dark:text-green-200">
            <p><strong>border-width:</strong> Thickness of border</p>
            <p><strong>border-style:</strong> Border line style</p>
            <p><strong>border-color:</strong> Border color</p>
            <p><strong>border-radius:</strong> Rounded corners</p>
          </div>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
          <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Border Styles</h4>
          <div className="space-y-1 text-sm text-purple-800 dark:text-purple-200">
            <p><strong>solid:</strong> Solid line</p>
            <p><strong>dashed:</strong> Dashed line</p>
            <p><strong>dotted:</strong> Dotted line</p>
            <p><strong>double:</strong> Double line</p>
          </div>
        </div>
      </div>

      <CodeExample
        title="Border Properties Examples"
        code={`/* Basic Border Properties */
.border-basic {
    border-width: 2px;
    border-style: solid;
    border-color: #3498db;
}

/* Border Shorthand */
.border-shorthand {
    border: 2px solid #3498db;
    border: 1px dashed red;
    border: 3px double #333;
}

/* Individual Sides */
.border-sides {
    border-top: 2px solid #e74c3c;
    border-right: 1px dashed #f39c12;
    border-bottom: 3px double #27ae60;
    border-left: 4px dotted #9b59b6;
}

/* Border Styles */
.border-styles {
    border: 3px solid #333;     /* Solid line */
    border: 3px dashed #333;    /* Dashed line */
    border: 3px dotted #333;    /* Dotted line */
    border: 3px double #333;    /* Double line */
    border: 3px groove #333;    /* 3D grooved */
    border: 3px ridge #333;     /* 3D ridged */
    border: 3px inset #333;     /* 3D inset */
    border: 3px outset #333;    /* 3D outset */
}

/* Border Radius (Rounded Corners) */
.border-radius {
    border-radius: 5px;                    /* All corners */
    border-radius: 10px 20px;              /* Top-left/bottom-right, top-right/bottom-left */
    border-radius: 10px 20px 30px;         /* Top-left, top-right/bottom-left, bottom-right */
    border-radius: 10px 20px 30px 40px;    /* Top-left, top-right, bottom-right, bottom-left */
}

/* Individual Corner Radius */
.corner-radius {
    border-top-left-radius: 10px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 40px;
}

/* Elliptical Borders */
.elliptical-border {
    border-radius: 50px / 25px;           /* Horizontal / Vertical radius */
    border-radius: 10px 20px / 30px 40px; /* Multiple elliptical values */
}

/* Creative Border Examples */
.circle {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 3px solid #3498db;
}

.pill {
    padding: 10px 20px;
    border-radius: 25px;
    border: 2px solid #27ae60;
}

.speech-bubble {
    position: relative;
    background: #f1c40f;
    border-radius: 10px;
    padding: 20px;
    border: 2px solid #f39c12;
}

.speech-bubble::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 20px;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-top-color: #f39c12;
}

/* Border Images */
.border-image {
    border: 10px solid transparent;
    border-image: url('border-pattern.png') 10 repeat;
    border-image: linear-gradient(45deg, red, blue) 1;
}

/* Advanced Border Techniques */
.gradient-border {
    position: relative;
    background: white;
    border-radius: 10px;
}

.gradient-border::before {
    content: '';
    position: absolute;
    inset: 0;
    padding: 2px;
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
    border-radius: inherit;
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
}

/* Responsive Borders */
@media (max-width: 768px) {
    .responsive-border {
        border-width: 1px;
        border-radius: 5px;
    }
}

@media (min-width: 769px) {
    .responsive-border {
        border-width: 3px;
        border-radius: 15px;
    }
}`}
        language="css"
      />

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Font Properties</h3>
      <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4 mb-6">
        <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Typography Control:</h4>
        <p className="text-orange-800 dark:text-orange-200 mb-3">
          Font properties control the appearance of text, including typeface, size, weight, and spacing.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h5 className="font-medium text-orange-800 dark:text-orange-200 mb-2">Font Properties:</h5>
            <ul className="list-disc list-inside text-sm text-orange-700 dark:text-orange-300 space-y-1">
              <li>font-family - Typeface selection</li>
              <li>font-size - Text size</li>
              <li>font-weight - Text thickness</li>
              <li>font-style - Italic, normal</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-orange-800 dark:text-orange-200 mb-2">Text Properties:</h5>
            <ul className="list-disc list-inside text-sm text-orange-700 dark:text-orange-300 space-y-1">
              <li>line-height - Line spacing</li>
              <li>letter-spacing - Character spacing</li>
              <li>word-spacing - Word spacing</li>
              <li>text-transform - Case conversion</li>
            </ul>
          </div>
        </div>
      </div>

      <CodeExample
        title="Font and Text Properties"
        code={`/* Font Family */
.font-families {
    font-family: Arial, sans-serif;
    font-family: "Times New Roman", serif;
    font-family: "Courier New", monospace;
    font-family: Georgia, "Times New Roman", serif;
    font-family: system-ui, -apple-system, sans-serif;
}

/* Web Fonts */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

.web-fonts {
    font-family: 'Roboto', sans-serif;
    font-family: 'Open Sans', Arial, sans-serif;
}

/* Font Size */
.font-sizes {
    font-size: 16px;           /* Pixels */
    font-size: 1.2em;          /* Relative to parent */
    font-size: 1.5rem;         /* Relative to root */
    font-size: 120%;           /* Percentage */
    font-size: larger;         /* Keyword */
    font-size: x-large;        /* Absolute keyword */
}

/* Font Weight */
.font-weights {
    font-weight: normal;       /* 400 */
    font-weight: bold;         /* 700 */
    font-weight: lighter;      /* Relative to parent */
    font-weight: bolder;       /* Relative to parent */
    font-weight: 100;          /* Thin */
    font-weight: 300;          /* Light */
    font-weight: 400;          /* Normal */
    font-weight: 500;          /* Medium */
    font-weight: 600;          /* Semi-bold */
    font-weight: 700;          /* Bold */
    font-weight: 900;          /* Black */
}

/* Font Style */
.font-styles {
    font-style: normal;
    font-style: italic;
    font-style: oblique;
    font-style: oblique 15deg;  /* Oblique with angle */
}

/* Font Variant */
.font-variants {
    font-variant: normal;
    font-variant: small-caps;
    font-variant: all-small-caps;
    font-variant: petite-caps;
    font-variant: unicase;
}

/* Font Shorthand */
.font-shorthand {
    /* font: style variant weight size/line-height family */
    font: italic small-caps bold 16px/1.5 Arial, sans-serif;
    font: 400 1.2rem/1.6 "Helvetica Neue", sans-serif;
}

/* Line Height */
.line-heights {
    line-height: normal;       /* Browser default */
    line-height: 1.5;          /* Unitless (recommended) */
    line-height: 1.5em;        /* Relative to font size */
    line-height: 24px;         /* Fixed pixels */
    line-height: 150%;         /* Percentage */
}

/* Letter Spacing */
.letter-spacing {
    letter-spacing: normal;
    letter-spacing: 0.1em;
    letter-spacing: 2px;
    letter-spacing: -0.05em;   /* Tighter spacing */
}

/* Word Spacing */
.word-spacing {
    word-spacing: normal;
    word-spacing: 0.2em;
    word-spacing: 4px;
    word-spacing: -0.1em;
}

/* Text Transform */
.text-transforms {
    text-transform: none;
    text-transform: uppercase;
    text-transform: lowercase;
    text-transform: capitalize;
}

/* Text Decoration */
.text-decorations {
    text-decoration: none;
    text-decoration: underline;
    text-decoration: overline;
    text-decoration: line-through;
    text-decoration: underline overline;
    text-decoration: underline wavy red;
}

/* Text Alignment */
.text-alignments {
    text-align: left;
    text-align: right;
    text-align: center;
    text-align: justify;
    text-align: start;         /* Language-aware */
    text-align: end;           /* Language-aware */
}

/* Text Indent */
.text-indent {
    text-indent: 2em;          /* First line indent */
    text-indent: 30px;
    text-indent: -20px;        /* Hanging indent */
}

/* White Space */
.white-space {
    white-space: normal;       /* Default */
    white-space: nowrap;       /* No line breaks */
    white-space: pre;          /* Preserve whitespace */
    white-space: pre-wrap;     /* Preserve + wrap */
    white-space: pre-line;     /* Preserve line breaks */
}

/* Text Overflow */
.text-overflow {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;   /* Show ... */
    text-overflow: clip;       /* Cut off */
}

/* Advanced Typography */
.advanced-typography {
    font-feature-settings: "liga" 1, "kern" 1;
    font-variant-ligatures: common-ligatures;
    font-variant-numeric: oldstyle-nums;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

/* Responsive Typography */
.responsive-text {
    font-size: clamp(1rem, 2.5vw, 2rem);
}

@media (max-width: 768px) {
    .responsive-text {
        font-size: 14px;
        line-height: 1.4;
    }
}

@media (min-width: 1200px) {
    .responsive-text {
        font-size: 18px;
        line-height: 1.7;
    }
}

/* Typography Scale */
.h1 { font-size: 2.5rem; font-weight: 700; line-height: 1.2; }
.h2 { font-size: 2rem; font-weight: 600; line-height: 1.3; }
.h3 { font-size: 1.75rem; font-weight: 600; line-height: 1.4; }
.h4 { font-size: 1.5rem; font-weight: 500; line-height: 1.4; }
.h5 { font-size: 1.25rem; font-weight: 500; line-height: 1.5; }
.h6 { font-size: 1rem; font-weight: 500; line-height: 1.5; }

.body-large { font-size: 1.125rem; line-height: 1.6; }
.body { font-size: 1rem; line-height: 1.6; }
.body-small { font-size: 0.875rem; line-height: 1.5; }
.caption { font-size: 0.75rem; line-height: 1.4; }`}
        language="css"
      />

      <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-4">
        <h4 className="font-semibold text-teal-900 dark:text-teal-100 mb-2">CSS Properties Best Practices:</h4>
        <ul className="list-disc list-inside text-sm text-teal-800 dark:text-teal-200 space-y-1">
          <li>Use relative units (rem, em) for scalable typography</li>
          <li>Provide fallback fonts in font-family declarations</li>
          <li>Use unitless line-height values for better inheritance</li>
          <li>Optimize font loading with font-display: swap</li>
          <li>Use CSS custom properties for consistent design tokens</li>
          <li>Test typography across different devices and browsers</li>
          <li>Consider accessibility with sufficient color contrast</li>
          <li>Use semantic HTML elements alongside CSS styling</li>
        </ul>
      </div>
    </div>
  </div>
);

const CSSLayoutSection: React.FC = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
      Layout Properties
    </h2>
    
    <div className="prose dark:prose-invert max-w-none">
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        CSS layout properties control how elements are positioned and arranged on the page. 
        Understanding these properties is crucial for creating responsive and well-structured layouts.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Display Property</h3>
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
        <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Display Values:</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h5 className="font-medium text-blue-800 dark:text-blue-200 mb-2">Basic Display:</h5>
            <ul className="list-disc list-inside text-sm text-blue-700 dark:text-blue-300 space-y-1">
              <li><strong>block:</strong> Full width, new line</li>
              <li><strong>inline:</strong> Content width, same line</li>
              <li><strong>inline-block:</strong> Inline with block properties</li>
              <li><strong>none:</strong> Hidden from layout</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-blue-800 dark:text-blue-200 mb-2">Modern Display:</h5>
            <ul className="list-disc list-inside text-sm text-blue-700 dark:text-blue-300 space-y-1">
              <li><strong>flex:</strong> Flexible box layout</li>
              <li><strong>grid:</strong> CSS Grid layout</li>
              <li><strong>table:</strong> Table-like behavior</li>
              <li><strong>contents:</strong> Element disappears</li>
            </ul>
          </div>
        </div>
      </div>

      <CodeExample
        title="Display Property Examples"
        code={`/* Basic Display Values */
.block-element {
    display: block;
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    background-color: #e3f2fd;
}

.inline-element {
    display: inline;
    padding: 5px 10px;
    background-color: #fff3e0;
    margin: 0 5px;
}

.inline-block-element {
    display: inline-block;
    width: 150px;
    height: 100px;
    padding: 10px;
    margin: 5px;
    background-color: #f3e5f5;
    vertical-align: top;
}

.hidden-element {
    display: none; /* Completely removed from layout */
}

.invisible-element {
    visibility: hidden; /* Hidden but space preserved */
}

/* Flexbox Display */
.flex-container {
    display: flex;
    gap: 20px;
    padding: 20px;
    background-color: #f5f5f5;
}

.flex-item {
    flex: 1;
    padding: 20px;
    background-color: #2196f3;
    color: white;
    text-align: center;
}

/* Grid Display */
.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 20px;
    background-color: #f5f5f5;
}

.grid-item {
    padding: 20px;
    background-color: #4caf50;
    color: white;
    text-align: center;
}

/* Table Display */
.table-display {
    display: table;
    width: 100%;
    border-collapse: collapse;
}

.table-row {
    display: table-row;
}

.table-cell {
    display: table-cell;
    padding: 10px;
    border: 1px solid #ddd;
    vertical-align: middle;
}

/* Contents Display */
.wrapper {
    border: 2px solid red;
    padding: 20px;
}

.contents {
    display: contents; /* This element disappears, children remain */
    border: 2px solid blue; /* This border won't show */
}

.child {
    background-color: yellow;
    padding: 10px;
    margin: 5px;
}`}
        language="css"
      />

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Position Property</h3>
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
          <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Position Values</h4>
          <div className="space-y-1 text-sm text-green-800 dark:text-green-200">
            <p><strong>static:</strong> Default positioning</p>
            <p><strong>relative:</strong> Relative to normal position</p>
            <p><strong>absolute:</strong> Relative to positioned ancestor</p>
            <p><strong>fixed:</strong> Relative to viewport</p>
            <p><strong>sticky:</strong> Hybrid relative/fixed</p>
          </div>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
          <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Position Properties</h4>
          <div className="space-y-1 text-sm text-purple-800 dark:text-purple-200">
            <p><strong>top:</strong> Distance from top edge</p>
            <p><strong>right:</strong> Distance from right edge</p>
            <p><strong>bottom:</strong> Distance from bottom edge</p>
            <p><strong>left:</strong> Distance from left edge</p>
            <p><strong>z-index:</strong> Stacking order</p>
          </div>
        </div>
      </div>

      <CodeExample
        title="Position Property Examples"
        code={`/* Static Positioning (Default) */
.static-element {
    position: static;
    /* top, right, bottom, left have no effect */
    background-color: #e3f2fd;
    padding: 20px;
    margin: 10px;
}

/* Relative Positioning */
.relative-element {
    position: relative;
    top: 20px;        /* Move 20px down from normal position */
    left: 30px;       /* Move 30px right from normal position */
    background-color: #fff3e0;
    padding: 20px;
    z-index: 1;
}

/* Absolute Positioning */
.relative-container {
    position: relative;  /* Establishes positioning context */
    height: 300px;
    background-color: #f5f5f5;
    border: 2px solid #ddd;
}

.absolute-element {
    position: absolute;
    top: 20px;           /* 20px from top of relative container */
    right: 20px;         /* 20px from right of relative container */
    width: 150px;
    height: 100px;
    background-color: #f3e5f5;
    padding: 10px;
    z-index: 2;
}

/* Fixed Positioning */
.fixed-header {
    position: fixed;
    top: 0;              /* Stick to top of viewport */
    left: 0;
    right: 0;
    height: 60px;
    background-color: #2196f3;
    color: white;
    padding: 0 20px;
    display: flex;
    align-items: center;
    z-index: 1000;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.fixed-sidebar {
    position: fixed;
    top: 60px;           /* Below fixed header */
    left: 0;
    width: 250px;
    height: calc(100vh - 60px);
    background-color: #37474f;
    color: white;
    padding: 20px;
    overflow-y: auto;
    z-index: 999;
}

/* Sticky Positioning */
.sticky-nav {
    position: sticky;
    top: 0;              /* Stick when reaching top of viewport */
    background-color: #4caf50;
    color: white;
    padding: 15px 20px;
    z-index: 100;
}

.sticky-sidebar {
    position: sticky;
    top: 20px;           /* Stick 20px from top */
    height: fit-content;
    background-color: #fff;
    border: 1px solid #ddd;
    padding: 20px;
}

/* Z-index Stacking */
.stacking-context {
    position: relative;
    z-index: 0;          /* Creates new stacking context */
}

.layer-1 {
    position: absolute;
    z-index: 1;
    background-color: red;
    width: 100px;
    height: 100px;
    top: 0;
    left: 0;
}

.layer-2 {
    position: absolute;
    z-index: 2;
    background-color: green;
    width: 100px;
    height: 100px;
    top: 20px;
    left: 20px;
}

.layer-3 {
    position: absolute;
    z-index: 3;
    background-color: blue;
    width: 100px;
    height: 100px;
    top: 40px;
    left: 40px;
}

/* Centering with Absolute Positioning */
.centered-absolute {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 100px;
    background-color: #ff9800;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Full Screen Overlay */
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
}

.modal {
    position: relative;
    background-color: white;
    padding: 30px;
    border-radius: 8px;
    max-width: 500px;
    width: 90%;
    max-height: 80vh;
    overflow-y: auto;
}

/* Responsive Positioning */
@media (max-width: 768px) {
    .fixed-sidebar {
        transform: translateX(-100%);
        transition: transform 0.3s ease;
    }
    
    .fixed-sidebar.open {
        transform: translateX(0);
    }
    
    .sticky-nav {
        position: static; /* Disable sticky on mobile */
    }
}`}
        language="css"
      />

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Float Property</h3>
      <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4 mb-6">
        <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Float Usage (Legacy):</h4>
        <p className="text-orange-800 dark:text-orange-200 mb-3">
          Float was historically used for layouts but is now primarily used for text wrapping around images. 
          Modern layout methods (Flexbox, Grid) are preferred for complex layouts.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h5 className="font-medium text-orange-800 dark:text-orange-200 mb-2">Float Values:</h5>
            <ul className="list-disc list-inside text-sm text-orange-700 dark:text-orange-300 space-y-1">
              <li><strong>none:</strong> Default, no floating</li>
              <li><strong>left:</strong> Float to the left</li>
              <li><strong>right:</strong> Float to the right</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-orange-800 dark:text-orange-200 mb-2">Clear Values:</h5>
            <ul className="list-disc list-inside text-sm text-orange-700 dark:text-orange-300 space-y-1">
              <li><strong>none:</strong> Allow floating elements</li>
              <li><strong>left:</strong> Clear left floats</li>
              <li><strong>right:</strong> Clear right floats</li>
              <li><strong>both:</strong> Clear all floats</li>
            </ul>
          </div>
        </div>
      </div>

      <CodeExample
        title="Float and Clear Examples"
        code={`/* Text Wrapping with Float */
.article-image {
    float: left;
    width: 200px;
    height: 150px;
    margin: 0 20px 20px 0;
    border-radius: 8px;
}

.article-text {
    text-align: justify;
    line-height: 1.6;
}

/* Float Layout (Legacy - Use Flexbox/Grid Instead) */
.float-container {
    width: 100%;
    overflow: hidden; /* Contains floated children */
}

.float-left {
    float: left;
    width: 30%;
    background-color: #e3f2fd;
    padding: 20px;
    margin-right: 2%;
}

.float-right {
    float: right;
    width: 30%;
    background-color: #fff3e0;
    padding: 20px;
    margin-left: 2%;
}

.float-center {
    width: 36%;
    background-color: #f3e5f5;
    padding: 20px;
    margin: 0 auto;
}

/* Clearing Floats */
.clearfix::after {
    content: "";
    display: table;
    clear: both;
}

.clear-left {
    clear: left;
}

.clear-right {
    clear: right;
}

.clear-both {
    clear: both;
}

/* Modern Alternative: Flexbox */
.flex-layout {
    display: flex;
    gap: 20px;
}

.flex-item {
    flex: 1;
    padding: 20px;
    background-color: #e8f5e8;
}

/* Modern Alternative: Grid */
.grid-layout {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    gap: 20px;
}

.grid-item {
    padding: 20px;
    background-color: #f0f8ff;
}`}
        language="css"
      />

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Margin and Padding</h3>
      <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-4 mb-6">
        <h4 className="font-semibold text-teal-900 dark:text-teal-100 mb-2">Box Model Spacing:</h4>
        <p className="text-teal-800 dark:text-teal-200 mb-3">
          Margin creates space outside the element, while padding creates space inside the element.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h5 className="font-medium text-teal-800 dark:text-teal-200 mb-2">Margin:</h5>
            <ul className="list-disc list-inside text-sm text-teal-700 dark:text-teal-300 space-y-1">
              <li>Space outside the border</li>
              <li>Transparent area</li>
              <li>Can have negative values</li>
              <li>Margins collapse vertically</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-teal-800 dark:text-teal-200 mb-2">Padding:</h5>
            <ul className="list-disc list-inside text-sm text-teal-700 dark:text-teal-300 space-y-1">
              <li>Space inside the border</li>
              <li>Inherits background color</li>
              <li>Cannot have negative values</li>
              <li>Affects element's total size</li>
            </ul>
          </div>
        </div>
      </div>

      <CodeExample
        title="Margin and Padding Examples"
        code={`/* Individual Sides */
.spacing-individual {
    margin-top: 20px;
    margin-right: 15px;
    margin-bottom: 25px;
    margin-left: 10px;
    
    padding-top: 10px;
    padding-right: 20px;
    padding-bottom: 15px;
    padding-left: 25px;
}

/* Shorthand Properties */
.spacing-shorthand {
    /* All sides */
    margin: 20px;
    padding: 15px;
    
    /* Vertical | Horizontal */
    margin: 20px 15px;
    padding: 10px 20px;
    
    /* Top | Horizontal | Bottom */
    margin: 20px 15px 25px;
    padding: 10px 20px 15px;
    
    /* Top | Right | Bottom | Left */
    margin: 20px 15px 25px 10px;
    padding: 10px 20px 15px 25px;
}

/* Auto Margins for Centering */
.centered-block {
    width: 300px;
    margin: 0 auto;  /* Center horizontally */
    background-color: #e3f2fd;
    padding: 20px;
}

.centered-vertical {
    height: 200px;
    margin: auto 0;  /* Center vertically (in flex container) */
}

/* Negative Margins */
.negative-margin {
    margin-top: -20px;    /* Pull element up */
    margin-left: -10px;   /* Pull element left */
    background-color: #fff3e0;
    padding: 15px;
}

/* Margin Collapse Example */
.margin-collapse-1 {
    margin-bottom: 30px;
    background-color: #f3e5f5;
    padding: 20px;
}

.margin-collapse-2 {
    margin-top: 20px;     /* Only 30px space between elements */
    background-color: #e8f5e8;
    padding: 20px;
}

/* Preventing Margin Collapse */
.no-collapse-container {
    padding: 1px 0;       /* Prevents margin collapse */
    /* or */
    border: 1px solid transparent;
    /* or */
    overflow: hidden;
}

/* Box-sizing Property */
.content-box {
    box-sizing: content-box;  /* Default */
    width: 200px;
    padding: 20px;
    border: 5px solid #ddd;
    /* Total width: 200 + 40 + 10 = 250px */
}

.border-box {
    box-sizing: border-box;   /* Recommended */
    width: 200px;
    padding: 20px;
    border: 5px solid #ddd;
    /* Total width: 200px (padding and border included) */
}

/* Universal Box-sizing */
*, *::before, *::after {
    box-sizing: border-box;
}

/* Responsive Spacing */
.responsive-spacing {
    margin: 1rem;
    padding: 1rem;
}

@media (max-width: 768px) {
    .responsive-spacing {
        margin: 0.5rem;
        padding: 0.5rem;
    }
}

@media (min-width: 1200px) {
    .responsive-spacing {
        margin: 2rem;
        padding: 2rem;
    }
}

/* CSS Custom Properties for Spacing */
:root {
    --spacing-xs: 0.25rem;
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 1.5rem;
    --spacing-xl: 2rem;
}

.custom-spacing {
    margin: var(--spacing-md);
    padding: var(--spacing-lg);
}

/* Utility Classes */
.m-0 { margin: 0; }
.m-1 { margin: 0.25rem; }
.m-2 { margin: 0.5rem; }
.m-3 { margin: 1rem; }
.m-4 { margin: 1.5rem; }
.m-5 { margin: 2rem; }

.p-0 { padding: 0; }
.p-1 { padding: 0.25rem; }
.p-2 { padding: 0.5rem; }
.p-3 { padding: 1rem; }
.p-4 { padding: 1.5rem; }
.p-5 { padding: 2rem; }

/* Directional utilities */
.mt-3 { margin-top: 1rem; }
.mr-3 { margin-right: 1rem; }
.mb-3 { margin-bottom: 1rem; }
.ml-3 { margin-left: 1rem; }

.pt-3 { padding-top: 1rem; }
.pr-3 { padding-right: 1rem; }
.pb-3 { padding-bottom: 1rem; }
.pl-3 { padding-left: 1rem; }`}
        language="css"
      />

      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
        <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Layout Best Practices:</h4>
        <ul className="list-disc list-inside text-sm text-red-800 dark:text-red-200 space-y-1">
          <li>Use Flexbox and Grid for modern layouts instead of floats</li>
          <li>Apply box-sizing: border-box globally for predictable sizing</li>
          <li>Use relative units (rem, em, %) for responsive spacing</li>
          <li>Understand margin collapse and how to prevent it when needed</li>
          <li>Use CSS custom properties for consistent spacing scales</li>
          <li>Test layouts across different screen sizes and devices</li>
          <li>Prefer logical properties (margin-inline, padding-block) for internationalization</li>
          <li>Use container queries for component-based responsive design</li>
        </ul>
      </div>
    </div>
  </div>
);

const CSSAdvancedSection: React.FC = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
      Advanced CSS Features
    </h2>
    
    <div className="prose dark:prose-invert max-w-none">
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        Modern CSS includes powerful features like custom properties, advanced selectors, 
        animations, and responsive design techniques that enable sophisticated web designs.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">CSS Custom Properties (Variables)</h3>
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
        <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">CSS Variables Benefits:</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h5 className="font-medium text-blue-800 dark:text-blue-200 mb-2">Advantages:</h5>
            <ul className="list-disc list-inside text-sm text-blue-700 dark:text-blue-300 space-y-1">
              <li>Reusable values throughout stylesheet</li>
              <li>Dynamic updates with JavaScript</li>
              <li>Cascade and inheritance support</li>
              <li>Scoped to specific elements</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-blue-800 dark:text-blue-200 mb-2">Use Cases:</h5>
            <ul className="list-disc list-inside text-sm text-blue-700 dark:text-blue-300 space-y-1">
              <li>Design system tokens</li>
              <li>Theme switching</li>
              <li>Responsive breakpoints</li>
              <li>Animation parameters</li>
            </ul>
          </div>
        </div>
      </div>

      <CodeExample
        title="CSS Custom Properties Examples"
        code={`/* Global Custom Properties */
:root {
    /* Color System */
    --primary-color: #3498db;
    --secondary-color: #2ecc71;
    --accent-color: #e74c3c;
    --background-color: #ecf0f1;
    --text-color: #2c3e50;
    --text-light: #7f8c8d;
    
    /* Typography Scale */
    --font-size-xs: 0.75rem;
    --font-size-sm: 0.875rem;
    --font-size-base: 1rem;
    --font-size-lg: 1.125rem;
    --font-size-xl: 1.25rem;
    --font-size-2xl: 1.5rem;
    --font-size-3xl: 2rem;
    
    /* Spacing Scale */
    --space-xs: 0.25rem;
    --space-sm: 0.5rem;
    --space-md: 1rem;
    --space-lg: 1.5rem;
    --space-xl: 2rem;
    --space-2xl: 3rem;
    
    /* Border Radius */
    --radius-sm: 0.25rem;
    --radius-md: 0.5rem;
    --radius-lg: 1rem;
    --radius-full: 9999px;
    
    /* Shadows */
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
    
    /* Transitions */
    --transition-fast: 0.15s ease;
    --transition-base: 0.3s ease;
    --transition-slow: 0.5s ease;
    
    /* Breakpoints */
    --breakpoint-sm: 640px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 1024px;
    --breakpoint-xl: 1280px;
}

/* Using Custom Properties */
.button {
    background-color: var(--primary-color);
    color: white;
    padding: var(--space-sm) var(--space-md);
    border-radius: var(--radius-md);
    font-size: var(--font-size-base);
    transition: all var(--transition-base);
    box-shadow: var(--shadow-sm);
}

.button:hover {
    background-color: var(--secondary-color);
    box-shadow: var(--shadow-md);
    transform: translateY(-2px);
}

/* Fallback Values */
.element {
    color: var(--text-color, #333);  /* Falls back to #333 if --text-color is not defined */
    font-size: var(--font-size-base, 16px);
}

/* Scoped Custom Properties */
.card {
    --card-padding: var(--space-lg);
    --card-background: white;
    --card-border: 1px solid #e1e5e9;
    
    background-color: var(--card-background);
    padding: var(--card-padding);
    border: var(--card-border);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-md);
}

.card.featured {
    --card-background: var(--primary-color);
    --card-padding: var(--space-xl);
    color: white;
}

/* Theme Switching */
[data-theme="dark"] {
    --background-color: #1a1a1a;
    --text-color: #ffffff;
    --text-light: #a0a0a0;
    --primary-color: #4a9eff;
    --card-background: #2d2d2d;
}

/* Responsive Custom Properties */
@media (min-width: 768px) {
    :root {
        --font-size-base: 1.125rem;
        --space-md: 1.5rem;
        --space-lg: 2rem;
    }
}

/* Calculated Values */
.container {
    --container-padding: var(--space-md);
    --container-max-width: 1200px;
    
    max-width: var(--container-max-width);
    padding: 0 var(--container-padding);
    margin: 0 auto;
    width: calc(100% - 2 * var(--container-padding));
}

/* Animation with Custom Properties */
.animated-element {
    --animation-duration: 2s;
    --animation-delay: 0.5s;
    --scale-factor: 1.2;
    
    animation: pulse var(--animation-duration) ease-in-out infinite;
    animation-delay: var(--animation-delay);
}

@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(var(--scale-factor)); }
}

/* JavaScript Integration */
.dynamic-element {
    --dynamic-color: #3498db;
    --dynamic-size: 100px;
    
    background-color: var(--dynamic-color);
    width: var(--dynamic-size);
    height: var(--dynamic-size);
    transition: all var(--transition-base);
}

/* CSS Functions with Custom Properties */
.gradient-element {
    --gradient-start: var(--primary-color);
    --gradient-end: var(--secondary-color);
    --gradient-angle: 45deg;
    
    background: linear-gradient(
        var(--gradient-angle),
        var(--gradient-start),
        var(--gradient-end)
    );
}

/* Complex Calculations */
.responsive-grid {
    --columns: 3;
    --gap: var(--space-md);
    --min-item-width: 250px;
    
    display: grid;
    grid-template-columns: repeat(
        var(--columns),
        minmax(var(--min-item-width), 1fr)
    );
    gap: var(--gap);
}

@media (max-width: 768px) {
    .responsive-grid {
        --columns: 1;
        --gap: var(--space-sm);
    }
}

/* Custom Property Inheritance */
.parent {
    --inherited-color: blue;
    --inherited-size: 20px;
}

.child {
    color: var(--inherited-color);  /* Inherits blue from parent */
    font-size: var(--inherited-size);
}

.child.override {
    --inherited-color: red;  /* Overrides for this element and its children */
}`}
        language="css"
      />

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">CSS Animations and Transitions</h3>
      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-6">
        <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Animation Types:</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h5 className="font-medium text-green-800 dark:text-green-200 mb-2">Transitions:</h5>
            <ul className="list-disc list-inside text-sm text-green-700 dark:text-green-300 space-y-1">
              <li>Smooth changes between states</li>
              <li>Triggered by user interactions</li>
              <li>Simple property animations</li>
              <li>Good for hover effects</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-green-800 dark:text-green-200 mb-2">Keyframe Animations:</h5>
            <ul className="list-disc list-inside text-sm text-green-700 dark:text-green-300 space-y-1">
              <li>Complex multi-step animations</li>
              <li>Can run automatically</li>
              <li>Full control over timing</li>
              <li>Looping and direction control</li>
            </ul>
          </div>
        </div>
      </div>

      <CodeExample
        title="CSS Animations and Transitions"
        code={`/* CSS Transitions */
.transition-element {
    background-color: #3498db;
    color: white;
    padding: 15px 30px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    
    /* Transition Properties */
    transition-property: background-color, transform, box-shadow;
    transition-duration: 0.3s, 0.2s, 0.3s;
    transition-timing-function: ease, ease-out, ease;
    transition-delay: 0s, 0.1s, 0s;
    
    /* Shorthand */
    transition: all 0.3s ease;
}

.transition-element:hover {
    background-color: #2980b9;
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

/* Multiple Transitions */
.multi-transition {
    width: 100px;
    height: 100px;
    background-color: #e74c3c;
    border-radius: 10px;
    
    transition: 
        width 0.3s ease,
        height 0.3s ease 0.1s,
        background-color 0.5s ease 0.2s,
        border-radius 0.4s ease 0.3s;
}

.multi-transition:hover {
    width: 150px;
    height: 150px;
    background-color: #27ae60;
    border-radius: 50%;
}

/* CSS Keyframe Animations */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideInRight {
    0% {
        transform: translateX(100%);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes bounce {
    0%, 20%, 53%, 80%, 100% {
        transform: translate3d(0, 0, 0);
    }
    40%, 43% {
        transform: translate3d(0, -30px, 0);
    }
    70% {
        transform: translate3d(0, -15px, 0);
    }
    90% {
        transform: translate3d(0, -4px, 0);
    }
}

@keyframes pulse {
    0% {
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(52, 152, 219, 0.7);
    }
    70% {
        transform: scale(1.05);
        box-shadow: 0 0 0 10px rgba(52, 152, 219, 0);
    }
    100% {
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(52, 152, 219, 0);
    }
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

/* Animation Properties */
.animated-element {
    animation-name: fadeIn;
    animation-duration: 1s;
    animation-timing-function: ease-out;
    animation-delay: 0.5s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-fill-mode: both;
    animation-play-state: running;
    
    /* Shorthand */
    animation: fadeIn 1s ease-out 0.5s 1 normal both running;
}

/* Multiple Animations */
.complex-animation {
    animation: 
        fadeIn 1s ease-out,
        slideInRight 0.8s ease-out 0.2s,
        pulse 2s ease-in-out 1s infinite;
}

/* Animation Examples */
.fade-in {
    animation: fadeIn 0.6s ease-out;
}

.slide-in-right {
    animation: slideInRight 0.8s ease-out;
}

.bounce-element {
    animation: bounce 1s ease-out;
}

.pulse-element {
    animation: pulse 2s ease-in-out infinite;
}

.rotate-element {
    animation: rotate 2s linear infinite;
}

/* Loading Spinner */
.spinner {
    width: 40px;
    height: 40px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    animation: rotate 1s linear infinite;
}

/* Typing Animation */
@keyframes typing {
    from { width: 0; }
    to { width: 100%; }
}

@keyframes blink {
    50% { border-color: transparent; }
}

.typewriter {
    font-family: monospace;
    overflow: hidden;
    border-right: 2px solid #333;
    white-space: nowrap;
    animation: 
        typing 3s steps(40, end),
        blink 0.75s step-end infinite;
}

/* Hover Animations */
.hover-grow {
    transition: transform 0.3s ease;
}

.hover-grow:hover {
    transform: scale(1.1);
}

.hover-shake {
    transition: transform 0.3s ease;
}

.hover-shake:hover {
    animation: shake 0.5s ease-in-out;
}

@keyframes shake {
    0%, 100% { transform: translateX(0); }
    10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
    20%, 40%, 60%, 80% { transform: translateX(5px); }
}

/* Scroll-triggered Animations */
.scroll-fade {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}

.scroll-fade.visible {
    opacity: 1;
    transform: translateY(0);
}

/* Performance Optimized Animations */
.optimized-animation {
    /* Use transform and opacity for better performance */
    transform: translateZ(0); /* Force hardware acceleration */
    will-change: transform, opacity;
    animation: optimizedMove 2s ease-in-out infinite;
}

@keyframes optimizedMove {
    0%, 100% {
        transform: translate3d(0, 0, 0);
    }
    50% {
        transform: translate3d(100px, 0, 0);
    }
}

/* Responsive Animations */
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}

@media (max-width: 768px) {
    .mobile-no-animation {
        animation: none !important;
        transition: none !important;
    }
}`}
        language="css"
      />

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Modern CSS Features</h3>
      <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4 mb-6">
        <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Cutting-edge CSS:</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h5 className="font-medium text-purple-800 dark:text-purple-200 mb-2">Layout Features:</h5>
            <ul className="list-disc list-inside text-sm text-purple-700 dark:text-purple-300 space-y-1">
              <li>Container Queries</li>
              <li>CSS Subgrid</li>
              <li>Aspect Ratio</li>
              <li>CSS Logical Properties</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-purple-800 dark:text-purple-200 mb-2">Visual Features:</h5>
            <ul className="list-disc list-inside text-sm text-purple-700 dark:text-purple-300 space-y-1">
              <li>CSS Filters</li>
              <li>Backdrop Filters</li>
              <li>CSS Masks</li>
              <li>Scroll Snap</li>
            </ul>
          </div>
        </div>
      </div>

      <CodeExample
        title="Modern CSS Features"
        code={`/* Container Queries */
.card-container {
    container-type: inline-size;
    container-name: card;
}

@container card (min-width: 300px) {
    .card {
        display: flex;
        flex-direction: row;
    }
    
    .card-image {
        width: 40%;
    }
    
    .card-content {
        width: 60%;
    }
}

/* Aspect Ratio */
.video-container {
    aspect-ratio: 16 / 9;
    background-color: #000;
}

.square-element {
    aspect-ratio: 1;
    background-color: #3498db;
}

/* CSS Logical Properties */
.logical-spacing {
    margin-block-start: 1rem;    /* margin-top in LTR */
    margin-block-end: 1rem;      /* margin-bottom in LTR */
    margin-inline-start: 2rem;   /* margin-left in LTR */
    margin-inline-end: 2rem;     /* margin-right in LTR */
    
    padding-block: 1rem;         /* padding-top and padding-bottom */
    padding-inline: 2rem;        /* padding-left and padding-right */
    
    border-block-start: 2px solid #333;  /* border-top in LTR */
    border-inline-end: 1px solid #666;   /* border-right in LTR */
}

/* CSS Filters */
.filtered-image {
    filter: blur(5px);
    filter: brightness(1.2);
    filter: contrast(1.5);
    filter: grayscale(100%);
    filter: hue-rotate(90deg);
    filter: invert(1);
    filter: opacity(0.8);
    filter: saturate(2);
    filter: sepia(1);
    
    /* Multiple filters */
    filter: brightness(1.1) contrast(1.2) saturate(1.3);
}

.hover-filter:hover {
    filter: brightness(1.2) saturate(1.1);
    transition: filter 0.3s ease;
}

/* Backdrop Filters */
.glass-effect {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px) saturate(180%);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    padding: 2rem;
}

.frosted-glass {
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(20px) brightness(1.1);
    color: white;
}

/* CSS Masks */
.masked-element {
    mask: linear-gradient(45deg, black 50%, transparent 50%);
    mask-size: 20px 20px;
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
}

.circular-mask {
    mask: radial-gradient(circle, black 60%, transparent 70%);
    background-image: url('image.jpg');
}

/* Scroll Snap */
.scroll-container {
    scroll-snap-type: x mandatory;
    overflow-x: scroll;
    display: flex;
}

.scroll-item {
    scroll-snap-align: start;
    flex: none;
    width: 300px;
    height: 200px;
    margin-right: 20px;
}

/* CSS Grid Subgrid */
.grid-parent {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.grid-child {
    display: grid;
    grid-template-rows: subgrid;
    grid-row: span 3;
}

/* CSS Nesting (Future) */
.nested-styles {
    color: blue;
    
    &:hover {
        color: red;
    }
    
    & .child {
        font-size: 14px;
        
        &:focus {
            outline: 2px solid blue;
        }
    }
    
    @media (max-width: 768px) {
        font-size: 12px;
    }
}

/* CSS Functions */
.modern-functions {
    /* Math functions */
    width: min(100%, 500px);
    height: max(200px, 20vh);
    font-size: clamp(1rem, 2.5vw, 2rem);
    
    /* Color functions */
    background-color: hsl(200 50% 50%);
    border-color: hsl(200 50% 50% / 0.5);
    
    /* Comparison functions */
    margin: max(1rem, 5vw);
    padding: min(2rem, 10%);
}

/* CSS @supports */
@supports (display: grid) {
    .grid-layout {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
}

@supports not (display: grid) {
    .grid-layout {
        display: flex;
        flex-wrap: wrap;
    }
}

/* CSS @layer */
@layer reset, base, components, utilities;

@layer reset {
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
}

@layer base {
    body {
        font-family: system-ui, sans-serif;
        line-height: 1.6;
    }
}

@layer components {
    .button {
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 0.25rem;
        cursor: pointer;
    }
}

@layer utilities {
    .text-center { text-align: center; }
    .hidden { display: none; }
}

/* CSS Color Functions */
.color-functions {
    /* Relative colors */
    --primary: #3498db;
    --primary-light: color-mix(in srgb, var(--primary) 80%, white);
    --primary-dark: color-mix(in srgb, var(--primary) 80%, black);
    
    background-color: var(--primary);
    border-color: var(--primary-dark);
    color: var(--primary-light);
}

/* CSS Scroll Timeline */
@scroll-timeline slide-timeline {
    source: selector(#slider);
    orientation: horizontal;
}

.slide {
    animation: slide-animation;
    animation-timeline: slide-timeline;
}

@keyframes slide-animation {
    0% { transform: translateX(0); }
    100% { transform: translateX(-100%); }
}`}
        language="css"
      />

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
        <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">Advanced CSS Best Practices:</h4>
        <ul className="list-disc list-inside text-sm text-yellow-800 dark:text-yellow-200 space-y-1">
          <li>Use CSS custom properties for maintainable design systems</li>
          <li>Implement progressive enhancement with @supports queries</li>
          <li>Optimize animations for performance (transform, opacity)</li>
          <li>Use container queries for truly responsive components</li>
          <li>Respect user preferences with prefers-reduced-motion</li>
          <li>Leverage CSS layers for better cascade management</li>
          <li>Use logical properties for international layouts</li>
          <li>Test modern features with appropriate fallbacks</li>
        </ul>
      </div>
    </div>
  </div>
);

export default Unit3Page;