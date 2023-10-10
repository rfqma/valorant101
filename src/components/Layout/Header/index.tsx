'use client'

import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { GiHamburgerMenu } from 'react-icons/gi'

export default function Header() {
    const [headerOpen, setHeaderOpen] = useState<boolean>(false)
    const menuRef = useRef<HTMLDivElement>(null)

    const handleHeaderToggler = () => {
        setHeaderOpen(!headerOpen)
    }

    const handleHeaderClickEverywhere = (event: any) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setHeaderOpen(false)
        }
    }

    if (headerOpen) {
        document.addEventListener('mousedown', handleHeaderClickEverywhere)
    } else {
        document.removeEventListener('mousedown', handleHeaderClickEverywhere)
    }

    return (
        <>
            <div className='bg-white'>
                <div className="container">
                    <div className='flex items-center justify-between p-6'>
                        <div>
                            <Link href={'/'}>
                                <h1 className='text-2xl font-extrabold text-black'>VAL 101</h1>
                            </Link>
                        </div>
                        <div>
                            <button
                                onClick={handleHeaderToggler}
                                className=""
                            >
                                <GiHamburgerMenu />
                            </button>
                            {
                                headerOpen ?
                                    <div id="hamburgerMenu" ref={menuRef} className="fixed right-7 bg-black shadow-lg border rounded-md p-4">
                                        <div className="flex flex-col gap-2">
                                            <Link href={'/agent'} className="border-b border-body-color">
                                                <span className='text-sm font-normal text-white hover:text-darkGreen'>Agent</span>
                                            </Link>
                                            <Link href={'/map'} className="border-b border-body-color">
                                                <span className='text-sm font-normal text-white hover:text-darkGreen'>Map</span>
                                            </Link>
                                            <Link href={'/weapon'} className="border-b border-body-color">
                                                <span className='text-sm font-normal text-white hover:text-darkGreen'>Weapon</span>
                                            </Link>
                                        </div>
                                    </div>
                                    :
                                    null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}