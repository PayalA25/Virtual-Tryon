import ReactCompareImage from "react-compare-image";

function ResultCompare({ before, after }) {

  if (!after) return null;

  return (
    <div className="mt-10 w-96">

      <h2 className="text-xl font-semibold text-center mb-4">
        AI Try-On Result
      </h2>

      <ReactCompareImage
        leftImage={before}
        rightImage={after}
      />

    </div>
  );
}

export default ResultCompare;