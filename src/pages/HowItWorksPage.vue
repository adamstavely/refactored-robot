<template>
  <div class="page">
    <div class="hero-section">
      <div class="hero-card">
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="hero-title">How It Works</h1>
            <p class="hero-subtitle">
              Learn how Patches.com simplifies your patch management workflow with intelligent automation and seamless integration
            </p>
          </div>
          <div class="hero-svg">
            <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" aria-label="Three-step process illustration: Connect, Configure, Deploy" role="img">
              <defs>
                <linearGradient id="howItWorksGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#00B4FF;stop-opacity:0.3" />
                  <stop offset="100%" style="stop-color:#9B59B6;stop-opacity:0.3" />
                </linearGradient>
              </defs>
              
              <!-- Process steps -->
              <circle cx="100" cy="150" r="40" fill="#00B4FF" opacity="0.8" />
              <text x="100" y="155" text-anchor="middle" fill="white" font-size="24" font-weight="bold">1</text>
              
              <circle cx="200" cy="150" r="40" fill="#6BB6FF" opacity="0.8" />
              <text x="200" y="155" text-anchor="middle" fill="white" font-size="24" font-weight="bold">2</text>
              
              <circle cx="300" cy="150" r="40" fill="#9B59B6" opacity="0.8" />
              <text x="300" y="155" text-anchor="middle" fill="white" font-size="24" font-weight="bold">3</text>
              
              <!-- Connecting arrows -->
              <path d="M 140 150 L 160 150" stroke="#00B4FF" stroke-width="4" fill="none" />
              <polygon points="160,150 155,145 155,155" fill="#00B4FF" />
              
              <path d="M 240 150 L 260 150" stroke="#6BB6FF" stroke-width="4" fill="none" />
              <polygon points="260,150 255,145 255,155" fill="#6BB6FF" />
              
              <!-- Labels -->
              <text x="100" y="220" text-anchor="middle" fill="white" font-size="14" font-weight="500">Connect</text>
              <text x="200" y="220" text-anchor="middle" fill="white" font-size="14" font-weight="500">Configure</text>
              <text x="300" y="220" text-anchor="middle" fill="white" font-size="14" font-weight="500">Deploy</text>
              
              <!-- Decorative elements -->
              <rect x="50" y="80" width="100" height="20" rx="4" fill="#00B4FF" opacity="0.4" />
              <rect x="150" y="80" width="100" height="20" rx="4" fill="#6BB6FF" opacity="0.4" />
              <rect x="250" y="80" width="100" height="20" rx="4" fill="#9B59B6" opacity="0.4" />
            </svg>
          </div>
        </div>
      </div>
    </div>
    
    <div class="content-section">
      <div class="content-card">
        <Rocket class="card-icon" :size="32" aria-hidden="true" />
        <h2>Getting Started</h2>
        <p>Connect your repositories and start managing patches with ease. Our platform provides a seamless integration process that takes just minutes to set up.</p>
      </div>
      
      <div class="content-card">
        <GitBranch class="card-icon" :size="32" aria-hidden="true" />
        <h2>Automated Workflows</h2>
        <p>Configure automated patch deployment rules that work for your team. Set up triggers, approvals, and rollback strategies all in one place.</p>
      </div>
      
      <div class="content-card">
        <BarChart3 class="card-icon" :size="32" aria-hidden="true" />
        <h2>Monitor & Track</h2>
        <p>Keep track of all patch deployments with real-time monitoring and comprehensive audit logs. Stay informed about the status of every change.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Rocket, GitBranch, BarChart3 } from 'lucide-vue-next'
</script>

<style scoped>
.page {
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

.content-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.content-card {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px var(--shadow);
}

.card-icon {
  color: var(--light-blue);
  margin-bottom: 1rem;
}

.content-card h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 1rem;
  margin-top: 0;
}

.content-card p {
  color: #666;
  line-height: 1.6;
  margin: 0;
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
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .hero-svg {
    min-height: 200px;
  }
  
  .content-section {
    grid-template-columns: 1fr;
  }
}
</style>

