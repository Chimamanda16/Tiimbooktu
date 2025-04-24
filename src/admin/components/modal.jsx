import React from "react";

export const Modal = ({isOpen, children, onClose, title}) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 flex items-center justify-end z-50 bg-black bg-opacity-50">
            <div className="h-screen overflow-y-auto bg-[#1C1C1C] modal w-[559px]">
                <div className="bg-[#0A0A0A] sticky top-0 border-b border-b-[#595959] p-6 pt-12 flex gap-8 items-center">
                    <img onClick={onClose} src="/assets/icons/back-btn.svg" alt="back" />
                    <h4 className="font-chango text-[26px] text-white uppercase">
                        {title}
                    </h4>
                </div> 
                {children}
            </div>
        </div>
    )
}