<template>
  <div class="page">
    <div class="hero-section">
      <div class="hero-card">
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="hero-title">Repositories</h1>
            <p class="hero-subtitle">
              Manage all your repositories in one place. Connect, monitor, and deploy patches across your entire codebase
            </p>
          </div>
          <div class="hero-svg">
            <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" aria-label="Repository folders and git branch management illustration" role="img">
              <defs>
                <linearGradient id="reposGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#00B4FF;stop-opacity:0.3" />
                  <stop offset="100%" style="stop-color:#9B59B6;stop-opacity:0.3" />
                </linearGradient>
              </defs>
              
              <!-- Repository folders -->
              <rect x="50" y="100" width="90" height="70" rx="6" fill="#00B4FF" opacity="0.8" />
              <rect x="55" y="95" width="80" height="10" rx="4" fill="#00B4FF" opacity="0.9" />
              <line x1="65" y1="120" x2="125" y2="120" stroke="white" stroke-width="2" opacity="0.9" />
              <line x1="65" y1="135" x2="110" y2="135" stroke="white" stroke-width="2" opacity="0.9" />
              <line x1="65" y1="150" x2="120" y2="150" stroke="white" stroke-width="2" opacity="0.9" />
              
              <rect x="155" y="110" width="90" height="70" rx="6" fill="#6BB6FF" opacity="0.8" />
              <rect x="160" y="105" width="80" height="10" rx="4" fill="#6BB6FF" opacity="0.9" />
              <line x1="170" y1="130" x2="230" y2="130" stroke="white" stroke-width="2" opacity="0.9" />
              <line x1="170" y1="145" x2="215" y2="145" stroke="white" stroke-width="2" opacity="0.9" />
              <line x1="170" y1="160" x2="225" y2="160" stroke="white" stroke-width="2" opacity="0.9" />
              
              <rect x="260" y="90" width="90" height="70" rx="6" fill="#9B59B6" opacity="0.8" />
              <rect x="265" y="85" width="80" height="10" rx="4" fill="#9B59B6" opacity="0.9" />
              <line x1="275" y1="110" x2="335" y2="110" stroke="white" stroke-width="2" opacity="0.9" />
              <line x1="275" y1="125" x2="320" y2="125" stroke="white" stroke-width="2" opacity="0.9" />
              <line x1="275" y1="140" x2="330" y2="140" stroke="white" stroke-width="2" opacity="0.9" />
              
              <!-- Connection lines -->
              <path d="M 140 135 Q 200 120 250 125" stroke="#00B4FF" stroke-width="3" fill="none" opacity="0.6" stroke-dasharray="5,5" />
              <path d="M 245 145 Q 200 160 155 150" stroke="#9B59B6" stroke-width="3" fill="none" opacity="0.6" stroke-dasharray="5,5" />
              
              <!-- Git branch indicators -->
              <circle cx="200" cy="80" r="8" fill="#00B4FF" />
              <path d="M 200 88 L 200 100" stroke="#00B4FF" stroke-width="2" />
              <path d="M 200 100 L 150 135" stroke="#00B4FF" stroke-width="2" />
              <path d="M 200 100 L 250 125" stroke="#9B59B6" stroke-width="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
    
    <div class="content-section">
      <div class="content-card">
        <FolderGit2 class="card-icon" :size="32" aria-hidden="true" />
        <h2>Connected Repositories</h2>
        <p>View and manage all your connected repositories. Monitor patch status, deployment history, and repository health metrics.</p>
      </div>
      
      <div class="content-card">
        <PlusCircle class="card-icon" :size="32" aria-hidden="true" />
        <h2>Add New Repository</h2>
        <p>Connect new repositories to start managing patches. Support for GitHub, GitLab, Bitbucket, and more.</p>
      </div>
      
      <div class="content-card">
        <Settings class="card-icon" :size="32" aria-hidden="true" />
        <h2>Repository Settings</h2>
        <p>Configure repository-specific settings, branch protection rules, and automated patch deployment policies.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { FolderGit2, PlusCircle, Settings } from 'lucide-vue-next'
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

