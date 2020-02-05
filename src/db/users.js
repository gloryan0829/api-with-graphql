export const users = [
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
export const getUserById = (id) => users.filter(person => String(id) === person.id)[0];
