import { Download } from "lucide-react";
import APKFile from "../../assets/GECO.apk";

const DownloadButton = ({ children}) => {
    
    return (
      <a href={APKFile} download>
        <button
          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          <Download size={20} />
          {children}
        </button>
      </a>
      );
};

export default DownloadButton;
