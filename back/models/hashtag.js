module.exports = (sequelize, DataTypes) => {
  const HashTag = sequelize.define(
    "HashTag",
    {
      content: {},
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
    }
  );
  HashTag.associate = (db) => {};
  return User;
};
