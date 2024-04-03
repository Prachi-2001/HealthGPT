import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { PrimeReactProvider } from "primereact/api";

function App() {
  const [count, setCount] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Read the selected file as a data URL
      const reader = new FileReader();
      reader.onloadend = () => {
        // Set the data URL as the selected image
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleAddPhotoClick = () => {
    // Trigger click event on the hidden file input
    document.querySelector(".image-taker").click();
  };
  return (
    <>
      <PrimeReactProvider>
        <div className="h-screen flex">
          <div className="w-1/5 overflow-y-auto">
            <Sidebar />
          </div>
          {/* Input div */}

          <div className="flex flex-col items-center bg-[#D9D9D9] justify-between w-[80%]">
            <div className="h-[20%]"></div>
            <div className="flex flex-row justify-between items-center w-[60%] h-[100%]">
              <div className="w-[25%] h-[50%] flex flex-col justify-between items-center rounded-md p-2 bg-[#282828] text-white">
                <h3>Give me a remedies for this xyz symptoms ?</h3>
                <img
                  src="./src/assets/add-photo.png"
                  className="w-5 h-5 text-white"
                  alt=""
                  onClick={handleAddPhotoClick}
                  style={{ cursor: "pointer" }} // Show pointer cursor on hover
                />
              </div>
              <div className="w-[25%] h-[50%] flex flex-col justify-between items-center rounded-md p-2 bg-[#282828] text-white">
                <h3>
                  Guide me over side effect of this remedies ? here my voice
                </h3>
                <img
                  src="./src/assets/icons8-microphone-24.png"
                  className="cursor-pointer"
                  alt=""
                />
              </div>
              <div className="w-[25%] h-[50%] rounded-md p-2 bg-[#282828] text-white">
                Can you please help me out to determine the what deficiency
                detected in given image ?
              </div>
            </div>
            <div className="flex flex-row w-[60vw] mb-5 bg-[#D3D0D0] shadow-md p-1 rounded-lg">
              <input
                type="text"
                placeholder="Type your message..."
                required
                className="flex-1 rounded-md border border-gray-300 bg-[#D3D0D0] focus:outline-none"
              />
              <div className="flex p-1">
                <input
                  type="file"
                  name=""
                  accept="image/*"
                  className="image-taker"
                  onChange={handleFileChange}
                  style={{ display: "none" }} // Hide the input element
                />
                <img
                  src="./src/assets/add-photo.png"
                  className=""
                  alt=""
                  onClick={handleAddPhotoClick}
                  style={{ cursor: "pointer" }} // Show pointer cursor on hover
                />
                <img
                  src="./src/assets/icons8-microphone-24.png"
                  className="cursor-pointer"
                  alt=""
                />
                <button type="submit">
                  <img src="./src/assets/icons8-send-24.png" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </PrimeReactProvider>
    </>
  );
}

export default App;
