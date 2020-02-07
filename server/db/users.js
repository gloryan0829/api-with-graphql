let users = [
  {
    id: "0",
    name: "lee",
    age: 18,
    gender: "female"
  },
  {
    id: "1",
    name: "kim",
    age: 18,
    gender: "female"
  },
  {
    id: "2",
    name: "park",
    age: 18,
    gender: "male"
  },
  {
    id: "3",
    name: "yoo",
    age: 18,
    gender: "male"
  },
  {
    id: "4",
    name: "han",
    age: 18,
    gender: "male"
  },
  {
    id: "5",
    name: "ko",
    age: 18,
    gender: "male"
  },
  {
    id: "6",
    name: "so",
    age: 18,
    gender: "male"
  }
];

export const getUsers = () => users;
export const getUserById = id =>
  users.filter(user => String(id) === user.id)[0];
export const addUser = (name, age, gender) => {
  const lastItem = users[users.length - 1];
  const newUser = {
    id: lastItem.id + 1,
    name,
    age,
    gender
  };
  users.push(newUser);
  return newUser;
};
export const deleteUser = (id) => {
    const changedUsers = users.filter(user => user.id !== id);
    users = [...changedUsers];
    return users.length !== changedUsers.length;
};
