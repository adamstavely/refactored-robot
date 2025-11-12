<template>
  <aside class="side-nav">
    <nav class="side-nav-content">
      <router-link to="/how-it-works" class="side-nav-item">
        <HelpCircle class="nav-icon" :size="22" />
        <span class="nav-text">How it works</span>
      </router-link>
      <router-link to="/repos" class="side-nav-item">
        <FolderGit2 class="nav-icon" :size="22" />
        <span class="nav-text">Repos</span>
      </router-link>
    </nav>
  </aside>
</template>

<script setup>
import { HelpCircle, FolderGit2 } from 'lucide-vue-next'
</script>

<style scoped>
.side-nav {
  position: fixed;
  left: 0;
  top: 70px;
  width: 80px;
  height: calc(100vh - 70px);
  background: white;
  box-shadow: 2px 0 10px var(--shadow);
  z-index: 100;
  overflow-y: auto;
  border-right: 1px solid rgba(0, 0, 0, 0.05);
}

.side-nav-content {
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.side-nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 64px;
  padding: 0.75rem 0.5rem;
  color: var(--text-dark);
  text-decoration: none;
  transition: all 0.2s ease;
  border-radius: 12px;
  position: relative;
  gap: 0.5rem;
}

.side-nav-item:hover {
  background: rgba(0, 180, 255, 0.1);
  color: var(--light-blue);
}

.side-nav-item.router-link-active {
  background: rgba(0, 180, 255, 0.15);
  color: var(--light-blue);
}

.side-nav-item.router-link-active::before {
  content: '';
  position: absolute;
  left: -12px;
  width: 3px;
  height: 24px;
  background: var(--light-blue);
  border-radius: 0 2px 2px 0;
}

.side-nav-item:hover .nav-icon,
.side-nav-item.router-link-active .nav-icon {
  color: var(--light-blue);
}

.nav-icon {
  color: var(--text-dark);
  transition: color 0.2s ease;
  flex-shrink: 0;
}

.nav-text {
  font-size: 0.7rem;
  font-weight: 500;
  text-align: center;
  line-height: 1.2;
  transition: color 0.2s ease;
  word-break: break-word;
}

.side-nav-item:hover .nav-text,
.side-nav-item.router-link-active .nav-text {
  color: var(--light-blue);
}

@media (max-width: 768px) {
  .side-nav {
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }
  
  .side-nav.open {
    transform: translateX(0);
  }
}
</style>


