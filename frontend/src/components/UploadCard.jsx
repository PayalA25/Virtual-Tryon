function UploadCard({ handleFileChange, uploadImage }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md border">
      <label className="block text-gray-700 font-medium mb-2">
        Upload Your Photo
      </label>

      <input
        type="file"
        onChange={handleFileChange}
        className="mb-4 w-full"
      />

      <button
        onClick={uploadImage}
        className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
      >
        Upload Photo
      </button>
    </div>
  );
}

export default UploadCard;