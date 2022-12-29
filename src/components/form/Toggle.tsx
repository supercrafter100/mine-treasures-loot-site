import React from 'react'

const Toggle = ({ toggled, setToggled }: { toggled: boolean; setToggled: Function }) => {
    return (
        <label className="inline-block relative items-center cursor-pointer my-4">
            <input type="checkbox" checked={toggled} className="sr-only peer" onClick={() => setToggled(!toggled)} onChange={() => undefined} />
            <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#00A6ED]"></div>
        </label>
    )
}

export default Toggle