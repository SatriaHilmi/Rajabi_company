import React, { useCallback, useEffect, useState } from 'react';
import { Menu } from 'lucide-react';
// import { set } from 'astro:schema';

interface HamburgerProps {
    targetId: string;
}

export const Hamburger: React.FC<HamburgerProps> = ({ targetId }) => {
    const [isOpen, setIsOpen] = useState(false);

    // const openMenu = useCallback(() => {
    //     const menu = document.getElementById(targetId);
    //     if (!menu) return;

    //     menu.classList.remove('translate-x-full');
    //     menu.classList.add('translate-x-0');
    //     setIsOpen(true);
    // }, [targetId]);

    const closeMenu = useCallback(() => {
        const menu = document.getElementById(targetId);
        if (!menu) return;

        menu.classList.add('translate-x-full');
        menu.classList.remove('translate-x-0');
        setIsOpen(false);
    }, [targetId]);

    const toggleMenu = useCallback(() => {
        setIsOpen((prev) => {
            const next = !prev;
            const menu = document.getElementById(targetId);
            if (!menu) return next;
            if (next) {
                menu.classList.remove('translate-x-full');
                menu.classList.add('translate-x-0');
            } else {
                menu.classList.add('translate-x-full');
                menu.classList.remove('translate-x-0');
            }

            return next;
        });
    }, [targetId]);

    useEffect(() => {
        const btn = document.getElementById('close-mobile-btn');
        if (!btn) return;

        btn.addEventListener('click', closeMenu);
        return () => btn.removeEventListener('click', closeMenu);
    }, [closeMenu]);

    return (
        <>
            <button
                type='button'
                aria-expanded={isOpen}
                onClick={toggleMenu}
                className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-label="Toggle menu"
            >
                {isOpen ? '' : <Menu size={24} />}
            </button>

            <div
                onClick={closeMenu}
                className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 md:hidden ${isOpen
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                    }`}
            />
        </>
    );
}