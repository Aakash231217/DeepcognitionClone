<template>
  <div id="app">
    <TopBar /> <!-- TopBar at the top -->
    <div class="main-container">
      <Sidebar class="sidebar"/> <!-- Sidebar on the side -->
      <div class="content">
        <router-view />
        <!-- This is where the content of your routed components will appear -->
      </div>
    </div>
    <footer class="footer">
      <button class="help-support-btn">Help & Support</button>
      <div class="company-info">
        v5.0.1 | 2024 © Deep Cognition
      </div>
    </footer>
  </div>
</template>

<script>
import TopBar from './components/TopBar.vue'; // Make sure the path is correct
import Sidebar from './components/Sidebar.vue'; // Make sure the path is correct

export default {
  components: {
    TopBar,
    Sidebar
    // Add other components here as needed
  }
};
</script>

<style>
/* App and layout styles */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-container {
  flex-grow: 1;
  display: flex; /* Aligns TopBar and Sidebar side by side */
}

.content {
  flex-grow: 1; /* Takes up the remaining space */
  padding: 20px; /* Adjust as needed for your layout */
}

/* Footer styles */
.footer {
  background-color: #2c3e50; /* Footer background color */
  color: white; /* Footer text color */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem; /* Adjust padding as needed */
}

.help-support-btn {
  background-color: #3498db; /* Blue background for the button */
  color: white; /* White text for the button */
  border: none;
  padding: 0.5rem 1rem; /* Adjust button padding as needed */
  border-radius: 4px; /* Rounded corners for the button */
  font-size: 0.875rem; /* Adjust font size as needed */
  cursor: pointer;
}

.help-support-btn:hover {
  background-color: #2980b9; /* Darker blue on hover for the button */
}

.company-info {
  /* Styles for the company info text */
}
</style>
