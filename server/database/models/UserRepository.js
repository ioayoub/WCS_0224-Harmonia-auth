const AbstractRepository = require("./AbstractRepository");

class UserRepository extends AbstractRepository {
  constructor() {
    super({ table: "user" });
  }

  async create(user) {
    const { email, firstname, lastname, password } = user;

    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await this.database.query(
      `insert into ${this.table} (email, firstname, lastname, password) values (?, ?, ?, ?)`,
      [email, firstname, lastname, password]
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }

  async findUserByEmail(email) {
    const [result] = await this.database.query(
      `SELECT firstname, role, password FROM ${this.table} WHERE email = ?`,
      [email]
    );

    return result;
  }
}

module.exports = UserRepository;
