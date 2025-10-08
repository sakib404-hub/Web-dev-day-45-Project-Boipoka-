// ReadList
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

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
    Swal.fire({
      title: "Bhai Item Already Exist you can not add it again!",
      icon: "success",
      draggable: true,
    });
  } else {
    Swal.fire({
      title: "Book Added to the Read List!!",
      icon: "success",
      draggable: true,
    });
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
    Swal.fire({
      title: "Bhai Item Already Exist you can not add it again!",
      icon: "success",
      draggable: true,
    });
  } else {
    Swal.fire({
      title: "Book Added to the Wish List!!",
      icon: "success",
      draggable: true,
    });
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
