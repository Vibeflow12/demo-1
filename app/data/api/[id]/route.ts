import { comments } from "../../data";

export async function GET({ _request: Request }, { params }: { params: Promise<{ id: string }> }) {

    try {
        const { id } = await params;
        const comment = comments.find((comment) => comment.id === parseInt(id));
        return Response.json(comment)

    } catch (error) {
        console.error("ERROR: ", error)
    }

}

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {

    try {
        const { id } = await params;
        const body = await request.json();
        const { name } = body
        //array.find or array.findIndex
        const index = comments.findIndex((comment) => comment.id === parseInt(id))

        comments[index].name = name

        return Response.json(comments[index])

    } catch (error) {
        console.error("ERROR: ", error)
        return Response.json({ error: "Internal Server Error" }, { status: 500 });
    }

}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {

    try {
        const { id } = await params;

        //array.find or array.findIndex
        const index = comments.findIndex((comment) => comment.id === parseInt(id))

        if (index === -1) {
            return new Error("not found")
        }

        const deletedComment = comments[index]
        comments.splice(index, 1)
        return Response.json(deletedComment)

    } catch (error) {
        console.error("ERROR: ", error)
        return Response.json({ error: "Internal Server Error" }, { status: 500 });
    }

}