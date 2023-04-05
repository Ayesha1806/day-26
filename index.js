function extractTitleAndAuthor(books, ...args) {
    const newBooks = books.map(({ title, author }) => ({ title, author }));
    console.log(...newBooks, ...args);
  }
  function multiply(x, y) {
    return x * y;
  }
  const multiply = (x, y) => x * y;
    