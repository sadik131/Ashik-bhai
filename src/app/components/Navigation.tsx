import Link from 'next/link'
import React from 'react'

function Navigation() {
  return (
    <nav className='flex items-center gap-5 text-base px-5 my-4 justify-center'>
        <Link href={"/pages/update"}>Tech news</Link>
        <Link href={"/pages/update"}>Projects</Link>
        <Link href={"/pages/course"}>Courses</Link>
        <Link href={"/pages/update"}>Conferences</Link>
        <Link href={"/pages/update"}>Research Topics</Link>
        <Link href={"/pages/update"}>Gudsky scholors</Link>
    </nav>
  )
}

export default Navigation