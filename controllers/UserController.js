/** @format */

exports.getAllUsers = (req, res) => {
  let users = [
    { name: "Hamza 1", age: 25 },
    { name: "Hamza 2", age: 25 },
    { name: "Hamza 3", age: 25 },
    { name: "Hamza 4", age: 25 },
  ];
  return res.status(200).json({ message: "Success", users: users }).end();
};
