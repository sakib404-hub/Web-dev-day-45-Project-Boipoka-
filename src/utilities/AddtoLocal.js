// ReadList
const getStoredBookFromLocalStorage = () => {
  const bookDataJson = localStorage.getItem("readList");

  if (bookDataJson) {
    const bookData = JSON.parse(bookDataJson);
    return bookData;
  } else {
    return [];
  }
};

const addToLocalStorage = (id) => {
  const storedBooks = getStoredBookFromLocalStorage();
  const exists = storedBooks.some((bookId) => bookId === String(id));
  if (exists) {
    alert("Bhai Id is already added to the readlist!");
  } else {
    storedBooks.push(String(id));
    localStorage.setItem("readList", JSON.stringify(storedBooks));
  }
};
// WishList
const getWishListFromLocalStorage = () => {
  const wishList = localStorage.getItem("wishList");

  return wishList ? JSON.parse(wishList) : [];
};

const addToWishListLocalStorage = (id) => {
  const wishList = getWishListFromLocalStorage();

  const exists = wishList.some((bookId) => Number(bookId) === id);

  if (exists) {
    alert("Bhai Book Id is already in the WishList");
  } else {
    wishList.push(String(id));
    localStorage.setItem("wishList", JSON.stringify(wishList));
  }
};

export {
  addToLocalStorage,
  addToWishListLocalStorage,
  getStoredBookFromLocalStorage,
  getWishListFromLocalStorage,
};
