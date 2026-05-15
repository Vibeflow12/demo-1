// it just cache the data ,it doesn't work in devlopment ,build the app > the start to see the result
export const dynamic = "force-static"

//incremental static regeneration ,10 is 10sec ,it doesn't work in devlopment ,build the app > the start to see the result
export const revalidate = 10


export async function GET() {
    return Response.json({ time: new Date().toLocaleTimeString() })
}