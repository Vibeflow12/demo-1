// it just cache the data ,it doesn't work in devlopment ,build the app > the start to see the result
export const cachedTime = "force-static"

//incremental static regenration ,10 is 10sec ,it doesn't work in devlopment ,build the app > the start to see the result
export const revalidate = 10


export async function GET() {
    return Response.json({ time: new Date().toLocaleTimeString() })
}