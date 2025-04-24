import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PaginationTable = ({ data, itemsPerPage = 10, onUpdateClick, type }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [openIndex, setOpenIndex] = useState(null);
    const totalPages = Math.ceil(data.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = data.slice(startIndex, startIndex + itemsPerPage);

    const menuRefs = useRef([]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                openIndex !== null &&
                menuRefs.current[openIndex] &&
                !menuRefs.current[openIndex].contains(event.target)
            ) {
                setOpenIndex(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [openIndex]);

    const goToNext = () => {
        if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
    };

    const goToPrev = () => {
        if (currentPage > 1) setCurrentPage((prev) => prev - 1);
    };

    const openOption = (index) => {
        setOpenIndex(prev => (prev === index ? null : index));
    };

    const update = (art, index) => {
        onUpdateClick(art);
        openOption(index)
    }
    const showDetail = (e, item) => {
        e.stopPropagation();
        onUpdateClick(item);
    }

    return (
        <div className=" text-white flex flex-col gap-2">
            {type === 'normal' ?
                <>
                    <div className='grid bg-[#2B2B2B] grid-cols-9 gap-3 p-4 border border-[#595959] rounded-xl'>
                        <div className='col-span-2'>Artwork</div>
                        <div className='col-span-2'>Price</div>
                        <div className='col-span-4'>Description</div>
                        <div className='col-span-1'></div>
                    </div>

                    {currentItems.map((item, index) => (
                        <div key={index} className='grid bg-[#242424] items-center grid-cols-9 gap-3 p-2 border border-[#595959] rounded-xl'>
                            <div className='col-span-2 flex gap-2 items-center'>
                                <img src="/assets/images/art.png" alt="art" className="w-[38px] h-[38px] object-cover rounded" />
                                {item.name}
                            </div>
                            <div className='col-span-2'>
                                <p className='truncate w-[96%]'>
                                    ${item.price}
                                </p>
                            </div>
                            <div className='col-span-4'>
                                <p className='truncate w-[96%]'>
                                    {item.description}
                                </p>
                            </div>
                            <div ref={(el) => (menuRefs.current[index] = el)} className='col-span-1 w-full flex pr-4 justify-end relative'>
                                <img onClick={() => openOption(index)} src="/assets/icons/action.svg" alt="action" />
                                {openIndex === index && (
                                    <div className="absolute right-0 flex flex-col w-[120px] z-[99] top-full bg-white text-black rounded-lg modal">
                                        <button onClick={() => update(item, index)} className='py-2 px-3 text-start'>Update</button>
                                        <button className='text-red-700 py-2 px-3 text-start'>Delete</button>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}

                </>
                :
                <>
                    <div className='grid bg-[#2B2B2B] grid-cols-8 gap-3 p-4 border border-[#595959] rounded-xl'>
                        <div className='col-span-2'>Artwork</div>
                        <div>Price</div>
                        <div>Order ID</div>
                        <div className='col-span-2'>Description</div>
                        <div className='col-span-2'>Action</div>
                    </div>
                    {currentItems.map((item, index) => (
                        <div onClick={(e) => showDetail(e, item)} key={index} className='grid bg-[#242424] items-center grid-cols-8 gap-3 p-2 border border-[#595959] rounded-xl cursor-pointer'>
                            <div className='flex col-span-2 gap-2 items-center'>
                                <img src="/assets/images/art.png" alt="art" className="w-[38px] h-[38px] object-cover rounded" />
                                {item.name}
                            </div>
                            <div>
                                <p className='truncate w-[96%]'>
                                    ${item.price}
                                </p>
                            </div>
                            <div>
                                <p className='truncate w-[96%]'>
                                    {item.order_id}
                                </p>
                            </div>
                            <div className='col-span-2'>
                                <p className='truncate w-[96%]'>
                                    {item.description}
                                </p>
                            </div>
                            <div className='col-span-2 flex justify-start'>
                                <div className='flex rounded-lg bg-[#2B2B2B]'>
                                    <button className={`py-2 px-2 rounded-lg ${item.status == 'in progress' ? 'bg-[#322A21] text-[#F57C00]' : 'text-[#595959]'}`}>In Progress</button>
                                    <button className={`py-2 px-2 rounded-lg ${item.status == 'delivered' ? 'bg-[#61C45312] text-[#61C453]' : 'text-[#595959]'}`}>Delivered</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </>
            }
            {/* Pagination */}
            <div className="flex justify-between items-center mt-4 capitalize">
                <div className='text-[#BFBFBF]'>
                    Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, data.length)} of <span className='text-white'> {data.length} entries </span>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={goToPrev}
                        disabled={currentPage === 1}
                        className="p-1 rounded bg-gray-700 disabled:opacity-50"
                    >
                        <ChevronLeft size={16} />
                    </button>

                    {[...Array(totalPages)].map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentPage(i + 1)}
                            className={`px-2 py-1 rounded ${currentPage === i + 1 ? 'bg-green-500 text-black' : 'bg-gray-700'
                                }`}
                        >
                            {i + 1}
                        </button>
                    ))}

                    <button
                        onClick={goToNext}
                        disabled={currentPage === totalPages}
                        className="p-1 rounded bg-gray-700 disabled:opacity-50"
                    >
                        <ChevronRight size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PaginationTable;
