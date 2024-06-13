import { type NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;

  let page = searchParams.get('page');
  let limit = searchParams.get('limit');

  if (!page) {
    page = '1';
  }

  if (!limit) {
    limit = '10';
  }

  const params = new URLSearchParams({
    page,
    limit,
  });

  const resp = await fetch(`${process.env.BACKEND_GATEWAY_URL}/vc_sheet/funds?${params}`, {
    method: 'GET',
  });

  const data = await resp.json();

  return Response.json(data);
}
