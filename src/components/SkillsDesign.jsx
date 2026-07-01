import React from 'react'

export const SkillsDesign = ({ language, bgColor }) => {
    return (
        <div>
            <div className='border border-muted/30 hover:border-muted hover:scale-110 transition-all delay-100 duration-300 hover:translate-y-[-3px] hover:shadow-lg hover:shadow-black/30 hover:cursor-pointer rounded-xl px-5 py-2 flex items-center gap-3 bg-surface w-max'>
                <span className='h-3 w-3 rounded-full flex items-center justify-center' style={{ backgroundColor: bgColor }}></span>
                <span className='text-text font-semibold'>
                    {language}
                </span>
            </div>
        </div>
    )
}

export const TopSkillsDesign = ({toplanguage}) => {
    return (
    <div className='flex items-center justify-center gap-4'>
        <h1 className='text-muted/50 font-mono text-sm'>{toplanguage}</h1>
        <hr className='w-full border border-muted/50' />
    </div>
)}

