<template>
  <div class="app">
    <a href="#main-content" class="skip-link">Skip to main content</a>
    <TopNav />
    <div class="app-container">
      <SideNav />
      <main id="main-content" class="main-content" role="main">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import TopNav from './components/TopNav.vue'
import SideNav from './components/SideNav.vue'
</script>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-container {
  display: flex;
  flex: 1;
  margin-top: 70px;
}

.main-content {
  flex: 1;
  padding: 2rem;
  margin-left: 80px;
  transition: margin-left 0.3s ease;
}

.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--text-dark);
  color: var(--text-light);
  padding: 8px 16px;
  text-decoration: none;
  z-index: 10000;
  border-radius: 4px;
}

.skip-link:focus {
  top: 0;
}

@media (max-width: 768px) {
  .main-content {
    margin-left: 0;
    padding: 1rem;
  }
}
</style>


