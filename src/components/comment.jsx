import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { IoSend } from "react-icons/io5";

function Comment({ close, addComment, comments = [] }) {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!comment.trim()) return;

    addComment(comment.trim());
    setComment("");
  };

  return (
    <div className="absolute top-0 right-0 z-50 h-[600px] w-[400px] bg-white shadow-xl border border-gray-200">

      
      <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
        <h1 className="text-xl font-bold text-gray-800">
          Add your comment here
        </h1>

        <button
          type="button"
          onClick={close}
          className="cursor-pointer"
        >
          <IoIosClose
            size={38}
            className="text-gray-700 hover:text-black"
          />
        </button>
      </div>

    
      <div className="h-[440px] overflow-y-auto px-5 py-5">

        {comments.length === 0 ? (
          <p className="text-center text-gray-400">
            No comments yet
          </p>
        ) : (
          comments.map((item, index) => (
            <div
              key={index}
              className="flex gap-4 mb-6"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                <div className="text-2xl">👤</div>
              </div>

              <div className="flex-1">
                <h2 className="font-semibold text-gray-800">
                  User names
                </h2>

                <p className="text-gray-700 text-sm leading-5 break-words">
                  {item}
                </p>
              </div>
            </div>
          ))
        )}

      </div>

      
      <form
        onSubmit={handleSubmit}
        className="absolute bottom-5 left-5 right-5"
      >
        <div className="flex items-center border-2 border-gray-400 rounded-xl px-4 py-2 bg-white">

          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Enter comment"
            className="flex-1 outline-none text-sm text-gray-700"
          />

          <button
            type="submit"
            className="text-blue-700 hover:text-blue-900 transition"
          >
            <IoSend size={32} />
          </button>

        </div>
      </form>

    </div>
  );
}

export default Comment;