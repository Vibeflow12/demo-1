import Link from "next/link";

export default function f2() {
    return (
        <div>
            <h1>F2 page</h1>
            <div><Link href={"/f4"}>Go to F4</Link></div>
        </div>
    )
}