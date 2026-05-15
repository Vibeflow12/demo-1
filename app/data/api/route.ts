import { headers, cookies } from "next/headers";
import { comments } from "../data"
import { type NextRequest } from "next/server";
import { redirect } from "next/navigation";

//redirect to other endpoint ,it gives 307 in browser
redirect


export async function GET(request: NextRequest) {
    // const requestHeaders = new Headers(request.headers)
    // console.log(requestHeaders)

    const headerList = await headers();
    console.log(headerList.get("user-agent"))

    //getting cookies normal
    const theme = request.cookies.get("theme")
    console.log(theme)

    //nextjs cookie
    //setting a cookie
    const cookieStore = await cookies();
    cookieStore.set("resultsPerPage", "20", { httpOnly: true, secure: true })

    //getting a cookie
    console.log(cookieStore.get("resultsPerPage"))

    return new Response("<h1>hello</h1>", {
        headers: {
            "Content-Type": "text/html",
            // setting cookies normal
            "Set-Cookie": "theme=dark;HttpOnly;Secure; SameSite=Strict"
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