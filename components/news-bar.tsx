export default function NewsBar() {
    return (
        <div className="absolute top-0 left-0 w-full overflow-hidden bg-orange-500 text-white">
            <div className="whitespace-nowrap animate-scroll">
                <span className="px-4 py-2">
                    Over <span className="text-green-500">$200M USD</span> Laundered Today through TornadoCash!
                </span>
            </div>
        </div>)
}