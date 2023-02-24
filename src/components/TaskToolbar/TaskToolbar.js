import React from "react";

import "./TaskToolbar.css";

export function TaskToolbar({ toolbarTitle }) {
  const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const weekKor = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
  const today = new Date();
  var dd = String(today.getDate()).padStart(2, "");
  var mm = String(today.getMonth() + 1).padStart(2, "");
  var day = String(week[today.getDay()]); // returns integer of day of the week
  var dayKor = String(weekKor[today.getDay()]);
  var toolbarIcon = "";
  var toolbarIconColor = "";
  var height = 0;
  var width = 0;

  switch (toolbarTitle) {
    case "My Day":
      toolbarIcon =
        "M12 2c.41 0 .75.34.75.75v1.5a.75.75 0 01-1.5 0v-1.5c0-.41.34-.75.75-.75zm0 15a5 5 0 100-10 5 5 0 000 10zm0-1.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7zm9.25-2.75a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5h1.5zM12 19c.41 0 .75.34.75.75v1.5a.75.75 0 01-1.5 0v-1.5c0-.41.34-.75.75-.75zm-7.75-6.25a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5h1.5zm-.03-8.53c.3-.3.77-.3 1.06 0l1.5 1.5a.75.75 0 01-1.06 1.06l-1.5-1.5a.75.75 0 010-1.06zm1.06 15.56a.75.75 0 11-1.06-1.06l1.5-1.5a.75.75 0 111.06 1.06l-1.5 1.5zm14.5-15.56a.75.75 0 00-1.06 0l-1.5 1.5a.75.75 0 001.06 1.06l1.5-1.5c.3-.3.3-.77 0-1.06zm-1.06 15.56a.75.75 0 101.06-1.06l-1.5-1.5a.75.75 0 10-1.06 1.06l1.5 1.5z";
      toolbarIconColor = "currentColor";
      width = 24;
      height = 24;
      break;

    case "Important":
      toolbarIcon =
        "M9.1 2.9a1 1 0 011.8 0l1.93 3.91 4.31.63a1 1 0 01.56 1.7l-3.12 3.05.73 4.3a1 1 0 01-1.45 1.05L10 15.51l-3.86 2.03a1 1 0 01-1.45-1.05l.74-4.3L2.3 9.14a1 1 0 01.56-1.7l4.31-.63L9.1 2.9zm.9.44L8.07 7.25a1 1 0 01-.75.55L3 8.43l3.12 3.04a1 1 0 01.3.89l-.75 4.3 3.87-2.03a1 1 0 01.93 0l3.86 2.03-.74-4.3a1 1 0 01.29-.89L17 8.43l-4.32-.63a1 1 0 01-.75-.55L10 3.35z";
      toolbarIconColor = "#ffca28";
      width = 28;
      height = 28;

      break;

    case "All":
      toolbarIcon =
        "M3 12c0-2.168 1.36-4 3.5-4 1.352 0 2.291.498 3.053 1.26.486.486.899 1.078 1.293 1.729.176-.316.363-.647.564-.982a9.018 9.018 0 00-1.15-1.454C9.334 7.627 8.148 7 6.5 7 3.64 7 2 9.466 2 12s1.64 5 4.5 5c1.648 0 2.834-.627 3.76-1.553.92-.919 1.551-2.078 2.177-3.204.633-1.14 1.225-2.198 2.01-2.983C15.21 8.498 16.148 8 17.5 8c2.14 0 3.5 1.832 3.5 4s-1.36 4-3.5 4c-1.352 0-2.291-.498-3.053-1.26-.486-.486-.899-1.078-1.293-1.729-.176.316-.363.647-.564.982a9.02 9.02 0 001.15 1.454c.926.926 2.112 1.553 3.76 1.553 2.86 0 4.5-2.466 4.5-5s-1.64-5-4.5-5c-1.648 0-2.834.627-3.76 1.553-.893.893-1.547 2.07-2.159 3.171-.585 1.054-1.168 2.155-2.028 3.016C8.79 15.502 7.852 16 6.5 16 4.36 16 3 14.168 3 12z";
      toolbarIconColor = "#C75F5B";
      width = 28;
      height = 28;

      break;

    case "Completed":
      toolbarIcon =
        "M10 2a8 8 0 110 16 8 8 0 010-16zm0 1a7 7 0 100 14 7 7 0 000-14zm3.36 4.65c.17.17.2.44.06.63l-.06.07-4 4a.5.5 0 01-.64.07l-.07-.06-2-2a.5.5 0 01.63-.77l.07.06L9 11.3l3.65-3.65c.2-.2.51-.2.7 0z";
      toolbarIconColor = "#1E704D";
      width = 27;
      height = 27;
      break;
  }

  return (
    <div className="taskToolbar">
      <div className="taskToolbar-top">
        <div className="taskToolbar-headline">
          <div className="tasksToolbar-headline">
            <div className="tasksToolbar-titleContainer">
              <div className="tasksToolbar-titleItem">
                <h2 className="listTitle" tabIndex="-1">
                  <svg
                    className="fluentIcon listTitle-icon ___12fm75w f1w7gpdv fez10in fg4l7m0"
                    fill="currentColor"
                    aria-hidden="true"
                    width={width}
                    height={height}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d={toolbarIcon} fill={toolbarIconColor}></path>
                  </svg>
                  <span>{toolbarTitle}</span>
                </h2>
              </div>
            </div>
            <div className="tasksToolbar-subline">
              <span className="todayDateHint">
                <span className="date">
                  {mm}월 {dd}일, {dayKor}
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="taskToolbar-right"></div>
      </div>
    </div>
  );
}
