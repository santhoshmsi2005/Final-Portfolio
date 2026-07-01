
const EducationCard = ({ Title, company, type, duration, badgeColor, cardColor }) => {
    return (
        <div>
            <div className={`relative border transition-all duration-300 cursor-pointer p-10 rounded-2xl bg-surface text-text space-y-5 ${cardColor}`}>
                <div className='relative flex flex-col md:flex-row md:items-center justify-between gap-5'>

                    <div>
                        <h1 className='font-bold text-xl'>{Title}</h1>
                        <p className='text-muted'>{company}</p>
                    </div>
                    <div className='flex flex-col items-start justify-center'>
                        <h1 className={`border rounded-full px-4 py-1 font-medium ${badgeColor}`}>{type}</h1>
                        <p className='text-muted'>{duration}</p>
                    </div>
                </div>
                <p className='text-muted'>Developed and maintained RESTful APIs for a SaaS product serving 10,000+ users. Migrated a legacy Express codebase to TypeScript, reducing runtime errors by 40%. Collaborated with senior engineers on React frontend features.</p>
                <div className='flex flex-wrap gap-5'>
                    <p className='text-text/90 rounded-full bg-muted/30 px-4 py-1 text-sm'>React</p>
                    <p className='text-text/90 rounded-full bg-muted/30 px-4 py-1 text-sm'>Node.js</p>
                    <p className='text-text/90 rounded-full bg-muted/30 px-4 py-1 text-sm'>MongoDB</p>
                    <p className='text-text/90 rounded-full bg-muted/30 px-4 py-1 text-sm'>Express</p>
                    <p className='text-text/90 rounded-full bg-muted/30 px-4 py-1 text-sm'>Stripe</p>
                    <p className='text-text/90 rounded-full bg-muted/30 px-4 py-1 text-sm'>Redux</p>
                </div>
            </div>
        </div>
    )
}

export default EducationCard