import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { biomeIcons } from '../utils/biome-icons';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { scrollTo } from '../utils/scrollTo';

const Biome = ({ name }) => {

    const ref = useRef();

    const writeHref = () => {
        const route = window.location.origin + "/#" + name
        navigator.clipboard.writeText(route);
        window.location.href = route;
    }

    useEffect(() => {
        if (window.location.href.includes('#' + name) && ref.current) {
            scrollTo({ id: name, ref: ref, duration: 1000 })
        }
    }, [])

    return (
        <header className="text-center" id={name} ref={ref}>
            <Image src={"/items/" + biomeIcons[name] + ".png"} width={48} height={48} alt={name} className="inline-block"></Image>
            <p className="font-mono text-3xl md:inline-block md:ml-5 align-middle">{name.replace(/_/g, ' ')}</p>
            <FontAwesomeIcon icon={faHashtag} onClick={() => writeHref()} className="pl-3 cursor-pointer" style={{ lineHeight: 'inherit' }} />
        </header>
    )
}

export default Biome