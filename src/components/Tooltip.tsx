import React from 'react'
import ReactTooltip from 'react-tooltip'
import TooltipIcon from './icons/TooltipIcon'

const Tooltip = ({ name, content }: { name: string; content: string }) => {
    return (
        <div className="inline-block ml-1" data-tip data-for={name}>
            <TooltipIcon className="h-5 w-5 inline-block" />
            <ReactTooltip id={name} effect="solid" className="opacity-100">
                <p>{content}.</p>
            </ReactTooltip>
        </div>
    )
}

export default Tooltip