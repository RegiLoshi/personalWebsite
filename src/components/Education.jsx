
const Education = ({ education }) => {
    return (
        <div className="flex justify-between">
            <div className="flex gap-2">
                <img src={education.logo} alt="logo" className="w-10 h-10 lg:w-16 lg:h-16 rounded-full" />
                <div className="flex flex-col">
                    <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-sm lg:text-base dark:text-white">{education.school}</h3>
                        <p className="text-xs lg:text-sm font-light dark:text-gray-400">{education.date}</p>
                    </div>
                    <p className="text-xs lg:text-sm font-light dark:text-gray-400">{education.title}</p>
                    <p className="text-xs lg:text-sm  font-light dark:text-gray-400">{education.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Education;