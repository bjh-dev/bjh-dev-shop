'use client'

import useWindowDimensions from '@/lib/useWindowDimension'

const DevlayoutHelper = () => {
    const { width, height } = useWindowDimensions()

    return (
        <div className="fixed bottom-0 right-0 z-50 bg-lime-500 px-2 py-1 font-mono text-xs">
            <div className="flex flex-col">
                <div>
                    <p className="inline sm:hidden">tiny max 639px</p>
                    <p className="inline md:hidden">sm min 640px</p>
                    <p className="hidden md:inline lg:hidden">md min 768px</p>
                    <p className="hidden lg:inline xl:hidden">lg min 1024px</p>
                    <p className="hidden xl:inline 2xl:hidden">xl min 1280px</p>
                    <p className="hidden 2xl:inline">2xl min 1536px</p>
                </div>
                <div>
                    <p>
                        Actual size: {width}x{height}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default DevlayoutHelper
