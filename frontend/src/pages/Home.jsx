import { useState } from "react";
import Header from "../components/Header";
import ClothSidebar from "../components/ClothSidebar";
import UploadBox from "../components/UploadBox";
import TryOnButton from "../components/TryOnButton";
import ResultCompare from "../components/ResultCompare";
import Loader from "../components/Loader";

function Home() {

  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState("");
  const [uploadedImage, setUploadedImage] = useState("");
  const [selectedCloth, setSelectedCloth] = useState("");
  const [generatedImage, setGeneratedImage] = useState("");
  const [loading, setLoading] = useState(false);

  const uploadImage = async () => {

    if (!image) return alert("Upload photo first");

    const formData = new FormData();
    formData.append("image", image);

    const res = await fetch("http://localhost:5000/upload", {
      method: "POST",
      body: formData
    });

    const data = await res.json();

    setUploadedImage(data.imageUrl);
  };

  const generateTryOn = async () => {

    if (!uploadedImage) return alert("Upload image first");
    if (!selectedCloth) return alert("Select cloth");

    setLoading(true);

    const res = await fetch("http://localhost:5000/api/tryon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        personUrl: uploadedImage,
        clothUrl: selectedCloth
      })
    });

    const data = await res.json();

    setGeneratedImage(data.resultImage);

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">

      <Header />

      <div className="flex">

        <ClothSidebar
          selectedCloth={selectedCloth}
          setSelectedCloth={setSelectedCloth}
        />

        <main className="flex-1 flex flex-col items-center p-10">

          <UploadBox
            setImage={setImage}
            setPreviewImage={setPreviewImage}
          />

          <button
            onClick={uploadImage}
            className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-lg"
          >
            Upload Photo
          </button>

          {previewImage && (
            <img
              src={previewImage}
              className="w-64 mt-6 rounded-xl shadow-lg"
            />
          )}

          <TryOnButton
            generateTryOn={generateTryOn}
            loading={loading}
          />

          {loading && <Loader />}

          <ResultCompare
            before={uploadedImage}
            after={generatedImage}
          />

        </main>

      </div>
    </div>
  );
}

export default Home;