import React from 'react'

const Title = ({ num, title }) => {
    return (
        <div className='flex flex-col gap-5 pt-10'>
            <div className='flex items-center justify-start'>
                <h1 className='font-bold font-mono text-sm text-primary border-primary border bg-primary/10 rounded-full px-5 py-1'>{`// ${num} - ${title}`}</h1>
            </div>
        </div>
    )
}

export default Title