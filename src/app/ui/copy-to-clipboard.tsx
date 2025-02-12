import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";
import { ToastContainer, toast } from "react-toastify";

interface CopyToClipboardProps {
  text: string;
  className: string | undefined;
}

export default function CopyToClipboard({
  text,
  className,
}: CopyToClipboardProps) {
  function notify() {
    return toast.info("Copied to clipboard", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  function copyText(text: string) {
    navigator.clipboard.writeText(text);
    notify();
  }

  return (
    <>
      <ClipboardDocumentIcon
        className={className}
        onClick={() => {
          copyText(text);
        }}
      />
      <ToastContainer />
    </>
  );
}
