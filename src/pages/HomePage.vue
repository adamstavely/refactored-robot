<template>
  <div class="home-page">
    <div class="hero-section">
      <div class="hero-card">
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="hero-title">Welcome to Patches.com</h1>
            <p class="hero-subtitle">
              Streamline your development workflow with intelligent patch management and seamless repository integration
            </p>
            <div class="hero-actions-row">
              <div class="action-buttons">
                <button class="action-btn primary">
                  Request a Repo
                </button>
                <button class="action-btn secondary">
                  OnDemand Request
                </button>
              </div>
            </div>
          </div>
          <div class="hero-stats-wrapper">
            <div class="hero-stats">
              <div class="stat-item">
                <div class="stat-value">10K+</div>
                <div class="stat-label">Repositories</div>
              </div>
              <div class="stat-item">
                <div class="stat-value">50K+</div>
                <div class="stat-label">Patches Applied</div>
              </div>
              <div class="stat-item">
                <div class="stat-value">99.9%</div>
                <div class="stat-label">Uptime</div>
              </div>
            </div>
          </div>
          <div class="hero-svg">
            <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
              <!-- Background gradient -->
              <defs>
                <linearGradient id="svgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#00B4FF;stop-opacity:0.3" />
                  <stop offset="100%" style="stop-color:#9B59B6;stop-opacity:0.3" />
                </linearGradient>
              </defs>
              
              <!-- Repository boxes -->
              <rect x="50" y="80" width="80" height="60" rx="8" fill="#00B4FF" opacity="0.8" />
              <rect x="150" y="100" width="80" height="60" rx="8" fill="#6BB6FF" opacity="0.7" />
              <rect x="250" y="70" width="80" height="60" rx="8" fill="#9B59B6" opacity="0.8" />
              
              <!-- Code lines -->
              <line x1="60" y1="100" x2="120" y2="100" stroke="white" stroke-width="2" opacity="0.9" />
              <line x1="60" y1="115" x2="100" y2="115" stroke="white" stroke-width="2" opacity="0.9" />
              <line x1="60" y1="130" x2="110" y2="130" stroke="white" stroke-width="2" opacity="0.9" />
              
              <line x1="160" y1="120" x2="220" y2="120" stroke="white" stroke-width="2" opacity="0.9" />
              <line x1="160" y1="135" x2="200" y2="135" stroke="white" stroke-width="2" opacity="0.9" />
              <line x1="160" y1="150" x2="210" y2="150" stroke="white" stroke-width="2" opacity="0.9" />
              
              <line x1="260" y1="90" x2="320" y2="90" stroke="white" stroke-width="2" opacity="0.9" />
              <line x1="260" y1="105" x2="300" y2="105" stroke="white" stroke-width="2" opacity="0.9" />
              <line x1="260" y1="120" x2="310" y2="120" stroke="white" stroke-width="2" opacity="0.9" />
              
              <!-- Connecting lines (patches) -->
              <path d="M 130 110 Q 200 90 270 100" stroke="#00B4FF" stroke-width="3" fill="none" opacity="0.6" stroke-dasharray="5,5" />
              <path d="M 230 130 Q 200 150 150 130" stroke="#9B59B6" stroke-width="3" fill="none" opacity="0.6" stroke-dasharray="5,5" />
              
              <!-- Patch indicators -->
              <circle cx="200" cy="95" r="6" fill="#00B4FF" />
              <circle cx="190" cy="140" r="6" fill="#9B59B6" />
              
              <!-- Arrow -->
              <path d="M 320 150 L 340 150 L 335 145 M 340 150 L 335 155" stroke="#00B4FF" stroke-width="3" fill="none" />
            </svg>
          </div>
        </div>
      </div>
    </div>
    
    <div class="features-section">
      <h2 class="section-title">Features</h2>
      <div class="features-grid">
        <div class="feature-card">
          <Zap class="feature-icon" :size="32" />
          <h3 class="feature-title">Fast Integration</h3>
          <p class="feature-description">Connect your repositories in seconds with our streamlined integration process.</p>
        </div>
        <div class="feature-card">
          <Shield class="feature-icon" :size="32" />
          <h3 class="feature-title">Secure & Reliable</h3>
          <p class="feature-description">Enterprise-grade security with 99.9% uptime guarantee for your critical workflows.</p>
        </div>
        <div class="feature-card">
          <BarChart3 class="feature-icon" :size="32" />
          <h3 class="feature-title">Real-time Analytics</h3>
          <p class="feature-description">Track patch status, deployment metrics, and repository health in real-time.</p>
        </div>
        <div class="feature-card">
          <RefreshCw class="feature-icon" :size="32" />
          <h3 class="feature-title">Automated Workflows</h3>
          <p class="feature-description">Set up automated patch deployment with customizable rules and triggers.</p>
        </div>
      </div>
    </div>
    
    <div class="cta-section">
      <div class="cta-card">
        <h2 class="cta-title">Ready to get started?</h2>
        <p class="cta-description">Join thousands of developers using Patches.com to streamline their workflow.</p>
        <button class="cta-button">Get Started Free</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Zap, Shield, BarChart3, RefreshCw } from 'lucide-vue-next'
</script>

<style scoped>
.home-page {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem 0;
}

.hero-section {
  margin-bottom: 4rem;
}

.hero-card {
  background: linear-gradient(135deg, var(--gradient-start) 0%, var(--gradient-end) 100%);
  border-radius: 24px;
  padding: 3rem;
  box-shadow: 0 10px 40px rgba(0, 180, 255, 0.3);
  margin-bottom: 2rem;
  position: relative;
  overflow: hidden;
}

.hero-card::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
  animation: pulse 15s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
}

.hero-content {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.hero-text {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  min-width: 0;
  position: relative;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  color: var(--text-light);
  margin: 0;
  line-height: 1.1;
  letter-spacing: -2px;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.95);
  font-weight: 400;
  line-height: 1.6;
  margin: 0;
}

.hero-actions-row {
  display: flex;
  align-items: center;
  margin-top: 2rem;
  width: 100%;
}

.action-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: flex-start;
  flex-wrap: nowrap;
}

.hero-stats-wrapper {
  position: absolute;
  left: calc(50% + 1.5rem);
  right: 0;
  bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-stats {
  display: flex;
  gap: 2rem;
}

.stat-item {
  display: flex;
  flex-direction: column;
}

.stat-value {
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-light);
  line-height: 1;
}

.stat-label {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 0.5rem;
}

.hero-svg {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 300px;
}

.hero-svg svg {
  width: 100%;
  height: auto;
  max-width: 400px;
}

.action-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: flex-start;
  flex-wrap: nowrap;
  flex: 0 0 auto;
}

.action-btn {
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px var(--shadow);
  text-transform: none;
  letter-spacing: 0.3px;
}

.action-btn.primary {
  background: var(--light-blue);
  color: var(--text-light);
}

.action-btn.primary:hover {
  background: var(--primary-blue);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 180, 255, 0.4);
}

.action-btn.secondary {
  background: white;
  color: var(--primary-blue);
  border: 2px solid var(--light-blue);
}

.action-btn.secondary:hover {
  background: var(--light-blue);
  color: var(--text-light);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 180, 255, 0.3);
}

.action-btn:active {
  transform: translateY(0);
}

.features-section {
  margin: 4rem 0;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 2rem;
  text-align: left;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px var(--shadow);
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(0, 180, 255, 0.2);
}

.feature-icon {
  color: var(--light-blue);
  margin-bottom: 1rem;
}

.feature-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 0.75rem;
}

.feature-description {
  color: #666;
  line-height: 1.6;
  margin: 0;
}

.cta-section {
  margin: 4rem 0;
}

.cta-card {
  background: linear-gradient(135deg, var(--gradient-start) 0%, var(--gradient-end) 100%);
  padding: 3rem;
  border-radius: 24px;
  text-align: center;
  box-shadow: 0 10px 40px rgba(0, 180, 255, 0.3);
}

.cta-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-light);
  margin-bottom: 1rem;
}

.cta-description {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
}

.cta-button {
  padding: 1rem 3rem;
  font-size: 1.2rem;
  font-weight: 600;
  background: var(--text-light);
  color: var(--light-blue);
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .hero-svg {
    min-height: 250px;
  }
}

@media (max-width: 768px) {
  .hero-card {
    padding: 2rem 1.5rem;
    margin-bottom: 2rem;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .hero-actions-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
  }
  
  .hero-stats {
    width: 100%;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
  
  .hero-svg {
    min-height: 200px;
  }
  
  .action-buttons {
    flex-direction: column;
    align-items: stretch;
  }
  
  .action-btn {
    width: 100%;
    padding: 1rem 2rem;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .cta-card {
    padding: 2rem 1.5rem;
  }
  
  .cta-title {
    font-size: 2rem;
  }
  
  .cta-description {
    font-size: 1.1rem;
  }
}
</style>
