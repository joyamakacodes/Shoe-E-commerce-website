// import {generateId} from "./app.js"

// const tblUsers = 'Users'
// let users = []

// let userIcon = document.querySelector('.user-icon')
// userIcon.addEventListener('click', create())

// // CREATE
// const create =(fname, lname, email, password) =>{
//    let usersTable = JSON.parse(localStorage.getItem(tblUsers))  
//    if(usersTable.usersList.find(e=>e.email ===email)) return "Email already in use";
//    let id = generateId(tblUsers) 

//    let user = {
//     id: id,
//     firstname: fname,
//     lastname: lname,
//     email: email,
//     password: password,    
//     };
// }
// usersTable.pointer = user.id;
// usersTable.usersList.push(user);

// localStorage.setItem(tblUsers, JSON.stringify(usersTable));

// // Read All
// const readAll = ()=> JSON.parse(localStorage.getItem(tblUsers));

// // Read Single
// const findUser = (userId)=>{
//     let allUsers = readAll();

//     let user = allUsers.usersList.find(i=>i.id === userId);
//     return user;
// }

// const update = (id, fname, lname) =>{
//     let userToBeUpdated = findUser(id);

// if(!userToBeUpdated) return "Account not found";

// let users = readAll()
// let userIndex = users.usersList.indexOf(userToBeUpdated)

// userToBeUpdated.firstname = fname;
// userToBeUpdated.lastname = lname;


// users.usersList.pop(userIndex);
// users.usersList.push(userToBeUpdated);


// localStorage.setItem(tblUsers, JSON.stringify(users));

// }

// // DELETE

// const Delete = (id) =>{
//     let userToBeDeleted = findUser(id);

//     if(!userToBeDeleted) return "Account to be deleted not found";

//     let users = readAll();
//     let userIndex = users.usersList.indexOf(userToBeDeleted);

//     let c = users.usersList.pop(userIndex);

//     localStorage.setItem(tblUsers, JSON.stringify(users));
// }

// let tempTable = {
//     pointer: 0,
//     usersList: []
// };

// const Login = (email, password) =>{
//     let allUsers = readAll()

//     // check if account exist
//     let userAccount = allUsers.usersList.find(e=>e.mail === email)

//     if(!userAccount) return "User account not found"

//     if(userAccount.password === password) return true

//     return "Email and password does not match"
// }

// export const User = {
//     Auth: {
//         signup: (fname, lname, email, password) => create(fname, lname, email, password),
//         login: (email, password) => Login(email, password)
//     },

//     fetchUsers: readAll(),
//     getSingleUser: (userId) => findUser(userId),
//     updateUser: (id, fname, lname) => update(id, fname. lname),
//     delete: (id)=>Delete(id)
// }

// // let cart = {
// //     id: 1,
// //     productId: 12,
// //     quantity: 2,
// //     userId: 4,
// // }

// // let product = {
// //     id: 12,
// //     name: "sneakers",
// //     price: 2500,
// //     description: "efd newjewknmefwjnjnef   ewqkjejnj"
// // }


// // function readCart(userId){

// // }