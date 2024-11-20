import { query } from "./pg.js";

async function getUsersById(id) {
  const sql = ` select * from datas
      where id = $1  `;
  const result = await query(sql, [id]);
  return result.rows;
}

async function insertUser(userName, Password) {
  const sql = ` insert into datas 
   (user_name , password)  values 
    ($1 , $2) ; `;

  const result = await query(sql, [userName, Password]);
  return result;
}
async function updateUser(id, userName, Password) {
  const sql = ` update datas 
set user_name = $2,
    password = $3
    where id = $1`;
  const result = await query(sql, [id, userName, Password]);
  return result;
}

async function deleteUser(id) {
  const sql = ` delete from datas
    where id = $1`;
  const result = await query(sql, [id]);
  return result;
}

export { getUsersById, insertUser, updateUser, deleteUser };
