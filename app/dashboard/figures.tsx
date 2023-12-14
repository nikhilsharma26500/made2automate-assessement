import React from 'react'

interface LeadProps {
    title: string;
    count: string;
}

const Lead: React.FC<LeadProps> = ({ title, count }) => (
    <div className=''>
        <p className="text-sm text-gray-600 dark:text-gray-400">{title}</p>
        <p className="text-3xl text-gray-700 dark:text-gray-200">{count}</p>
    </div>
);

const Figures = () => {
    const leads = [
        { title: "Total Leads", count: "1258" },
        { title: "Total Leads", count: "1258" },
        { title: "Total Leads", count: "1258" },
        { title: "Total Leads", count: "1258" },
    ];

    return (
        <>
            <div className="flex flex-wrap items-center justify-between mx-auto mb-4 bg-white dark:bg-gray-800 h-[20vh]">
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