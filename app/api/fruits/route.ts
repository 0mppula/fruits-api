import { fruits as _fruits } from '@/app/constants';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
	let fruits = _fruits;

	// get the query from the url
	const { searchParams } = new URL(request.url);
	const q = searchParams.get('q');

	if (q) {
		fruits = _fruits.filter((fruit) => fruit.toLowerCase().includes(q.toLowerCase()));
	}

	return NextResponse.json({ data: fruits }, { status: 200 });
}
