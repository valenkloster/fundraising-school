export async function POST(req: Request) {
  const { user } = await req.json();

  const data = user.user;

  if (!data || !data.email || !data.name) {
    return Response.json({ error: 'Invalid user data' }, { status: 400 });
  }

  const response = await fetch(`${process.env.BACKEND_GATEWAY_URL}/user/${data.email}`, {
    method: 'GET',
  });

  if (response.status === 400) {
    return Response.json({ error: 'Invalid User' }, { status: 400 });
  }

  if (response.status === 200) {
    return Response.json({ message: 'User exists' }, { status: 200 });
  }

  if (response.status === 404) {
    const body: { name: string; email: string; linkedin_picture?: string } = {
      name: data.name,
      email: data.email,
    };

    if (data.image) {
      body.linkedin_picture = data.image;
    }

    const createUserResponse = await fetch(`${process.env.BACKEND_GATEWAY_URL}/user/new`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (createUserResponse.status === 200) {
      return Response.json({ message: 'User created' }, { status: 200 });
    }

    return Response.json({ error: 'Error creating user' }, { status: 500 });
  }

  return Response.json({ error: 'Error validating user' }, { status: 500 });
}
