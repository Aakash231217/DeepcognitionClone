<template>
  <aside class="sidebar">
    <nav class="nav-menu">
      <ul>
        <li v-for="item in menuItems" :key="item.text" class="nav-item">
          <router-link :to="item.path" class="nav-link" active-class="active">
            <span v-if="item.icon" class="icon">{{ item.icon }}</span>
            <span class="title">{{ item.text }}</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      menuItems: [
        { icon: '📥', text: 'Inbox', path: '/inbox' },
        { icon: '📁', text: 'File Preparation', path: '/file-preparation' },
        { icon: '📄', text: 'Documents', path: '/documents' },
        { icon: '📊', text: 'Dashboard', path: '/dashboard' }, // Dashboard item added
        // Add other menu items here
      ],
    };
  },
};
</script>

<style scoped>
.sidebar {
  width: 250px;
  background-color: #2c3e50; /* Or your choice of sidebar color */
  color: white;
  height: 100vh; /* Full height */
  overflow: auto; /* Adds scroll */
}

.nav-menu {
  list-style-type: none;
  padding: 0;
}

.nav-item {
  padding: 16px 20px;
  border-bottom: 1px solid #34495e; /* Slight border for each item */
}

.nav-link {
  text-decoration: none;
  color: white;
  display: flex;
  align-items: center;
  transition: background-color 0.3s; /* Smooth transition for hover effect */
}

.nav-link.active {
  background-color: #1abc9c; /* Highlight color for active menu item */
}

.icon {
  margin-right: 10px;
  /* Optionally set a font-size if icons are text */
}

.title {
  /* Any additional styling for the text */
}
</style>
