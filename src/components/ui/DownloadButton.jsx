import { Download } from "lucide-react";

const DownloadButton = ({ children}) => {
    const downloadHander = () =>{
        window.alert("Wala pang laman -_-");
    }
    return (
        <button
          onClick={downloadHander}
          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          <Download size={20} />
          {children}
        </button>
      );
};

export default DownloadButton;
