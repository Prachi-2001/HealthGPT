import React, { useState, useEffect, useRef } from "react";
import { ListBox } from "primereact/listbox";

function BasicDemo({ onClose }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { name: "Book Appointment", code: "BA" },
    { name: "Medical Departments", code: "MD" },
    { name: "About Us", code: "AU" },
    { name: "Logout", code: "L" },
  ];

  // Ref to the ListBox component
  const listBoxRef = useRef(null);

  // Effect to handle click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        listBoxRef.current &&
        !listBoxRef.current.contains(event.target) &&
        onClose
      ) {
        onClose();
      }
    };

    // Add event listener to handle clicks outside
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div ref={listBoxRef} className="card flex justify-content-center">
      <ListBox
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.value)}
        options={options}
        optionLabel="name"
        className="w-full md:w-14rem bg-white text-white"
      />
    </div>
  );
}

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [showSelectBar, setShowSelectBar] = useState(false);

  const chats = [
    { id: 1, title: "chat 1", content: "" },
    { id: 1, title: "chat 2", content: "" },
    { id: 1, title: "chat 3", content: "" },
    { id: 1, title: "chat 4", content: "" },
    { id: 1, title: "chat 5", content: "" },
    { id: 1, title: "chat 1", content: "" },
    { id: 1, title: "chat 2", content: "" },
    { id: 1, title: "chat 3", content: "" },
    { id: 1, title: "chat 4", content: "" },
    { id: 1, title: "chat 5", content: "" },
    { id: 1, title: "chat 1", content: "" },
    { id: 1, title: "chat 2", content: "" },
    { id: 1, title: "chat 3", content: "" },
    { id: 1, title: "chat 4", content: "" },
    { id: 1, title: "chat 5", content: "" },
  ];

  const handleSelect = () => setShowSelectBar(true);

  const handleClose = () => setShowSelectBar(false);

  return (
    <>
      <div>
        <div
          className={`bg-[#282828] text-white p-3
          }`}
        >
          <div className="flex flex-col justify-between">
            {/* Upper div */}
            <div>
              <div className="fixed top-2 bg-[#282828] w-[17%]">
                <div className="flex justify-between items-center mb-3 ">
                  <div>
                    {" "}
                    <h3>New Health chat</h3>{" "}
                  </div>
                  <div>
                    <button>
                      <img
                        src="./src/assets/newchat.png"
                        className="w-5 h-5"
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              </div>
              <button className="flex bg-[#D9D9D9] text-black rounded-md mt-10 items-ends">
                All delete
              </button>
              <div className="overflow-y-auto">
                {/* Iterate through chats */}
                {chats.map((chat, index) => (
                  <div key={index}>
                    <button className="mt-4 text-white">{chat.title}</button>
                  </div>
                ))}
              </div>
            </div>
            {/* Lower div */}
            <div className="fixed bottom-0 w-[18%] left-0 p-3 bg-[#282828]">
              <button
                className="rounded-[5px] hover:bg-[#4D4B4B] w-[100%] p-2 flex items-center"
                onClick={handleSelect}
              >
                <div className="w-8 h-8 rounded-[100%] bg-green-700 flex items-center justify-center">
                  P
                </div>
                <span className="pl-2">Prachi Pachang</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {showSelectBar && (
        <div
          className="fixed bottom-[12%] p-3 left-0 w-[18%]"
          style={{ zIndex: 9999 }}
        >
          <BasicDemo onClose={handleClose} />
        </div>
      )}
    </>
  );
};

export default Sidebar;
