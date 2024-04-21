<template>
  <div class="documents-container">
    <header class="documents-header">
      <h2>Documents</h2>
      <button class="new-document-btn">Add New Document</button>
    </header>
    <div class="search-and-tools">
      <input type="search" placeholder="Search all columns:" />
      <button>Fields</button>
      <button>Filter</button>
      <button>Sort</button>
      <button>Share View</button>
      <button>More</button>
    </div>
    <table class="documents-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Input File</th>
          <th>Document Type</th>
          <th>Primary Language</th>
          <th>File Group ID</th>
          <th>Filename</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(document, index) in documents" :key="document.id">
          <td>{{ index + 1 }}</td>
          <td><i class="file-icon">📄</i></td>
          <td>{{ document.type }}</td>
          <td>{{ document.language }}</td>
          <td>{{ document.groupId }}</td>
          <td>{{ document.filename }}</td>
        </tr>
      </tbody>
    </table>
    <footer class="pagination-footer">
  <br></br>
  <div class="pagination-controls">
    <button>«</button>
    <button>1</button>
    <button>2</button>
    <button>3</button>
    <button>4</button>
    <button>»</button>
  </div>
</footer>
  </div>
</template>

<script>
export default {
  name: 'Documents',
  data() {
    return {
      documents: [
        // Dummy data
        {
          id: 1,
          type: 'Commercial Invoice',
          language: 'English',
          groupId: '19042024',
          filename: 'validator_17.pdf',
        },
        // More dummy data objects...
      ],
    };
  },
};
</script>

<style scoped>
.documents-container {
  padding: 20px;
  background-color: #fff; /* Assuming a light theme */
  border-radius: 6px; /* Rounded corners for the container */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adding a subtle shadow */
}

.documents-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #eaeaea; /* Separator between header and content */
  margin-bottom: 20px; /* Spacing between header and search/tools */
}

.new-document-btn {
  padding: 10px 20px;
  background-color: #007bff; /* Primary button color */
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  transition: background-color 0.2s; /* Smooth transition for hover effect */
}

.new-document-btn:hover {
  background-color: #0056b3; /* Darker shade on hover */
}

.search-and-tools {
  display: flex;
  align-items: center;
  gap: 10px; /* Space between search input and buttons */
  margin-bottom: 20px; /* Space below the search and tools section */
}

.search-and-tools input {
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 4px; /* Rounded corners */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  outline: none;
  width: 100%;
  max-width: 240px; /* Controls the width of the input */
  transition: border-color 0.3s, box-shadow 0.3s; /* Smooth transition */
}

.search-and-tools input:focus {
  border-color: #3498db; /* Blue border for focus state */
  box-shadow: 0 0 8px rgba(52, 152, 219, 0.5); /* Glowing effect */
}

.search-and-tools button {
  padding: 10px 15px;
  background-color: #3498db; /* Blue background for buttons */
  border: none;
  border-radius: 4px; /* Rounded corners */
  color: white;
  cursor: pointer;
  transition: background-color 0.3s; /* Smooth transition for hover effect */
}

.search-and-tools button:hover {
  background-color: #2980b9; /* Darker blue on hover */
}


.documents-table {
  width: 100%;
  border-collapse: collapse;
}

.documents-table thead {
  background-color: #007bff; /* Header background */
  color: white; /* Header text color */
}

.documents-table th,
.documents-table td {
  padding: 12px;
  border: 1px solid #ddd;
  text-align: left;
}

.pagination-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end; /* Align pagination to the right */
  padding: 20px 0;
  background-color: #f0f0f0; /* Light gray background */
}

.pagination-controls {
  display: flex;
  align-items: center;
  gap: 8px;
}

.pagination-controls button {
  padding: 6px 12px;
  border: 1px solid #3498db; /* Blue border for the buttons */
  background-color: transparent; /* No background fill */
  color: #3498db; /* Blue text to match the border */
  border-radius: 4px; /* Rounded corners */
  cursor: pointer;
  transition: all 0.2s ease-in-out; /* Smooth transition for hover and focus */
}

.pagination-controls button:hover,
.pagination-controls button:focus {
  background-color: #3498db; /* Blue background on hover/focus */
  color: white; /* White text on hover/focus */
}

.pagination-controls button.active {
  background-color: #3498db; /* Blue background for the active page */
  color: white; /* White text for the active page */
  border-color: #3498db; /* Same color for border to blend in */
}

@media (max-width: 768px) {
  .search-and-tools {
    flex-direction: column;
    gap: 5px;
  }

  .search-and-tools input,
  .search-and-tools button {
    width: 100%; /* Full width on smaller screens */
  }
}

/* ... additional styles ... */
</style>