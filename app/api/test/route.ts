export async function POST(request: Request) {
    const body = await request.formData()
    const token = body.get("my-token")
    console.log(token, 'dataaa');
    return new Response();
}