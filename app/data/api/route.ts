import { headers } from "next/headers";
import { comments } from "../data"
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    // const requestHeaders = new Headers(request.headers)
    // console.log(requestHeaders)

    const headerList = await headers();
    console.log(headerList.get("user-agent"))

    //getting cookies
    const theme = request.cookies.get("theme")
    console.log(theme)

    return new Response("<h1>hello</h1>", {
        headers: {
            "Content-Type": "text/html",
            // setting cookies
            "Set-Cookie": "theme=dark"
        }
    })
};

export async function POST(req: Request) {
    const comment = await req.json();
    const newComment = {
        id: comments.length + 1,
        name: comment.name,
    };
    comments.push(newComment);
    return new Response(JSON.stringify(newComment), {
        headers: { "Content-Type": "application/json" },
        status: 201
    })
};

// export async function GET(request: NextRequest) {

//     try {
//         //search sorting pagination
//         const searchParams = request.nextUrl.searchParams;
//         const query = searchParams.get("query")
//         const filteredComments = query ? comments.filter((comment) => comment.name.includes(query)) : comments
//         return Response.json(filteredComments)

//     } catch (error) {
//         console.error("ERROR: ", error)
//     }

// }