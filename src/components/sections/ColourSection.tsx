type ColourSectionProps = {
  text: string
}

function ColourSection(props: ColourSectionProps) {
  const { text } = props
  return (
    <div className="bg-rose-600 py-24 text-gray-50 shadow-inner">
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
