import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PaginationTable from "../components/paginationTable";
import { Modal } from "../components/modal";
import useAdminStore from "../../Store/useAdminStore";
import { Loader } from "lucide-react";

const filterBtn = ["All", "Read", "Unread"];

export const Feedbacks = () => {
  const {
    fetchAllFeedbacks,
    feedbacks,
    markFeedbackAsRead,
    markAllFeedbacksAsRead,
    loading,
  } = useAdminStore();

  const readFeedbacks = feedbacks.filter(
    (feedback) => feedback.read === true
  );
  const unreadFeedbacks = feedbacks.filter(
    (feedback) => feedback.read === false || feedback.read === null
  );

  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(feedbacks);
  const [activeOption, setActiveOption] = useState("All");
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    setData(feedbacks);
  }, [feedbacks]);

  useEffect(() => {
    fetchAllFeedbacks();
  }, [fetchAllFeedbacks]);

  const setActive = (option) => {
    setActiveOption(option);
    if (option.toLowerCase() === "all") {
      setData(feedbacks);
    } else if (option.toLowerCase() === "read") {
      setData(readFeedbacks);
    } else if (option.toLowerCase() === "unread") {
      setData(unreadFeedbacks);
    }
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const showDetail = (item) => {
    setDetail(item);
    toggleModal();
  };

  const handleMarkAsRead = async () => {
    if (!detail) return;
      await markFeedbackAsRead(detail.id);
      setDetail({ ...detail, read: true });
      setData(
        data.map((fb) => (fb.id === detail.id ? { ...fb, read: true } : fb))
      );
      toggleModal();
  };

  const handleMarkAllAsRead = async () => {
    await markAllFeedbacksAsRead();
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-1">
        <h3 className="font-bold text-white text-[24px]">Feedbacks</h3>
        <span className="text-[#A9A9A9]">
          Feedback {">"} <Link to="/dashboard">Overview</Link>
        </span>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex justify-between">
          <span className="text-xl text-white">Feedbacks</span>
          <span
            className="text-base text-[#CDFFAD] cursor-pointer"
            onClick={handleMarkAllAsRead}
          >
            Mark All As Read
          </span>
        </div>
        <div className="grid grid-cols-3 gap-[13px] text-[#D9D9D9] bg-[#242424]">
          {filterBtn.map((option, index) => (
            <button
              onClick={() => setActive(option)}
              key={index}
              className={`text-center p-4 ${
                activeOption === option
                  ? "rounded-lg bg-[#CDFFAD] font-bold text-[#0A0A0A]"
                  : ""
              }`}
            >
              {option}
            </button>
          ))}
        </div>
        <PaginationTable
          data={data}
          onUpdateClick={showDetail}
          type="feedback"
        />
      </div>
      {detail && (
        <Modal
          isOpen={isOpen}
          onClose={toggleModal}
          title={`Feedback #${detail.id}`}
        >
          <div className="flex flex-col gap-[110px] h-[86vh] justify-between px-6 py-8">
            <div className="flex flex-col gap-1">
              <div className="border-b border-[#595959] py-[10px] w-full flex justify-between">
                <span className="text-[#D9D9D9]">Email</span>
                <span className="text-white">{detail.email}</span>
              </div>
              <div className="border-b border-[#595959] py-[10px] w-full flex justify-between">
                <span className="text-[#D9D9D9]">Name</span>
                <span className="text-white capitalize">{detail.name}</span>
              </div>
              <div className="border-b border-[#595959] py-[10px] w-full flex justify-between">
                <span className="text-[#D9D9D9]">Message</span>
                <span className="text-white">{detail.message}</span>
              </div>
              {detail.story_title && (
                <div className="border-b border-[#595959] py-[10px] w-full flex justify-between">
                  <span className="text-[#D9D9D9]">Story Title</span>
                  <span className="text-white capitalize">
                    {detail.story_title}
                  </span>
                </div>
              )}
              <div className="border-b border-[#595959] py-[10px] w-full flex justify-between">
                <span className="text-[#D9D9D9]">Status</span>
                <span
                  className={`text-white ${
                    detail.read ? "text-green-400" : "text-yellow-400"
                  }`}
                >
                  {detail.read ? "Read" : "Unread"}
                </span>
              </div>
            </div>
            <button
              onClick={handleMarkAsRead}
              disabled={detail.read === true || loading}
              className="w-full flex justify-center disabled:bg-gray-600 disabled:cursor-not-allowed py-3 bg-[#CDFFAD] rounded-xl text-[#0A0A0A]"
            >
              {loading ? (
                <Loader className="animate-spin" />
              ) : detail.read ? (
                "Already Read"
              ) : (
                "Mark As Read"
              )}
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};
