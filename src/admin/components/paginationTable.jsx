import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Ellipsis } from "lucide-react";
import { format } from "date-fns";

const PaginationTable = ({
  data,
  itemsPerPage = 10,
  onUpdateClick,
  type,
  onDeleteClick,
}) => {
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
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const update = (art, index) => {
    onUpdateClick(art);
    openOption(index);
  };
  const deleteItem = (id, index) => {
    onDeleteClick(id);
    openOption(index);
  };
  const showDetail = (e, item) => {
    e.stopPropagation();
    onUpdateClick(item);
  };

  return (
    <div className=" text-white flex flex-col gap-2">
      {type === "normal" ? (
        <>
          <div className="grid bg-[#2B2B2B] grid-cols-9 gap-3 p-4 border border-[#595959] rounded-xl">
            <div className="col-span-2">Artwork</div>
            <div className="col-span-2">Price</div>
            <div className="col-span-4">Description</div>
            <div className="col-span-1"></div>
          </div>

          {currentItems.map((item, index) => (
            <div
              key={index}
              className="grid bg-[#242424] items-center grid-cols-9 gap-3 p-2 border border-[#595959] rounded-xl"
            >
              <div className="col-span-2 flex gap-2 items-center">
                <img
                  src={item.images[0].url}
                  alt="art"
                  className="w-[38px] h-[38px] object-cover rounded"
                />
                <p className="truncate w-[96%]">{item.name}</p>
              </div>
              <div className="col-span-2">
                <p className="truncate w-[96%]">${item.base_price}</p>
              </div>
              <div className="col-span-4">
                <p className="truncate w-[96%]">{item.description}</p>
              </div>
              <div
                ref={(el) => (menuRefs.current[index] = el)}
                className="col-span-1 w-full flex pr-4 justify-end relative"
              >
                <Ellipsis
                  onClick={() => openOption(index)}
                  className="text-[#CDFFAD] cursor-pointer"
                />
                {openIndex === index && (
                  <div className="absolute right-0 flex flex-col w-[120px] z-[99] top-full bg-white text-black rounded-lg modal">
                    <button
                      onClick={() => update(item, index)}
                      className="py-2 px-3 text-start hover:bg-[#CDFFAD] m-1 rounded-xl"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => deleteItem(item.id, index)}
                      className="text-red-700 py-2 px-3 text-start hover:bg-[#CDFFAD] m-1 rounded-xl"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </>
      ) : type === "feedback" ? (
        <>
          <div className="grid bg-[#2B2B2B] grid-cols-6 gap-3 p-4 border border-[#595959] rounded-xl">
            <div className="col-span-1">Name</div>
            <div className="col-span-1">Email</div>
            <div className="col-span-2">Message</div>
            <div className="col-span-1">Status</div>
            <div className="col-span-1"></div>
          </div>
          {currentItems.map((item, index) => (
            <div
              onClick={(e) => showDetail(e, item)}
              key={index}
              className="grid bg-[#242424] items-center grid-cols-6 gap-3 p-2 border border-[#595959] rounded-xl cursor-pointer"
            >
              <div className="col-span-1">
                <p className="truncate w-[96%]">{item.name}</p>
              </div>
              <div className="col-span-1">
                <p className="truncate w-[96%]">{item.email}</p>
              </div>
              <div className="col-span-2">
                <p className="truncate w-[96%]">{item.message}</p>
              </div>
              <div className="col-span-1">
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    item.read
                      ? "bg-green-900 text-green-400"
                      : "bg-yellow-900 text-yellow-400"
                  }`}
                >
                  {item.read ? "Read" : "Unread"}
                </span>
              </div>
              <div className="flex justify-end col-span-1">
                <button
                  className="text-[#CDFFAD] text-xs hover:underline"
                  onClick={(e) => {
                    e.stopPropagation();
                    showDetail(e, item);
                  }}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </>
      ) : (
        <>
          <div className="grid bg-[#2B2B2B] grid-cols-5 gap-3 p-4 border border-[#595959] rounded-xl">
            <div>Price</div>
            <div>Order ID</div>
            <div>Contact</div>
            <div>Order Date</div>
            <div>Action</div>
          </div>
          {currentItems.map((item, index) => (
            <div
              onClick={(e) => showDetail(e, item)}
              key={index}
              className="grid bg-[#242424] items-center grid-cols-5 gap-3 p-2 border border-[#595959] rounded-xl cursor-pointer"
            >
              <div>
                <p className="truncate w-[96%]">${item?.total_amount}</p>
              </div>
              <div>
                <p className="truncate w-[96%]">{item.id}</p>
              </div>
              <div>
                <p className="truncate w-[96%]">{item.contact}</p>
              </div>
              <div>
                <p className="truncate w-[96%]">
                  {format(new Date(item?.placed_on), "d MMMM yyyy h:mm a")}
                </p>
              </div>
              <div className="flex justify-start">
                <div className="flex rounded-lg bg-[#2B2B2B]">
                  <button
                    className={`py-2 px-2 rounded-lg ${
                      item.status.toLowerCase() !== "delivered" &&
                      item.status.toLowerCase() !== "shipped"
                        ? "bg-[#322A21] text-[#F57C00]"
                        : "text-[#595959]"
                    }`}
                  >
                    In Progress
                  </button>
                  <button
                    className={`py-2 px-2 rounded-lg ${
                      item.status.toLowerCase() === "delivered" ||
                      item.status.toLowerCase() === "shipped"
                        ? "bg-[#61C45312] text-[#61C453]"
                        : "text-[#595959]"
                    }`}
                  >
                    Delivered
                  </button>
                </div>
              </div>
            </div>
          ))}
        </>
      )}

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4 capitalize">
        <div className="text-[#BFBFBF]">
          Showing {startIndex + 1}-
          {Math.min(startIndex + itemsPerPage, data.length)} of{" "}
          <span className="text-white"> {data.length} entries </span>
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
              className={`px-2 py-1 rounded ${
                currentPage === i + 1
                  ? "bg-green-500 text-black"
                  : "bg-gray-700"
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
