import Link from "next/link";

export default function User({ id, name, username, email }) {
    return (
        <div key={id} className={'border p-20 py-40 '}>
            <h1>Name : {name}</h1>
            <Link href={`/${id}`}>
                <h2 className="cursor-pointer underline">User name: {username} click</h2>
            </Link>
            <h2>
                {email}
            </h2>
        </div>
    )
}