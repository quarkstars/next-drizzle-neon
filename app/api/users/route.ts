import { db } from "@/drizzle/db";
import { SelectedUser } from "@/drizzle/types";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
	try {
		const result = await db.query.users.findMany();
		return NextResponse.json({ data: result, error: null });
	} catch (error: unknown) {
		return NextResponse.json({ error, data: null });
	}
}
