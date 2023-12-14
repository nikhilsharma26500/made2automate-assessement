import React from 'react'

interface LeadProps {
    title: string;
    count: string;
}

const Lead: React.FC<LeadProps> = ({ title, count }) => (
    <div className='text-center'>
        <p className="text-6xl font-extrabold text-gray-700 dark:text-black-200">{count}</p>
        <p className="text-sm text-gray-600 dark:text-black-400">{title}</p>
    </div>
);

const Figures = () => {
    const leads = [
        { title: "Total Orders", count: "112" },
        { title: "New Stock", count: "151" },
        { title: "Dead Stocks", count: "42" },
        { title: "Total Leads", count: "25" },
        { title: "Total Revenue (in '000)", count: "114" },
    ];

    return (
        <>
            <div className="flex flex-wrap items-center justify-between mx-auto mb-4  h-[25vh]">
                <div className="max-w-screen-xl w-full p-4 mx-auto flex justify-between">
                    {leads.map((lead, index) => (
                        <Lead key={index} title={lead.title} count={lead.count} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Figures;