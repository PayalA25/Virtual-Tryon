import { useDropzone } from "react-dropzone";
import { motion } from "framer-motion";
import { FaUpload } from "react-icons/fa";

function UploadBox({ setImage, setPreviewImage }) {

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="border-2 border-dashed border-indigo-400 rounded-xl p-10 text-center bg-white shadow-lg w-full max-w-md cursor-pointer"
      {...getRootProps()}
    >
      <input {...getInputProps()} />

      <FaUpload className="text-3xl mx-auto text-indigo-500 mb-3" />

      <p className="text-gray-600">
        Drag & Drop your photo here
      </p>

      <p className="text-sm text-gray-400">
        or click to upload
      </p>
    </motion.div>
  );
}

export default UploadBox;