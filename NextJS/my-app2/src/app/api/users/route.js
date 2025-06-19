import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(
    { message: 'Fetching users' },
    { status: 200 }
  );
}

export async function POST(request) {
  const data = await request.json();
  return NextResponse.json(
    { message: 'Creating user', data },
    { status: 201 }
  );
}

export async function PUT(request) {
  const data = await request.json();
  return NextResponse.json(
    { message: 'Updating user', data },
    { status: 200 }
  );
}

export async function DELETE(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  return NextResponse.json(
    { message: 'Deleting user', id },
    { status: 200 }
  );
}