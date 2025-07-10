import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/Layout/Layout';
import HomePage from './components/Content/HomePage';
import ContentPage from './components/Content/ContentPage';
import CategoryPage from './components/Content/CategoryPage';
import './i18n';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            
            {/* Category Pages */}
            <Route path="/architecture" element={<CategoryPage categoryKey="architecture" />} />
            <Route path="/scalability" element={<CategoryPage categoryKey="scalability" />} />
            <Route path="/communication" element={<CategoryPage categoryKey="communication" />} />
            <Route path="/async" element={<CategoryPage categoryKey="async" />} />
            <Route path="/performance" element={<CategoryPage categoryKey="performance" />} />
            <Route path="/security" element={<CategoryPage categoryKey="security" />} />
            
            {/* Individual Topic Pages */}
            <Route path="/load-balancers" element={<ContentPage topicKey="loadBalancers" />} />
            <Route path="/app-servers" element={<ContentPage topicKey="appServers" />} />
            <Route path="/caching" element={<ContentPage topicKey="caching" />} />
            <Route path="/databases" element={<ContentPage topicKey="databases" />} />
            <Route path="/storage" element={<ContentPage topicKey="storage" />} />
            <Route path="/replication" element={<ContentPage topicKey="replication" />} />
            <Route path="/sharding" element={<ContentPage topicKey="sharding" />} />
            <Route path="/cdn" element={<ContentPage topicKey="cdn" />} />
            <Route path="/scaling-types" element={<ContentPage topicKey="scalingTypes" />} />
            <Route path="/cap-theorem" element={<ContentPage topicKey="capTheorem" />} />
            <Route path="/http-grpc" element={<ContentPage topicKey="httpGrpc" />} />
            <Route path="/rest-graphql" element={<ContentPage topicKey="restGraphql" />} />
            <Route path="/websockets" element={<ContentPage topicKey="websockets" />} />
            <Route path="/api-gateway" element={<ContentPage topicKey="apiGateway" />} />
            <Route path="/service-mesh" element={<ContentPage topicKey="serviceMesh" />} />
            <Route path="/message-queues" element={<ContentPage topicKey="messageQueues" />} />
            <Route path="/eventual-consistency" element={<ContentPage topicKey="eventualConsistency" />} />
            <Route path="/event-sourcing" element={<ContentPage topicKey="eventSourcing" />} />
            <Route path="/cqrs" element={<ContentPage topicKey="cqrs" />} />
            <Route path="/caching-patterns" element={<ContentPage topicKey="cachingPatterns" />} />
            <Route path="/circuit-breaker" element={<ContentPage topicKey="circuitBreaker" />} />
            <Route path="/retry-timeout" element={<ContentPage topicKey="retryTimeout" />} />
            <Route path="/observability" element={<ContentPage topicKey="observability" />} />
            <Route path="/jwt" element={<ContentPage topicKey="jwt" />} />
            <Route path="/rate-limiting" element={<ContentPage topicKey="rateLimiting" />} />
            <Route path="/tls" element={<ContentPage topicKey="tls" />} />
            <Route path="/feature-flags" element={<ContentPage topicKey="featureFlags" />} />
            <Route path="/deployment" element={<ContentPage topicKey="deployment" />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;