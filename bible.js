// function showSelectedBook() {
//     var select = document.getElementById("books");
//     var bookId = select.options[select.selectedIndex].value;
//     if (bookId) {
//       showBook(bookId);
//     }
//   }

//   function showBook(bookId) {
//     var books = document.querySelectorAll('.book');
//     books.forEach(function(book) {
//       book.classList.remove('active');
//     });
//     var selectedBook = document.getElementById(bookId);
//     if (selectedBook) {
//       selectedBook.classList.add('active');
//     }
//   }

// function getBibleChapter() {
//     const version = "esv"; // or any other default version
//     const bookSelect = document.getElementById("books");
//     const chapterSelect = document.getElementById("chapters");
//     const book = bookSelect.options[bookSelect.selectedIndex].value;
//     const chapter = chapterSelect.options[chapterSelect.selectedIndex].value;
//     const endpoint = `https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/${version}/books/${book}/chapters/${chapter}.json`;
//     // Use the endpoint to fetch the data
//     fetch(endpoint)
//       .then(response => response.json())
//       .then(data => console.log(data))
//       .catch(error => console.error(error));
//   }

// function getBibleChapter() {
//   const version = "esv"; // or any other default version
//   const bookSelect = document.getElementById("books");
//   const chapterSelect = document.getElementById("chapters");
//   const book = bookSelect.value;
//   const chapter = chapterSelect.value;
//   const endpoint = `https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/${version}/books/${book}/chapters/${chapter}.json`;
//   // Use the endpoint to fetch the data
//   fetch(endpoint)
//     .then((response) => response)
//     .then((data) => console.log(data))
//     .catch((error) => console.error(error));
// }
const books = [
  { "book": "Genesis", "chapters": Array.from({ length: 50 }, (_, i) => i + 1) },
  { "book": "Exodus", "chapters": Array.from({ length: 40 }, (_, i) => i + 1) },
  { "book": "Leviticus", "chapters": Array.from({ length: 27 }, (_, i) => i + 1) },
  { "book": "Numbers", "chapters": Array.from({ length: 36 }, (_, i) => i + 1) },
  { "book": "Deuteronomy", "chapters": Array.from({ length: 34 }, (_, i) => i + 1) },
  { "book": "Joshua", "chapters": Array.from({ length: 24 }, (_, i) => i + 1) },
  { "book": "Judges", "chapters": Array.from({ length: 21 }, (_, i) => i + 1) },
  { "book": "Ruth", "chapters": Array.from({ length: 4 }, (_, i) => i + 1) },
  { "book": "1 Samuel", "chapters": Array.from({ length: 31 }, (_, i) => i + 1) },
  { "book": "2 Samuel", "chapters": Array.from({ length: 24 }, (_, i) => i + 1) },
  { "book": "1 Kings", "chapters": Array.from({ length: 22 }, (_, i) => i + 1) },
  { "book": "2 Kings", "chapters": Array.from({ length: 25 }, (_, i) => i + 1) },
  { "book": "1 Chronicles", "chapters": Array.from({ length: 29 }, (_, i) => i + 1) },
  { "book": "2 Chronicles", "chapters": Array.from({ length: 36 }, (_, i) => i + 1) },
  { "book": "Ezra", "chapters": Array.from({ length: 10 }, (_, i) => i + 1) },
  { "book": "Nehemiah", "chapters": Array.from({ length: 13 }, (_, i) => i + 1) },
  { "book": "Esther", "chapters": Array.from({ length: 10 }, (_, i) => i + 1) },
  { "book": "Job", "chapters": Array.from({ length: 42 }, (_, i) => i + 1) },
  { "book": "Psalms", "chapters": Array.from({ length: 150 }, (_, i) => i + 1) },
  { "book": "Proverbs", "chapters": Array.from({ length: 31 }, (_, i) => i + 1) },
  { "book": "Ecclesiastes", "chapters": Array.from({ length: 12 }, (_, i) => i + 1) },
  { "book": "Song of Solomon", "chapters": Array.from({ length: 8 }, (_, i) => i + 1) },
  { "book": "Isaiah", "chapters": Array.from({ length: 66 }, (_, i) => i + 1) },
  { "book": "Jeremiah", "chapters": Array.from({ length: 52 }, (_, i) => i + 1) },
  { "book": "Lamentations", "chapters": Array.from({ length: 5 }, (_, i) => i + 1) },
  { "book": "Ezekiel", "chapters": Array.from({ length: 48 }, (_, i) => i + 1) },
  { "book": "Daniel", "chapters": Array.from({ length: 12 }, (_, i) => i + 1) },
  { "book": "Hosea", "chapters": Array.from({ length: 14 }, (_, i) => i + 1) },
  { "book": "Joel", "chapters": Array.from({ length: 3 }, (_, i) => i + 1) },
  { "book": "Amos", "chapters": Array.from({ length: 9 }, (_, i) => i + 1) },
  { "book": "Obadiah", "chapters": Array.from({ length: 1 }, (_, i) => i + 1) },
  { "book": "Jonah", "chapters": Array.from({ length: 4 }, (_, i) => i + 1) },
  { "book": "Micah", "chapters": Array.from({ length: 7 }, (_, i) => i + 1) },
  { "book": "Nahum", "chapters": Array.from({ length: 3 }, (_, i) => i + 1) },
  { "book": "Habakkuk", "chapters": Array.from({ length: 3 }, (_, i) => i + 1) },
  { "book": "Zephaniah", "chapters": Array.from({ length: 3 }, (_, i) => i + 1) },
  { "book": "Haggai", "chapters": Array.from({ length: 2 }, (_, i) => i + 1) },
  { "book": "Zechariah", "chapters": Array.from({ length: 14 }, (_, i) => i + 1) },
  { "book": "Malachi", "chapters": Array.from({ length: 4 }, (_, i) => i + 1) },
  { "book": "Matthew", "chapters": Array.from({ length: 28 }, (_, i) => i + 1) },
  { "book": "Mark", "chapters": Array.from({ length: 16 }, (_, i) => i + 1) },
  { "book": "Luke", "chapters": Array.from({ length: 24 }, (_, i) => i + 1) },
  { "book": "John", "chapters": Array.from({ length: 21 }, (_, i) => i + 1) },
  { "book": "Acts", "chapters": Array.from({ length: 28 }, (_, i) => i + 1) },
  { "book": "Romans", "chapters": Array.from({ length: 16 }, (_, i) => i + 1) },
  { "book": "1 Corinthians", "chapters": Array.from({ length: 16 }, (_, i) => i + 1) },
  { "book": "2 Corinthians", "chapters": Array.from({ length: 13 }, (_, i) => i + 1) },
  { "book": "Galatians", "chapters": Array.from({ length: 6 }, (_, i) => i + 1) },
  { "book": "Ephesians", "chapters": Array.from({ length: 6 }, (_, i) => i + 1) },
  { "book": "Philippians", "chapters": Array.from({ length: 4 }, (_, i) => i + 1) },
  { "book": "Colossians", "chapters": Array.from({ length: 4 }, (_, i) => i + 1) },
  { "book": "1 Thessalonians", "chapters": Array.from({ length: 5 }, (_, i) => i + 1) },
  { "book": "2 Thessalonians", "chapters": Array.from({ length: 3 }, (_, i) => i + 1) },
  { "book": "1 Timothy", "chapters": Array.from({ length: 6 }, (_, i) => i + 1) },
  { "book": "2 Timothy", "chapters": Array.from({ length: 4 }, (_, i) => i + 1) },
  { "book": "Titus", "chapters": Array.from({ length: 3 }, (_, i) => i + 1) },
  { "book": "Philemon", "chapters": Array.from({ length: 1 }, (_, i) => i + 1) },
  { "book": "Hebrews", "chapters": Array.from({ length: 13 }, (_, i) => i + 1) },
  { "book": "James", "chapters": Array.from({ length: 5 }, (_, i) => i + 1) },
  { "book": "1 Peter", "chapters": Array.from({ length: 5 }, (_, i) => i + 1) },
  { "book": "2 Peter", "chapters": Array.from({ length: 3 }, (_, i) => i + 1) },
  { "book": "1 John", "chapters": Array.from({ length: 5 }, (_, i) => i + 1) },
  { "book": "2 John", "chapters": Array.from({ length: 1 }, (_, i) => i + 1) },
  { "book": "3 John", "chapters": Array.from({ length: 1 }, (_, i) => i + 1) },
  { "book": "Jude", "chapters": Array.from({ length: 1 }, (_, i) => i + 1) },
  { "book": "Revelation", "chapters": Array.from({ length: 22 }, (_, i) => i + 1) }
];


document.addEventListener("DOMContentLoaded", () => {
  populateBooks();
});

function populateBooks() {
  const booksSelect = document.getElementById("books");
  books.forEach((book, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = book.book;
    booksSelect.appendChild(option);
  });
  populateChapters();
}

function populateChapters() {
  const booksSelect = document.getElementById("books");
  const chaptersSelect = document.getElementById("chapters");
  const selectedBookIndex = booksSelect.value;
  const chapters = books[selectedBookIndex].chapters;

  chaptersSelect.innerHTML = "";
  chapters.forEach((chapter) => {
    const option = document.createElement("option");
    option.value = chapter;
    option.textContent = `Chapter ${chapter}`;
    chaptersSelect.appendChild(option);
  });

  displayBibleText();
}

async function displayBibleText() {
  const booksSelect = document.getElementById("books");
  const chaptersSelect = document.getElementById("chapters");
  const selectedBookIndex = booksSelect.value;
  const selectedChapter = chaptersSelect.value;
  const selectedBook = books[selectedBookIndex].book;

  const bibleText = document.getElementById("bibleText");
  bibleText.innerHTML = `<h2>${selectedBook} ${selectedChapter}</h2><p>Loading...</p>`;


 var bibleBook = selectedBook.replace(/\s/g, '').toLowerCase();

console.log(bibleBook);
  try {
    const response = await fetch(
      `https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/en-asv/books/${bibleBook}/chapters/${selectedChapter}.json`
    );
    // const response = await fetch(`https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/en-asv/books/genesis/chapters/1.json`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    console.log(data);
    bibleText.innerHTML = `<h2>${selectedBook} ${selectedChapter}</h2>`;
    data.data.forEach((verse) => {
      const p = document.createElement("p");
      p.textContent = `${verse.verse}: ${verse.text}`;
      bibleText.appendChild(p);
    });
  } catch (error) {
    console.error("Error fetching Bible data:", error);
    bibleText.innerHTML = `<h2>${selectedBook} ${selectedChapter}</h2><p>Sorry, an error occurred while loading the content.</p>`;
  }
}
