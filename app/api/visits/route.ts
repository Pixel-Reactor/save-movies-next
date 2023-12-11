import { NextResponse,NextRequest } from "next/server";
import DBconn from "@/utils/db";
export async function GET(request:NextRequest,res:NextResponse){
    try {
        const connection =await  DBconn();
        const [getAll] = await connection.query('SELECT COUNT(*) as total FROM visit;');
        console.log(getAll);
        const [getUnique] = await connection.query('SELECT COUNT(DISTINCT user_id) as unique_count FROM visit ;');
        console.log(getUnique)
        return NextResponse.json({all:getAll[0].total,uniques:getUnique[0].unique_count})
    } catch (error) {
        console.log(error)
        return NextResponse.json({message:'hello'})
    }
   

}