<template>
  <div id="app">
    <Sidebar class="sidebar"/>
    <div class="main-content">
      <router-view />
      <!-- The <router-view> element will render the matched component for the given path -->
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue';

export default {
  name: 'App',
  components: {
    Sidebar
  }
};
</script>

<style>
#app {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  flex: 0 0 250px;
  /* Your sidebar styles */
}

.main-content {
  flex-grow: 1;
  /* Your main content styles */
}
</style>
