const SplitScreen = ( { children, leftWeight = 1 , rightWeight = 1 }) => {

    const [Left, Right] = children

    return (
        <div className="flex h-screen gap-4">
            <div className={`flex-${leftWeight} h-full bg-red-300`}> {Left} </div>

            <div className={`flex-${rightWeight} flex flex-col` }> { Right } </div>
        </div>
    )
}

export default SplitScreen