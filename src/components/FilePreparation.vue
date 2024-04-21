<template>
  <div class="file-preparation-container">
    <header class="file-preparation-header">
      <h2>File Preparation</h2>
      <button class="new-document-btn">Add New Document</button>
    </header>
    <div class="search-and-tools">
      <!-- Search and other header tools -->
      <input type="search" placeholder="Search column" />
      <button>Fields</button>
      <button>Filter</button>
      <button>Sort</button>
      <button>Share View</button>
      <button>More</button>
    </div>
    <table class="file-preparation-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Id</th>
          <th>Filename</th>
          <th>Assigned Shipment ID</th>
          <th>CreatedAt</th>
          <th>UpdatedAt</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(file, index) in files" :key="file.id">
          <td>{{ index + 1 }}</td>
          <td>{{ file.id }}</td>
          <td>{{ file.filename }}</td>
          <td>{{ file.shipmentId }}</td>
          <td>{{ file.createdAt }}</td>
          <td>{{ file.updatedAt }}</td>
        </tr>
      </tbody>
    </table>
    <footer class="pagination-footer">
      <span>67 records</span>
      <div class="pagination-controls">
        <button>«</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>»</button>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'FilePreparation',
  data() {
    return {
      files: [
        // Mock data
        { id: 65, filename: 'kindle-exquisite-mountain-sunrise', shipmentId: 'SHP001', createdAt: '2024-04-19 13:51', updatedAt: '2024-04-19 14:01' },
        { id: 66, filename: 'kindle-exquisite-mountain-sunset', shipmentId: 'SHP002', createdAt: '2024-04-19 13:52', updatedAt: '2024-04-19 14:02' },
        // ... more mock file objects
      ],
    };
  },
};
</script>

<style scoped>
.file-preparation-container {
  padding: 20px;
  background-color: #fff; /* Assuming you want a light theme for the content */
  border-radius: 6px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.file-preparation-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.new-document-btn {
  padding: 10px 20px;
  background-color: #0056b3; /* A more subtle blue */
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s; /* Smooth transition for interactions */
}

.new-document-btn:hover {
  background-color: #003d82; /* A darker blue for hover state */
}

.search-and-tools {
  display: flex;
  gap: 10px;
  margin-bottom: 20px; /* Provide space between search tools and table */
}

.search-and-tools input {
  padding: 10px 15px;
  border: 1px solid #ccc; /* Subtle border */
  border-radius: 4px; /* Rounded corners */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
  outline: none; /* Removes the default focus outline */
  transition: border-color 0.3s, box-shadow 0.3s; /* Smooth transitions for interactions */
}

.search-and-tools input:focus {
  border-color: #3498db; /* Highlights the border in blue when focused */
  box-shadow: 0 0 6px rgba(52, 152, 219, 0.5); /* Glow effect on focus */
}
.search-and-tools button {
  padding: 10px 15px;
  background-color: #3498db; /* Blue background */
  color: white; /* White text */
  border: none;
  border-radius: 4px; /* Rounded corners */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Subtle shadow */
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s; /* Smooth transitions for interactions */
}

.search-and-tools button:hover {
  background-color: #2980b9; /* Slightly darker blue on hover */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Larger shadow on hover for a 'raised' effect */
}

.search-and-tools button:active {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2); /* Smaller shadow for a 'pressed' effect */
}


.file-preparation-table {
  width: 100%;
  border-collapse: separate; /* Use 'separate' instead of 'collapse' to handle cell spacing */
  border-spacing: 0; /* Removes space between cells */
  background-color: #fff;
  border-radius: 4px;
  overflow: hidden; /* Ensures the border-radius affects child elements */
}

.file-preparation-table th,
.file-preparation-table td {
  padding: 15px;
  border-bottom: 2px solid #d0d7de; /* Darker border color for visibility */
  border-right: 1px solid #d0d7de; /* Add right border to cells */
  text-align: left;
}

.file-preparation-table th:last-child,
.file-preparation-table td:last-child {
  border-right: none; /* Remove right border for the last cell */
}

.file-preparation-table thead th {
  background-color: #007bff; /* Blue header for a pop of color */
  color: white;
  font-size: 1rem;
  border-bottom: 3px solid #0056b3; /* Even darker border for the header bottom */
}

.file-preparation-table tbody tr:last-child td {
  border-bottom: none; /* Remove bottom border for the last row */
}

.file-preparation-table tbody tr:hover {
  background-color: #f6f8fa; /* Highlight rows on hover */
}


.pagination-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
}

.pagination-controls {
  display: flex;
  align-items: center;
  gap: 8px;
}

.pagination-controls button {
  padding: 8px 12px;
  border: 1px solid #dee2e6;
  background-color: #fff;
  color: #007bff;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
}

.pagination-controls button:hover {
  background-color: #e9ecef;
}

.pagination-controls button.active {
  background-color: #007bff;
  color: white;
}

/* For mobile responsiveness */
@media (max-width: 768px) {
  .search-and-tools {
    flex-direction: column;
    gap: 5px;
  }

  .search-and-tools button {
    width: 100%; /* Full width for mobile */
  }

  .new-document-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
