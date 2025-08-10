/**
 * @copyright 2025 jeanauryel.dev
 * @license Apache-2.0
 */

import PropTypes from "prop-types"

const SkillCard = ({
    imgSrc,
    label,
    desc,
    classes
}: {
    imgSrc: string;
    label: string;
    desc: string;
    classes?: string;
}) => {
    return (
        <div className={`flex items-center gap-3 ring-2 ring-inset ring-[#060d0e]/10 rounded-2xl p-3 hover:bg-[#060d0e]/5 transition-colors group ${classes || ''}`}>
            <figure className="bg-[#060d0e]/5 rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-[#060d0e]/10 transition-colors">
                <img 
                    src={imgSrc}  
                    width={32}
                    height={32}
                    alt={label}
                />
            </figure>

            <div>
                <h3 className="text-[#060d0e] font-semibold">{label}</h3>
                <p className="text-[#060d0e]/70 text-sm">
                    {desc} 
                </p>
            </div>
        </div>
    )
}

SkillCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    classes: PropTypes.string,
}

export default SkillCard