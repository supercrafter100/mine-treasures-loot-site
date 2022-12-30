import React, { useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { lightfair } from 'react-syntax-highlighter/dist/cjs/styles/hljs/'
import { Collapse } from 'react-collapse';

const NBTBlock = ({ nbt }) => {


    const [isOpen, setIsOpen] = useState(false);
    const [isOpenCollapse, setOpenCollapse] = useState(false);

    const setOpen = (open) => {
        if (open) {
            setIsOpen(true);
            setTimeout(() => setOpenCollapse(true), 500)
        }
        if (!open) {
            setOpenCollapse(false);
            setTimeout(() => setIsOpen(false), 500)
        }
    }

    return (
        <>
            <button onClick={() => setOpen(!isOpen)} type="button" className={"flex items-center justify-between w-full p-2 font-medium text-left text-gray-500 border border-b-0 border-gray-400 bg-gray-300 hover:bg-gray-100 transition-all duration-500 mx-auto " + (isOpen ? "rounded-t-lg w-[100%]" : "rounded-lg w-48")}>
                <span>Show NBT</span>
                <svg className={"w-6 h-6 shrink-0 " + (!isOpen ? "rotate-180" : "")} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
            <Collapse isOpened={isOpenCollapse}>
                <div className="font-light border border-b-0 border-gray-200 transition-transform duration-100 pb-5">
                    <SyntaxHighlighter language={"json"} style={lightfair}>
                        {JSON.stringify(nbt, null, 2)}
                    </SyntaxHighlighter>
                </div>
            </Collapse>
        </>
    )
}

export default NBTBlock