'use client'

import Link from "next/link"
import { navigationMenuLinks } from "@/lib/utilities/data"
import { Bars4Icon } from "@heroicons/react/24/solid"
import { useState } from "react"
import { Drawer, DrawerCloseButton, DrawerContent, DrawerHeader } from "./Drawer"

export const Header = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    const handleDrawerOpen = () => {
        setIsDrawerOpen(!isDrawerOpen)
    }

    return (
        <>
            <div className='bg-white'>
                <div className="container p-6 xs:p-7 flex items-center justify-between mb-10">
                    <div>
                        <Link href={'/'}>
                            <h1 className='text-xl xs:text-3xl font-bold'>Valorant 101</h1>
                        </Link>
                    </div>
                    <div className="hidden md:flex gap-10">
                        {
                            navigationMenuLinks.map((link, index) => {
                                return (
                                    <>
                                        <Link href={link.path} key={index}>
                                            <span className='text-lg font-medium text-black/80 hover:text-black'>
                                                {link.name}
                                            </span>
                                        </Link>
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className="flex md:hidden cursor-pointer rounded hover:bg-black/10 p-3" onClick={handleDrawerOpen}>
                        <Bars4Icon className="w-5 h-5" />
                    </div>
                    <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen} placement="right">
                        <DrawerCloseButton />
                        <DrawerHeader>
                            Valorant 101
                        </DrawerHeader>
                        <DrawerContent>
                            <div className="flex flex-col gap-3">
                                {
                                    navigationMenuLinks.map((link, index) => {
                                        return (
                                            <>
                                                <Link href={link.path} key={index}>
                                                    <span className='text-lg font-medium text-black/80 hover:text-black'>
                                                        {link.name}
                                                    </span>
                                                </Link>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </DrawerContent>
                    </Drawer>
                </div>
            </div>
        </>
    )
}