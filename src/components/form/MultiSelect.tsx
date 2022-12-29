import React, { useState, useEffect } from 'react'
import { Collapse } from 'react-collapse';

const MultiSelect = ({ options, standard, selected, setSelected }: { options: { name: string, value: string }[]; standard: string, selected: { name: string, value: string }[]; setSelected: Function }) => {

    const [dropdown, setDropdown] = useState(false);

    const addItem = (val) => {
        setSelected([
            ...selected,
            val
        ]);
    }
    const removeItem = (val) => {
        setSelected(selected.filter((v) => v.value !== val));
    }

    useEffect(() => {
        const i = options.find(c => c.value === standard);
        if (i) {
            setSelected([i]);
        }
    }, []);

    return (
        <div className="w-full flex flex-col items-center mx-auto" onClick={() => setDropdown(!dropdown)}>
            <div className="w-full">
                <div className="flex flex-col items-center relative">
                    <div className="my-2 p-1 flex border border-gray-200 bg-white rounded w-full">
                        <div className="flex flex-auto flex-wrap">
                            {selected.map((item, idx) =>
                                <div key={idx} className="flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-teal-700 bg-teal-100 border border-teal-300">
                                    <div className="text-xs font-normal leading-none max-w-full flex-initial">{item.name}</div>
                                    <div className="flex flex-auto flex-row-reverse">
                                        <div onClick={() => removeItem(item.value)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x cursor-pointer hover:text-teal-400 rounded-full w-4 h-4 ml-2">
                                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                                <line x1="6" y1="6" x2="18" y2="18"></line>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200">
                            <button className="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"duration-500 w-4 h-4" + (dropdown ? " rotate-180" : "rotate-0")}>
                                    <polyline points="18 15 12 9 6 15"></polyline>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <Collapse isOpened={dropdown}>
                    <div className="shadow top-[100%] bg-white z-40 w-full left-0 rounded max-h-[300px] overflow-y-auto">
                        <div className="flex flex-col w-full">
                            {options.filter(c => !selected.includes(c)).map((item, idx) =>
                                <div key={idx} className="cursor-pointer w-full border-gray-100 rounded-t border-b hover:bg-teal-100" onClick={() => addItem(item)}>
                                    <div className="flex w-full items-center p-2 pl-2 border-transparent relative">
                                        <div className="w-full items-center flex">
                                            <div className="mx-2 leading-6">{item.name}</div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </Collapse>
            </div>
        </div>
    )
}

export default MultiSelect