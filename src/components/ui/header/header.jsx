import Image from "next/image"
import Link from "next/link"

export default function HeaderComponent(){

    return(
        <>
         <header className="siteheader">
            <nav className="w-full">
                <ul className="list-none flex items-center justify-evenly">
                    <li>
                        <Link className="text-white" href="/">Home</Link>
                    </li>
                    <li>
                        <Link className="text-white" href="/aboutme">About Me</Link>
                    </li>
                    <li>
                        <Link className="text-white" href="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link className="text-white" href="/cv">CV</Link>
                    </li>
                    <li>
                        <h1><Link className="" href="/"><Image src="/mylogo.png" height={20} width={20} className="mylogo" alt="" /></Link></h1>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    )
}