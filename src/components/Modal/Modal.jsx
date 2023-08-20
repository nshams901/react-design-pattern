import { useState } from "react"

export const Modal = ({ children }) => {

    const [shouldShow, setShouldShow] = useState(false);

    return (
        <>
            <button onClick={() => setShouldShow(true)}>Show Modal</button>
            {
                shouldShow && (
                    <div className=" text-gray-700 modal-background fixed z-10 left-0 top-0 w-full h-full overflow-auto bg-black/50" >
                        <div className="modal-body bg-white my-[10%] mx-auto p-5 w-1/2" onClick={(e) => e.stopPropagation()}>
                            <button className="ml-auto text-white" onClick={() => setShouldShow(false) }>X</button>
                            {children}
                        </div>
                    </div>
                )
            }
        </>
    )

}