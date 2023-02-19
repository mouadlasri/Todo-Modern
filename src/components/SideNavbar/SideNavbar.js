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
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  focusable="false"
                >
                  <path
                    d="M7 11a1 1 0 100-2 1 1 0 000 2zm1 2a1 1 0 11-2 0 1 1 0 012 0zm2-2a1 1 0 100-2 1 1 0 000 2zm1 2a1 1 0 11-2 0 1 1 0 012 0zm2-2a1 1 0 100-2 1 1 0 000 2zm4-5.5A2.5 2.5 0 0014.5 3h-9A2.5 2.5 0 003 5.5v9A2.5 2.5 0 005.5 17h9a2.5 2.5 0 002.5-2.5v-9zM4 7h12v7.5c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 014 14.5V7zm1.5-3h9c.83 0 1.5.67 1.5 1.5V6H4v-.5C4 4.67 4.67 4 5.5 4z"
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
                  fill="currentColor"
                  aria-hidden="true"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  focusable="false"
                >
                  <path
                    d="M7 11a1 1 0 100-2 1 1 0 000 2zm1 2a1 1 0 11-2 0 1 1 0 012 0zm2-2a1 1 0 100-2 1 1 0 000 2zm1 2a1 1 0 11-2 0 1 1 0 012 0zm2-2a1 1 0 100-2 1 1 0 000 2zm4-5.5A2.5 2.5 0 0014.5 3h-9A2.5 2.5 0 003 5.5v9A2.5 2.5 0 005.5 17h9a2.5 2.5 0 002.5-2.5v-9zM4 7h12v7.5c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 014 14.5V7zm1.5-3h9c.83 0 1.5.67 1.5 1.5V6H4v-.5C4 4.67 4.67 4 5.5 4z"
                    fill="currentColor"
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
                  class="fluentIcon ___12fm75w f1w7gpdv fez10in fg4l7m0"
                  fill="currentColor"
                  aria-hidden="true"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  focusable="false"
                >
                  <path
                    d="M7 11a1 1 0 100-2 1 1 0 000 2zm1 2a1 1 0 11-2 0 1 1 0 012 0zm2-2a1 1 0 100-2 1 1 0 000 2zm1 2a1 1 0 11-2 0 1 1 0 012 0zm2-2a1 1 0 100-2 1 1 0 000 2zm4-5.5A2.5 2.5 0 0014.5 3h-9A2.5 2.5 0 003 5.5v9A2.5 2.5 0 005.5 17h9a2.5 2.5 0 002.5-2.5v-9zM4 7h12v7.5c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 014 14.5V7zm1.5-3h9c.83 0 1.5.67 1.5 1.5V6H4v-.5C4 4.67 4.67 4 5.5 4z"
                    fill="currentColor"
                  ></path>
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
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  focusable="false"
                >
                  <path
                    d="M7 11a1 1 0 100-2 1 1 0 000 2zm1 2a1 1 0 11-2 0 1 1 0 012 0zm2-2a1 1 0 100-2 1 1 0 000 2zm1 2a1 1 0 11-2 0 1 1 0 012 0zm2-2a1 1 0 100-2 1 1 0 000 2zm4-5.5A2.5 2.5 0 0014.5 3h-9A2.5 2.5 0 003 5.5v9A2.5 2.5 0 005.5 17h9a2.5 2.5 0 002.5-2.5v-9zM4 7h12v7.5c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 014 14.5V7zm1.5-3h9c.83 0 1.5.67 1.5 1.5V6H4v-.5C4 4.67 4.67 4 5.5 4z"
                    fill="currentColor"
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
