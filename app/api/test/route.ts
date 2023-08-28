import { NextRequest, NextResponse } from "next/server";
import 'server-only';



export async function GET(_: NextRequest) {
	return NextResponse.json({
		message: 'Hello World'
	});
}
