<template>
  <div class="app">
    <TopNav />
    <div class="app-container">
      <SideNav />
      <main class="main-content">
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

@media (max-width: 768px) {
  .main-content {
    margin-left: 0;
    padding: 1rem;
  }
}
</style>


