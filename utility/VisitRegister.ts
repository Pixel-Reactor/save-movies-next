"use server";
import DBconn from "@/utils/db";
import { uuid } from "uuidv4";
import { cookies } from "next/headers";
import { v4 as uuidv4 } from "uuid";

const VisitRegister = async () => {
  const connection =await  DBconn();
  const cookie = cookies().get("session_id");  
  const id = uuidv4();
  const randomUser = uuidv4()
  if (cookie && cookie.value) {
    const [visit] = await connection.query("INSERT INTO VISIT(visit_id,user_id) VALUES(?,?)",
      [id, cookie.value || id]
    );
  }


};

export default VisitRegister;
