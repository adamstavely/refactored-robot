<template>
  <nav class="top-nav" role="navigation" aria-label="Main navigation">
    <div class="nav-container">
      <div class="nav-left">
        <router-link to="/" class="nav-brand">
          <Package class="brand-icon" :size="24" aria-hidden="true" />
          <h1 class="brand-text">Patches.com</h1>
        </router-link>
      </div>
      <div class="nav-center">
        <div class="search-container">
          <label for="search-input" class="sr-only">Search</label>
          <Search class="search-icon" :size="18" aria-hidden="true" />
          <input 
            id="search-input"
            type="search" 
            placeholder="Search..." 
            class="search-input"
            v-model="searchQuery"
            aria-label="Search"
          />
        </div>
      </div>
      <div class="nav-right">
        <button 
          class="nav-action-btn notification-btn" 
          aria-label="Notifications"
          aria-describedby="notification-count"
        >
          <Bell :size="20" aria-hidden="true" />
          <span id="notification-count" class="notification-badge" v-if="hasNotifications" aria-label="3 unread notifications">3</span>
        </button>
        <button 
          class="user-avatar-btn" 
          aria-label="User menu"
          aria-expanded="false"
        >
          <div class="avatar" aria-hidden="true">
            <User :size="20" />
          </div>
        </button>
        <button 
          class="nav-action-btn app-picker-btn" 
          aria-label="App picker"
          aria-expanded="false"
        >
          <span class="material-symbols-outlined" aria-hidden="true">apps</span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { Search, Bell, User, Package } from 'lucide-vue-next'

const searchQuery = ref('')
const hasNotifications = ref(true)
</script>

<style scoped>
.top-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background: linear-gradient(135deg, var(--gradient-start) 0%, var(--gradient-end) 100%);
  box-shadow: 0 2px 10px var(--shadow);
  z-index: 1000;
}

.nav-container {
  max-width: 1400px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
}

.nav-left {
  display: flex;
  align-items: center;
  flex: 0 0 auto;
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  transition: opacity 0.2s ease;
}

.nav-brand:hover {
  opacity: 0.9;
}

.nav-brand:focus-visible {
  outline: 3px solid var(--text-light);
  outline-offset: 2px;
  border-radius: 4px;
}

.brand-icon {
  color: var(--text-light);
  flex-shrink: 0;
}

.brand-text {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-light);
  letter-spacing: -0.5px;
  white-space: nowrap;
  margin: 0;
}

.nav-center {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
}

.search-container {
  position: relative;
  width: 100%;
  max-width: 500px;
  min-width: 200px;
}

.search-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.8);
  pointer-events: none;
  z-index: 1;
}

.search-input {
  width: 100%;
  padding: 0.6rem 1rem 0.6rem 2.5rem;
  border: none;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  color: var(--text-light);
  font-size: 0.9rem;
  outline: none;
  transition: all 0.3s ease;
}

.search-input::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

.search-input:focus {
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.3);
  outline: 2px solid var(--text-light);
  outline-offset: 2px;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex: 0 0 auto;
}

.nav-action-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: var(--text-light);
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
}

.nav-action-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-1px);
}

.nav-action-btn:focus-visible,
.user-avatar-btn:focus-visible {
  outline: 3px solid var(--text-light);
  outline-offset: 2px;
}

.app-picker-btn .material-symbols-outlined {
  font-size: 24px;
  color: var(--text-light);
}

.notification-btn {
  position: relative;
}

.notification-badge {
  position: absolute;
  top: -4px;
  right: -4px;
  background: #FF4444;
  color: white;
  border-radius: 10px;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: 600;
  border: 2px solid var(--gradient-end);
}

.user-avatar-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  color: var(--text-light);
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 0;
}

.user-avatar-btn:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: scale(1.05);
}

.avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.sr-only {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  clip-path: inset(50%) !important;
  white-space: nowrap !important;
  border-width: 0 !important;
  left: -10000px !important;
}

@media (max-width: 768px) {
  .nav-container {
    padding: 0 1rem;
  }
  
  .nav-center {
    padding: 0 1rem;
  }
  
  .brand-icon {
    width: 20px;
    height: 20px;
  }
  
  .brand-text {
    font-size: 1.1rem;
  }
  
  .search-container {
    min-width: 150px;
  }
  
  .search-input {
    font-size: 0.8rem;
    padding: 0.5rem 0.8rem 0.5rem 2rem;
  }
  
  .search-icon {
    left: 0.8rem;
  }
  
  .nav-action-btn,
  .user-avatar-btn {
    width: 36px;
    height: 36px;
  }
}
</style>


