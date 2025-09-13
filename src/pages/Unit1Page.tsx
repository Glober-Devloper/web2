import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { ChevronRight, Clock, CheckCircle, Code, Globe, Server } from 'lucide-react';
import { useProgress } from '../context/ProgressContext';
import CodeExample from '../components/CodeExample';

const Unit1Page: React.FC = () => {
  const location = useLocation();
  const { markAsCompleted, isCompleted } = useProgress();
  const [activeSection, setActiveSection] = useState('introduction');

  const sections = [
    { 
      id: 'introduction', 
      title: 'Introduction to Internet', 
      icon: Globe,
      content: <IntroductionSection />
    },
    { 
      id: 'www', 
      title: 'World Wide Web (WWW)', 
      icon: Globe,
      content: <WWWSection />
    },
    { 
      id: 'connectivity', 
      title: 'Internet Connectivity', 
      icon: Server,
      content: <ConnectivitySection />
    },
    { 
      id: 'protocols', 
      title: 'Web Protocols', 
      icon: Code,
      content: <ProtocolsSection />
    },
    { 
      id: 'services', 
      title: 'Internet Services', 
      icon: Server,
      content: <ServicesSection />
    },
    { 
      id: 'browsers', 
      title: 'Web Browsers', 
      icon: Globe,
      content: <BrowsersSection />
    },
    { 
      id: 'servers', 
      title: 'Web Servers', 
      icon: Server,
      content: <ServersSection />
    },
    { 
      id: 'hosting', 
      title: 'Web Hosting & DNS', 
      icon: Globe,
      content: <HostingSection />
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Unit I: Introduction to Web Technology
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Master the fundamentals of Internet, WWW, protocols, and web technologies (15 Hours)
        </p>
        <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
          <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> 15 Hours</span>
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
                    markAsCompleted(`unit1-${section.id}`);
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
                  {isCompleted(`unit1-${section.id}`) && (
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
const IntroductionSection: React.FC = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
      Introduction to Internet
    </h2>
    
    <div className="prose dark:prose-invert max-w-none">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">What is Internet?</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        The Internet is a global network of interconnected computers that communicate using standardized protocols. 
        It's often called the "network of networks" because it connects millions of private, public, academic, 
        business, and government networks worldwide.
      </p>

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
        <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Key Features of Internet:</h4>
        <ul className="list-disc list-inside space-y-1 text-blue-800 dark:text-blue-200">
          <li>Global connectivity and accessibility</li>
          <li>Decentralized architecture</li>
          <li>Protocol-based communication</li>
          <li>Resource sharing capabilities</li>
          <li>Scalability and reliability</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">History and Evolution</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        The Internet evolved from ARPANET (Advanced Research Projects Agency Network), which was developed by the 
        US Department of Defense in the late 1960s. Key milestones include:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 dark:text-white">1969 - ARPANET</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">First network connection established</p>
        </div>
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 dark:text-white">1989 - World Wide Web</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">Tim Berners-Lee invents the WWW</p>
        </div>
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 dark:text-white">1990s - Commercial Internet</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">Internet opens to commercial use</p>
        </div>
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 dark:text-white">2000s - Broadband Era</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">High-speed connections become common</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Internet Architecture</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        The Internet uses a layered architecture model (OSI Model) for communication:
      </p>

      <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border rounded-lg p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
          {['Application Layer', 'Transport Layer', 'Network Layer', 'Physical Layer'].map((layer, index) => (
            <div key={layer} className="text-center p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="text-sm font-medium text-gray-900 dark:text-white">{layer}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {index === 0 && 'HTTP, FTP, SMTP'}
                {index === 1 && 'TCP, UDP'}
                {index === 2 && 'IP, ICMP'}
                {index === 3 && 'Ethernet, WiFi'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const WWWSection: React.FC = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
      World Wide Web (WWW)
    </h2>
    
    <div className="prose dark:prose-invert max-w-none">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">What is WWW?</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        The World Wide Web (WWW or Web) is an information system that enables documents and other web resources 
        to be accessed over the Internet. It was invented by Tim Berners-Lee in 1989 at CERN.
      </p>

      <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4 mb-6">
        <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Core Components of WWW:</h4>
        <ul className="list-disc list-inside space-y-1 text-purple-800 dark:text-purple-200">
          <li><strong>HTML</strong> - HyperText Markup Language for creating web pages</li>
          <li><strong>HTTP</strong> - HyperText Transfer Protocol for communication</li>
          <li><strong>URL</strong> - Uniform Resource Locator for addressing resources</li>
          <li><strong>Web Browsers</strong> - Software to access and display web pages</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">W3C (World Wide Web Consortium)</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        W3C is the international standards organization for the World Wide Web. It develops web standards 
        and guidelines to ensure web accessibility, interoperability, and long-term growth.
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">W3C Standards Include:</h4>
          <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400">
            <li>HTML/XHTML specifications</li>
            <li>CSS (Cascading Style Sheets)</li>
            <li>XML and related technologies</li>
            <li>Web accessibility guidelines (WCAG)</li>
            <li>DOM (Document Object Model)</li>
          </ul>
        </div>
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">W3C Mission:</h4>
          <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400">
            <li>Web for everyone accessibility</li>
            <li>Web on everything platform</li>
            <li>Knowledge and data sharing</li>
            <li>Trust and security</li>
            <li>Responsive web design</li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">How WWW Works</h3>
      <CodeExample
        title="Web Communication Process"
        code={`1. User enters URL in browser
2. Browser resolves domain name using DNS
3. Browser establishes connection to web server
4. Browser sends HTTP request to server
5. Server processes request and sends HTTP response
6. Browser receives and renders the web page
7. User interacts with the displayed content

Example URL breakdown:
https://www.example.com/page.html?param=value#section

Protocol: https://
Domain: www.example.com
Path: /page.html
Query: ?param=value
Fragment: #section`}
        language="text"
      />

      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
        <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Web vs Internet:</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h5 className="font-medium text-green-800 dark:text-green-200">Internet</h5>
            <p className="text-sm text-green-700 dark:text-green-300">
              Physical network infrastructure connecting computers globally
            </p>
          </div>
          <div>
            <h5 className="font-medium text-green-800 dark:text-green-200">World Wide Web</h5>
            <p className="text-sm text-green-700 dark:text-green-300">
              Service that runs on top of the Internet using HTTP protocol
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ConnectivitySection: React.FC = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
      Levels of Internet Connectivity
    </h2>
    
    <div className="prose dark:prose-invert max-w-none">
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        Internet connectivity refers to the various methods and technologies used to connect to the Internet. 
        Different types of connections offer varying speeds, reliability, and costs.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-2">
            1. Dial-up Connection
          </h3>
          <div className="space-y-2 text-sm">
            <p className="text-red-800 dark:text-red-200"><strong>Speed:</strong> Up to 56 Kbps</p>
            <p className="text-red-800 dark:text-red-200"><strong>Technology:</strong> Uses telephone lines</p>
            <p className="text-red-800 dark:text-red-200"><strong>Pros:</strong> Low cost, widely available</p>
            <p className="text-red-800 dark:text-red-200"><strong>Cons:</strong> Slow speed, ties up phone line</p>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
            2. DSL (Digital Subscriber Line)
          </h3>
          <div className="space-y-2 text-sm">
            <p className="text-blue-800 dark:text-blue-200"><strong>Speed:</strong> 1-100 Mbps</p>
            <p className="text-blue-800 dark:text-blue-200"><strong>Technology:</strong> Uses existing phone lines</p>
            <p className="text-blue-800 dark:text-blue-200"><strong>Pros:</strong> Always-on, phone line free</p>
            <p className="text-blue-800 dark:text-blue-200"><strong>Cons:</strong> Distance-dependent speed</p>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-2">
            3. Leased Line
          </h3>
          <div className="space-y-2 text-sm">
            <p className="text-green-800 dark:text-green-200"><strong>Speed:</strong> 64 Kbps - 10 Gbps</p>
            <p className="text-green-800 dark:text-green-200"><strong>Technology:</strong> Dedicated connection</p>
            <p className="text-green-800 dark:text-green-200"><strong>Pros:</strong> High speed, reliable, secure</p>
            <p className="text-green-800 dark:text-green-200"><strong>Cons:</strong> Expensive, fixed bandwidth</p>
          </div>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-2">
            4. VSAT (Very Small Aperture Terminal)
          </h3>
          <div className="space-y-2 text-sm">
            <p className="text-purple-800 dark:text-purple-200"><strong>Speed:</strong> 1-50 Mbps</p>
            <p className="text-purple-800 dark:text-purple-200"><strong>Technology:</strong> Satellite communication</p>
            <p className="text-purple-800 dark:text-purple-200"><strong>Pros:</strong> Global coverage, reliable</p>
            <p className="text-purple-800 dark:text-purple-200"><strong>Cons:</strong> High latency, weather dependent</p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Requirements for Internet Connectivity</h3>
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-6">
        <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-3">Essential Requirements:</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <ul className="list-disc list-inside space-y-1 text-yellow-800 dark:text-yellow-200">
            <li>Computer or device with network capability</li>
            <li>Network Interface Card (NIC) or WiFi adapter</li>
            <li>Internet Service Provider (ISP) account</li>
            <li>Modem or router for connection</li>
          </ul>
          <ul className="list-disc list-inside space-y-1 text-yellow-800 dark:text-yellow-200">
            <li>Appropriate cables or wireless setup</li>
            <li>TCP/IP protocol configuration</li>
            <li>Web browser software</li>
            <li>DNS server configuration</li>
          </ul>
        </div>
      </div>

      <CodeExample
        title="Connection Speed Comparison"
        code={`Connection Type    | Download Speed | Upload Speed   | Latency
-------------------|----------------|----------------|----------
Dial-up           | 56 Kbps        | 33.6 Kbps     | 100-200ms
DSL (ADSL)        | 1-24 Mbps      | 128 Kbps-1 Mbps| 10-50ms
Cable             | 10-300 Mbps    | 5-50 Mbps      | 5-30ms
Fiber Optic       | 50-1000 Mbps   | 50-1000 Mbps   | 1-10ms
Leased Line (T1)  | 1.544 Mbps     | 1.544 Mbps     | <10ms
VSAT              | 1-50 Mbps      | 256 Kbps-5 Mbps| 500-700ms

Note: Actual speeds may vary based on location, provider, and network conditions.`}
        language="text"
      />
    </div>
  </div>
);

const ProtocolsSection: React.FC = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
      Web Protocols
    </h2>
    
    <div className="prose dark:prose-invert max-w-none">
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        Internet protocols are standardized rules that govern how data is transmitted over networks. 
        They ensure reliable communication between different devices and systems.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
            TCP/IP (Transmission Control Protocol/Internet Protocol)
          </h3>
          <div className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
            <p><strong>Purpose:</strong> Foundation protocol suite for Internet communication</p>
            <p><strong>Features:</strong> Reliable, connection-oriented, error checking</p>
            <p><strong>Use Cases:</strong> Web browsing, email, file transfer</p>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-2">
            UDP/IP (User Datagram Protocol/Internet Protocol)
          </h3>
          <div className="space-y-2 text-sm text-green-800 dark:text-green-200">
            <p><strong>Purpose:</strong> Fast, connectionless data transmission</p>
            <p><strong>Features:</strong> Low overhead, no error correction</p>
            <p><strong>Use Cases:</strong> Video streaming, online gaming, DNS queries</p>
          </div>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-2">
            HTTP (HyperText Transfer Protocol)
          </h3>
          <div className="space-y-2 text-sm text-purple-800 dark:text-purple-200">
            <p><strong>Purpose:</strong> Web page and resource transfer</p>
            <p><strong>Features:</strong> Stateless, request-response model</p>
            <p><strong>Port:</strong> 80 (default)</p>
          </div>
        </div>

        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-2">
            HTTPS (HTTP Secure)
          </h3>
          <div className="space-y-2 text-sm text-red-800 dark:text-red-200">
            <p><strong>Purpose:</strong> Secure web communication with encryption</p>
            <p><strong>Features:</strong> SSL/TLS encryption, authentication</p>
            <p><strong>Port:</strong> 443 (default)</p>
          </div>
        </div>

        <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-orange-900 dark:text-orange-100 mb-2">
            FTP (File Transfer Protocol)
          </h3>
          <div className="space-y-2 text-sm text-orange-800 dark:text-orange-200">
            <p><strong>Purpose:</strong> File upload and download</p>
            <p><strong>Features:</strong> Directory navigation, authentication</p>
            <p><strong>Ports:</strong> 20 (data), 21 (control)</p>
          </div>
        </div>

        <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-teal-900 dark:text-teal-100 mb-2">
            DHCP (Dynamic Host Configuration Protocol)
          </h3>
          <div className="space-y-2 text-sm text-teal-800 dark:text-teal-200">
            <p><strong>Purpose:</strong> Automatic IP address assignment</p>
            <p><strong>Features:</strong> Network configuration automation</p>
            <p><strong>Port:</strong> 67 (server), 68 (client)</p>
          </div>
        </div>
      </div>

      <CodeExample
        title="HTTP Request/Response Example"
        code={`// HTTP Request Example
GET /index.html HTTP/1.1
Host: www.example.com
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)
Accept: text/html,application/xhtml+xml
Accept-Language: en-US,en;q=0.9
Connection: keep-alive

// HTTP Response Example  
HTTP/1.1 200 OK
Date: Mon, 15 Jan 2024 10:30:00 GMT
Server: Apache/2.4.41
Content-Type: text/html; charset=UTF-8
Content-Length: 1234
Connection: keep-alive

<!DOCTYPE html>
<html>
<head>
    <title>Example Page</title>
</head>
<body>
    <h1>Welcome to Example.com</h1>
</body>
</html>`}
        language="http"
      />

      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Protocol Stack Layers:</h4>
        <div className="space-y-2">
          <div className="flex items-center justify-between bg-blue-100 dark:bg-blue-800 p-2 rounded">
            <span className="font-medium text-blue-900 dark:text-blue-100">Application Layer</span>
            <span className="text-sm text-blue-700 dark:text-blue-300">HTTP, HTTPS, FTP, SMTP</span>
          </div>
          <div className="flex items-center justify-between bg-green-100 dark:bg-green-800 p-2 rounded">
            <span className="font-medium text-green-900 dark:text-green-100">Transport Layer</span>
            <span className="text-sm text-green-700 dark:text-green-300">TCP, UDP</span>
          </div>
          <div className="flex items-center justify-between bg-orange-100 dark:bg-orange-800 p-2 rounded">
            <span className="font-medium text-orange-900 dark:text-orange-100">Network Layer</span>
            <span className="text-sm text-orange-700 dark:text-orange-300">IP, ICMP</span>
          </div>
          <div className="flex items-center justify-between bg-purple-100 dark:bg-purple-800 p-2 rounded">
            <span className="font-medium text-purple-900 dark:text-purple-100">Data Link Layer</span>
            <span className="text-sm text-purple-700 dark:text-purple-300">Ethernet, WiFi</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ServicesSection: React.FC = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
      Internet Services
    </h2>
    
    <div className="prose dark:prose-invert max-w-none">
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        The Internet provides various services that enable communication, information sharing, and resource access. 
        Here are the key services that form the backbone of modern Internet usage.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
            Electronic Mail (Email)
          </h3>
          <div className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
            <p><strong>Purpose:</strong> Send and receive messages electronically</p>
            <p><strong>Protocols:</strong> SMTP (sending), POP3/IMAP (receiving)</p>
            <p><strong>Components:</strong> Mail client, mail server, email address</p>
            <p><strong>Features:</strong> Attachments, CC/BCC, folders, spam filtering</p>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-2">
            Internet Relay Chat (IRC)
          </h3>
          <div className="space-y-2 text-sm text-green-800 dark:text-green-200">
            <p><strong>Purpose:</strong> Real-time text-based communication</p>
            <p><strong>Structure:</strong> Channels, servers, networks</p>
            <p><strong>Features:</strong> Group chat, private messaging, file sharing</p>
            <p><strong>Protocol:</strong> IRC protocol on port 6667</p>
          </div>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-2">
            Instant Messaging (IM)
          </h3>
          <div className="space-y-2 text-sm text-purple-800 dark:text-purple-200">
            <p><strong>Purpose:</strong> Real-time one-on-one or group communication</p>
            <p><strong>Examples:</strong> WhatsApp, Telegram, Discord, Slack</p>
            <p><strong>Features:</strong> Presence status, emoticons, file sharing</p>
            <p><strong>Advantages:</strong> Instant delivery, multimedia support</p>
          </div>
        </div>

        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-2">
            Search Engines
          </h3>
          <div className="space-y-2 text-sm text-red-800 dark:text-red-200">
            <p><strong>Purpose:</strong> Find information on the web</p>
            <p><strong>Examples:</strong> Google, Bing, Yahoo, DuckDuckGo</p>
            <p><strong>Process:</strong> Crawling, indexing, ranking, retrieval</p>
            <p><strong>Features:</strong> Boolean search, filters, advanced queries</p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">URL (Uniform Resource Locator)</h3>
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-6">
        <p className="text-yellow-800 dark:text-yellow-200 mb-3">
          A URL is a reference to a web resource that specifies its location on a computer network.
        </p>
        
        <CodeExample
          title="URL Structure Breakdown"
          code={`https://www.example.com:8080/path/to/resource?param1=value1&param2=value2#section

Components:
┌─────────────────────────────────────────────────────────────────────────────┐
│ https://www.example.com:8080/path/to/resource?param1=value1&param2=value2#section │
│ ─────  ─────────────── ──── ──────────────── ─────────────────────── ─────── │
│   │           │         │         │                    │                │     │
│ Scheme     Domain     Port      Path               Query String      Fragment │
└─────────────────────────────────────────────────────────────────────────────┘

Scheme: https:// (protocol)
Domain: www.example.com (hostname)
Port: :8080 (optional, default 80 for HTTP, 443 for HTTPS)
Path: /path/to/resource (resource location)
Query: ?param1=value1&param2=value2 (parameters)
Fragment: #section (anchor within page)`}
          language="text"
        />
      </div>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">DNS (Domain Name System)</h3>
      <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-4 mb-6">
        <p className="text-teal-800 dark:text-teal-200 mb-3">
          DNS translates human-readable domain names into IP addresses that computers use to communicate.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium text-teal-900 dark:text-teal-100 mb-2">DNS Components:</h4>
            <ul className="list-disc list-inside text-sm text-teal-800 dark:text-teal-200 space-y-1">
              <li>Root servers (.) - Top level</li>
              <li>TLD servers (.com, .org, .net)</li>
              <li>Authoritative servers</li>
              <li>Recursive resolvers</li>
              <li>Local DNS cache</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-teal-900 dark:text-teal-100 mb-2">DNS Record Types:</h4>
            <ul className="list-disc list-inside text-sm text-teal-800 dark:text-teal-200 space-y-1">
              <li>A - Maps domain to IPv4 address</li>
              <li>AAAA - Maps domain to IPv6 address</li>
              <li>CNAME - Canonical name alias</li>
              <li>MX - Mail exchange server</li>
              <li>NS - Name server records</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-orange-900 dark:text-orange-100 mb-2">
            Proxy Servers
          </h3>
          <div className="space-y-2 text-sm text-orange-800 dark:text-orange-200">
            <p><strong>Purpose:</strong> Intermediary between client and server</p>
            <p><strong>Functions:</strong> Caching, security, anonymity, filtering</p>
            <p><strong>Types:</strong> Forward proxy, reverse proxy, transparent proxy</p>
            <p><strong>Benefits:</strong> Improved performance, content filtering, security</p>
          </div>
        </div>

        <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-indigo-900 dark:text-indigo-100 mb-2">
            Internet Service Provider (ISP)
          </h3>
          <div className="space-y-2 text-sm text-indigo-800 dark:text-indigo-200">
            <p><strong>Purpose:</strong> Provides Internet access to customers</p>
            <p><strong>Services:</strong> Internet connection, email, web hosting</p>
            <p><strong>Types:</strong> Dial-up, broadband, fiber, satellite ISPs</p>
            <p><strong>Examples:</strong> Comcast, Verizon, AT&T, local providers</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const BrowsersSection: React.FC = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
      Web Browsers
    </h2>
    
    <div className="prose dark:prose-invert max-w-none">
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        Web browsers are software applications that retrieve, present, and traverse information resources on the World Wide Web. 
        They serve as the primary interface between users and web content.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">Google Chrome</h3>
          <div className="space-y-1 text-sm text-blue-800 dark:text-blue-200">
            <p><strong>Developer:</strong> Google</p>
            <p><strong>Engine:</strong> Blink (WebKit fork)</p>
            <p><strong>Market Share:</strong> ~65% (2024)</p>
            <p><strong>Key Features:</strong> Speed, security, extensions</p>
          </div>
        </div>

        <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-orange-900 dark:text-orange-100 mb-2">Mozilla Firefox</h3>
          <div className="space-y-1 text-sm text-orange-800 dark:text-orange-200">
            <p><strong>Developer:</strong> Mozilla Foundation</p>
            <p><strong>Engine:</strong> Gecko</p>
            <p><strong>Market Share:</strong> ~10% (2024)</p>
            <p><strong>Key Features:</strong> Privacy, customization, open-source</p>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Safari</h3>
          <div className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
            <p><strong>Developer:</strong> Apple</p>
            <p><strong>Engine:</strong> WebKit</p>
            <p><strong>Market Share:</strong> ~15% (2024)</p>
            <p><strong>Key Features:</strong> Energy efficiency, macOS/iOS integration</p>
          </div>
        </div>

        <div className="bg-cyan-50 dark:bg-cyan-900/20 border border-cyan-200 dark:border-cyan-800 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-cyan-900 dark:text-cyan-100 mb-2">Microsoft Edge</h3>
          <div className="space-y-1 text-sm text-cyan-800 dark:text-cyan-200">
            <p><strong>Developer:</strong> Microsoft</p>
            <p><strong>Engine:</strong> Blink (Chromium-based)</p>
            <p><strong>Market Share:</strong> ~5% (2024)</p>
            <p><strong>Key Features:</strong> Windows integration, security</p>
          </div>
        </div>

        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-2">Opera</h3>
          <div className="space-y-1 text-sm text-red-800 dark:text-red-200">
            <p><strong>Developer:</strong> Opera Software</p>
            <p><strong>Engine:</strong> Blink</p>
            <p><strong>Market Share:</strong> ~3% (2024)</p>
            <p><strong>Key Features:</strong> Built-in VPN, workspaces, sidebar</p>
          </div>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-2">Internet Explorer</h3>
          <div className="space-y-1 text-sm text-purple-800 dark:text-purple-200">
            <p><strong>Developer:</strong> Microsoft</p>
            <p><strong>Engine:</strong> Trident (Legacy)</p>
            <p><strong>Status:</strong> Discontinued (2022)</p>
            <p><strong>Note:</strong> Replaced by Microsoft Edge</p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Browser Components & Functions</h3>
      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium text-green-900 dark:text-green-100 mb-2">Core Components:</h4>
            <ul className="list-disc list-inside text-sm text-green-800 dark:text-green-200 space-y-1">
              <li>Rendering Engine (HTML/CSS parser)</li>
              <li>JavaScript Engine (V8, SpiderMonkey, etc.)</li>
              <li>Networking Component (HTTP requests)</li>
              <li>User Interface (address bar, tabs, menus)</li>
              <li>Data Persistence (cookies, localStorage)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-green-900 dark:text-green-100 mb-2">Key Functions:</h4>
            <ul className="list-disc list-inside text-sm text-green-800 dark:text-green-200 space-y-1">
              <li>Parse and display HTML/CSS/JavaScript</li>
              <li>Handle user interactions and events</li>
              <li>Manage browser history and bookmarks</li>
              <li>Implement security policies (CORS, CSP)</li>
              <li>Support extensions and plugins</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Specialized Browsers</h3>
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
          <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">Lynx - Text-Based Browser</h4>
          <ul className="list-disc list-inside text-sm text-yellow-800 dark:text-yellow-200 space-y-1">
            <li>Command-line interface only</li>
            <li>No images, videos, or complex formatting</li>
            <li>Excellent for accessibility testing</li>
            <li>Very fast and lightweight</li>
            <li>Used on servers and embedded systems</li>
          </ul>
        </div>
        
        <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-4">
          <h4 className="font-semibold text-teal-900 dark:text-teal-100 mb-2">Konqueror - KDE Browser</h4>
          <ul className="list-disc list-inside text-sm text-teal-800 dark:text-teal-200 space-y-1">
            <li>Linux KDE desktop environment</li>
            <li>File manager and web browser</li>
            <li>Uses KHTML engine (WebKit predecessor)</li>
            <li>Integrated with KDE applications</li>
            <li>Supports tabbed browsing</li>
          </ul>
        </div>
      </div>

      <CodeExample
        title="Browser User Agent Strings"
        code={`// Chrome User Agent
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 
(KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36

// Firefox User Agent  
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:121.0) 
Gecko/20100101 Firefox/121.0

// Safari User Agent
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 
(KHTML, like Gecko) Version/17.1 Safari/605.1.15

// Edge User Agent
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 
(KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0

// Mobile Safari User Agent
Mozilla/5.0 (iPhone; CPU iPhone OS 17_1_1 like Mac OS X) 
AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.1 Mobile/15E148 Safari/604.1`}
        language="text"
      />

      <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-4">
        <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">Browser Evolution Timeline:</h4>
        <div className="space-y-2 text-sm text-indigo-800 dark:text-indigo-200">
          <div className="flex justify-between"><span><strong>1990:</strong> WorldWideWeb (first browser)</span></div>
          <div className="flex justify-between"><span><strong>1993:</strong> Mosaic (graphical browser)</span></div>
          <div className="flex justify-between"><span><strong>1994:</strong> Netscape Navigator</span></div>
          <div className="flex justify-between"><span><strong>1995:</strong> Internet Explorer</span></div>
          <div className="flex justify-between"><span><strong>2003:</strong> Safari</span></div>
          <div className="flex justify-between"><span><strong>2004:</strong> Firefox</span></div>
          <div className="flex justify-between"><span><strong>2008:</strong> Google Chrome</span></div>
          <div className="flex justify-between"><span><strong>2015:</strong> Microsoft Edge</span></div>
        </div>
      </div>
    </div>
  </div>
);

const ServersSection: React.FC = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
      Web Servers
    </h2>
    
    <div className="prose dark:prose-invert max-w-none">
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        Web servers are software applications or hardware devices that serve web content to clients (browsers) 
        over the Internet using HTTP/HTTPS protocols. They process requests and deliver web pages, files, and other resources.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-2">Apache HTTP Server</h3>
          <div className="space-y-1 text-sm text-red-800 dark:text-red-200">
            <p><strong>Developer:</strong> Apache Software Foundation</p>
            <p><strong>Market Share:</strong> ~30% (2024)</p>
            <p><strong>Type:</strong> Open-source, cross-platform</p>
            <p><strong>Key Features:</strong> Modules, .htaccess, virtual hosts</p>
            <p><strong>Configuration:</strong> httpd.conf, .htaccess files</p>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-2">Nginx Web Server</h3>
          <div className="space-y-1 text-sm text-green-800 dark:text-green-200">
            <p><strong>Developer:</strong> Igor Sysoev (now F5)</p>
            <p><strong>Market Share:</strong> ~35% (2024)</p>
            <p><strong>Type:</strong> Open-source, high-performance</p>
            <p><strong>Key Features:</strong> Reverse proxy, load balancing</p>
            <p><strong>Configuration:</strong> nginx.conf</p>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">Microsoft IIS</h3>
          <div className="space-y-1 text-sm text-blue-800 dark:text-blue-200">
            <p><strong>Developer:</strong> Microsoft</p>
            <p><strong>Market Share:</strong> ~8% (2024)</p>
            <p><strong>Platform:</strong> Windows Server</p>
            <p><strong>Key Features:</strong> ASP.NET integration, GUI management</p>
            <p><strong>Configuration:</strong> IIS Manager, web.config</p>
          </div>
        </div>

        <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-orange-900 dark:text-orange-100 mb-2">Apache Tomcat</h3>
          <div className="space-y-1 text-sm text-orange-800 dark:text-orange-200">
            <p><strong>Type:</strong> Java servlet container</p>
            <p><strong>Use Case:</strong> Java web applications</p>
            <p><strong>Features:</strong> JSP support, servlet API</p>
            <p><strong>Configuration:</strong> XML-based configuration</p>
          </div>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-2">Lighttpd</h3>
          <div className="space-y-1 text-sm text-purple-800 dark:text-purple-200">
            <p><strong>Type:</strong> Lightweight web server</p>
            <p><strong>Features:</strong> Low memory usage, FastCGI</p>
            <p><strong>Use Case:</strong> High-traffic sites, embedded systems</p>
            <p><strong>Configuration:</strong> lighttpd.conf</p>
          </div>
        </div>

        <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-teal-900 dark:text-teal-100 mb-2">Node.js (Express)</h3>
          <div className="space-y-1 text-sm text-teal-800 dark:text-teal-200">
            <p><strong>Type:</strong> JavaScript runtime server</p>
            <p><strong>Features:</strong> Event-driven, non-blocking I/O</p>
            <p><strong>Use Case:</strong> Real-time applications, APIs</p>
            <p><strong>Framework:</strong> Express.js, Koa.js</p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Web Server Functions</h3>
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium text-yellow-900 dark:text-yellow-100 mb-2">Core Functions:</h4>
            <ul className="list-disc list-inside text-sm text-yellow-800 dark:text-yellow-200 space-y-1">
              <li>Accept and process HTTP requests</li>
              <li>Serve static files (HTML, CSS, JS, images)</li>
              <li>Execute server-side scripts (PHP, Python, etc.)</li>
              <li>Manage multiple concurrent connections</li>
              <li>Log requests and errors</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-yellow-900 dark:text-yellow-100 mb-2">Advanced Features:</h4>
            <ul className="list-disc list-inside text-sm text-yellow-800 dark:text-yellow-200 space-y-1">
              <li>Virtual hosting (multiple sites)</li>
              <li>SSL/TLS encryption support</li>
              <li>Compression (gzip, brotli)</li>
              <li>Caching mechanisms</li>
              <li>Load balancing and clustering</li>
            </ul>
          </div>
        </div>
      </div>

      <CodeExample
        title="Basic Web Server Configurations"
        code={`# Apache Virtual Host Example
<VirtualHost *:80>
    ServerName www.example.com
    DocumentRoot /var/www/html/example
    ErrorLog logs/example_error.log
    CustomLog logs/example_access.log combined
</VirtualHost>

# Nginx Server Block Example
server {
    listen 80;
    server_name www.example.com;
    root /var/www/html/example;
    
    location / {
        try_files $uri $uri/ =404;
    }
    
    location ~ \.php$ {
        fastcgi_pass 127.0.0.1:9000;
        fastcgi_index index.php;
        include fastcgi_params;
    }
}

# Node.js Express Server Example
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(\`Server running at http://localhost:\${port}\`);
});`}
        language="nginx"
      />

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Performance Comparison</h3>
      <div className="overflow-x-auto">
        <table className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">Server</th>
              <th className="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">Memory Usage</th>
              <th className="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">Concurrent Connections</th>
              <th className="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">Best Use Case</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            <tr>
              <td className="px-4 py-2 font-medium text-gray-900 dark:text-white">Apache</td>
              <td className="px-4 py-2 text-gray-700 dark:text-gray-300">Medium-High</td>
              <td className="px-4 py-2 text-gray-700 dark:text-gray-300">1,000-5,000</td>
              <td className="px-4 py-2 text-gray-700 dark:text-gray-300">Dynamic content, .htaccess</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-medium text-gray-900 dark:text-white">Nginx</td>
              <td className="px-4 py-2 text-gray-700 dark:text-gray-300">Low-Medium</td>
              <td className="px-4 py-2 text-gray-700 dark:text-gray-300">10,000+</td>
              <td className="px-4 py-2 text-gray-700 dark:text-gray-300">Static files, reverse proxy</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-medium text-gray-900 dark:text-white">IIS</td>
              <td className="px-4 py-2 text-gray-700 dark:text-gray-300">Medium</td>
              <td className="px-4 py-2 text-gray-700 dark:text-gray-300">2,000-8,000</td>
              <td className="px-4 py-2 text-gray-700 dark:text-gray-300">Windows, ASP.NET apps</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-medium text-gray-900 dark:text-white">Lighttpd</td>
              <td className="px-4 py-2 text-gray-700 dark:text-gray-300">Very Low</td>
              <td className="px-4 py-2 text-gray-700 dark:text-gray-300">5,000-15,000</td>
              <td className="px-4 py-2 text-gray-700 dark:text-gray-300">Low-resource environments</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const HostingSection: React.FC = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
      Web Hosting & DNS
    </h2>
    
    <div className="prose dark:prose-invert max-w-none">
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        Web hosting is a service that allows organizations and individuals to post websites on the Internet. 
        DNS (Domain Name System) is the system that translates human-readable domain names into IP addresses.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Types of Web Hosting</h3>
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">Shared Hosting</h4>
          <div className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
            <p><strong>Description:</strong> Multiple websites share server resources</p>
            <p><strong>Cost:</strong> $3-15/month</p>
            <p><strong>Pros:</strong> Affordable, easy to use, maintenance included</p>
            <p><strong>Cons:</strong> Limited resources, security concerns</p>
            <p><strong>Best for:</strong> Small websites, blogs, portfolios</p>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
          <h4 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-2">VPS Hosting</h4>
          <div className="space-y-2 text-sm text-green-800 dark:text-green-200">
            <p><strong>Description:</strong> Virtual private server with dedicated resources</p>
            <p><strong>Cost:</strong> $20-100/month</p>
            <p><strong>Pros:</strong> Better performance, more control, scalable</p>
            <p><strong>Cons:</strong> Requires technical knowledge, more expensive</p>
            <p><strong>Best for:</strong> Growing websites, e-commerce</p>
          </div>
        </div>

        <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
          <h4 className="text-lg font-semibold text-orange-900 dark:text-orange-100 mb-2">Dedicated Hosting</h4>
          <div className="space-y-2 text-sm text-orange-800 dark:text-orange-200">
            <p><strong>Description:</strong> Entire physical server dedicated to one user</p>
            <p><strong>Cost:</strong> $100-500/month</p>
            <p><strong>Pros:</strong> Maximum performance, full control, security</p>
            <p><strong>Cons:</strong> Expensive, requires expertise</p>
            <p><strong>Best for:</strong> Large websites, enterprise applications</p>
          </div>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
          <h4 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-2">Cloud Hosting</h4>
          <div className="space-y-2 text-sm text-purple-800 dark:text-purple-200">
            <p><strong>Description:</strong> Resources distributed across multiple servers</p>
            <p><strong>Cost:</strong> Pay-as-you-use model</p>
            <p><strong>Pros:</strong> Scalable, reliable, cost-effective</p>
            <p><strong>Cons:</strong> Complex pricing, learning curve</p>
            <p><strong>Best for:</strong> Dynamic traffic, modern applications</p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">DNS System Deep Dive</h3>
      <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-4 mb-6">
        <h4 className="font-semibold text-teal-900 dark:text-teal-100 mb-3">DNS Resolution Process:</h4>
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <div className="bg-teal-200 dark:bg-teal-700 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-bold text-teal-800 dark:text-teal-200">1</span>
            </div>
            <div className="text-sm text-teal-800 dark:text-teal-200">
              <strong>User Query:</strong> User types "www.example.com" in browser
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="bg-teal-200 dark:bg-teal-700 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-bold text-teal-800 dark:text-teal-200">2</span>
            </div>
            <div className="text-sm text-teal-800 dark:text-teal-200">
              <strong>Local Cache Check:</strong> Browser checks local DNS cache
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="bg-teal-200 dark:bg-teal-700 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-bold text-teal-800 dark:text-teal-200">3</span>
            </div>
            <div className="text-sm text-teal-800 dark:text-teal-200">
              <strong>Recursive Query:</strong> Query sent to recursive DNS resolver (ISP)
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="bg-teal-200 dark:bg-teal-700 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-bold text-teal-800 dark:text-teal-200">4</span>
            </div>
            <div className="text-sm text-teal-800 dark:text-teal-200">
              <strong>Root Servers:</strong> Query forwarded to root DNS servers
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="bg-teal-200 dark:bg-teal-700 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-bold text-teal-800 dark:text-teal-200">5</span>
            </div>
            <div className="text-sm text-teal-800 dark:text-teal-200">
              <strong>TLD Servers:</strong> Root server directs to .com TLD servers
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="bg-teal-200 dark:bg-teal-700 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-bold text-teal-800 dark:text-teal-200">6</span>
            </div>
            <div className="text-sm text-teal-800 dark:text-teal-200">
              <strong>Authoritative Server:</strong> TLD server directs to authoritative server
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="bg-teal-200 dark:bg-teal-700 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-bold text-teal-800 dark:text-teal-200">7</span>
            </div>
            <div className="text-sm text-teal-800 dark:text-teal-200">
              <strong>IP Address Returned:</strong> Final IP address sent back to browser
            </div>
          </div>
        </div>
      </div>

      <CodeExample
        title="DNS Record Types and Examples"
        code={`; DNS Zone File Example for example.com
$TTL 3600
@       IN  SOA ns1.example.com. admin.example.com. (
            2024011501  ; Serial number
            3600        ; Refresh
            1800        ; Retry
            604800      ; Expire
            86400       ; Minimum TTL
)

; Name Server Records
@       IN  NS  ns1.example.com.
@       IN  NS  ns2.example.com.

; A Records (IPv4 addresses)
@       IN  A   192.0.2.1
www     IN  A   192.0.2.1
mail    IN  A   192.0.2.2
ftp     IN  A   192.0.2.3

; AAAA Records (IPv6 addresses)
@       IN  AAAA    2001:db8::1
www     IN  AAAA    2001:db8::1

; CNAME Records (Aliases)
blog    IN  CNAME   www.example.com.
shop    IN  CNAME   www.example.com.

; MX Records (Mail Exchange)
@       IN  MX  10  mail.example.com.
@       IN  MX  20  mail2.example.com.

; TXT Records (Text/SPF/DKIM)
@       IN  TXT "v=spf1 include:_spf.example.com ~all"
_dmarc  IN  TXT "v=DMARC1; p=quarantine; rua=mailto:dmarc@example.com"

; PTR Record (Reverse DNS)
1.2.0.192.in-addr.arpa.  IN  PTR  www.example.com.`}
        language="dns"
      />

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Web Pages Types</h3>
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
          <h4 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-2">Static Web Pages</h4>
          <div className="space-y-2 text-sm text-yellow-800 dark:text-yellow-200">
            <p><strong>Characteristics:</strong> Fixed content, same for all users</p>
            <p><strong>Technologies:</strong> HTML, CSS, JavaScript (client-side)</p>
            <p><strong>Examples:</strong> Company brochures, portfolios</p>
            <p><strong>Advantages:</strong> Fast loading, secure, SEO-friendly</p>
            <p><strong>Disadvantages:</strong> No personalization, manual updates</p>
          </div>
        </div>

        <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-4">
          <h4 className="text-lg font-semibold text-indigo-900 dark:text-indigo-100 mb-2">Dynamic Web Pages</h4>
          <div className="space-y-2 text-sm text-indigo-800 dark:text-indigo-200">
            <p><strong>Characteristics:</strong> Content changes based on user/data</p>
            <p><strong>Technologies:</strong> PHP, Python, JSP, ASP.NET</p>
            <p><strong>Examples:</strong> Social media, e-commerce sites</p>
            <p><strong>Advantages:</strong> Personalized content, database integration</p>
            <p><strong>Disadvantages:</strong> Slower, complex, security concerns</p>
          </div>
        </div>

        <div className="bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800 rounded-lg p-4">
          <h4 className="text-lg font-semibold text-rose-900 dark:text-rose-100 mb-2">Active Web Pages</h4>
          <div className="space-y-2 text-sm text-rose-800 dark:text-rose-200">
            <p><strong>Characteristics:</strong> Interactive client-side processing</p>
            <p><strong>Technologies:</strong> JavaScript, AJAX, WebSockets</p>
            <p><strong>Examples:</strong> Online games, real-time chat</p>
            <p><strong>Advantages:</strong> Rich interactivity, responsive UI</p>
            <p><strong>Disadvantages:</strong> Browser compatibility, security</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Popular Web Hosting Providers:</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h5 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Shared Hosting:</h5>
            <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <li>Bluehost - WordPress recommended</li>
              <li>SiteGround - Performance focused</li>
              <li>HostGator - Budget-friendly</li>
              <li>GoDaddy - Domain + hosting bundles</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Cloud/VPS Hosting:</h5>
            <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <li>AWS - Amazon Web Services</li>
              <li>Google Cloud Platform</li>
              <li>Microsoft Azure</li>
              <li>DigitalOcean - Developer-friendly</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Unit1Page;