function ResultCard({ generatedImage }) {
  if (!generatedImage) return null;

  return (
    <div className="flex flex-col items-center mt-6">
      <h2 className="text-xl font-semibold mb-3">
        AI Try-On Result
      </h2>

      <img
        src={generatedImage}
        alt="result"
        className="w-72 rounded-xl shadow-xl border"
      />
    </div>
  );
}

export default ResultCard;