import { IconName } from "./IconType";

const getIcon = (name: IconName, color: string) => {
    switch (name) {
      case "dashboard":
        return (
          <svg viewBox="0 0 24 24" fill={color}>
            <path d="M13,3V9H21V3M13,21H21V11H13M3,21H11V15H3M3,13H11V3H3V13Z" />
          </svg>
        );
      case "cog-outlined":
        return (
          <svg viewBox="0 0 24 24" fill={color}>
            <defs>
              <linearGradient
                id="gradient"
                gradientUnits="userSpaceOnUse"
                x1="0%"
                y1="100%"
                x2="100%"
                y2="0%"
                gradientTransform="rotate(307.69)"
              >
                <stop offset="6.69%" stopColor="#E3D1BF" />
                <stop offset="81.85%" stopColor="#ABFFC2" />
              </linearGradient>
            </defs>
            <path d="M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M10,22C9.75,22 9.54,21.82 9.5,21.58L9.13,18.93C8.5,18.68 7.96,18.34 7.44,17.94L4.95,18.95C4.73,19.03 4.46,18.95 4.34,18.73L2.34,15.27C2.21,15.05 2.27,14.78 2.46,14.63L4.57,12.97L4.5,12L4.57,11L2.46,9.37C2.27,9.22 2.21,8.95 2.34,8.73L4.34,5.27C4.46,5.05 4.73,4.96 4.95,5.05L7.44,6.05C7.96,5.66 8.5,5.32 9.13,5.07L9.5,2.42C9.54,2.18 9.75,2 10,2H14C14.25,2 14.46,2.18 14.5,2.42L14.87,5.07C15.5,5.32 16.04,5.66 16.56,6.05L19.05,5.05C19.27,4.96 19.54,5.05 19.66,5.27L21.66,8.73C21.79,8.95 21.73,9.22 21.54,9.37L19.43,11L19.5,12L19.43,13L21.54,14.63C21.73,14.78 21.79,15.05 21.66,15.27L19.66,18.73C19.54,18.95 19.27,19.04 19.05,18.95L16.56,17.95C16.04,18.34 15.5,18.68 14.87,18.93L14.5,21.58C14.46,21.82 14.25,22 14,22H10M11.25,4L10.88,6.61C9.68,6.86 8.62,7.5 7.85,8.39L5.44,7.35L4.69,8.65L6.8,10.2C6.4,11.37 6.4,12.64 6.8,13.8L4.68,15.36L5.43,16.66L7.86,15.62C8.63,16.5 9.68,17.14 10.87,17.38L11.24,20H12.76L13.13,17.39C14.32,17.14 15.37,16.5 16.14,15.62L18.57,16.66L19.32,15.36L17.2,13.81C17.6,12.64 17.6,11.37 17.2,10.2L19.31,8.65L18.56,7.35L16.15,8.39C15.38,7.5 14.32,6.86 13.12,6.62L12.75,4H11.25Z" />
          </svg>
        );
      case "chart":
        return (
          <svg viewBox="0 0 512 512" fill={color}>
            <path d="M396.8 352h22.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-22.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-192 0h22.4c6.4 0 12.8-6.4 12.8-12.8V140.8c0-6.4-6.4-12.8-12.8-12.8h-22.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h22.4c6.4 0 12.8-6.4 12.8-12.8V204.8c0-6.4-6.4-12.8-12.8-12.8h-22.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zM496 400H48V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16zm-387.2-48h22.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-22.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8z" />
          </svg>
        );
      case "credit-card":
        return (
          <svg viewBox="0 0 576 512" fill={color}>
            <path d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z" />
          </svg>
        );
      case "open-drawer":
        return (
          <svg viewBox="0 0 24 24" fill={color}>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 22H21V20H12V22ZM12 16H21V14H12V16ZM3 10H21V8H3V10ZM3 2V4H21V2H3Z"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.00078 23L9.17578 21.825L5.35911 18L9.17578 14.175L8.00078 13L3.00078 18L8.00078 23Z"
            />
          </svg>
        );
      case "close-drawer":
        return (
          <svg viewBox="0 0 24 24" fill={color}>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 22H12V20H3V22ZM3 16H12V14H3V16ZM3 10H21V8H3V10ZM3 2V4H21V2H3Z"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.175 13L15 14.175L18.8167 18L15 21.825L16.175 23L21.175 18L16.175 13Z"
            />
          </svg>
        );
      case "cloud-upload":
        return (
          <svg viewBox="0 0 24 24" fill={color}>
            <path d="M11 20H6.5Q4.22 20 2.61 18.43 1 16.85 1 14.58 1 12.63 2.17 11.1 3.35 9.57 5.25 9.15 5.88 6.85 7.75 5.43 9.63 4 12 4 14.93 4 16.96 6.04 19 8.07 19 11 20.73 11.2 21.86 12.5 23 13.78 23 15.5 23 17.38 21.69 18.69 20.38 20 18.5 20H13V12.85L14.6 14.4L16 13L12 9L8 13L9.4 14.4L11 12.85Z" />
          </svg>
        );
      case "chevron-left":
        return (
          <svg viewBox="0 0 24 24" fill={color}>
            <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
          </svg>
        );
      case "chevron-right":
        return (
          <svg viewBox="0 0 24 24" fill={color}>
            <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
          </svg>
        );
      case "account":
        return (
          <svg viewBox="0 0 24 24" fill={color}>
            <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
          </svg>
        );
      case "create-account":
        return (
          <svg viewBox="0 0 24 24" fill={color}>
            <path d="M15,14C12.33,14 7,15.33 7,18V20H23V18C23,15.33 17.67,14 15,14M6,10V7H4V10H1V12H4V15H6V12H9V10M15,12A4,4 0 0,0 19,8A4,4 0 0,0 15,4A4,4 0 0,0 11,8A4,4 0 0,0 15,12Z" />
          </svg>
        );
      case "plus":
        return (
          <svg viewBox="0 0 24 24" fill={color}>
            <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
          </svg>
        );
      case "plus-circle":
        return (
          <svg viewBox="0 0 24 24" fill={color}>
            <path d="M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
          </svg>
        );
      case "sync":
        return (
          <svg viewBox="0 0 24 24" fill={color}>
            <path d="M12,18A6,6 0 0,1 6,12C6,11 6.25,10.03 6.7,9.2L5.24,7.74C4.46,8.97 4,10.43 4,12A8,8 0 0,0 12,20V23L16,19L12,15M12,4V1L8,5L12,9V6A6,6 0 0,1 18,12C18,13 17.75,13.97 17.3,14.8L18.76,16.26C19.54,15.03 20,13.57 20,12A8,8 0 0,0 12,4Z" />
          </svg>
        );
      case "close":
        return (
          <svg viewBox="0 0 24 24" fill={color}>
            <path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" />
          </svg>
        );
      case "info":
        return (
          <svg viewBox="0 0 24 24" fill={color}>
            <path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" />
          </svg>
        );
      case "alert":
        return (
          <svg viewBox="0 0 24 24" fill={color}>
            <path d="M12 2C11.5 2 11 2.19 10.59 2.59L2.59 10.59C1.8 11.37 1.8 12.63 2.59 13.41L10.59 21.41C11.37 22.2 12.63 22.2 13.41 21.41L21.41 13.41C22.2 12.63 22.2 11.37 21.41 10.59L13.41 2.59C13 2.19 12.5 2 12 2M12 4L20 12L12 20L4 12M11 7V13H13V7M11 15V17H13V15Z" />
          </svg>
        );
      case "check":
        return (
          <svg viewBox="0 0 24 24" fill={color}>
            <path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
          </svg>
        );
      case "check-empty":
        return (
          <svg viewBox="0 0 24 24" fill={color}>
            <path d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
          </svg>
        );
      case "attachment":
        return (
          <svg viewBox="0 0 24 24" fill={color}>
            <path d="M7.5,18A5.5,5.5 0 0,1 2,12.5A5.5,5.5 0 0,1 7.5,7H18A4,4 0 0,1 22,11A4,4 0 0,1 18,15H9.5A2.5,2.5 0 0,1 7,12.5A2.5,2.5 0 0,1 9.5,10H17V11.5H9.5A1,1 0 0,0 8.5,12.5A1,1 0 0,0 9.5,13.5H18A2.5,2.5 0 0,0 20.5,11A2.5,2.5 0 0,0 18,8.5H7.5A4,4 0 0,0 3.5,12.5A4,4 0 0,0 7.5,16.5H17V18H7.5Z" />
          </svg>
        );
      case "contact-list":
        return (
          <svg viewBox="0 0 24 24" fill={color}>
            <path d="M20,0H4V2H20V0M4,24H20V22H4V24M20,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6A2,2 0 0,0 20,4M12,6.75A2.25,2.25 0 0,1 14.25,9A2.25,2.25 0 0,1 12,11.25A2.25,2.25 0 0,1 9.75,9A2.25,2.25 0 0,1 12,6.75M17,17H7V15.5C7,13.83 10.33,13 12,13C13.67,13 17,13.83 17,15.5V17Z" />
          </svg>
        );
      case "delivery-truck":
        return (
          <svg viewBox="0 0 24 24" fill={color}>
            <path d="M3,13.5L2.25,12H7.5L6.9,10.5H2L1.25,9H9.05L8.45,7.5H1.11L0.25,6H4A2,2 0 0,1 6,4H18V8H21L24,12V17H22A3,3 0 0,1 19,20A3,3 0 0,1 16,17H12A3,3 0 0,1 9,20A3,3 0 0,1 6,17H4V13.5H3M19,18.5A1.5,1.5 0 0,0 20.5,17A1.5,1.5 0 0,0 19,15.5A1.5,1.5 0 0,0 17.5,17A1.5,1.5 0 0,0 19,18.5M20.5,9.5H18V12H22.46L20.5,9.5M9,18.5A1.5,1.5 0 0,0 10.5,17A1.5,1.5 0 0,0 9,15.5A1.5,1.5 0 0,0 7.5,17A1.5,1.5 0 0,0 9,18.5Z" />
          </svg>
        );
      case "company":
        return (
          <svg viewBox="0 0 24 24" fill={color}>
            <path d="M18,15H16V17H18M18,11H16V13H18M20,19H12V17H14V15H12V13H14V11H12V9H20M10,7H8V5H10M10,11H8V9H10M10,15H8V13H10M10,19H8V17H10M6,7H4V5H6M6,11H4V9H6M6,15H4V13H6M6,19H4V17H6M12,7V3H2V21H22V7H12Z" />
          </svg>
        );
      case "message":
        return (
          <svg viewBox="0 0 24 24" fill={color}>
            <path d="M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2M6,9H18V11H6M14,14H6V12H14M18,8H6V6H18" />
          </svg>
        );
      case "chart":
        return (
          <svg viewBox="0 0 24 24" fill={color}>
            <path d="M22,21H2V3H4V15.54L9.5,6L16,9.78L20.24,2.45L21.97,3.45L22,21Z" />
          </svg>
        );
      case "currency-euro":
        return (
          <svg viewBox="0 0 24 24" fill={color}>
            <path d="M15 18.5C12.5 18.5 10.32 17.08 9.24 15H15L16 13H8.58C8.53 12.67 8.5 12.34 8.5 12S8.53 11.33 8.58 11H15L16 9H9.24C10.32 6.92 12.5 5.5 15 5.5C16.61 5.5 18.09 6.09 19.23 7.07L21 5.3C19.41 3.87 17.3 3 15 3C11.08 3 7.76 5.5 6.5 9H3L2 11H6.06C6 11.33 6 11.66 6 12S6 12.67 6.06 13H3L2 15H6.5C7.76 18.5 11.08 21 15 21C17.31 21 19.41 20.13 21 18.7L19.22 16.93C18.09 17.91 16.62 18.5 15 18.5Z" />
          </svg>
        );
      case "timeline-clock":
        return (
          <svg viewBox="0 0 24 24" fill={color}>
            <path d="M4 2V8H2V2H4M2 22V16H4V22H2M5 12C5 13.11 4.11 14 3 14C1.9 14 1 13.11 1 12C1 10.9 1.9 10 3 10C4.11 10 5 10.9 5 12M16 4C20.42 4 24 7.58 24 12C24 16.42 20.42 20 16 20C12.4 20 9.36 17.62 8.35 14.35L6 12L8.35 9.65C9.36 6.38 12.4 4 16 4M16 6C12.69 6 10 8.69 10 12C10 15.31 12.69 18 16 18C19.31 18 22 15.31 22 12C22 8.69 19.31 6 16 6M15 13V8H16.5V12.2L19.5 14L18.68 15.26L15 13Z" />
          </svg>
        );
      case "checkbook":
        return (
          <svg viewBox="0 0 24 24" fill={color}>
            <path d="M5,14H19V15H5V14M21,17V8H3V17H21M1,5H23V19H1V5M5,10H12V12H5V10Z" />
          </svg>
        );
      case "hand-coin":
        return (
          <svg viewBox="0 0 24 24" fill={color}>
            <path d="M16 12C18.76 12 21 9.76 21 7S18.76 2 16 2 11 4.24 11 7 13.24 12 16 12M21.45 17.6C21.06 17.2 20.57 17 20 17H13L10.92 16.27L11.25 15.33L13 16H15.8C16.15 16 16.43 15.86 16.66 15.63S17 15.12 17 14.81C17 14.27 16.74 13.9 16.22 13.69L8.95 11H7V20L14 22L22.03 19C22.04 18.47 21.84 18 21.45 17.6M5 11H.984V22H5V11Z" />
          </svg>
        );
      case "signout":
        return (
          <svg viewBox="0 0 24 24" fill={color} style={{ transform: "rotateZ(180deg)" }}>
            <path d="M17 8L15.6 9.4L17.2 11H9V13H17.2L15.6 14.6L17 16L21 12L17 8M5 5H12V3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H12V19H5V5Z" />
          </svg>
        );
      case "conditions-outside":
        return (
          <svg viewBox="0 0 24 24" fill={color}>
            <path d="M22,3H5A2,2 0 0,0 3,5V9H5V5H22V19H5V15H3V19A2,2 0 0,0 5,21H22A2,2 0 0,0 24,19V5A2,2 0 0,0 22,3M7,15V13H0V11H7V9L11,12L7,15M20,13H13V11H20V13M20,9H13V7H20V9M17,17H13V15H17V17Z" />
          </svg>
        );
      case "reply":
        return (
          <svg viewBox="0 0 24 24" fill={color}>
            <path d="M10,9V5L3,12L10,19V14.9C15,14.9 18.5,16.5 21,20C20,15 17,10 10,9Z" />
          </svg>
        );
      case "english-flag":
        return (
          <svg
            viewBox="0 0 512 512"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
            imageRendering="optimizeQuality"
            fillRule="evenodd"
            clipRule="evenodd"
          >
            <g fillRule="nonzero">
              <path
                fill="#999"
                d="M256 0c70.68 0 134.69 28.66 181.01 74.99C483.34 121.31 512 185.32 512 256c0 70.68-28.66 134.69-74.99 181.01C390.69 483.34 326.68 512 256 512c-70.68 0-134.69-28.66-181.01-74.99C28.66 390.69 0 326.68 0 256c0-70.68 28.66-134.69 74.99-181.01C121.31 28.66 185.32 0 256 0z"
              />
              <path
                fill="#fff"
                d="M256 19.48c65.3 0 124.46 26.48 167.25 69.27l1.09 1.18c42.14 42.71 68.18 101.37 68.18 166.06 0 65.31-26.5 124.46-69.29 167.25l-1.18 1.09c-42.73 42.16-101.4 68.19-166.05 68.19-65.23 0-124.37-26.51-167.18-69.33-42.84-42.74-69.33-101.89-69.33-167.2 0-65.31 26.48-124.45 69.27-167.24C131.55 45.96 190.7 19.48 256 19.48z"
              />
              <path
                fill="#FEFEFE"
                d="M256 39.59c119.52 0 216.41 96.89 216.41 216.4 0 119.52-96.89 216.42-216.41 216.42-119.51 0-216.4-96.9-216.4-216.42 0-119.51 96.89-216.4 216.4-216.4z"
              />
              <path
                fill="#012169"
                d="M183.49 179.55V52.05c-41.32 14.7-76.85 41.61-102.27 76.35l102.27 51.15zm0 152.9v127.5c-41.3-14.7-76.82-41.59-102.26-76.35l102.26-51.15zm144.55 0v127.67c41.45-14.63 77.09-41.54 102.61-76.34l-102.61-51.33zm0-152.9V51.88c41.45 14.63 77.11 41.54 102.62 76.35l-102.62 51.32z"
              />
              <path
                fill="#C8102E"
                d="M448.3 328.16h-48.11l49.35 24.72c3.21-6.41 6.11-13 8.69-19.75l-9.93-4.97zm-9.34-187.76-86.42 43.33h48.11l48.95-24.5c-3.23-6.46-6.79-12.75-10.64-18.83zM212.41 299.26v168.75c14.08 2.87 28.66 4.4 43.59 4.4 14.76 0 29.19-1.49 43.13-4.3V299.26h168.94c2.83-13.98 4.34-28.44 4.34-43.27 0-14.88-1.51-29.42-4.37-43.47H299.13V43.9A217.404 217.404 0 0 0 256 39.59c-14.93 0-29.51 1.54-43.59 4.4v168.53H43.97a217.777 217.777 0 0 0-4.37 43.47c0 14.83 1.51 29.29 4.34 43.27h168.47zM63.12 183.84h48.11l-48.89-24.48c-3.2 6.41-6.11 13.02-8.68 19.76l9.46 4.72zm95.87 144.43h-48.11l-48.57 24.31A216.76 216.76 0 0 0 73 371.52l86.43-43.25h-.44z"
              />
            </g>
          </svg>
        );
      default:
        return <></>;
    }
};

export default getIcon;
