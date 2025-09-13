import React, { useState } from 'react';
import { ChevronRight, Clock, CheckCircle, Code, FileText, Table, Layout } from 'lucide-react';
import { useProgress } from '../context/ProgressContext';
import CodeExample from '../components/CodeExample';

const Unit2Page: React.FC = () => {
  const { markAsCompleted, isCompleted } = useProgress();
  const [activeSection, setActiveSection] = useState('markup-intro');

  const sections = [
    { 
      id: 'markup-intro', 
      title: 'Introduction to Markup Languages', 
      icon: FileText,
      content: <MarkupIntroSection />
    },
    { 
      id: 'html-basics', 
      title: 'HTML Basics', 
      icon: Code,
      content: <HTMLBasicsSection />
    },
    { 
      id: 'html-structure', 
      title: 'HTML Document Structure', 
      icon: Layout,
      content: <HTMLStructureSection />
    },
    { 
      id: 'html-formatting', 
      title: 'Text Formatting & Links', 
      icon: FileText,
      content: <HTMLFormattingSection />
    },
    { 
      id: 'html-lists-media', 
      title: 'Lists, Images & Media', 
      icon: Layout,
      content: <HTMLListsMediaSection />
    },
    { 
      id: 'html-tables', 
      title: 'HTML Tables', 
      icon: Table,
      content: <HTMLTablesSection />
    },
    { 
      id: 'html-frames', 
      title: 'HTML Frames', 
      icon: Layout,
      content: <HTMLFramesSection />
    },
    { 
      id: 'html-forms', 
      title: 'HTML Forms', 
      icon: FileText,
      content: <HTMLFormsSection />
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Unit II: Introduction to Markup Languages
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Master HTML, markup languages, tables, forms, and web document structure (20 Hours)
        </p>
        <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
          <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> 20 Hours</span>
          <span>8 Sections</span>
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
                    markAsCompleted(`unit2-${section.id}`);
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
                  {isCompleted(`unit2-${section.id}`) && (
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
const MarkupIntroSection: React.FC = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
      Introduction to Markup Languages
    </h2>
    
    <div className="prose dark:prose-invert max-w-none">
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        Markup languages are computer languages that use tags to define elements within a document. 
        They provide a way to annotate text with instructions for formatting, structure, and presentation.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
            GML (Generalized Markup Language)
          </h3>
          <div className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
            <p><strong>Developed:</strong> IBM in 1960s</p>
            <p><strong>Purpose:</strong> Document formatting and processing</p>
            <p><strong>Features:</strong> Device-independent formatting</p>
            <p><strong>Legacy:</strong> Foundation for SGML and HTML</p>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-2">
            SGML (Standard Generalized Markup Language)
          </h3>
          <div className="space-y-2 text-sm text-green-800 dark:text-green-200">
            <p><strong>Standard:</strong> ISO 8879:1986</p>
            <p><strong>Purpose:</strong> Define document structure rules</p>
            <p><strong>Features:</strong> Meta-language for creating markup languages</p>
            <p><strong>Applications:</strong> Technical documentation, publishing</p>
          </div>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-2">
            XML (eXtensible Markup Language)
          </h3>
          <div className="space-y-2 text-sm text-purple-800 dark:text-purple-200">
            <p><strong>Developed:</strong> W3C, 1998</p>
            <p><strong>Purpose:</strong> Data storage and transport</p>
            <p><strong>Features:</strong> Platform-independent, self-describing</p>
            <p><strong>Applications:</strong> Web services, configuration files</p>
          </div>
        </div>

        <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-orange-900 dark:text-orange-100 mb-2">
            XHTML (eXtensible HyperText Markup Language)
          </h3>
          <div className="space-y-2 text-sm text-orange-800 dark:text-orange-200">
            <p><strong>Version:</strong> XHTML 1.0 (2000), XHTML 1.1 (2001)</p>
            <p><strong>Purpose:</strong> XML-compliant HTML</p>
            <p><strong>Features:</strong> Stricter syntax rules than HTML</p>
            <p><strong>Status:</strong> Largely superseded by HTML5</p>
          </div>
        </div>

        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-2">
            VRML (Virtual Reality Modeling Language)
          </h3>
          <div className="space-y-2 text-sm text-red-800 dark:text-red-200">
            <p><strong>Purpose:</strong> 3D scene description for web</p>
            <p><strong>Features:</strong> Interactive 3D worlds</p>
            <p><strong>File Extension:</strong> .wrl (world)</p>
            <p><strong>Status:</strong> Replaced by X3D and WebGL</p>
          </div>
        </div>

        <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-teal-900 dark:text-teal-100 mb-2">
            UML (Unified Modeling Language)
          </h3>
          <div className="space-y-2 text-sm text-teal-800 dark:text-teal-200">
            <p><strong>Purpose:</strong> Visual modeling of software systems</p>
            <p><strong>Features:</strong> Standardized diagrams and notation</p>
            <p><strong>Types:</strong> Class, sequence, use case diagrams</p>
            <p><strong>Applications:</strong> Software engineering, system design</p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Markup Language Evolution</h3>
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-6">
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="bg-yellow-200 dark:bg-yellow-700 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-bold text-yellow-800 dark:text-yellow-200">1</span>
            </div>
            <div className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>1960s:</strong> GML developed at IBM for document processing
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="bg-yellow-200 dark:bg-yellow-700 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-bold text-yellow-800 dark:text-yellow-200">2</span>
            </div>
            <div className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>1986:</strong> SGML becomes ISO standard for document markup
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="bg-yellow-200 dark:bg-yellow-700 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-bold text-yellow-800 dark:text-yellow-200">3</span>
            </div>
            <div className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>1991:</strong> HTML created by Tim Berners-Lee based on SGML
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="bg-yellow-200 dark:bg-yellow-700 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-bold text-yellow-800 dark:text-yellow-200">4</span>
            </div>
            <div className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>1998:</strong> XML developed as simplified SGML for web data
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="bg-yellow-200 dark:bg-yellow-700 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-bold text-yellow-800 dark:text-yellow-200">5</span>
            </div>
            <div className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>2000:</strong> XHTML combines HTML with XML strictness
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="bg-yellow-200 dark:bg-yellow-700 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-bold text-yellow-800 dark:text-yellow-200">6</span>
            </div>
            <div className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>2014:</strong> HTML5 becomes W3C standard with modern features
            </div>
          </div>
        </div>
      </div>

      <CodeExample
        title="Markup Language Comparison"
        code={`<!-- HTML Example -->
<html>
    <body>
        <h1>Welcome to HTML</h1>
        <p>This is a paragraph with <strong>bold text</strong>.</p>
        <img src="image.jpg" alt="Sample Image">
    </body>
</html>

<!-- XHTML Example (XML-compliant) -->
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" 
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title>XHTML Example</title>
    </head>
    <body>
        <h1>Welcome to XHTML</h1>
        <p>This is a paragraph with <strong>bold text</strong>.</p>
        <img src="image.jpg" alt="Sample Image" />
    </body>
</html>

<!-- XML Example -->
<?xml version="1.0" encoding="UTF-8"?>
<catalog>
    <book id="1">
        <title>Web Technologies</title>
        <author>John Doe</author>
        <price currency="USD">29.99</price>
    </book>
    <book id="2">
        <title>HTML5 Guide</title>
        <author>Jane Smith</author>
        <price currency="USD">34.99</price>
    </book>
</catalog>`}
        language="html"
      />

      <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-4">
        <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-3">Key Differences:</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h5 className="font-medium text-indigo-800 dark:text-indigo-200 mb-2">HTML vs XHTML:</h5>
            <ul className="list-disc list-inside text-sm text-indigo-700 dark:text-indigo-300 space-y-1">
              <li>XHTML requires well-formed XML syntax</li>
              <li>All tags must be closed in XHTML</li>
              <li>XHTML is case-sensitive</li>
              <li>Attributes must be quoted in XHTML</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-indigo-800 dark:text-indigo-200 mb-2">HTML vs XML:</h5>
            <ul className="list-disc list-inside text-sm text-indigo-700 dark:text-indigo-300 space-y-1">
              <li>HTML is for presentation, XML for data</li>
              <li>XML has no predefined tags</li>
              <li>XML focuses on data structure</li>
              <li>XML is more flexible and extensible</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const HTMLBasicsSection: React.FC = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
      HTML Basics
    </h2>
    
    <div className="prose dark:prose-invert max-w-none">
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        HTML (HyperText Markup Language) is the standard markup language used to create web pages. 
        It provides the structure and content of web documents using elements defined by tags.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">What is HTML?</h3>
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
        <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">HTML Key Concepts:</h4>
        <ul className="list-disc list-inside text-blue-800 dark:text-blue-200 space-y-1">
          <li><strong>HyperText:</strong> Text with links to other texts or resources</li>
          <li><strong>Markup:</strong> Annotations that define structure and presentation</li>
          <li><strong>Language:</strong> Set of rules and vocabulary for web documents</li>
          <li><strong>Elements:</strong> Building blocks defined by opening and closing tags</li>
          <li><strong>Attributes:</strong> Properties that provide additional information about elements</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">HTML Tags vs Elements</h3>
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
          <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">HTML Tags</h4>
          <div className="space-y-2 text-sm text-green-800 dark:text-green-200">
            <p><strong>Definition:</strong> Keywords enclosed in angle brackets</p>
            <p><strong>Types:</strong> Opening tags &lt;tag&gt;, closing tags &lt;/tag&gt;</p>
            <p><strong>Purpose:</strong> Mark the beginning and end of elements</p>
            <p><strong>Example:</strong> &lt;p&gt; and &lt;/p&gt; are paragraph tags</p>
          </div>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
          <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">HTML Elements</h4>
          <div className="space-y-2 text-sm text-purple-800 dark:text-purple-200">
            <p><strong>Definition:</strong> Complete structure from start tag to end tag</p>
            <p><strong>Components:</strong> Opening tag + content + closing tag</p>
            <p><strong>Purpose:</strong> Define the complete structure and content</p>
            <p><strong>Example:</strong> &lt;p&gt;Hello World&lt;/p&gt; is a paragraph element</p>
          </div>
        </div>
      </div>

      <CodeExample
        title="HTML Tag vs Element Example"
        code={`<!-- HTML Tags -->
<h1>          <!-- Opening tag -->
</h1>         <!-- Closing tag -->
<p>           <!-- Opening tag -->
</p>          <!-- Closing tag -->

<!-- HTML Elements (Complete structure) -->
<h1>Welcome to HTML</h1>           <!-- Complete heading element -->
<p>This is a paragraph element</p>  <!-- Complete paragraph element -->
<img src="image.jpg" alt="Photo" /> <!-- Self-closing element -->

<!-- Nested Elements -->
<div>                    <!-- Container element -->
    <h2>Section Title</h2>    <!-- Nested heading element -->
    <p>Section content with <strong>bold text</strong>.</p>  <!-- Nested elements -->
</div>`}
        language="html"
      />

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Global Attributes</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Global attributes can be used with any HTML element to provide additional information or functionality.
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
          <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Core Attributes</h4>
          <div className="space-y-2 text-sm text-orange-800 dark:text-orange-200">
            <p><strong>id:</strong> Unique identifier for the element</p>
            <p><strong>class:</strong> One or more class names for styling</p>
            <p><strong>style:</strong> Inline CSS styling</p>
            <p><strong>title:</strong> Tooltip text when hovering</p>
          </div>
        </div>

        <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-4">
          <h4 className="font-semibold text-teal-900 dark:text-teal-100 mb-2">Internationalization</h4>
          <div className="space-y-2 text-sm text-teal-800 dark:text-teal-200">
            <p><strong>lang:</strong> Language of the element content</p>
            <p><strong>dir:</strong> Text direction (ltr, rtl, auto)</p>
            <p><strong>translate:</strong> Whether content should be translated</p>
          </div>
        </div>
      </div>

      <CodeExample
        title="Global Attributes Example"
        code={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Global Attributes Example</title>
</head>
<body>
    <!-- Core Attributes -->
    <div id="main-content" class="container highlight" style="margin: 20px;">
        <h1 title="This is the main heading">Welcome</h1>
        
        <!-- Internationalization Attributes -->
        <p lang="en" dir="ltr">This paragraph is in English, left-to-right.</p>
        <p lang="ar" dir="rtl">هذه فقرة باللغة العربية، من اليمين إلى اليسار.</p>
        
        <!-- Event Attributes -->
        <button onclick="alert('Button clicked!')" onmouseover="this.style.backgroundColor='yellow'">
            Click me
        </button>
        
        <!-- Custom Data Attributes -->
        <div data-user-id="12345" data-category="technology">
            User information container
        </div>
        
        <!-- Accessibility Attributes -->
        <img src="logo.jpg" alt="Company Logo" title="Our company logo">
        
        <!-- Other Global Attributes -->
        <p hidden>This paragraph is hidden</p>
        <div contenteditable="true">You can edit this text</div>
        <span draggable="true">Drag me around</span>
    </div>
</body>
</html>`}
        language="html"
      />

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">HTML Element Categories</h3>
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
          <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Block Elements</h4>
          <div className="text-sm text-red-800 dark:text-red-200 space-y-1">
            <p><strong>Behavior:</strong> Take full width, start new line</p>
            <p><strong>Examples:</strong> div, p, h1-h6, form, table</p>
            <p><strong>Can contain:</strong> Block and inline elements</p>
          </div>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
          <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">Inline Elements</h4>
          <div className="text-sm text-yellow-800 dark:text-yellow-200 space-y-1">
            <p><strong>Behavior:</strong> Take only needed width, same line</p>
            <p><strong>Examples:</strong> span, a, strong, em, img</p>
            <p><strong>Can contain:</strong> Only inline elements and text</p>
          </div>
        </div>

        <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-4">
          <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">Empty Elements</h4>
          <div className="text-sm text-indigo-800 dark:text-indigo-200 space-y-1">
            <p><strong>Behavior:</strong> Self-closing, no content</p>
            <p><strong>Examples:</strong> br, hr, img, input, meta</p>
            <p><strong>Syntax:</strong> &lt;tag /&gt; or &lt;tag&gt;</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">HTML Document Rules:</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h5 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Syntax Rules:</h5>
            <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <li>Tags are not case-sensitive (but lowercase preferred)</li>
              <li>Attribute values should be quoted</li>
              <li>Nested elements should be properly closed</li>
              <li>Use semantic elements when possible</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Best Practices:</h5>
            <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <li>Always include DOCTYPE declaration</li>
              <li>Use semantic HTML5 elements</li>
              <li>Provide alt attributes for images</li>
              <li>Validate your HTML markup</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const HTMLStructureSection: React.FC = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
      HTML Document Structure
    </h2>
    
    <div className="prose dark:prose-invert max-w-none">
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        Every HTML document follows a standard structure that defines the document type, metadata, 
        and content areas. Understanding this structure is fundamental to creating well-formed web pages.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Basic HTML Document Structure</h3>
      <CodeExample
        title="Complete HTML5 Document Structure"
        code={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Description of the page">
    <meta name="keywords" content="HTML, CSS, JavaScript">
    <meta name="author" content="Your Name">
    <title>Page Title - Website Name</title>
    
    <!-- External CSS -->
    <link rel="stylesheet" href="styles.css">
    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
    
    <!-- Internal CSS -->
    <style>
        body { font-family: Arial, sans-serif; }
    </style>
</head>
<body>
    <!-- Header Section -->
    <header>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <!-- Main Content -->
    <main>
        <section id="home">
            <h1>Welcome to My Website</h1>
            <p>This is the main content area.</p>
        </section>
        
        <section id="about">
            <h2>About Us</h2>
            <article>
                <h3>Our Story</h3>
                <p>Content about the company...</p>
            </article>
        </section>
    </main>
    
    <!-- Sidebar -->
    <aside>
        <h3>Related Links</h3>
        <ul>
            <li><a href="#">Link 1</a></li>
            <li><a href="#">Link 2</a></li>
        </ul>
    </aside>
    
    <!-- Footer Section -->
    <footer>
        <p>&copy; 2024 Your Website. All rights reserved.</p>
    </footer>
    
    <!-- External JavaScript -->
    <script src="script.js"></script>
    
    <!-- Internal JavaScript -->
    <script>
        console.log("Document loaded");
    </script>
</body>
</html>`}
        language="html"
      />

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Document Structure Tags</h3>
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">DOCTYPE Declaration</h4>
          <div className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
            <p><strong>Purpose:</strong> Tells browser which HTML version to use</p>
            <p><strong>HTML5:</strong> &lt;!DOCTYPE html&gt;</p>
            <p><strong>Position:</strong> Very first line of HTML document</p>
            <p><strong>Case:</strong> Not case-sensitive</p>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
          <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">&lt;html&gt; Element</h4>
          <div className="space-y-2 text-sm text-green-800 dark:text-green-200">
            <p><strong>Purpose:</strong> Root element of HTML document</p>
            <p><strong>Attributes:</strong> lang (language), dir (direction)</p>
            <p><strong>Contains:</strong> &lt;head&gt; and &lt;body&gt; sections</p>
            <p><strong>Example:</strong> &lt;html lang="en"&gt;</p>
          </div>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
          <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">&lt;head&gt; Element</h4>
          <div className="space-y-2 text-sm text-purple-800 dark:text-purple-200">
            <p><strong>Purpose:</strong> Contains metadata and document information</p>
            <p><strong>Not visible:</strong> Content not displayed on page</p>
            <p><strong>Contains:</strong> title, meta, link, style, script</p>
            <p><strong>Required:</strong> &lt;title&gt; element must be present</p>
          </div>
        </div>

        <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
          <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">&lt;body&gt; Element</h4>
          <div className="space-y-2 text-sm text-orange-800 dark:text-orange-200">
            <p><strong>Purpose:</strong> Contains visible page content</p>
            <p><strong>Visible:</strong> All content displayed to users</p>
            <p><strong>Contains:</strong> All visible HTML elements</p>
            <p><strong>Events:</strong> Can have onload, onunload events</p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Essential Head Elements</h3>
      <CodeExample
        title="Complete Head Section Example"
        code={`<head>
    <!-- Character encoding (must be within first 1024 bytes) -->
    <meta charset="UTF-8">
    
    <!-- Viewport for responsive design -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- SEO Meta Tags -->
    <meta name="description" content="Learn HTML document structure and best practices">
    <meta name="keywords" content="HTML, document structure, web development">
    <meta name="author" content="Web Developer">
    <meta name="robots" content="index, follow">
    
    <!-- Open Graph Meta Tags (for social media) -->
    <meta property="og:title" content="HTML Document Structure Guide">
    <meta property="og:description" content="Complete guide to HTML document structure">
    <meta property="og:image" content="https://example.com/image.jpg">
    <meta property="og:url" content="https://example.com/html-structure">
    
    <!-- Page Title (appears in browser tab) -->
    <title>HTML Structure Guide - Web Development Tutorial</title>
    
    <!-- Favicon -->
    <link rel="icon" href="/favicon.ico" type="image/x-icon">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    
    <!-- External Stylesheets -->
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700">
    
    <!-- Preload Critical Resources -->
    <link rel="preload" href="/fonts/main-font.woff2" as="font" type="font/woff2" crossorigin>
    
    <!-- Internal Styles -->
    <style>
        body {
            font-family: 'Roboto', sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
        }
    </style>
</head>`}
        language="html"
      />

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">HTML5 Semantic Elements</h3>
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-6">
        <p className="text-yellow-800 dark:text-yellow-200 mb-3">
          HTML5 introduced semantic elements that provide meaning to the document structure, 
          improving accessibility and SEO.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium text-yellow-900 dark:text-yellow-100 mb-2">Structure Elements:</h4>
            <ul className="list-disc list-inside text-sm text-yellow-800 dark:text-yellow-200 space-y-1">
              <li><strong>&lt;header&gt;</strong> - Page or section header</li>
              <li><strong>&lt;nav&gt;</strong> - Navigation links</li>
              <li><strong>&lt;main&gt;</strong> - Main content area</li>
              <li><strong>&lt;section&gt;</strong> - Themed group of content</li>
              <li><strong>&lt;article&gt;</strong> - Self-contained content</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-yellow-900 dark:text-yellow-100 mb-2">Content Elements:</h4>
            <ul className="list-disc list-inside text-sm text-yellow-800 dark:text-yellow-200 space-y-1">
              <li><strong>&lt;aside&gt;</strong> - Sidebar content</li>
              <li><strong>&lt;footer&gt;</strong> - Page or section footer</li>
              <li><strong>&lt;figure&gt;</strong> - Image with caption</li>
              <li><strong>&lt;figcaption&gt;</strong> - Figure caption</li>
              <li><strong>&lt;details&gt;</strong> - Expandable details</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Unclosed Tags (Void Elements)</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Some HTML elements don't have closing tags because they don't contain content. 
        These are called void elements or empty elements.
      </p>

      <CodeExample
        title="Void Elements Example"
        code={`<!-- Common Void Elements -->
<br>                    <!-- Line break -->
<hr>                    <!-- Horizontal rule -->
<img src="photo.jpg" alt="Photo">     <!-- Image -->
<input type="text" name="username">   <!-- Form input -->
<meta charset="UTF-8">                <!-- Meta information -->
<link rel="stylesheet" href="style.css">   <!-- External resource link -->

<!-- Self-closing syntax (optional in HTML5, required in XHTML) -->
<br />
<hr />
<img src="photo.jpg" alt="Photo" />
<input type="text" name="username" />
<meta charset="UTF-8" />
<link rel="stylesheet" href="style.css" />

<!-- Complete list of void elements -->
<area>      <!-- Image map area -->
<base>      <!-- Base URL -->
<col>       <!-- Table column -->
<embed>     <!-- Embedded content -->
<source>    <!-- Media source -->
<track>     <!-- Media track -->
<wbr>       <!-- Word break opportunity -->`}
        language="html"
      />

      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
        <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Important Notes:</h4>
        <ul className="list-disc list-inside text-sm text-red-800 dark:text-red-200 space-y-1">
          <li>Void elements cannot have content or child elements</li>
          <li>Self-closing syntax (&lt;tag /&gt;) is optional in HTML5</li>
          <li>Always provide required attributes (like alt for images)</li>
          <li>Use semantic elements to improve accessibility</li>
          <li>Validate your HTML structure with W3C validator</li>
        </ul>
      </div>
    </div>
  </div>
);

const HTMLFormattingSection: React.FC = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
      Text Formatting & Links
    </h2>
    
    <div className="prose dark:prose-invert max-w-none">
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        HTML provides various elements for text formatting, creating emphasis, and linking to other resources. 
        These elements help structure content and create meaningful connections between documents.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Text Formatting Tags</h3>
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Physical Formatting</h4>
          <div className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
            <p><strong>&lt;b&gt;</strong> - Bold text (visual only)</p>
            <p><strong>&lt;i&gt;</strong> - Italic text (visual only)</p>
            <p><strong>&lt;u&gt;</strong> - Underlined text</p>
            <p><strong>&lt;s&gt;</strong> - Strikethrough text</p>
            <p><strong>&lt;sup&gt;</strong> - Superscript text</p>
            <p><strong>&lt;sub&gt;</strong> - Subscript text</p>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
          <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Logical Formatting</h4>
          <div className="space-y-2 text-sm text-green-800 dark:text-green-200">
            <p><strong>&lt;strong&gt;</strong> - Strong importance (bold by default)</p>
            <p><strong>&lt;em&gt;</strong> - Emphasis (italic by default)</p>
            <p><strong>&lt;mark&gt;</strong> - Highlighted text</p>
            <p><strong>&lt;small&gt;</strong> - Small text</p>
            <p><strong>&lt;del&gt;</strong> - Deleted text</p>
            <p><strong>&lt;ins&gt;</strong> - Inserted text</p>
          </div>
        </div>
      </div>

      <CodeExample
        title="Text Formatting Examples"
        code={`<!DOCTYPE html>
<html>
<head>
    <title>Text Formatting Examples</title>
</head>
<body>
    <h1>Text Formatting Demo</h1>
    
    <!-- Physical Formatting -->
    <h2>Physical Formatting</h2>
    <p>This is <b>bold text</b> using the b tag.</p>
    <p>This is <i>italic text</i> using the i tag.</p>
    <p>This is <u>underlined text</u> using the u tag.</p>
    <p>This is <s>strikethrough text</s> using the s tag.</p>
    <p>This is normal text with <sup>superscript</sup> and <sub>subscript</sub>.</p>
    
    <!-- Logical Formatting (Semantic) -->
    <h2>Logical Formatting</h2>
    <p>This text has <strong>strong importance</strong> using the strong tag.</p>
    <p>This text has <em>emphasis</em> using the em tag.</p>
    <p>This is <mark>highlighted text</mark> using the mark tag.</p>
    <p>This is <small>small text</small> using the small tag.</p>
    <p>This is <del>deleted text</del> and <ins>inserted text</ins>.</p>
    
    <!-- Mathematical and Chemical Formulas -->
    <h2>Scientific Notation</h2>
    <p>Water formula: H<sub>2</sub>O</p>
    <p>Einstein's equation: E=mc<sup>2</sup></p>
    <p>Chemical reaction: 2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O</p>
    
    <!-- Quotations -->
    <h2>Quotations</h2>
    <p>As Einstein said: <q>Imagination is more important than knowledge.</q></p>
    <blockquote>
        <p>The only way to do great work is to love what you do.</p>
        <cite>- Steve Jobs</cite>
    </blockquote>
    
    <!-- Abbreviations and Definitions -->
    <h2>Abbreviations and Terms</h2>
    <p>The <abbr title="World Wide Web">WWW</abbr> was invented by Tim Berners-Lee.</p>
    <p><dfn title="HyperText Markup Language">HTML</dfn> is the standard markup language for web pages.</p>
    
    <!-- Computer Code -->
    <h2>Computer Code</h2>
    <p>Use the <code>console.log()</code> function to debug JavaScript.</p>
    <pre>
<code>
function greet(name) {
    console.log("Hello, " + name + "!");
}
</code>
    </pre>
    <p>Press <kbd>Ctrl+C</kbd> to copy text.</p>
    <p>The output will be: <samp>Hello, World!</samp></p>
</body>
</html>`}
        language="html"
      />

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Link Tags and Navigation</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Links are fundamental to the web, allowing navigation between pages and resources. 
        The anchor tag (&lt;a&gt;) is used to create all types of links.
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
          <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Link Types</h4>
          <div className="space-y-2 text-sm text-purple-800 dark:text-purple-200">
            <p><strong>External Links:</strong> Link to other websites</p>
            <p><strong>Internal Links:</strong> Link to other pages on same site</p>
            <p><strong>Anchor Links:</strong> Link to sections within same page</p>
            <p><strong>Email Links:</strong> Open email client</p>
            <p><strong>File Links:</strong> Download files</p>
          </div>
        </div>

        <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
          <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Link Attributes</h4>
          <div className="space-y-2 text-sm text-orange-800 dark:text-orange-200">
            <p><strong>href:</strong> Destination URL or anchor</p>
            <p><strong>target:</strong> Where to open link</p>
            <p><strong>title:</strong> Tooltip text</p>
            <p><strong>rel:</strong> Relationship to linked document</p>
            <p><strong>download:</strong> Force download</p>
          </div>
        </div>
      </div>

      <CodeExample
        title="Link Examples"
        code={`<!DOCTYPE html>
<html>
<head>
    <title>Link Examples</title>
</head>
<body>
    <h1>Different Types of Links</h1>
    
    <!-- External Links -->
    <h2>External Links</h2>
    <p>Visit <a href="https://www.google.com" target="_blank" rel="noopener">Google</a></p>
    <p>Learn at <a href="https://www.w3schools.com" title="W3Schools Tutorial">W3Schools</a></p>
    
    <!-- Internal Links -->
    <h2>Internal Links</h2>
    <p>Go to <a href="about.html">About Page</a></p>
    <p>Visit our <a href="contact.html">Contact Page</a></p>
    <p>Check out <a href="../images/gallery.html">Image Gallery</a></p>
    
    <!-- Anchor Links (Same Page) -->
    <h2>Page Navigation</h2>
    <nav>
        <ul>
            <li><a href="#section1">Section 1</a></li>
            <li><a href="#section2">Section 2</a></li>
            <li><a href="#section3">Section 3</a></li>
        </ul>
    </nav>
    
    <!-- Email and Phone Links -->
    <h2>Contact Links</h2>
    <p>Email us: <a href="mailto:info@example.com?subject=Inquiry">info@example.com</a></p>
    <p>Email with CC and BCC: 
       <a href="mailto:info@example.com?cc=manager@example.com&bcc=admin@example.com&subject=Meeting&body=Hello, I would like to schedule a meeting.">
           Send Email
       </a>
    </p>
    <p>Call us: <a href="tel:+1234567890">+1 (234) 567-8900</a></p>
    <p>SMS: <a href="sms:+1234567890">Send SMS</a></p>
    
    <!-- File Download Links -->
    <h2>Download Links</h2>
    <p><a href="document.pdf" download>Download PDF Document</a></p>
    <p><a href="image.jpg" download="my-image.jpg">Download Image</a></p>
    
    <!-- Link with Different Targets -->
    <h2>Target Attributes</h2>
    <p><a href="page1.html" target="_self">Same Window (default)</a></p>
    <p><a href="page2.html" target="_blank" rel="noopener noreferrer">New Window/Tab</a></p>
    <p><a href="page3.html" target="_parent">Parent Frame</a></p>
    <p><a href="page4.html" target="_top">Full Window</a></p>
    
    <!-- Image as Link -->
    <h2>Image Links</h2>
    <a href="https://example.com">
        <img src="logo.png" alt="Company Logo" style="width:100px;">
    </a>
    
    <!-- Page Sections for Anchor Links -->
    <section id="section1">
        <h2>Section 1</h2>
        <p>This is the content of section 1. Lorem ipsum dolor sit amet...</p>
        <p><a href="#top">Back to top</a></p>
    </section>
    
    <section id="section2">
        <h2>Section 2</h2>
        <p>This is the content of section 2. Lorem ipsum dolor sit amet...</p>
        <p><a href="#top">Back to top</a></p>
    </section>
    
    <section id="section3">
        <h2>Section 3</h2>
        <p>This is the content of section 3. Lorem ipsum dolor sit amet...</p>
        <p><a href="#top">Back to top</a></p>
    </section>
</body>
</html>`}
        language="html"
      />

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Advanced Text Elements</h3>
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-6">
        <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">Special Text Elements:</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h5 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2">Semantic Elements:</h5>
            <ul className="list-disc list-inside text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
              <li><strong>&lt;time&gt;</strong> - Dates and times</li>
              <li><strong>&lt;address&gt;</strong> - Contact information</li>
              <li><strong>&lt;cite&gt;</strong> - Citation or reference</li>
              <li><strong>&lt;dfn&gt;</strong> - Definition term</li>
              <li><strong>&lt;abbr&gt;</strong> - Abbreviation</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2">Code Elements:</h5>
            <ul className="list-disc list-inside text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
              <li><strong>&lt;code&gt;</strong> - Inline code</li>
              <li><strong>&lt;pre&gt;</strong> - Preformatted text</li>
              <li><strong>&lt;kbd&gt;</strong> - Keyboard input</li>
              <li><strong>&lt;samp&gt;</strong> - Sample output</li>
              <li><strong>&lt;var&gt;</strong> - Variables</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
        <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Best Practices for Links and Formatting:</h4>
        <ul className="list-disc list-inside text-sm text-red-800 dark:text-red-200 space-y-1">
          <li>Use semantic elements (&lt;strong&gt;, &lt;em&gt;) instead of physical ones (&lt;b&gt;, &lt;i&gt;)</li>
          <li>Always provide meaningful link text (avoid "click here")</li>
          <li>Use rel="noopener noreferrer" for external links with target="_blank"</li>
          <li>Provide title attributes for additional context</li>
          <li>Use appropriate ARIA labels for accessibility</li>
          <li>Test all links regularly to ensure they work</li>
        </ul>
      </div>
    </div>
  </div>
);

const HTMLListsMediaSection: React.FC = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
      Lists, Images & Media
    </h2>
    
    <div className="prose dark:prose-invert max-w-none">
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        HTML provides various elements for creating lists, embedding images, and including multimedia content. 
        These elements are essential for organizing information and creating rich web experiences.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">HTML Lists</h3>
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Unordered Lists</h4>
          <div className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
            <p><strong>Tag:</strong> &lt;ul&gt;</p>
            <p><strong>Items:</strong> &lt;li&gt;</p>
            <p><strong>Default:</strong> Bullet points</p>
            <p><strong>Use:</strong> Items without specific order</p>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
          <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Ordered Lists</h4>
          <div className="space-y-2 text-sm text-green-800 dark:text-green-200">
            <p><strong>Tag:</strong> &lt;ol&gt;</p>
            <p><strong>Items:</strong> &lt;li&gt;</p>
            <p><strong>Default:</strong> Numbers</p>
            <p><strong>Use:</strong> Sequential or ranked items</p>
          </div>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
          <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Description Lists</h4>
          <div className="space-y-2 text-sm text-purple-800 dark:text-purple-200">
            <p><strong>Tag:</strong> &lt;dl&gt;</p>
            <p><strong>Term:</strong> &lt;dt&gt;</p>
            <p><strong>Description:</strong> &lt;dd&gt;</p>
            <p><strong>Use:</strong> Term-definition pairs</p>
          </div>
        </div>
      </div>

      <CodeExample
        title="HTML Lists Examples"
        code={`<!DOCTYPE html>
<html>
<head>
    <title>HTML Lists Examples</title>
</head>
<body>
    <!-- Unordered Lists -->
    <h2>Unordered Lists</h2>
    <h3>Shopping List</h3>
    <ul>
        <li>Apples</li>
        <li>Bananas</li>
        <li>Oranges</li>
        <li>Milk</li>
    </ul>

    <h3>Nested Unordered List</h3>
    <ul>
        <li>Frontend Technologies
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
            </ul>
        </li>
        <li>Backend Technologies
            <ul>
                <li>Node.js</li>
                <li>Python</li>
                <li>Java</li>
            </ul>
        </li>
    </ul>

    <!-- Ordered Lists -->
    <h2>Ordered Lists</h2>
    <h3>Recipe Steps</h3>
    <ol>
        <li>Preheat oven to 350°F</li>
        <li>Mix flour and sugar</li>
        <li>Add eggs and milk</li>
        <li>Bake for 30 minutes</li>
    </ol>

    <h3>Ordered List with Custom Attributes</h3>
    <ol type="A" start="3">
        <li>Third item (C)</li>
        <li>Fourth item (D)</li>
        <li>Fifth item (E)</li>
    </ol>

    <ol type="I">
        <li>Introduction</li>
        <li>Method</li>
        <li>Results</li>
        <li>Conclusion</li>
    </ol>

    <!-- Description Lists -->
    <h2>Description Lists</h2>
    <h3>HTML Terms</h3>
    <dl>
        <dt>HTML</dt>
        <dd>HyperText Markup Language - The standard markup language for web pages</dd>
        
        <dt>CSS</dt>
        <dd>Cascading Style Sheets - Used for styling HTML elements</dd>
        
        <dt>JavaScript</dt>
        <dd>Programming language for web interactivity</dd>
        <dd>Can be used both client-side and server-side</dd>
    </dl>

    <!-- Nested Lists -->
    <h2>Complex Nested Lists</h2>
    <ol>
        <li>Web Development Basics
            <ul>
                <li>HTML Structure
                    <ol type="a">
                        <li>Document structure</li>
                        <li>Elements and attributes</li>
                        <li>Semantic markup</li>
                    </ol>
                </li>
                <li>CSS Styling</li>
                <li>JavaScript Programming</li>
            </ul>
        </li>
        <li>Advanced Topics
            <ul>
                <li>Responsive Design</li>
                <li>Web APIs</li>
                <li>Performance Optimization</li>
            </ul>
        </li>
    </ol>

    <!-- List with Custom Styling Classes -->
    <h2>Lists with Custom Classes</h2>
    <ul class="nav-menu">
        <li class="nav-item"><a href="#home">Home</a></li>
        <li class="nav-item"><a href="#about">About</a></li>
        <li class="nav-item"><a href="#services">Services</a></li>
        <li class="nav-item"><a href="#contact">Contact</a></li>
    </ul>
</body>
</html>`}
        language="html"
      />

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Images and Object Tags</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Images and multimedia objects are crucial for creating engaging web content. 
        HTML provides several elements for embedding different types of media.
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
          <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Image Attributes</h4>
          <div className="space-y-2 text-sm text-orange-800 dark:text-orange-200">
            <p><strong>src:</strong> Image source URL (required)</p>
            <p><strong>alt:</strong> Alternative text (required)</p>
            <p><strong>width/height:</strong> Image dimensions</p>
            <p><strong>title:</strong> Tooltip text</p>
            <p><strong>loading:</strong> lazy, eager</p>
            <p><strong>decoding:</strong> sync, async, auto</p>
          </div>
        </div>

        <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-4">
          <h4 className="font-semibold text-teal-900 dark:text-teal-100 mb-2">Responsive Images</h4>
          <div className="space-y-2 text-sm text-teal-800 dark:text-teal-200">
            <p><strong>srcset:</strong> Multiple image sources</p>
            <p><strong>sizes:</strong> Viewport-based sizing</p>
            <p><strong>&lt;picture&gt;</strong> Art direction</p>
            <p><strong>&lt;source&gt;</strong> Different formats</p>
          </div>
        </div>
      </div>

      <CodeExample
        title="Images and Media Examples"
        code={`<!DOCTYPE html>
<html>
<head>
    <title>Images and Media Examples</title>
</head>
<body>
    <!-- Basic Images -->
    <h2>Basic Images</h2>
    <img src="photo.jpg" alt="Beautiful landscape photo" width="300" height="200">
    
    <img src="logo.png" alt="Company Logo" title="Our Company Logo">
    
    <!-- Image with link -->
    <a href="gallery.html">
        <img src="thumbnail.jpg" alt="View Gallery" width="150" height="100">
    </a>

    <!-- Responsive Images -->
    <h2>Responsive Images</h2>
    
    <!-- Using srcset for different screen densities -->
    <img src="photo-400w.jpg" 
         srcset="photo-400w.jpg 400w,
                 photo-800w.jpg 800w,
                 photo-1200w.jpg 1200w"
         sizes="(max-width: 600px) 400px,
                (max-width: 900px) 800px,
                1200px"
         alt="Responsive image example">

    <!-- Picture element for art direction -->
    <picture>
        <source media="(max-width: 600px)" srcset="mobile-banner.jpg">
        <source media="(max-width: 1200px)" srcset="tablet-banner.jpg">
        <img src="desktop-banner.jpg" alt="Banner image">
    </picture>

    <!-- Picture element for different formats -->
    <picture>
        <source type="image/avif" srcset="photo.avif">
        <source type="image/webp" srcset="photo.webp">
        <img src="photo.jpg" alt="Photo with format fallbacks">
    </picture>

    <!-- Figure and Figcaption -->
    <h2>Images with Captions</h2>
    <figure>
        <img src="chart.png" alt="Sales data chart" width="500" height="300">
        <figcaption>Fig.1 - Sales performance for Q1 2024</figcaption>
    </figure>

    <!-- Image Maps -->
    <h2>Image Maps</h2>
    <img src="world-map.jpg" alt="World Map" usemap="#worldmap" width="600" height="400">
    <map name="worldmap">
        <area shape="rect" coords="0,0,100,100" href="north-america.html" alt="North America">
        <area shape="circle" coords="300,200,50" href="europe.html" alt="Europe">
        <area shape="poly" coords="400,300,500,350,450,400,350,380" href="asia.html" alt="Asia">
    </map>

    <!-- Audio Elements -->
    <h2>Audio Content</h2>
    <audio controls>
        <source src="audio.mp3" type="audio/mpeg">
        <source src="audio.ogg" type="audio/ogg">
        <source src="audio.wav" type="audio/wav">
        Your browser does not support the audio element.
    </audio>

    <audio controls autoplay muted loop>
        <source src="background-music.mp3" type="audio/mpeg">
    </audio>

    <!-- Video Elements -->
    <h2>Video Content</h2>
    <video controls width="640" height="360">
        <source src="video.mp4" type="video/mp4">
        <source src="video.webm" type="video/webm">
        <source src="video.ogg" type="video/ogg">
        <track kind="subtitles" src="subtitles-en.vtt" srclang="en" label="English">
        <track kind="subtitles" src="subtitles-es.vtt" srclang="es" label="Spanish">
        Your browser does not support the video tag.
    </video>

    <!-- Video with Poster -->
    <video controls poster="video-thumbnail.jpg" width="640" height="360">
        <source src="presentation.mp4" type="video/mp4">
    </video>

    <!-- Embedded Content -->
    <h2>Embedded Content</h2>
    
    <!-- YouTube Video -->
    <iframe width="560" height="315" 
            src="https://www.youtube.com/embed/VIDEO_ID" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
    </iframe>

    <!-- Google Maps -->
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12..." 
            width="600" height="450" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy">
    </iframe>

    <!-- Generic Object Embed -->
    <object data="document.pdf" type="application/pdf" width="600" height="400">
        <p>Your browser does not support PDFs. 
           <a href="document.pdf">Download the PDF</a>.
        </p>
    </object>

    <!-- Embed Element -->
    <embed src="flash-animation.swf" type="application/x-shockwave-flash" 
           width="400" height="300">

    <!-- Canvas for Graphics -->
    <h2>Canvas Graphics</h2>
    <canvas id="myCanvas" width="400" height="200" style="border:1px solid #000;">
        Your browser does not support the canvas element.
    </canvas>

    <!-- SVG Graphics -->
    <h2>SVG Graphics</h2>
    <svg width="200" height="100">
        <rect x="10" y="10" width="100" height="50" fill="blue" />
        <circle cx="150" cy="35" r="25" fill="red" />
        <text x="50" y="80" font-family="Arial" font-size="14" fill="black">SVG Text</text>
    </svg>
</body>
</html>`}
        language="html"
      />

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Executable Content Tags</h3>
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-6">
        <p className="text-yellow-800 dark:text-yellow-200 mb-3">
          HTML provides elements for embedding executable content like scripts, interactive elements, and plugins.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium text-yellow-900 dark:text-yellow-100 mb-2">Script Elements:</h4>
            <ul className="list-disc list-inside text-sm text-yellow-800 dark:text-yellow-200 space-y-1">
              <li><strong>&lt;script&gt;</strong> - JavaScript code or files</li>
              <li><strong>&lt;noscript&gt;</strong> - Content for non-JS browsers</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-yellow-900 dark:text-yellow-100 mb-2">Interactive Elements:</h4>
            <ul className="list-disc list-inside text-sm text-yellow-800 dark:text-yellow-200 space-y-1">
              <li><strong>&lt;canvas&gt;</strong> - Drawing graphics with JavaScript</li>
              <li><strong>&lt;svg&gt;</strong> - Scalable Vector Graphics</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-4">
        <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">Best Practices for Images and Media:</h4>
        <ul className="list-disc list-inside text-sm text-indigo-800 dark:text-indigo-200 space-y-1">
          <li>Always provide meaningful alt text for accessibility</li>
          <li>Use appropriate image formats (WebP, AVIF for modern browsers)</li>
          <li>Implement responsive images with srcset and sizes</li>
          <li>Optimize images for web (compress, proper dimensions)</li>
          <li>Use lazy loading for images below the fold</li>
          <li>Provide fallbacks for audio/video content</li>
          <li>Use semantic markup like &lt;figure&gt; and &lt;figcaption&gt;</li>
        </ul>
      </div>
    </div>
  </div>
);

const HTMLTablesSection: React.FC = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
      HTML Tables
    </h2>
    
    <div className="prose dark:prose-invert max-w-none">
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        HTML tables are used to display data in rows and columns format. They provide a structured way 
        to present tabular information with various formatting and accessibility features.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Table Structure Elements</h3>
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Basic Table Elements</h4>
          <div className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
            <p><strong>&lt;table&gt;</strong> - Table container</p>
            <p><strong>&lt;tr&gt;</strong> - Table row</p>
            <p><strong>&lt;td&gt;</strong> - Table data cell</p>
            <p><strong>&lt;th&gt;</strong> - Table header cell</p>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
          <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Structural Elements</h4>
          <div className="space-y-2 text-sm text-green-800 dark:text-green-200">
            <p><strong>&lt;thead&gt;</strong> - Table header section</p>
            <p><strong>&lt;tbody&gt;</strong> - Table body section</p>
            <p><strong>&lt;tfoot&gt;</strong> - Table footer section</p>
            <p><strong>&lt;caption&gt;</strong> - Table caption</p>
          </div>
        </div>
      </div>

      <CodeExample
        title="Basic HTML Table Example"
        code={`<!DOCTYPE html>
<html>
<head>
    <title>HTML Tables Example</title>
    <style>
        table {
            border-collapse: collapse;
            width: 100%;
            margin: 20px 0;
        }
        
        th, td {
            border: 1px solid #ddd;
            padding: 12px;
            text-align: left;
        }
        
        th {
            background-color: #f2f2f2;
            font-weight: bold;
        }
        
        tr:nth-child(even) {
            background-color: #f9f9f9;
        }
        
        .center { text-align: center; }
        .right { text-align: right; }
    </style>
</head>
<body>
    <!-- Basic Table -->
    <h2>Basic Table</h2>
    <table>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
        </tr>
        <tr>
            <td>John Doe</td>
            <td>30</td>
            <td>New York</td>
        </tr>
        <tr>
            <td>Jane Smith</td>
            <td>25</td>
            <td>Los Angeles</td>
        </tr>
        <tr>
            <td>Bob Johnson</td>
            <td>35</td>
            <td>Chicago</td>
        </tr>
    </table>

    <!-- Table with Caption -->
    <h2>Table with Caption</h2>
    <table>
        <caption>Employee Information - Q1 2024</caption>
        <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Salary</th>
        </tr>
        <tr>
            <td>001</td>
            <td>Alice Brown</td>
            <td>Engineering</td>
            <td class="right">$75,000</td>
        </tr>
        <tr>
            <td>002</td>
            <td>Charlie Davis</td>
            <td>Marketing</td>
            <td class="right">$65,000</td>
        </tr>
    </table>

    <!-- Table with Header, Body, and Footer Sections -->
    <h2>Structured Table (thead, tbody, tfoot)</h2>
    <table>
        <caption>Sales Report</caption>
        <thead>
            <tr>
                <th>Product</th>
                <th>Q1</th>
                <th>Q2</th>
                <th>Q3</th>
                <th>Q4</th>
                <th>Total</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Product A</td>
                <td class="right">$10,000</td>
                <td class="right">$12,000</td>
                <td class="right">$11,000</td>
                <td class="right">$13,000</td>
                <td class="right">$46,000</td>
            </tr>
            <tr>
                <td>Product B</td>
                <td class="right">$8,000</td>
                <td class="right">$9,000</td>
                <td class="right">$10,000</td>
                <td class="right">$11,000</td>
                <td class="right">$38,000</td>
            </tr>
            <tr>
                <td>Product C</td>
                <td class="right">$15,000</td>
                <td class="right">$16,000</td>
                <td class="right">$14,000</td>
                <td class="right">$18,000</td>
                <td class="right">$63,000</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <th>Total</th>
                <th class="right">$33,000</th>
                <th class="right">$37,000</th>
                <th class="right">$35,000</th>
                <th class="right">$42,000</th>
                <th class="right">$147,000</th>
            </tr>
        </tfoot>
    </table>
</body>
</html>`}
        language="html"
      />

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Table Alignment and Attributes</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        HTML tables support various alignment options and attributes to control appearance and behavior.
      </p>

      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
          <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Cell Alignment</h4>
          <div className="space-y-2 text-sm text-purple-800 dark:text-purple-200">
            <p><strong>align:</strong> left, center, right</p>
            <p><strong>valign:</strong> top, middle, bottom</p>
            <p><strong>CSS:</strong> text-align, vertical-align</p>
          </div>
        </div>

        <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
          <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Cell Spanning</h4>
          <div className="space-y-2 text-sm text-orange-800 dark:text-orange-200">
            <p><strong>colspan:</strong> Span multiple columns</p>
            <p><strong>rowspan:</strong> Span multiple rows</p>
            <p><strong>Usage:</strong> Merge cells horizontally/vertically</p>
          </div>
        </div>

        <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-4">
          <h4 className="font-semibold text-teal-900 dark:text-teal-100 mb-2">Table Attributes</h4>
          <div className="space-y-2 text-sm text-teal-800 dark:text-teal-200">
            <p><strong>width:</strong> Table width</p>
            <p><strong>border:</strong> Border thickness</p>
            <p><strong>cellpadding:</strong> Cell padding</p>
            <p><strong>cellspacing:</strong> Cell spacing</p>
          </div>
        </div>
      </div>

      <CodeExample
        title="Advanced Table Features"
        code={`<!DOCTYPE html>
<html>
<head>
    <title>Advanced Table Features</title>
    <style>
        .advanced-table {
            border-collapse: collapse;
            width: 100%;
            margin: 20px 0;
            font-family: Arial, sans-serif;
        }
        
        .advanced-table th,
        .advanced-table td {
            border: 1px solid #ddd;
            padding: 10px;
        }
        
        .advanced-table th {
            background-color: #4CAF50;
            color: white;
            text-align: center;
        }
        
        .highlight {
            background-color: #ffeb3b;
        }
        
        .center { text-align: center; }
        .right { text-align: right; }
        .top { vertical-align: top; }
        .middle { vertical-align: middle; }
        .bottom { vertical-align: bottom; }
    </style>
</head>
<body>
    <!-- Table with Column and Row Spanning -->
    <h2>Table with Cell Spanning</h2>
    <table class="advanced-table">
        <caption>Course Schedule</caption>
        <tr>
            <th>Time</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
        </tr>
        <tr>
            <td>9:00-10:00</td>
            <td>Math</td>
            <td>English</td>
            <td>Math</td>
            <td>English</td>
            <td>Math</td>
        </tr>
        <tr>
            <td>10:00-11:00</td>
            <td rowspan="2" class="middle">Science Lab</td>
            <td>History</td>
            <td>Physics</td>
            <td>Chemistry</td>
            <td>Biology</td>
        </tr>
        <tr>
            <td>11:00-12:00</td>
            <td>Geography</td>
            <td>Art</td>
            <td>Music</td>
            <td>PE</td>
        </tr>
        <tr>
            <td>12:00-1:00</td>
            <td colspan="5" class="center highlight">LUNCH BREAK</td>
        </tr>
        <tr>
            <td>1:00-2:00</td>
            <td>English</td>
            <td>Math</td>
            <td>History</td>
            <td>Geography</td>
            <td>Art</td>
        </tr>
    </table>

    <!-- Table with Different Alignments -->
    <h2>Table with Various Alignments</h2>
    <table class="advanced-table">
        <tr>
            <th>Product</th>
            <th>Description</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
        </tr>
        <tr>
            <td class="center">001</td>
            <td class="top">
                <strong>Laptop</strong><br>
                High-performance laptop<br>
                with SSD storage
            </td>
            <td class="right">$999.99</td>
            <td class="center">25</td>
            <td class="center">
                <button>Edit</button>
                <button>Delete</button>
            </td>
        </tr>
        <tr>
            <td class="center">002</td>
            <td class="top">
                <strong>Mouse</strong><br>
                Wireless optical mouse
            </td>
            <td class="right">$29.99</td>
            <td class="center">150</td>
            <td class="center">
                <button>Edit</button>
                <button>Delete</button>
            </td>
        </tr>
    </table>

    <!-- Complex Table with Groups -->
    <h2>Complex Table with Column Groups</h2>
    <table class="advanced-table">
        <caption>Financial Report - 2024</caption>
        <colgroup>
            <col style="width: 20%;">
            <col span="2" style="background-color: #f0f0f0;">
            <col span="2" style="background-color: #e0e0e0;">
            <col style="background-color: #d0d0d0;">
        </colgroup>
        <thead>
            <tr>
                <th rowspan="2">Quarter</th>
                <th colspan="2">Revenue</th>
                <th colspan="2">Expenses</th>
                <th rowspan="2">Profit</th>
            </tr>
            <tr>
                <th>Product A</th>
                <th>Product B</th>
                <th>Fixed</th>
                <th>Variable</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Q1</td>
                <td class="right">$50,000</td>
                <td class="right">$30,000</td>
                <td class="right">$20,000</td>
                <td class="right">$15,000</td>
                <td class="right">$45,000</td>
            </tr>
            <tr>
                <td>Q2</td>
                <td class="right">$60,000</td>
                <td class="right">$35,000</td>
                <td class="right">$20,000</td>
                <td class="right">$18,000</td>
                <td class="right">$57,000</td>
            </tr>
            <tr>
                <td>Q3</td>
                <td class="right">$55,000</td>
                <td class="right">$40,000</td>
                <td class="right">$20,000</td>
                <td class="right">$20,000</td>
                <td class="right">$55,000</td>
            </tr>
            <tr>
                <td>Q4</td>
                <td class="right">$70,000</td>
                <td class="right">$45,000</td>
                <td class="right">$20,000</td>
                <td class="right">$25,000</td>
                <td class="right">$70,000</td>
            </tr>
        </tbody>
        <tfoot>
            <tr class="highlight">
                <th>Total</th>
                <th class="right">$235,000</th>
                <th class="right">$150,000</th>
                <th class="right">$80,000</th>
                <th class="right">$78,000</th>
                <th class="right">$227,000</th>
            </tr>
        </tfoot>
    </table>

    <!-- Accessible Table with Headers -->
    <h2>Accessible Table with Associated Headers</h2>
    <table class="advanced-table">
        <caption>Student Grades by Subject</caption>
        <thead>
            <tr>
                <th id="student">Student</th>
                <th id="math">Mathematics</th>
                <th id="science">Science</th>
                <th id="english">English</th>
                <th id="average">Average</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th id="john" headers="student">John Smith</th>
                <td headers="john math">85</td>
                <td headers="john science">92</td>
                <td headers="john english">78</td>
                <td headers="john average">85.0</td>
            </tr>
            <tr>
                <th id="sarah" headers="student">Sarah Jones</th>
                <td headers="sarah math">95</td>
                <td headers="sarah science">88</td>
                <td headers="sarah english">91</td>
                <td headers="sarah average">91.3</td>
            </tr>
        </tbody>
    </table>
</body>
</html>`}
        language="html"
      />

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Table as Design Tool (Legacy)</h3>
      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-6">
        <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Historical Context:</h4>
        <p className="text-red-800 dark:text-red-200 mb-3">
          Before CSS became widely supported, HTML tables were commonly used for page layout. 
          This practice is now deprecated and should be avoided.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h5 className="font-medium text-red-800 dark:text-red-200 mb-2">Why Tables Were Used:</h5>
            <ul className="list-disc list-inside text-sm text-red-700 dark:text-red-300 space-y-1">
              <li>Precise control over layout</li>
              <li>Cross-browser compatibility</li>
              <li>Grid-like positioning</li>
              <li>Limited CSS support in early browsers</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-red-800 dark:text-red-200 mb-2">Problems with Table Layouts:</h5>
            <ul className="list-disc list-inside text-sm text-red-700 dark:text-red-300 space-y-1">
              <li>Poor accessibility for screen readers</li>
              <li>Slow rendering and heavy markup</li>
              <li>Difficult responsive design</li>
              <li>Semantic incorrectness</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
        <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Modern Table Best Practices:</h4>
        <ul className="list-disc list-inside text-sm text-green-800 dark:text-green-200 space-y-1">
          <li>Use tables only for tabular data, never for layout</li>
          <li>Always include table headers (&lt;th&gt;) and proper structure</li>
          <li>Provide meaningful captions for complex tables</li>
          <li>Use ARIA labels and scope attributes for accessibility</li>
          <li>Make tables responsive with CSS overflow or card layouts</li>
          <li>Use CSS for styling instead of HTML attributes</li>
          <li>Consider data tables libraries for complex functionality</li>
        </ul>
      </div>
    </div>
  </div>
);

const HTMLFramesSection: React.FC = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
      HTML Frames
    </h2>
    
    <div className="prose dark:prose-invert max-w-none">
      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-6">
        <h3 className="font-semibold text-red-900 dark:text-red-100 mb-2">⚠️ Important Notice</h3>
        <p className="text-red-800 dark:text-red-200">
          HTML Frames (frameset, frame) are <strong>deprecated</strong> and removed from HTML5. 
          They should not be used in modern web development. This section is provided for historical 
          understanding and legacy code maintenance only.
        </p>
      </div>

      <p className="text-gray-700 dark:text-gray-300 mb-6">
        HTML frames were used to divide a browser window into multiple independent sections, 
        each displaying different HTML documents. While obsolete, understanding frames helps 
        with maintaining legacy code and understanding web development history.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Introduction to Frames</h3>
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Frame Types</h4>
          <div className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
            <p><strong>Frameset:</strong> Container for multiple frames</p>
            <p><strong>Frame:</strong> Individual window within frameset</p>
            <p><strong>IFrame:</strong> Inline frame (still supported)</p>
            <p><strong>NoFrames:</strong> Content for non-frame browsers</p>
          </div>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
          <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Frame Applications</h4>
          <div className="space-y-2 text-sm text-purple-800 dark:text-purple-200">
            <p><strong>Navigation:</strong> Persistent navigation menu</p>
            <p><strong>Content:</strong> Changeable main content area</p>
            <p><strong>Headers/Footers:</strong> Static page elements</p>
            <p><strong>Sidebars:</strong> Additional information panels</p>
          </div>
        </div>
      </div>

      <CodeExample
        title="Legacy Frameset Example (DO NOT USE)"
        code={`<!-- DEPRECATED: This code is for historical reference only -->
<!DOCTYPE html>
<html>
<head>
    <title>Frameset Example - DEPRECATED</title>
</head>

<!-- Frameset Document -->
<frameset rows="100,*,50">
    <!-- Top frame for header -->
    <frame src="header.html" name="header" noresize scrolling="no">
    
    <!-- Middle frameset for navigation and content -->
    <frameset cols="200,*">
        <frame src="navigation.html" name="nav" noresize>
        <frame src="content.html" name="main">
    </frameset>
    
    <!-- Bottom frame for footer -->
    <frame src="footer.html" name="footer" noresize scrolling="no">
    
    <!-- Fallback for browsers that don't support frames -->
    <noframes>
        <body>
            <h1>Frames Not Supported</h1>
            <p>Your browser does not support frames. Please upgrade to a modern browser.</p>
            <a href="main.html">View main content</a>
        </body>
    </noframes>
</frameset>
</html>

<!-- header.html -->
<!DOCTYPE html>
<html>
<head>
    <title>Header</title>
    <style>
        body { margin: 0; background: #333; color: white; text-align: center; }
    </style>
</head>
<body>
    <h1>Website Header</h1>
</body>
</html>

<!-- navigation.html -->
<!DOCTYPE html>
<html>
<head>
    <title>Navigation</title>
    <style>
        body { margin: 0; background: #f0f0f0; padding: 10px; }
        ul { list-style: none; padding: 0; }
        li { margin: 5px 0; }
        a { text-decoration: none; color: #333; }
    </style>
</head>
<body>
    <h3>Navigation</h3>
    <ul>
        <li><a href="home.html" target="main">Home</a></li>
        <li><a href="about.html" target="main">About</a></li>
        <li><a href="services.html" target="main">Services</a></li>
        <li><a href="contact.html" target="main">Contact</a></li>
    </ul>
</body>
</html>

<!-- content.html -->
<!DOCTYPE html>
<html>
<head>
    <title>Main Content</title>
    <style>
        body { margin: 0; padding: 20px; }
    </style>
</head>
<body>
    <h2>Welcome to Our Website</h2>
    <p>This is the main content area. Click navigation links to change content.</p>
</body>
</html>`}
        language="html"
      />

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Frame Attributes and Targeting</h3>
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
          <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Frameset Attributes</h4>
          <div className="space-y-2 text-sm text-green-800 dark:text-green-200">
            <p><strong>rows:</strong> Horizontal frame sizes</p>
            <p><strong>cols:</strong> Vertical frame sizes</p>
            <p><strong>border:</strong> Frame border thickness</p>
            <p><strong>frameborder:</strong> Show/hide borders</p>
            <p><strong>framespacing:</strong> Space between frames</p>
          </div>
        </div>

        <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
          <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Frame Attributes</h4>
          <div className="space-y-2 text-sm text-orange-800 dark:text-orange-200">
            <p><strong>src:</strong> Source HTML document</p>
            <p><strong>name:</strong> Frame identifier for targeting</p>
            <p><strong>noresize:</strong> Prevent user resizing</p>
            <p><strong>scrolling:</strong> yes, no, auto</p>
            <p><strong>marginwidth/height:</strong> Inner margins</p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Inline Frames (iFrames) - Still Supported</h3>
      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-6">
        <p className="text-green-800 dark:text-green-200 mb-3">
          Unlike framesets, inline frames (iframes) are still supported and commonly used in modern web development 
          for embedding external content, maps, videos, and creating sandboxed environments.
        </p>
      </div>

      <CodeExample
        title="Modern iFrame Examples"
        code={`<!DOCTYPE html>
<html>
<head>
    <title>iFrame Examples</title>
    <style>
        .iframe-container {
            margin: 20px 0;
            border: 1px solid #ddd;
            border-radius: 5px;
            overflow: hidden;
        }
        
        .responsive-iframe {
            width: 100%;
            height: 400px;
            border: none;
        }
        
        .video-container {
            position: relative;
            width: 100%;
            height: 0;
            padding-bottom: 56.25%; /* 16:9 aspect ratio */
        }
        
        .video-container iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: none;
        }
    </style>
</head>
<body>
    <h1>Modern iFrame Usage</h1>

    <!-- Basic iFrame -->
    <h2>Basic iFrame</h2>
    <div class="iframe-container">
        <iframe src="https://www.example.com" 
                width="600" 
                height="400" 
                title="Example Website">
            <p>Your browser does not support iframes.</p>
        </iframe>
    </div>

    <!-- Responsive iFrame -->
    <h2>Responsive iFrame</h2>
    <div class="iframe-container">
        <iframe src="https://www.openstreetmap.org/export/embed.html" 
                class="responsive-iframe"
                title="OpenStreetMap">
        </iframe>
    </div>

    <!-- YouTube Video Embed -->
    <h2>YouTube Video (Responsive)</h2>
    <div class="video-container">
        <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
        </iframe>
    </div>

    <!-- Google Maps Embed -->
    <h2>Google Maps</h2>
    <div class="iframe-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2" 
                width="600" 
                height="450" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
                title="Google Maps">
        </iframe>
    </div>

    <!-- Sandboxed iFrame -->
    <h2>Sandboxed iFrame</h2>
    <div class="iframe-container">
        <iframe src="external-content.html" 
                width="600" 
                height="300"
                sandbox="allow-scripts allow-same-origin"
                title="Sandboxed content">
        </iframe>
    </div>

    <!-- iFrame with Custom Loading -->
    <h2>Lazy-Loaded iFrame</h2>
    <div class="iframe-container">
        <iframe src="https://www.example.com/heavy-content" 
                width="600" 
                height="400"
                loading="lazy"
                title="Lazy loaded content">
        </iframe>
    </div>
</body>
</html>`}
        language="html"
      />

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Problems with Legacy Frames</h3>
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-6">
        <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-3">Why Frames Were Deprecated:</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h5 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2">Usability Issues:</h5>
            <ul className="list-disc list-inside text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
              <li>Bookmarking problems</li>
              <li>Browser back button confusion</li>
              <li>Printing difficulties</li>
              <li>Search engine indexing issues</li>
              <li>Mobile device problems</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2">Technical Issues:</h5>
            <ul className="list-disc list-inside text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
              <li>Accessibility barriers</li>
              <li>Screen reader problems</li>
              <li>Cross-frame scripting security</li>
              <li>Complex maintenance</li>
              <li>Performance overhead</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Modern Alternatives to Frames</h3>
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-4">
          <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">CSS Solutions</h4>
          <div className="space-y-2 text-sm text-indigo-800 dark:text-indigo-200">
            <p><strong>CSS Grid:</strong> Complex layout control</p>
            <p><strong>Flexbox:</strong> Flexible layouts</p>
            <p><strong>CSS Positioning:</strong> Fixed headers/sidebars</p>
            <p><strong>Viewport Units:</strong> Full-height layouts</p>
          </div>
        </div>

        <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-4">
          <h4 className="font-semibold text-teal-900 dark:text-teal-100 mb-2">JavaScript Solutions</h4>
          <div className="space-y-2 text-sm text-teal-800 dark:text-teal-200">
            <p><strong>AJAX:</strong> Dynamic content loading</p>
            <p><strong>SPA Frameworks:</strong> Single-page applications</p>
            <p><strong>Web Components:</strong> Reusable components</p>
            <p><strong>Progressive Enhancement:</strong> Better UX</p>
          </div>
        </div>
      </div>

      <CodeExample
        title="Modern Layout Alternative to Frames"
        code={`<!DOCTYPE html>
<html>
<head>
    <title>Modern Layout Alternative</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: Arial, sans-serif;
            height: 100vh;
            display: grid;
            grid-template-areas: 
                "header header"
                "nav main"
                "footer footer";
            grid-template-rows: 60px 1fr 50px;
            grid-template-columns: 200px 1fr;
        }
        
        .header {
            grid-area: header;
            background-color: #333;
            color: white;
            display: flex;
            align-items: center;
            padding: 0 20px;
        }
        
        .navigation {
            grid-area: nav;
            background-color: #f0f0f0;
            padding: 20px;
            overflow-y: auto;
        }
        
        .main-content {
            grid-area: main;
            padding: 20px;
            overflow-y: auto;
        }
        
        .footer {
            grid-area: footer;
            background-color: #666;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .nav-link {
            display: block;
            padding: 10px;
            color: #333;
            text-decoration: none;
            border-radius: 5px;
            margin: 5px 0;
        }
        
        .nav-link:hover {
            background-color: #ddd;
        }
        
        /* Mobile responsive */
        @media (max-width: 768px) {
            body {
                grid-template-areas: 
                    "header"
                    "main"
                    "footer";
                grid-template-columns: 1fr;
            }
            
            .navigation {
                display: none;
            }
        }
    </style>
</head>
<body>
    <header class="header">
        <h1>Modern Layout (No Frames)</h1>
    </header>
    
    <nav class="navigation">
        <h3>Navigation</h3>
        <a href="#" class="nav-link">Home</a>
        <a href="#" class="nav-link">About</a>
        <a href="#" class="nav-link">Services</a>
        <a href="#" class="nav-link">Contact</a>
    </nav>
    
    <main class="main-content">
        <h2>Main Content Area</h2>
        <p>This layout achieves the same visual result as frames but with modern, 
           accessible, and responsive techniques.</p>
        
        <h3>Benefits of This Approach:</h3>
        <ul>
            <li>SEO-friendly</li>
            <li>Accessible to screen readers</li>
            <li>Mobile responsive</li>
            <li>Easy to maintain</li>
            <li>Better performance</li>
        </ul>
    </main>
    
    <footer class="footer">
        <p>&copy; 2024 Modern Web Design</p>
    </footer>
</body>
</html>`}
        language="html"
      />

      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
        <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Key Takeaways:</h4>
        <ul className="list-disc list-inside text-sm text-green-800 dark:text-green-200 space-y-1">
          <li>Avoid using legacy framesets - they're deprecated and removed from HTML5</li>
          <li>Use modern CSS layout techniques (Grid, Flexbox) instead of frames</li>
          <li>iFrames are still valid for embedding external content with proper security</li>
          <li>Always provide fallback content for iframes</li>
          <li>Use sandbox attributes for untrusted iframe content</li>
          <li>Consider accessibility and mobile responsiveness in layouts</li>
        </ul>
      </div>
    </div>
  </div>
);

const HTMLFormsSection: React.FC = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
      HTML Forms
    </h2>
    
    <div className="prose dark:prose-invert max-w-none">
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        HTML forms are essential for collecting user input on web pages. They provide various input types, 
        validation options, and submission methods to create interactive web applications.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Form Structure and Basic Elements</h3>
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Form Container</h4>
          <div className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
            <p><strong>&lt;form&gt;</strong> - Form container element</p>
            <p><strong>action:</strong> Where to send form data</p>
            <p><strong>method:</strong> GET or POST</p>
            <p><strong>enctype:</strong> Encoding type for file uploads</p>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
          <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Input Elements</h4>
          <div className="space-y-2 text-sm text-green-800 dark:text-green-200">
            <p><strong>&lt;input&gt;</strong> - Various input types</p>
            <p><strong>&lt;textarea&gt;</strong> - Multi-line text input</p>
            <p><strong>&lt;select&gt;</strong> - Dropdown lists</p>
            <p><strong>&lt;button&gt;</strong> - Action buttons</p>
          </div>
        </div>
      </div>

      <CodeExample
        title="Complete HTML Form Example"
        code={`<!DOCTYPE html>
<html>
<head>
    <title>HTML Forms Example</title>
    <style>
        .form-container {
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-family: Arial, sans-serif;
        }
        
        .form-group {
            margin-bottom: 15px;
        }
        
        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        
        input, textarea, select {
            width: 100%;
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 3px;
            box-sizing: border-box;
        }
        
        .form-row {
            display: flex;
            gap: 15px;
        }
        
        .form-row > div {
            flex: 1;
        }
        
        .checkbox-group, .radio-group {
            display: flex;
            gap: 15px;
            flex-wrap: wrap;
        }
        
        .checkbox-group input, .radio-group input {
            width: auto;
            margin-right: 5px;
        }
        
        button {
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 3px;
            cursor: pointer;
            margin-right: 10px;
        }
        
        button:hover {
            background-color: #45a049;
        }
        
        .reset-btn {
            background-color: #f44336;
        }
        
        .reset-btn:hover {
            background-color: #da190b;
        }
        
        fieldset {
            border: 1px solid #ccc;
            border-radius: 3px;
            padding: 15px;
            margin-bottom: 15px;
        }
        
        legend {
            font-weight: bold;
            padding: 0 10px;
        }
    </style>
</head>
<body>
    <div class="form-container">
        <h2>User Registration Form</h2>
        
        <form action="/submit-registration" method="POST" enctype="multipart/form-data" id="registrationForm">
            <!-- Personal Information -->
            <fieldset>
                <legend>Personal Information</legend>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="firstName">First Name *</label>
                        <input type="text" id="firstName" name="firstName" required placeholder="Enter your first name">
                    </div>
                    
                    <div class="form-group">
                        <label for="lastName">Last Name *</label>
                        <input type="text" id="lastName" name="lastName" required placeholder="Enter your last name">
                    </div>
                </div>
                
                <div class="form-group">
                    <label for="email">Email Address *</label>
                    <input type="email" id="email" name="email" required placeholder="your.email@example.com">
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="phone">Phone Number</label>
                        <input type="tel" id="phone" name="phone" placeholder="+1 (555) 123-4567">
                    </div>
                    
                    <div class="form-group">
                        <label for="dateOfBirth">Date of Birth</label>
                        <input type="date" id="dateOfBirth" name="dateOfBirth">
                    </div>
                </div>
                
                <div class="form-group">
                    <label>Gender</label>
                    <div class="radio-group">
                        <label><input type="radio" name="gender" value="male"> Male</label>
                        <label><input type="radio" name="gender" value="female"> Female</label>
                        <label><input type="radio" name="gender" value="other"> Other</label>
                        <label><input type="radio" name="gender" value="prefer-not-to-say"> Prefer not to say</label>
                    </div>
                </div>
            </fieldset>
            
            <!-- Account Information -->
            <fieldset>
                <legend>Account Information</legend>
                
                <div class="form-group">
                    <label for="username">Username *</label>
                    <input type="text" id="username" name="username" required minlength="3" maxlength="20" 
                           placeholder="Choose a username">
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="password">Password *</label>
                        <input type="password" id="password" name="password" required minlength="8" 
                               placeholder="Enter a strong password">
                    </div>
                    
                    <div class="form-group">
                        <label for="confirmPassword">Confirm Password *</label>
                        <input type="password" id="confirmPassword" name="confirmPassword" required 
                               placeholder="Confirm your password">
                    </div>
                </div>
            </fieldset>
            
            <!-- Additional Information -->
            <fieldset>
                <legend>Additional Information</legend>
                
                <div class="form-group">
                    <label for="country">Country</label>
                    <select id="country" name="country">
                        <option value="">Select your country</option>
                        <option value="us">United States</option>
                        <option value="ca">Canada</option>
                        <option value="uk">United Kingdom</option>
                        <option value="au">Australia</option>
                        <option value="de">Germany</option>
                        <option value="fr">France</option>
                        <option value="jp">Japan</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label for="interests">Interests (Select multiple)</label>
                    <select id="interests" name="interests" multiple size="4">
                        <option value="technology">Technology</option>
                        <option value="sports">Sports</option>
                        <option value="music">Music</option>
                        <option value="travel">Travel</option>
                        <option value="cooking">Cooking</option>
                        <option value="reading">Reading</option>
                        <option value="gaming">Gaming</option>
                        <option value="photography">Photography</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label for="bio">Bio</label>
                    <textarea id="bio" name="bio" rows="4" placeholder="Tell us about yourself..."></textarea>
                </div>
                
                <div class="form-group">
                    <label for="profilePicture">Profile Picture</label>
                    <input type="file" id="profilePicture" name="profilePicture" accept="image/*">
                </div>
                
                <div class="form-group">
                    <label for="website">Website/Portfolio</label>
                    <input type="url" id="website" name="website" placeholder="https://your-website.com">
                </div>
                
                <div class="form-group">
                    <label for="experience">Years of Experience</label>
                    <input type="range" id="experience" name="experience" min="0" max="20" value="0" 
                           oninput="document.getElementById('experienceValue').textContent = this.value">
                    <span>0</span> - <span id="experienceValue">0</span> - <span>20</span> years
                </div>
                
                <div class="form-group">
                    <label for="salary">Expected Salary (Optional)</label>
                    <input type="number" id="salary" name="salary" min="0" step="1000" placeholder="50000">
                </div>
            </fieldset>
            
            <!-- Preferences and Agreement -->
            <fieldset>
                <legend>Preferences & Agreement</legend>
                
                <div class="form-group">
                    <div class="checkbox-group">
                        <label>
                            <input type="checkbox" name="notifications" value="email">
                            Email notifications
                        </label>
                        <label>
                            <input type="checkbox" name="notifications" value="sms">
                            SMS notifications
                        </label>
                        <label>
                            <input type="checkbox" name="notifications" value="newsletter">
                            Monthly newsletter
                        </label>
                    </div>
                </div>
                
                <div class="form-group">
                    <label>
                        <input type="checkbox" name="terms" required>
                        I agree to the <a href="/terms" target="_blank">Terms of Service</a> and 
                        <a href="/privacy" target="_blank">Privacy Policy</a> *
                    </label>
                </div>
                
                <div class="form-group">
                    <label>
                        <input type="checkbox" name="marketing">
                        I agree to receive marketing communications
                    </label>
                </div>
            </fieldset>
            
            <!-- Hidden Fields -->
            <input type="hidden" name="formVersion" value="2.1">
            <input type="hidden" name="referrer" value="google">
            
            <!-- Form Actions -->
            <div class="form-group">
                <button type="submit">Create Account</button>
                <button type="reset" class="reset-btn">Clear Form</button>
                <button type="button" onclick="validateForm()">Validate</button>
            </div>
        </form>
    </div>

    <script>
        function validateForm() {
            const form = document.getElementById('registrationForm');
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return false;
            }
            
            if (form.checkValidity()) {
                alert('Form is valid!');
            } else {
                alert('Please fill in all required fields correctly.');
            }
        }
        
        // Real-time password confirmation
        document.getElementById('confirmPassword').addEventListener('input', function() {
            const password = document.getElementById('password').value;
            const confirmPassword = this.value;
            
            if (password !== confirmPassword) {
                this.setCustomValidity('Passwords do not match');
            } else {
                this.setCustomValidity('');
            }
        });
    </script>
</body>
</html>`}
        language="html"
      />

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Form Input Types</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        HTML5 introduced many new input types that provide better user experience and built-in validation.
      </p>

      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
          <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Text Inputs</h4>
          <div className="space-y-1 text-sm text-purple-800 dark:text-purple-200">
            <p><strong>text</strong> - Basic text input</p>
            <p><strong>email</strong> - Email validation</p>
            <p><strong>password</strong> - Hidden text</p>
            <p><strong>search</strong> - Search box</p>
            <p><strong>url</strong> - URL validation</p>
            <p><strong>tel</strong> - Phone numbers</p>
          </div>
        </div>

        <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
          <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Numeric Inputs</h4>
          <div className="space-y-1 text-sm text-orange-800 dark:text-orange-200">
            <p><strong>number</strong> - Numeric input</p>
            <p><strong>range</strong> - Slider control</p>
            <p><strong>date</strong> - Date picker</p>
            <p><strong>time</strong> - Time picker</p>
            <p><strong>datetime-local</strong> - Date and time</p>
            <p><strong>month</strong> - Month picker</p>
          </div>
        </div>

        <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-4">
          <h4 className="font-semibold text-teal-900 dark:text-teal-100 mb-2">Other Inputs</h4>
          <div className="space-y-1 text-sm text-teal-800 dark:text-teal-200">
            <p><strong>file</strong> - File upload</p>
            <p><strong>radio</strong> - Single selection</p>
            <p><strong>checkbox</strong> - Multiple selection</p>
            <p><strong>hidden</strong> - Hidden data</p>
            <p><strong>color</strong> - Color picker</p>
            <p><strong>submit/reset</strong> - Form buttons</p>
          </div>
        </div>
      </div>

      <CodeExample
        title="HTML5 Input Types Demo"
        code={`<!DOCTYPE html>
<html>
<head>
    <title>HTML5 Input Types</title>
    <style>
        .input-demo { margin: 15px 0; padding: 15px; border: 1px solid #ddd; }
        .input-demo label { display: block; margin-bottom: 5px; font-weight: bold; }
        .input-demo input, .input-demo textarea { width: 300px; padding: 5px; }
        .output { margin-left: 10px; color: #666; }
    </style>
</head>
<body>
    <h1>HTML5 Input Types Demonstration</h1>
    
    <form>
        <!-- Text Inputs -->
        <div class="input-demo">
            <label for="textInput">Text Input:</label>
            <input type="text" id="textInput" placeholder="Enter any text" maxlength="50">
        </div>
        
        <div class="input-demo">
            <label for="emailInput">Email Input:</label>
            <input type="email" id="emailInput" placeholder="user@example.com">
            <span class="output">Built-in email validation</span>
        </div>
        
        <div class="input-demo">
            <label for="passwordInput">Password Input:</label>
            <input type="password" id="passwordInput" minlength="8">
            <span class="output">Text is hidden</span>
        </div>
        
        <div class="input-demo">
            <label for="urlInput">URL Input:</label>
            <input type="url" id="urlInput" placeholder="https://example.com">
            <span class="output">URL validation</span>
        </div>
        
        <div class="input-demo">
            <label for="telInput">Phone Input:</label>
            <input type="tel" id="telInput" placeholder="+1 (555) 123-4567">
            <span class="output">Mobile keyboards show number pad</span>
        </div>
        
        <div class="input-demo">
            <label for="searchInput">Search Input:</label>
            <input type="search" id="searchInput" placeholder="Search...">
            <span class="output">May show clear button</span>
        </div>
        
        <!-- Numeric Inputs -->
        <div class="input-demo">
            <label for="numberInput">Number Input:</label>
            <input type="number" id="numberInput" min="0" max="100" step="5" value="10">
            <span class="output">Spinner controls, validation</span>
        </div>
        
        <div class="input-demo">
            <label for="rangeInput">Range Input:</label>
            <input type="range" id="rangeInput" min="0" max="100" value="50" 
                   oninput="document.getElementById('rangeOutput').textContent = this.value">
            <span class="output">Value: <span id="rangeOutput">50</span></span>
        </div>
        
        <!-- Date and Time Inputs -->
        <div class="input-demo">
            <label for="dateInput">Date Input:</label>
            <input type="date" id="dateInput" min="2024-01-01" max="2024-12-31">
            <span class="output">Date picker</span>
        </div>
        
        <div class="input-demo">
            <label for="timeInput">Time Input:</label>
            <input type="time" id="timeInput">
            <span class="output">Time picker</span>
        </div>
        
        <div class="input-demo">
            <label for="datetimeInput">DateTime Local:</label>
            <input type="datetime-local" id="datetimeInput">
            <span class="output">Date and time picker</span>
        </div>
        
        <div class="input-demo">
            <label for="monthInput">Month Input:</label>
            <input type="month" id="monthInput">
            <span class="output">Month/year picker</span>
        </div>
        
        <div class="input-demo">
            <label for="weekInput">Week Input:</label>
            <input type="week" id="weekInput">
            <span class="output">Week picker</span>
        </div>
        
        <!-- File and Color Inputs -->
        <div class="input-demo">
            <label for="fileInput">File Input:</label>
            <input type="file" id="fileInput" accept=".jpg,.png,.pdf" multiple>
            <span class="output">File browser dialog</span>
        </div>
        
        <div class="input-demo">
            <label for="colorInput">Color Input:</label>
            <input type="color" id="colorInput" value="#ff0000">
            <span class="output">Color picker</span>
        </div>
        
        <!-- Selection Inputs -->
        <div class="input-demo">
            <label>Radio Buttons (single selection):</label>
            <input type="radio" id="option1" name="radioGroup" value="1">
            <label for="option1">Option 1</label>
            <input type="radio" id="option2" name="radioGroup" value="2">
            <label for="option2">Option 2</label>
            <input type="radio" id="option3" name="radioGroup" value="3">
            <label for="option3">Option 3</label>
        </div>
        
        <div class="input-demo">
            <label>Checkboxes (multiple selection):</label>
            <input type="checkbox" id="check1" name="checkGroup" value="A">
            <label for="check1">Option A</label>
            <input type="checkbox" id="check2" name="checkGroup" value="B">
            <label for="check2">Option B</label>
            <input type="checkbox" id="check3" name="checkGroup" value="C">
            <label for="check3">Option C</label>
        </div>
        
        <!-- Hidden Input -->
        <input type="hidden" name="hiddenField" value="secret-value">
        
        <!-- Submit and Reset Buttons -->
        <div class="input-demo">
            <input type="submit" value="Submit Form">
            <input type="reset" value="Reset Form">
            <input type="button" value="Custom Button" onclick="alert('Button clicked!')">
        </div>
    </form>
</body>
</html>`}
        language="html"
      />

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Form Validation and Attributes</h3>
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-6">
        <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-3">HTML5 Validation Attributes:</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h5 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2">Validation Attributes:</h5>
            <ul className="list-disc list-inside text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
              <li><strong>required</strong> - Field must be filled</li>
              <li><strong>pattern</strong> - Regular expression validation</li>
              <li><strong>min/max</strong> - Numeric range validation</li>
              <li><strong>minlength/maxlength</strong> - Text length validation</li>
              <li><strong>step</strong> - Numeric step validation</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2">User Experience:</h5>
            <ul className="list-disc list-inside text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
              <li><strong>placeholder</strong> - Hint text</li>
              <li><strong>autocomplete</strong> - Browser autofill</li>
              <li><strong>autofocus</strong> - Auto-focus on load</li>
              <li><strong>readonly</strong> - Read-only field</li>
              <li><strong>disabled</strong> - Disabled field</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-4">
        <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">Form Best Practices:</h4>
        <ul className="list-disc list-inside text-sm text-indigo-800 dark:text-indigo-200 space-y-1">
          <li>Always use proper labels associated with form controls</li>
          <li>Group related fields using fieldset and legend elements</li>
          <li>Provide clear validation messages and error handling</li>
          <li>Use appropriate input types for better user experience</li>
          <li>Implement both client-side and server-side validation</li>
          <li>Make forms accessible with ARIA attributes when needed</li>
          <li>Use HTTPS for forms that collect sensitive information</li>
          <li>Provide clear instructions and help text</li>
        </ul>
      </div>
    </div>
  </div>
);

export default Unit2Page;