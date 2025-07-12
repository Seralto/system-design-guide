import React from 'react';
import {
  BookOpen,
  HelpCircle,
  List,
  Server,
  Database,
  Network,
  ExternalLink,
  FileText,
  Clipboard,
  BarChart2,
  AlertTriangle,
  RefreshCw,
  CheckCircle
} from 'lucide-react';

const HomePage: React.FC = () => {
  
  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="mb-12 p-8">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 mb-6 text-center">
          The Fundamentals of System Design
        </h1>
        <p className="text-center text-gray-700 dark:text-gray-300 text-lg mb-8">
          A comprehensive guide to building scalable, reliable, and maintainable systems
        </p>

        {/* What is System Design Section */}
        <section className="mb-10 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4 flex items-center border-b pb-2 border-gray-200 dark:border-gray-700">
            <HelpCircle className="mr-2 text-blue-500 dark:text-blue-400" size={24} />
            What is System Design?
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="mb-4 text-gray-800 dark:text-gray-200">
              <strong className="text-gray-900 dark:text-white">System design</strong> is the process of defining the architecture, components, data flow, and interactions of a software system to meet specified goals. It involves making high-level decisions that balance trade-offs across <strong className="text-gray-900 dark:text-white">performance</strong>, <strong className="text-gray-900 dark:text-white">scalability</strong>, <strong className="text-gray-900 dark:text-white">reliability</strong>, <strong className="text-gray-900 dark:text-white">maintainability</strong>, <strong className="text-gray-900 dark:text-white">cost</strong>, and <strong className="text-gray-900 dark:text-white">complexity</strong>.
            </p>
            <p className="mb-4 text-gray-800 dark:text-gray-200">
              At its core, system design is about solving real-world problems through structured thinking, clear abstractions, and technical insight. Whether you're building a <strong className="text-gray-900 dark:text-white">social media platform</strong>, an <strong className="text-gray-900 dark:text-white">e-commerce website</strong>, or a <strong className="text-gray-900 dark:text-white">real-time multiplayer game</strong>, system design ensures that your system can grow, adapt, and perform under load.
            </p>
            <p className="mb-4 text-gray-800 dark:text-gray-200">
              Unlike implementation, which focuses on isolated features, system design looks at the <strong className="text-gray-900 dark:text-white">"big picture"</strong>, how different parts of a system fit and work together. It's a collaborative and creative process that often starts long before the first line of code is written.
            </p>
          </div>
        </section>

        {/* 10 Key Questions Section */}
        <section className="mb-10 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-4 flex items-center border-b pb-2 border-gray-200 dark:border-gray-700">
            <List className="mr-2 text-green-500 dark:text-green-400" size={24} />
            System Design: 10 Key Questions
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="mb-8 text-gray-800 dark:text-gray-200">
              A well-designed system must answer these ten fundamental questions. These questions help guide architectural decisions and prepare the system for scale, change, and resilience.
            </p>

            <div className="space-y-6">
              {/* Question 1 */}
              <div className="relative bg-blue-50 dark:bg-blue-900/10 p-6 rounded-lg border border-blue-100 dark:border-blue-800 shadow-sm">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shadow-md">1</div>
                <div className="ml-4">
                  <strong className="text-gray-900 dark:text-white text-lg">Scalability</strong>
                  <p className="italic text-gray-700 dark:text-gray-300 mt-3">How will the system handle increasing numbers of users, requests, and data volume efficiently?</p>
                </div>
              </div>
              
              {/* Question 2 */}
              <div className="relative bg-blue-50 dark:bg-blue-900/10 p-6 rounded-lg border border-blue-100 dark:border-blue-800 shadow-sm">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shadow-md">2</div>
                <div className="ml-4">
                  <strong className="text-gray-900 dark:text-white text-lg">Latency and Performance</strong>
                  <p className="italic text-gray-700 dark:text-gray-300 mt-3">How can we ensure low response times and consistent performance under load?</p>
                </div>
              </div>
              
              {/* Question 3 */}
              <div className="relative bg-blue-50 dark:bg-blue-900/10 p-6 rounded-lg border border-blue-100 dark:border-blue-800 shadow-sm">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shadow-md">3</div>
                <div className="ml-4">
                  <strong className="text-gray-900 dark:text-white text-lg">Fault Tolerance and Reliability</strong>
                  <p className="italic text-gray-700 dark:text-gray-300 mt-3">What happens when a component fails? Can the system detect, recover, and remain available?</p>
                </div>
              </div>
              
              {/* Question 4 */}
              <div className="relative bg-blue-50 dark:bg-blue-900/10 p-6 rounded-lg border border-blue-100 dark:border-blue-800 shadow-sm">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shadow-md">4</div>
                <div className="ml-4">
                  <strong className="text-gray-900 dark:text-white text-lg">Data Management</strong>
                  <p className="italic text-gray-700 dark:text-gray-300 mt-3">How should data be stored, retrieved, indexed, and cached to ensure integrity and performance?</p>
                </div>
              </div>
              
              {/* Question 5 */}
              <div className="relative bg-blue-50 dark:bg-blue-900/10 p-6 rounded-lg border border-blue-100 dark:border-blue-800 shadow-sm">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shadow-md">5</div>
                <div className="ml-4">
                  <strong className="text-gray-900 dark:text-white text-lg">Communication</strong>
                  <p className="italic text-gray-700 dark:text-gray-300 mt-3">How do system components interact, synchronously or asynchronously, and through what protocols (e.g., HTTP, gRPC, message queues)?</p>
                </div>
              </div>
              
              {/* Question 6 */}
              <div className="relative bg-blue-50 dark:bg-blue-900/10 p-6 rounded-lg border border-blue-100 dark:border-blue-800 shadow-sm">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shadow-md">6</div>
                <div className="ml-4">
                  <strong className="text-gray-900 dark:text-white text-lg">Security</strong>
                  <p className="italic text-gray-700 dark:text-gray-300 mt-3">How do we protect against unauthorized access, data leaks, and attacks like DDoS or injection?</p>
                </div>
              </div>
              
              {/* Question 7 */}
              <div className="relative bg-blue-50 dark:bg-blue-900/10 p-6 rounded-lg border border-blue-100 dark:border-blue-800 shadow-sm">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shadow-md">7</div>
                <div className="ml-4">
                  <strong className="text-gray-900 dark:text-white text-lg">Observability and Monitoring</strong>
                  <p className="italic text-gray-700 dark:text-gray-300 mt-3">How do we gain visibility into the system's health, errors, and usage patterns?</p>
                </div>
              </div>
              
              {/* Question 8 */}
              <div className="relative bg-blue-50 dark:bg-blue-900/10 p-6 rounded-lg border border-blue-100 dark:border-blue-800 shadow-sm">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shadow-md">8</div>
                <div className="ml-4">
                  <strong className="text-gray-900 dark:text-white text-lg">Compliance and Privacy</strong>
                  <p className="italic text-gray-700 dark:text-gray-300 mt-3">Are we meeting regulatory requirements (e.g., GDPR, HIPAA)? How is sensitive data secured and handled?</p>
                </div>
              </div>
              
              {/* Question 9 */}
              <div className="relative bg-blue-50 dark:bg-blue-900/10 p-6 rounded-lg border border-blue-100 dark:border-blue-800 shadow-sm">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shadow-md">9</div>
                <div className="ml-4">
                  <strong className="text-gray-900 dark:text-white text-lg">Maintainability and Extensibility</strong>
                  <p className="italic text-gray-700 dark:text-gray-300 mt-3">Can the system be easily debugged, monitored, updated, and expanded as requirements evolve?</p>
                </div>
              </div>
              
              {/* Question 10 */}
              <div className="relative bg-blue-50 dark:bg-blue-900/10 p-6 rounded-lg border border-blue-100 dark:border-blue-800 shadow-sm">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shadow-md">10</div>
                <div className="ml-4">
                  <strong className="text-gray-900 dark:text-white text-lg">Cost Efficiency</strong>
                  <p className="italic text-gray-700 dark:text-gray-300 mt-3">Are we balancing performance and reliability with infrastructure and operational costs?</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Components Section */}
        <section className="mb-10 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-4 flex items-center border-b pb-2 border-gray-200 dark:border-gray-700">
            <Server className="mr-2 text-purple-500 dark:text-purple-400" size={24} />
            Key Components of a Software System
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700 pb-2">Understanding the Building Blocks</h3>
            <p className="mb-6 text-gray-800 dark:text-gray-200">A typical software system consists of several foundational components, each contributing to the system's overall capability and resilience:</p>

            {/* Client/Frontend */}
            <div className="mb-6 border-l-4 border-blue-500 pl-4 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-r-lg">
              <h3 className="text-xl font-semibold mb-2 flex items-center text-gray-800 dark:text-gray-200">
                <BookOpen className="mr-2" size={20} />
                1. Client / Frontend
              </h3>
              <p className="text-gray-800 dark:text-gray-200">The <strong className="text-gray-900 dark:text-white">client</strong> is the interface through which users interact with the system (i.e. web browsers and mobile apps).</p>
              <ul className="mt-2 space-y-1">
                <li className="text-gray-800 dark:text-gray-200 pb-3">
                  <strong className="text-gray-900 dark:text-white">Responsibilities</strong>:
                  <ul>
                    <li className="text-gray-800 dark:text-gray-200">• Render the user interface (UI)</li>
                    <li className="text-gray-800 dark:text-gray-200">• Capture and validate user input</li>
                    <li className="text-gray-800 dark:text-gray-200">• Communicate with backend APIs (e.g., REST, GraphQL)</li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Server/Backend */}
            <div className="mb-6 border-l-4 border-green-500 pl-4 bg-green-50 dark:bg-green-900/20 p-4 rounded-r-lg">
              <h3 className="text-xl font-semibold mb-2 flex items-center text-gray-800 dark:text-gray-200">
                <Server className="mr-2" size={20} />
                2. Server / Backend
              </h3>
              <p className="text-gray-800 dark:text-gray-200">The <strong className="text-gray-900 dark:text-white">backend</strong> powers the business logic and orchestrates the system's behavior.</p>
              <ul className="mt-2 space-y-1">
                <li className="text-gray-800 dark:text-gray-200">
                  <strong className="text-gray-900 dark:text-white">Responsibilities</strong>:
                  <ul>
                    <li className="text-gray-800 dark:text-gray-200">• Process user requests</li>
                    <li className="text-gray-800 dark:text-gray-200">• Handle authentication and authorization</li>
                    <li className="text-gray-800 dark:text-gray-200">• Execute workflows and background tasks</li>
                    <li className="text-gray-800 dark:text-gray-200">• Communicate with databases and services</li>
                  </ul>
                </li>
                <li className="text-gray-800 dark:text-gray-200">
                  <strong className="text-gray-900 dark:text-white">Common Patterns</strong>:
                  <ul>
                    <li className="text-gray-800 dark:text-gray-200">• Monolith</li>
                    <li className="text-gray-800 dark:text-gray-200">• Microservices</li>
                    <li className="text-gray-800 dark:text-gray-200">• Serverless</li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Database/Storage */}
            <div className="mb-6 border-l-4 border-purple-500 pl-4 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-r-lg">
              <h3 className="text-xl font-semibold mb-2 flex items-center text-gray-800 dark:text-gray-200">
                <Database className="mr-2" size={20} />
                3. Database / Storage
              </h3>
              <p className="text-gray-800 dark:text-gray-200">This component is responsible for <strong className="text-gray-900 dark:text-white">persisting and managing data.</strong></p>
              <p className="text-gray-800 dark:text-gray-200">Here are some common types:</p>
              <ul className="mt-2 space-y-1">
                <li className="text-gray-800 dark:text-gray-200">
                  <ul>
                    <li className="text-gray-800 dark:text-gray-200 pb-2">
                      <strong className="text-gray-900 dark:text-white">SQL</strong>:
                      <ul>
                        <li className="text-gray-800 dark:text-gray-200">• PostgreSQL/MySQL (structured data, transactions)</li>
                      </ul>
                    </li>
                    <li className="text-gray-800 dark:text-gray-200 pb-2">
                      <strong className="text-gray-900 dark:text-white">NoSQL</strong>:
                      <ul>
                        <li className="text-gray-800 dark:text-gray-200">• MongoDB (flexible schema)</li>
                        <li className="text-gray-800 dark:text-gray-200">• Cassandra (high throughput)</li>
                      </ul>
                    </li>
                    <li className="text-gray-800 dark:text-gray-200 pb-2">
                      <strong className="text-gray-900 dark:text-white">In-memory</strong>:
                      <ul>
                        <li className="text-gray-800 dark:text-gray-200">• Redis/Memcached (fast caching)</li>
                      </ul>
                    </li>
                    <li className="text-gray-800 dark:text-gray-200 pb-2">
                      <strong className="text-gray-900 dark:text-white">Object Storage</strong>:
                      <ul>
                        <li className="text-gray-800 dark:text-gray-200">• Amazon S3/GCP Storage (files and media blobs as images, videos, etc.)</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Networking & Infrastructure */}
            <div className="mb-6 border-l-4 border-orange-500 pl-4 bg-orange-50 dark:bg-orange-900/20 p-4 rounded-r-lg">
              <h3 className="text-xl font-semibold mb-2 flex items-center text-gray-800 dark:text-gray-200">
                <Network className="mr-2" size={20} />
                4. Networking & Infrastructure Layer
              </h3>
              <p className="text-gray-800 dark:text-gray-200">This layer ensures <strong className="text-gray-900 dark:text-white">secure and efficient communication</strong> across the system.</p>
              <ul className="mt-2 space-y-1">
                <li className="text-gray-800 dark:text-gray-200">
                  <ul>
                    <li className="text-gray-800 dark:text-gray-200 pb-2">
                      <strong className="text-gray-900 dark:text-white">Load balancers</strong>: Distribute traffic
                      <ul>
                        <li className="text-gray-800 dark:text-gray-200">• HAProxy</li>
                        <li className="text-gray-800 dark:text-gray-200">• AWS ALB</li>
                      </ul>
                    </li>
                    <li className="text-gray-800 dark:text-gray-200 pb-2">
                      <strong className="text-gray-900 dark:text-white">API gateways</strong>: Centralize request routing, auth, rate-limiting
                      <ul>
                        <li className="text-gray-800 dark:text-gray-200">• Kong</li>
                        <li className="text-gray-800 dark:text-gray-200">• Amazon API Gateway</li>
                      </ul>
                    </li>
                    <li className="text-gray-800 dark:text-gray-200 pb-2">
                      <strong className="text-gray-900 dark:text-white">CDNs</strong>: Cache static assets close to users
                      <ul>
                        <li className="text-gray-800 dark:text-gray-200">• Cloudflare</li>
                        <li className="text-gray-800 dark:text-gray-200">• Akamai</li>
                      </ul>
                    </li>
                    <li className="text-gray-800 dark:text-gray-200 pb-2">
                      <strong className="text-gray-900 dark:text-white">Service mesh</strong>: Manage service-to-service communication in microservices
                      <ul>
                        <li className="text-gray-800 dark:text-gray-200">• Istio</li>
                        <li className="text-gray-800 dark:text-gray-200">• Linkerd</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Third-Party Services */}
            <div className="mb-6 border-l-4 border-yellow-500 pl-4 bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-r-lg">
              <h3 className="text-xl font-semibold mb-2 flex items-center text-gray-800 dark:text-gray-200">
                <ExternalLink className="mr-2" size={20} />
                5. Third-Party & External Services
              </h3>
              <p className="text-gray-800 dark:text-gray-200">Modern systems often integrate external platforms to offload complex or non-core functionality. These tools help reduce time to market and allow teams to focus on core business logic. Some examples include:</p>
              <ul className="mt-2 space-y-1">
                <li className="text-gray-800 dark:text-gray-200">
                  <ul>
                    <li className="text-gray-800 dark:text-gray-200 pb-2">
                      <strong className="text-gray-900 dark:text-white">Authentication</strong>:
                      <ul>
                        <li className="text-gray-800 dark:text-gray-200">• Auth0</li>
                        <li className="text-gray-800 dark:text-gray-200">• Firebase Auth</li>
                      </ul>
                    </li>
                    <li className="text-gray-800 dark:text-gray-200 pb-2">
                      <strong className="text-gray-900 dark:text-white">Payments</strong>:
                      <ul>
                        <li className="text-gray-800 dark:text-gray-200">• Stripe</li>
                        <li className="text-gray-800 dark:text-gray-200">• PayPal</li>
                      </ul>
                    </li>
                    <li className="text-gray-800 dark:text-gray-200 pb-2">
                      <strong className="text-gray-900 dark:text-white">Notifications</strong>:
                      <ul>
                        <li className="text-gray-800 dark:text-gray-200">• Twilio (SMS)</li>
                        <li className="text-gray-800 dark:text-gray-200">• SendGrid (email)</li>
                        <li className="text-gray-800 dark:text-gray-200">• Firebase Cloud Messaging (push)</li>
                      </ul>
                    </li>
                    <li className="text-gray-800 dark:text-gray-200 pb-2">
                      <strong className="text-gray-900 dark:text-white">Monitoring</strong>:
                      <ul>
                        <li className="text-gray-800 dark:text-gray-200">• Datadog</li>
                        <li className="text-gray-800 dark:text-gray-200">• New Relic</li>
                        <li className="text-gray-800 dark:text-gray-200">• Sentry</li>
                      </ul>
                    </li>
                    <li className="text-gray-800 dark:text-gray-200 pb-2">
                      <strong className="text-gray-900 dark:text-white">ML/AI APIs</strong>:
                      <ul>
                        <li className="text-gray-800 dark:text-gray-200">• OpenAI</li>
                        <li className="text-gray-800 dark:text-gray-200">• AWS Rekognition</li>
                        <li className="text-gray-800 dark:text-gray-200">• Google Cloud Vision</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* System Design Process Section */}
        <section className="mb-10 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-4 flex items-center border-b pb-2 border-gray-200 dark:border-gray-700">
            <FileText className="mr-2 text-orange-500 dark:text-orange-400" size={24} />
            The System Design Process
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700 pb-2">From Requirements to Blueprint</h3>
            <p className="mb-6 text-gray-800 dark:text-gray-200">Designing a system isn't a rigid checklist, it's an <strong className="text-gray-900 dark:text-white">iterative process</strong> that evolves through exploration, validation, and refinement. Here's a proven step-by-step framework:</p>

            {/* Requirements Gathering */}
            <div className="mb-6 border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold mb-2 flex items-center text-gray-800 dark:text-gray-200">
                <Clipboard className="mr-2" size={20} />
                1. Requirements Gathering
              </h3>
              <p className="text-gray-800 dark:text-gray-200">Understand what the system must achieve.</p>
              <ul className="mt-2 space-y-1">
                <li className="text-gray-800 dark:text-gray-200"><strong className="text-gray-900 dark:text-white">• Functional Requirements</strong>: What should it do? (e.g., upload photos, send messages)</li>
                <li className="text-gray-800 dark:text-gray-200"><strong className="text-gray-900 dark:text-white">• Non-Functional Requirements</strong> (NFRs): Performance, latency, uptime, consistency</li>
                <li className="text-gray-800 dark:text-gray-200"><strong className="text-gray-900 dark:text-white">• User Modeling</strong>: Who are the users? What are their use cases and volume?</li>
                <li className="text-gray-800 dark:text-gray-200"><strong className="text-gray-900 dark:text-white">• Constraints</strong>: Tech stacks, budgets, SLAs, legal requirements</li>
              </ul>
            </div>

            {/* Back-of-the-Envelope Estimations */}
            <div className="mb-6 border-l-4 border-green-500 pl-4">
              <h3 className="text-xl font-semibold mb-2 flex items-center text-gray-800 dark:text-gray-200">
                <BarChart2 className="mr-2" size={20} />
                2. Back-of-the-Envelope Estimations
              </h3>
              <p className="text-gray-800 dark:text-gray-200">Estimate the scale to make technology and architecture choices:</p>
              <ul className="mt-2 space-y-1">
                <li className="text-gray-800 dark:text-gray-200"><strong className="text-gray-900 dark:text-white">• Storage Needs</strong>: GBs/TBs per day or per user</li>
                <li className="text-gray-800 dark:text-gray-200"><strong className="text-gray-900 dark:text-white">• Traffic Load</strong>: Peak QPS, reads vs. writes</li>
                <li className="text-gray-800 dark:text-gray-200"><strong className="text-gray-900 dark:text-white">• Network Bandwidth</strong>: Data transferred between users/services</li>
                <li className="text-gray-800 dark:text-gray-200"><strong className="text-gray-900 dark:text-white">• Server Count</strong>: Number of replicas needed to serve expected load</li>
              </ul>
              <p className="mt-2 text-blue-600 dark:text-yellow-400">
                💡 <em>Quick estimates help you avoid overengineering or undershooting your architecture.</em>
              </p>
            </div>

            {/* High-Level Design */}
            <div className="mb-6 border-l-4 border-purple-500 pl-4">
              <h3 className="text-xl font-semibold mb-2 flex items-center text-gray-800 dark:text-gray-200">
                <Server className="mr-2" size={20} />
                3. High-Level Design (HLD)
              </h3>
              <p className="text-gray-800 dark:text-gray-200">Sketch the system's architecture and data flow.</p>
              <ul className="mt-2 space-y-1">
                <li className="text-gray-800 dark:text-gray-200">• Identify major modules (e.g., user service, feed service, auth)</li>
                <li className="text-gray-800 dark:text-gray-200">• Map interactions between components</li>
                <li className="text-gray-800 dark:text-gray-200">• Define external dependencies (e.g., third-party APIs)</li>
                <li className="text-gray-800 dark:text-gray-200">• Choose foundational technologies (databases, frameworks, hosting)</li>
              </ul>
            </div>

            {/* Data Modeling & API Design */}
            <div className="mb-6 border-l-4 border-orange-500 pl-4">
              <h3 className="text-xl font-semibold mb-2 flex items-center text-gray-800 dark:text-gray-200">
                <Database className="mr-2" size={20} />
                4. Data Modeling & API Design
              </h3>
              <p className="text-gray-800 dark:text-gray-200">Define the internal and external interfaces.</p>
              <ul className="mt-2 space-y-1">
                <li className="text-gray-800 dark:text-gray-200">• Database Design: Choose data models, schema, indexing, partitioning</li>
                <li className="text-gray-800 dark:text-gray-200">
                  • API Design: Define RESTful or RPC endpoints, contracts, auth
                  <ul>
                    <li className="text-gray-800 dark:text-gray-200">• <code>POST /tweet</code> → creates a tweet</li>
                    <li className="text-gray-800 dark:text-gray-200">• <code>GET /timeline</code> → fetches a user's feed</li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Detailed Design */}
            <div className="mb-6 border-l-4 border-yellow-500 pl-4">
              <h3 className="text-xl font-semibold mb-2 flex items-center text-gray-800 dark:text-gray-200">
                <Server className="mr-2" size={20} />
                5. Detailed Design & Component Deep Dive
              </h3>
              <p className="text-gray-800 dark:text-gray-200">Zoom in on each service or module.</p>
              <ul className="mt-2 space-y-1">
                <li className="text-gray-800 dark:text-gray-200">• Define responsibilities, inputs/outputs, failure modes</li>
                <li className="text-gray-800 dark:text-gray-200">• Apply caching, replication, queuing, and load balancing</li>
                <li className="text-gray-800 dark:text-gray-200">• Ensure each component meets its NFRs (availability, security, observability)</li>
              </ul>
            </div>

            {/* Bottlenecks and Trade-offs */}
            <div className="mb-6 border-l-4 border-orange-500 pl-4">
              <h3 className="text-xl font-semibold mb-2 flex items-center text-gray-800 dark:text-gray-200">
                <AlertTriangle className="mr-2" size={20} />
                6. Bottlenecks, Trade-offs, and Failure Points
              </h3>
              <p className="text-gray-800 dark:text-gray-200">No design is perfect. Analyze risk and justify decisions.</p>
              <ul className="mt-2 space-y-1">
                <li className="text-gray-800 dark:text-gray-200">• Bottlenecks: Which parts will be stressed first?</li>
                <li className="text-gray-800 dark:text-gray-200">• Failure Points: Where's the system vulnerable?</li>
                <li className="text-gray-800 dark:text-gray-200 pt-2">
                  <strong className="text-gray-900 dark:text-white">Trade-offs</strong>:
                  <ul>
                    <li className="text-gray-800 dark:text-gray-200">• Consistency vs. availability (CAP theorem)</li>
                    <li className="text-gray-800 dark:text-gray-200">• Cost vs. latency</li>
                    <li className="text-gray-800 dark:text-gray-200">• Simplicity vs. extensibility</li>
                  </ul>
                </li>
              </ul>
              <p className="mt-2 text-red-600 dark:text-red-400">
                ⚠️ <em>Always document trade-offs and fallback plans.</em>
              </p>
            </div>

            {/* Review and Iterate */}
            <div className="mb-6 border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold mb-2 flex items-center text-gray-800 dark:text-gray-200">
                <RefreshCw className="mr-2" size={20} />
                7. Review, Validate, and Iterate
              </h3>
              <p className="text-gray-800 dark:text-gray-200">System design is a living process.</p>
              <ul className="mt-2 space-y-1">
                <li className="text-gray-800 dark:text-gray-200">• Explain your design to peers or stakeholders</li>
                <li className="text-gray-800 dark:text-gray-200">• Use diagrams to support communication</li>
                <li className="text-gray-800 dark:text-gray-200">• Iterate based on feedback and testing (load tests, chaos tests)</li>
                <li className="text-gray-800 dark:text-gray-200">• Monitor and adjust in production</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Conclusion Section */}
        <section className="mb-10 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-teal-600 dark:text-teal-400 mb-4 flex items-center border-b pb-2 border-gray-200 dark:border-gray-700">
            <CheckCircle className="mr-2 text-teal-500 dark:text-teal-400" size={24} />
            Conclusion
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="mb-4 text-gray-800 dark:text-gray-200">
              Designing robust, scalable, and maintainable systems is both a technical discipline and a creative craft. It demands foresight, collaboration, and structured problem-solving.
            </p>
            <p className="mb-4 text-gray-800 dark:text-gray-200">
              By breaking down the process, from identifying requirements and estimating scale to architecting components and validating decisions, you create systems that can <strong className="text-gray-900 dark:text-white">scale gracefully</strong>, <strong className="text-gray-900 dark:text-white">recover from failure</strong>, and <strong className="text-gray-900 dark:text-white">adapt to change</strong>.
            </p>
            <p className="mb-4 text-gray-800 dark:text-gray-200">
              Whether you're tackling a small feature or building a global platform, the mindset and tools of system design remain the same: <strong className="text-gray-900 dark:text-white">clarity, resilience, and purpose</strong>.
            </p>
            <blockquote className="border-l-4 border-teal-500 pl-4 italic bg-teal-50 dark:bg-teal-900/20 p-4 rounded-r-lg">
              <strong className="text-gray-900 dark:text-white">Mastering system design is not about memorizing patterns, it's about applying principles to real problems with context-aware judgment.</strong>
            </blockquote>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
