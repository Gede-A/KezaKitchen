import Link from "next/link";
import Image from "next/legacy/image";
import { SectionContainer } from "@components/Section";
import { Nav } from "@components/Nav";
import { ButtonGroup, Button } from "@components/Button";
import { Icon } from "@iconify/react";

export const Header = () => {
    return (
        <header
            id="header"
            className="header fixed left-0 w-full z-30 top-0 bg-white backdrop-filter backdrop-blur-md bg-opacity-50"
        >
            <SectionContainer className="header--container wrap wrap-px flex items-center justify-between">
                <div className="header-logo--container">
                    <h1 className="logo mb-0">
                        <Link href="/">
                            <Image
                                src="/nutritrack.svg"
                                alt="logo"
                                className="h-6 w-auto"
                                height={25}
                                width={100}
                                priority
                                objectFit="contain"
                            />
                        </Link>
                    </h1>
                </div>
                <div className="flex items-center ml-auto">
                    <Nav />
                    <ButtonGroup className="hidden md:block">
                    </ButtonGroup>
                </div>
            </SectionContainer>
        </header>
    );
};
