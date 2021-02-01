const API_KEY = '$2b$10$9WjiiP.4urgSZ6aU34lFAeqUhcOwQ6o1UdiaIjhNhHaLC4ccWXnnW'; // Assign this variable to your JSONBIN.io API key if you choose to use it.
const DB_NAME = "my-todo";

// Gets data from persistent storage by the given key and returns it
async function getPersistent(key) {
  const res = await fetch('https://api.jsonbin.io/b/6017ee21dde2a87f921bb52c');
  const text = await res.text();
  console.log(text);

  

  return [];

}

// Saves the given data into persistent storage by the given key.
// Returns 'true' on success.
async function setPersistent(key, data) {
  return true;
}
