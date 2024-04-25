import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const session = await getServerSession();

    console.log(session);

    return NextResponse.json({
        id: 1,
    });
}