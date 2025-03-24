export async function GET(request: Request) {
    let requestHeaders = Object.fromEntries(request.headers.entries());
    // console.log({r: requestHeaders})
    return Response.json({ data: 'hello world', requestHeaders });
}