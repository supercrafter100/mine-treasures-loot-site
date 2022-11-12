import React from 'react'
import { MT_ATTRIBUTE, MT_ENCHANTMENT, MT_ITEM } from '../interfaces'
import Image from 'next/image';
import { faTag, faBook, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const StatsModal = ({ item, setModal }: { item: MT_ITEM, setModal: Function }) => {

    const handleModalClick = (e) => {
        if (e.target.className && (typeof e.target.className.includes === "function") && e.target.className.includes("modal-background")) {
            setModal(false)
        }
    }

    return (
        <>
            <div className='fixed top-0 left-0 h-screen w-screen modal-background' onClick={handleModalClick} style={{ backgroundColor: 'rgb(0, 0, 0, 0.7)' }}>
                <div className="relative w-[80vw] h-[80vh] rounded-xl bg-gray-200 opacity-100 mx-[10vw] my-[10vh] p-5" onClick={handleModalClick}>
                    <FontAwesomeIcon className="absolute top-5 left-5 text-2xl transition-all duration-100 hover:text-4xl" icon={faXmark} onClick={() => setModal(false)} />
                    {/* Grid */}
                    <div className="w-full h-full grid grid-cols-3 gap-3">
                        <section className="text-center">
                            <h1 className="text-4xl font-bold mb-5">{item.name ?? item.type.replace(/_/g, ' ')}</h1>
                            <Image className="inline-block" src={"/items/" + item.type + ".png"} alt={item.type} height={200} width={200} />
                            <section>
                                {/* Lore */}
                                {item.lore && item.lore.map(line => <p>{line}</p>)}
                            </section>
                        </section>
                        <section className="text-center">
                            <h1 className="text-4xl font-bold mb-5"><FontAwesomeIcon icon={faTag} /> Attributes</h1>
                            <div className="grid grid-cols-1 gap-3">
                                {item.attributes && item.attributes.map((attribute) => <Attribute attribute={attribute}></Attribute>)}
                            </div>

                        </section>
                        <section className="text-center">
                            <h1 className="text-4xl font-bold mb-5"><FontAwesomeIcon icon={faBook} /> Enchantments</h1>
                            <div className="grid grid-cols-1 gap-3">
                                {item.enchantments && item.enchantments.map((enchantment) => <Enchantment enchantment={enchantment}></Enchantment>)}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

const Attribute = ({ attribute }: { attribute: MT_ATTRIBUTE }) => {
    return (
        <div className="rounded-lg bg-gray-300">
            <p className="text-xl">{attribute.name}</p>
            <p className="text-lg">Min: {attribute.min}</p>
            <p className="text-lg">Max: {attribute.max}</p>
        </div>
    )
}

const Enchantment = ({ enchantment }: { enchantment: MT_ENCHANTMENT }) => {
    return (
        <div className="rounded-lg bg-gray-300">
            <p className="text-xl">{enchantment.type.replace(/_/g, ' ')}</p>
            <p className="text-lg">Min: {enchantment.min}</p>
            <p className="text-lg">Max: {enchantment.max}</p>
        </div>
    )
}

export default StatsModal