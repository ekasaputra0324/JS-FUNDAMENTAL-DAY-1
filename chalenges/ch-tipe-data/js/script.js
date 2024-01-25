var userInput = prompt("Masukkan angka atau huruf:");
if (!isNaN(userInput)) {
  console.log("This is the type of data: Integer");
} else {
  console.log("This is the type of data: String");
}