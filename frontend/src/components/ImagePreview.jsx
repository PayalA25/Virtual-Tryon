function ImagePreview({ title, image }) {
  if (!image) return null;

  return (
    <div className="flex flex-col items-center mt-6">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>

      <img
        src={image}
        alt="preview"
        className="w-64 rounded-xl shadow-lg border"
      />
    </div>
  );
}

export default ImagePreview;