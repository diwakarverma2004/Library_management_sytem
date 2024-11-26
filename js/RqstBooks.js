import { initializeApp } from '/Users/diwakarverma/Downloads/Minor project/node_modules/@firebase/app';
import {
 getFirestore, collection, getDocs, getDatabase
} from '/Users/diwakarverma/Downloads/Minor project/node_modules/@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBRNHN4-796R_PV72zvE9n8FfNtQPIZfRM",
  authDomain: "lab-website-4a6be.firebaseapp.com",
  // databaseURL: "https://console.firebase.google.com/u/0/project/lab-website-4a6be/firestore/databases/-default-/data/~2FIssuedBookDetail~2F19YG7b75WLllgb7gqbmq",
  projectId: "lab-website-4a6be",
  storageBucket: "lab-website-4a6be.appspot.com",
  messagingSenderId: "470033430724",
  appId: "1:470033430724:web:63c7d900da0a6730197191"
};

// establish connection
 const app = initializeApp(firebaseConfig);
  
// connection where to service from
 const db = getFirestore(app);  

 const populateTable = async () => {
  try {
    const colRef = collection(db, "requested_book");
    const snapshot = await getDocs(colRef);

    // Reference to the table body
    const tableBody = document.getElementById("tbody");

    // Clear existing rows (if any)
    tableBody.innerHTML = "";

    // Populate rows dynamically
    let serialNumber = 1;
    snapshot.docs.forEach((doc) => {
      const bookData = doc.data();
      console.log(bookData);
      const row = document.createElement("tr");

      // Create table cells
      const serialCell = document.createElement("td");
      serialCell.textContent = serialNumber++;

      const titleCell = document.createElement("td");
      titleCell.textContent = bookData.title || "N/A";

      const authorCell = document.createElement("td");
      authorCell.textContent = bookData.author;

      const genreCell = document.createElement("td");
      genreCell.textContent = bookData.genre || "N/A";

      const statusCell = document.createElement("td");
      statusCell.textContent = bookData.status || "N/A";

      const accessionCell = document.createElement("td");
      accessionCell.textContent = bookData.accessionNo || "N/A";

      // Append cells to the row
      row.appendChild(serialCell);
      row.appendChild(titleCell);
      row.appendChild(authorCell);
      row.appendChild(genreCell);
      row.appendChild(statusCell);
      row.appendChild(accessionCell);

      // Append row to the table body
      tableBody.appendChild(row);
    });
  } catch (error) {
    console.error("Error fetching requested books:", error.message);
  }
};

// Call the function to populate the table
populateTable();