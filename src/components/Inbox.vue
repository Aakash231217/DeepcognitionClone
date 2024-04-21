<template>
  <div class="inbox-container">
    <header class="inbox-header">
      <h2>Inbox</h2>
      <!-- The following is a placeholder for search and other tools -->
      <div class="header-tools">
        <input type="text" placeholder="Search all columns:" />
        <button>Fields</button>
        <button>Filter</button>
        <button>Sort</button>
        <button>Share View</button>
        <button>More</button>
      </div>
    </header>
    <div class="inbox-content">
      <table class="inbox-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Id</th>
            <th>Created At</th>
            <th>Updated At</th>
            <th>From</th>
            <th>Sent To</th>
          </tr>
        </thead>
        <tbody>
          <!-- Example row (you'll generate rows based on your data) -->
          <tr>
            <td>1</td>
            <td>39</td>
            <td>2024-04-19 13:51</td>
            <td>2024-04-19 13:51</td>
            <td>Talari Mahesh Babu</td>
            <td>talari.babu@deepcognition.ai</td>
          </tr>
           <tr>
            <td>1</td>
            <td>39</td>
            <td>2024-04-19 13:51</td>
            <td>2024-04-19 13:51</td>
            <td>Talari Mahesh Babu</td>
            <td>talari.babu@deepcognition.ai</td>
          </tr>
           <tr>
            <td>1</td>
            <td>39</td>
            <td>2024-04-19 13:51</td>
            <td>2024-04-19 13:51</td>
            <td>Talari Mahesh Babu</td>
            <td>talari.babu@deepcognition.ai</td>
          </tr>
           <tr>
            <td>1</td>
            <td>39</td>
            <td>2024-04-19 13:51</td>
            <td>2024-04-19 13:51</td>
            <td>Talari Mahesh Babu</td>
            <td>talari.babu@deepcognition.ai</td>
          </tr>
           <tr>
            <td>1</td>
            <td>39</td>
            <td>2024-04-19 13:51</td>
            <td>2024-04-19 13:51</td>
            <td>Talari Mahesh Babu</td>
            <td>talari.babu@deepcognition.ai</td>
          </tr>
           <tr>
            <td>1</td>
            <td>39</td>
            <td>2024-04-19 13:51</td>
            <td>2024-04-19 13:51</td>
            <td>Talari Mahesh Babu</td>
            <td>talari.babu@deepcognition.ai</td>
          </tr>
           <tr>
            <td>1</td>
            <td>39</td>
            <td>2024-04-19 13:51</td>
            <td>2024-04-19 13:51</td>
            <td>Talari Mahesh Babu</td>
            <td>talari.babu@deepcognition.ai</td>
          </tr>
           <tr>
            <td>1</td>
            <td>39</td>
            <td>2024-04-19 13:51</td>
            <td>2024-04-19 13:51</td>
            <td>Talari Mahesh Babu</td>
            <td>talari.babu@deepcognition.ai</td>
          </tr>
           <tr>
            <td>1</td>
            <td>39</td>
            <td>2024-04-19 13:51</td>
            <td>2024-04-19 13:51</td>
            <td>Talari Mahesh Babu</td>
            <td>talari.babu@deepcognition.ai</td>
          </tr>
           <tr>
            <td>1</td>
            <td>39</td>
            <td>2024-04-19 13:51</td>
            <td>2024-04-19 13:51</td>
            <td>Aakash Singh</td>
            <td>aakash.singh@deepcognition.ai</td>
          </tr>
           <tr>
            <td>1</td>
            <td>39</td>
            <td>2024-04-19 13:51</td>
            <td>2024-04-19 13:51</td>
            <td>Neha</td>
            <td>Neha.bhatt@deepcognition.ai</td>
          </tr>
           <tr>
            <td>12</td>
            <td>4</td>
            <td>2024-04-19 13:51</td>
            <td>2024-04-19 13:51</td>
            <td>Talari Mahesh Babu</td>
            <td>talari.babu@deepcognition.ai</td>
          </tr>
          <!-- ... more rows ... -->
        </tbody>
      </table>
      <div class="pagination-controls">
        <button>«</button>
        <button class="active">1</button>
        <button>2</button>
        <!-- ... -->
        <button>»</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Inbox',
  // component data and methods here
};
</script>

<style scoped>
.inbox-container {
  font-family: Arial, sans-serif;
  margin: 1em;
}

.inbox-header {
  display: flex;
  align-items: center;
  margin-bottom: 1em;
}

.inbox-header h2 {
  margin: 0;
  flex: 1;
}

.header-tools {
  display: flex;
  gap: 0.5em;
}

.header-tools input,
.header-tools button {
  padding: 0.5em;
  margin-left: 0.5em;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.header-tools button {
  background: #3498db;
  color: white;
  cursor: pointer;
}

.header-tools button:hover {
  background: #2980b9;
}

.inbox-table {
  width: 100%;
  border-collapse: collapse;
}

.inbox-table thead {
  background-color: #f3f3f3;
}

.inbox-table th,
.inbox-table td {
  text-align: left;
  padding: 8px;
  border-bottom: 1px solid #ddd;
}

.pagination-controls {
  text-align: center;
  margin-top: 1em;
}

.pagination-controls button {
  padding: 0.5em 1em;
  margin-right: 0.5em;
  border: none;
  background-color: #3498db;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

.pagination-controls button.active {
  background-color: #2980b9;
}

.pagination-controls button:hover {
  background-color: #2471a3;
}
</style>
