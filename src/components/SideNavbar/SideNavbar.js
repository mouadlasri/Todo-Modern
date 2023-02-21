import React from "react";
import "./SideNavbar.css";

export function SideNavbar() {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <ul className="sidebar-lists">
          {/* Today planned list */}
          <li>
            <div id="myday" classItem="sidebar-list-item">
              <div className="sidebar-list-item-inner">
                <svg
                  class="fluentIcon ___12fm75w f1w7gpdv fez10in fg4l7m0"
                  fill="currentColor"
                  aria-hidden="true"
                  width="24"
                  height="24"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  focusable="false"
                >
                  <path
                    d="M10 2c.28 0 .5.22.5.5v1a.5.5 0 01-1 0v-1c0-.28.22-.5.5-.5zm0 12a4 4 0 100-8 4 4 0 000 8zm0-1a3 3 0 110-6 3 3 0 010 6zm7.5-2.5a.5.5 0 000-1h-1a.5.5 0 000 1h1zM10 16c.28 0 .5.22.5.5v1a.5.5 0 01-1 0v-1c0-.28.22-.5.5-.5zm-6.5-5.5a.5.5 0 000-1H2.46a.5.5 0 000 1H3.5zm.65-6.35c.2-.2.5-.2.7 0l1 1a.5.5 0 11-.7.7l-1-1a.5.5 0 010-.7zm.7 11.7a.5.5 0 01-.7-.7l1-1a.5.5 0 01.7.7l-1 1zm11-11.7a.5.5 0 00-.7 0l-1 1a.5.5 0 00.7.7l1-1a.5.5 0 000-.7zm-.7 11.7a.5.5 0 00.7-.7l-1-1a.5.5 0 00-.7.7l1 1z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className="sidebar-list-item-title">My Day</span>
                {/* 오늘 할 일 */}
              </div>
            </div>
          </li>

          {/* Important */}
          <li>
            <div id="important" classItem="sidebar-list-item">
              <div className="sidebar-list-item-inner">
                <svg
                  class="fluentIcon ___12fm75w f1w7gpdv fez10in fg4l7m0"
                  fill="#ffca28"
                  aria-hidden="true"
                  width="22"
                  height="22"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  focusable="false"
                >
                  <path
                    d="M9.1 2.9a1 1 0 011.8 0l1.93 3.91 4.31.63a1 1 0 01.56 1.7l-3.12 3.05.73 4.3a1 1 0 01-1.45 1.05L10 15.51l-3.86 2.03a1 1 0 01-1.45-1.05l.74-4.3L2.3 9.14a1 1 0 01.56-1.7l4.31-.63L9.1 2.9zm.9.44L8.07 7.25a1 1 0 01-.75.55L3 8.43l3.12 3.04a1 1 0 01.3.89l-.75 4.3 3.87-2.03a1 1 0 01.93 0l3.86 2.03-.74-4.3a1 1 0 01.29-.89L17 8.43l-4.32-.63a1 1 0 01-.75-.55L10 3.35z"
                    fill="#ffca28"
                  ></path>
                </svg>
                <span className="sidebar-list-item-title">Important</span>
                {/* 오늘 할 일 */}
              </div>
            </div>
          </li>

          {/* All */}
          <li>
            <div id="all" classItem="sidebar-list-item">
              <div className="sidebar-list-item-inner">
                <svg
                  focusable="false"
                  aria-hidden="true"
                  width="24"
                  height="24"
                  fill="#C75F5B"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 12c0-2.168 1.36-4 3.5-4 1.352 0 2.291.498 3.053 1.26.486.486.899 1.078 1.293 1.729.176-.316.363-.647.564-.982a9.018 9.018 0 00-1.15-1.454C9.334 7.627 8.148 7 6.5 7 3.64 7 2 9.466 2 12s1.64 5 4.5 5c1.648 0 2.834-.627 3.76-1.553.92-.919 1.551-2.078 2.177-3.204.633-1.14 1.225-2.198 2.01-2.983C15.21 8.498 16.148 8 17.5 8c2.14 0 3.5 1.832 3.5 4s-1.36 4-3.5 4c-1.352 0-2.291-.498-3.053-1.26-.486-.486-.899-1.078-1.293-1.729-.176.316-.363.647-.564.982a9.02 9.02 0 001.15 1.454c.926.926 2.112 1.553 3.76 1.553 2.86 0 4.5-2.466 4.5-5s-1.64-5-4.5-5c-1.648 0-2.834.627-3.76 1.553-.893.893-1.547 2.07-2.159 3.171-.585 1.054-1.168 2.155-2.028 3.016C8.79 15.502 7.852 16 6.5 16 4.36 16 3 14.168 3 12z"></path>
                </svg>
                <span className="sidebar-list-item-title">All</span>
                {/* 오늘 할 일 */}
              </div>
            </div>
          </li>

          {/* Completed */}
          <li>
            <div id="completed" classItem="sidebar-list-item">
              <div className="sidebar-list-item-inner">
                <svg
                  class="fluentIcon ___12fm75w f1w7gpdv fez10in fg4l7m0"
                  fill="currentColor"
                  aria-hidden="true"
                  width="22"
                  height="22"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  focusable="false"
                >
                  <path
                    d="M10 2a8 8 0 110 16 8 8 0 010-16zm0 1a7 7 0 100 14 7 7 0 000-14zm3.36 4.65c.17.17.2.44.06.63l-.06.07-4 4a.5.5 0 01-.64.07l-.07-.06-2-2a.5.5 0 01.63-.77l.07.06L9 11.3l3.65-3.65c.2-.2.51-.2.7 0z"
                    fill="#1E704D"
                  ></path>
                </svg>
                <span className="sidebar-list-item-title">Completed</span>
                {/* 오늘 할 일 */}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
