import React from "react";
import "./projectPreview.scss";

function ProjectPreview({ folderName}) {
  //  const host = window.location.host;
  return (
    <div className="project">
      <iframe
        src={`/${folderName}/`}
        frameBorder="0"
        title={folderName}
      ></iframe>
    </div>
  );
}

export default ProjectPreview;
