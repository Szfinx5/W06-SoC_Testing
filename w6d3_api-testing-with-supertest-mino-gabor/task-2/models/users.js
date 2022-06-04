/**
 * For simplicity we're temporarily back to using an in-memory array (rather than an actual database).
 */
const users = [
  { id: 0, username: "Agatha" },
  { id: 1, username: "Barbara" },
  { id: 2, username: "Chase" },
  { id: 3, username: "David" },
  { id: 4, username: "Elvis" },
  { id: 5, username: "Fiona" },
  { id: 6, username: "Greg" },
  { id: 7, username: "Harry" },
  { id: 8, username: "Ivan" },
  { id: 9, username: "John" },
  { id: 10, username: "Kiera" },
];

export function getUsers() {
  return users;
}

export function getUserById(idToFind) {
  return users.find(function (user) {
    return user.id === idToFind;
  });
}
