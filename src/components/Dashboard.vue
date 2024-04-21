<template>
  <div class="dashboard">
    <h1 class="dashboard-title">Dashboard</h1>
    <div class="summary-cards">
      <div class="card total-documents">
        <div class="card-icon">📊</div>
        <div class="card-details">
          <div class="card-value">62</div>
          <div class="card-label">Total Documents</div>
        </div>
      </div>
      <!-- ... other cards ... -->
    </div>
    <div class="charts">
      <div class="chart documents-processed">Documents Processed Chart</div>
      <div class="chart top-suppliers">Top 10 Suppliers Chart</div>
    </div>
    <!-- Additional content can go here -->
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  // You might have data, computed properties, methods, etc. here
};
</script>

<style scoped>
.dashboard {
  padding: 2rem;
  color: #ffffff;
  background-color: #1a1a1a; /* Assuming a dark theme from the screenshot */
}

.dashboard-title {
  margin-bottom: 2rem;
}

.summary-cards {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
}

.card {
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: #252525; /* Slightly lighter than the background */
  border-radius: 8px;
  width: 100%; /* Adjust as needed, depending on your layout */
  margin-right: 1rem;
}

.card:last-child {
  margin-right: 0;
}

.card-icon {
  font-size: 2rem;
  margin-right: 1rem;
}

.card-details {
  text-align: left;
}

.card-value {
  font-size: 2rem;
  font-weight: bold;
}

.card-label {
  font-size: 1rem;
}

.charts {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Two charts side by side */
  grid-gap: 1rem;
}

.chart {
  padding: 1rem;
  background-color: #252525; /* Slightly lighter than the background */
  border-radius: 8px;
  height: 200px; /* Adjust based on content */
  /* You will replace these placeholders with actual chart components */
}

/* Add more styles as needed to match the specifics of your design */
</style>
