import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/Layout/Layout';
import HomePage from './components/Content/HomePage';
import ContentPage from './components/Content/ContentPage';
import CategoryPage from './components/Content/CategoryPage';
import SystemDesignFrameworkPage from './components/Content/SystemDesignFrameworkPage';
import ScrollToTop from './components/Utils/ScrollToTop';
import './i18n';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/system-design-framework" element={<SystemDesignFrameworkPage />} />
            
            {/* Category Pages */}
            <Route path="/architecture" element={<CategoryPage categoryKey="architecture" />} />
            <Route path="/architecture/load-balancers" element={<ContentPage topicKey="loadBalancers" />} />
            <Route path="/architecture/app-servers" element={<ContentPage topicKey="appServers" />} />
            <Route path="/architecture/caching" element={<ContentPage topicKey="caching" />} />
            <Route path="/architecture/databases" element={<ContentPage topicKey="databases" />} />
            <Route path="/architecture/storage" element={<ContentPage topicKey="storage" />} />
            
            <Route path="/scalability" element={<CategoryPage categoryKey="scalability" />} />
            <Route path="/scalability/replication" element={<ContentPage topicKey="replication" />} />
            <Route path="/scalability/sharding" element={<ContentPage topicKey="sharding" />} />
            <Route path="/scalability/cdn" element={<ContentPage topicKey="cdn" />} />
            <Route path="/scalability/scaling-types" element={<ContentPage topicKey="scalingTypes" />} />
            <Route path="/scalability/cap-theorem" element={<ContentPage topicKey="capTheorem" />} />
            
            <Route path="/communication" element={<CategoryPage categoryKey="communication" />} />
            <Route path="/communication/http-grpc" element={<ContentPage topicKey="httpGrpc" />} />
            <Route path="/communication/rest-graphql" element={<ContentPage topicKey="restGraphql" />} />
            <Route path="/communication/websockets" element={<ContentPage topicKey="websockets" />} />
            <Route path="/communication/api-gateway" element={<ContentPage topicKey="apiGateway" />} />
            <Route path="/communication/service-mesh" element={<ContentPage topicKey="serviceMesh" />} />
            
            <Route path="/async" element={<CategoryPage categoryKey="async" />} />
            <Route path="/async/message-queues" element={<ContentPage topicKey="messageQueues" />} />
            <Route path="/async/eventual-consistency" element={<ContentPage topicKey="eventualConsistency" />} />
            <Route path="/async/event-sourcing" element={<ContentPage topicKey="eventSourcing" />} />
            <Route path="/async/cqrs" element={<ContentPage topicKey="cqrs" />} />
            
            <Route path="/performance" element={<CategoryPage categoryKey="performance" />} />
            <Route path="/performance/caching-patterns" element={<ContentPage topicKey="cachingPatterns" />} />
            <Route path="/performance/circuit-breaker" element={<ContentPage topicKey="circuitBreaker" />} />
            <Route path="/performance/retry-timeout" element={<ContentPage topicKey="retryTimeout" />} />
            <Route path="/performance/observability" element={<ContentPage topicKey="observability" />} />
            
            <Route path="/security" element={<CategoryPage categoryKey="security" />} />
            <Route path="/security/jwt" element={<ContentPage topicKey="jwt" />} />
            <Route path="/security/rate-limiting" element={<ContentPage topicKey="rateLimiting" />} />
            <Route path="/security/tls" element={<ContentPage topicKey="tls" />} />
            <Route path="/security/feature-flags" element={<ContentPage topicKey="featureFlags" />} />
            <Route path="/security/deployment" element={<ContentPage topicKey="deployment" />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;