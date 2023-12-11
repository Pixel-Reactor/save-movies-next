'use server'
import DBconn from "@/utils/db";
import { v4 as uuidv4 } from "uuid";
import { cookies } from 'next/headers'

const SetCookie = async () => {
  const randomId = uuidv4();
  const cookie = cookies().get("session_id");
  if (!cookie) {
    cookies().set("session_id", randomId, {
      maxAge: 60 * 60 * 30 * 24,
      httpOnly: true,
    });
  }
 
};

export default SetCookie;
