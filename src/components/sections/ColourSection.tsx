type ColourSectionProps = {
    text: string
}

const ColourSection = (props: Readonly<ColourSectionProps>) => {
    const { text } = props
    return (
        <div className="bg-rose-600 py-12 text-gray-50 shadow-inner md:py-24">
            <div className="container">
                <div className="mx-auto max-w-prose">
                    <h3 className="text-center font-plantin text-xl font-medium lg:text-3xl">
                        {text}
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default ColourSection
