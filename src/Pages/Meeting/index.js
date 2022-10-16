import React, { useEffect } from "react";
import Iframe from "react-iframe";
import { useLocation } from "react-router-dom";
import "../../Components/FeedHeader/style.css";

// import FeadHeader from "../../Components/FeedHeader";

export default function Meeting() {
  const [iframe, setIframe] = React.useState("");
  const search = useLocation().search;
  const room = new URLSearchParams(search).get("room");

  useEffect(() => {
    const _iframe = document.getElementById("video-app");
    if (_iframe) {
      setIframe(_iframe);
    }
  }, []);

  useEffect(() => {
    if (iframe) {
      const iWindow = iframe.contentWindow;
      const iDocument = iWindow.document;
      const jss13 = iDocument.querySelector("jss13");
      jss13 && (jss13.style.display = "none");
      const input_user_name = iDocument.getElementById("input-user-name");
      input_user_name && (input_user_name.value = "John Doe");
    }
  }, [iframe]);

  return (
    <div>
      <div className="feed_header_container">
        <div className="logo_container">
          <h3 className="">
            <span className="logo">MedPharm</span>
          </h3>
        </div>
      </div>

      <div className="" style={{ width: "100vw", height: "90vh" }}>
        <Iframe
          url="https://video-app-3980-8336-dev.twil.io?passcode=21563139808336"
          width="100%"
          height="100%"
          id="video-app"
          className=""
          display="block"
          position="relative"
          allowFullScreen
        />
      </div>
    </div>
  );
}
