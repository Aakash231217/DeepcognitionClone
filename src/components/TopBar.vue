<template>
  <header class="top-bar">
    <img src="" alt="Company Logo" class="logo" />
    <div class="spacer"></div>
    <div class="user-options" @click="toggleDropdown">
      <!-- Icon for user/account options -->
      ⚙️
      <div class="dropdown" v-if="showDropdown">
        <ul>
          <li>Connect with Deep Cognition</li>
          <li>Settings</li>
          <li>App Details</li>
          <li>Application logs</li>
          <li>Logout</li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TopBar',
  data() {
    return {
      showDropdown: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    }
  }
};
</script>

<style scoped>
.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1a1a1a;
  padding: 0 1rem;
  position: relative;
}

.logo {
  height: 40px;
}

.user-options {
  position: relative;
  font-size: 1.5rem;
  cursor: pointer;
  margin-left: auto; /* This will push the gear icon to the right */
}

.dropdown {
  position: absolute;
  top: 100%;
  left: 0; /* Align the dropdown to the left side */
  transform: translateX(-100%); /* Shift the dropdown to the left by its own width */
  background-color: #333;
  border: 1px solid #474747;
  border-radius: 5px;
  width: 200px;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.dropdown ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.dropdown ul li {
  padding: 10px;
  border-bottom: 1px solid #474747;
  color: white;
}

.dropdown ul li:hover {
  background-color: #555;
}

.dropdown ul li:last-child {
  border-bottom: none;
}
</style>


