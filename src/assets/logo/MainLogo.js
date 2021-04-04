
import React from "react";
import Svg,{Path} from "react-native-svg";

const SVG = ({
  style= {},
  width="268",
  height="70",
  viewBox="0 0 268 70",
  className = "",
  fill="#fff",
}) => (
  <Svg
      style={style}
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      className={`svg-icon-necstar ${className || ""}`}
      // {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M37.543 5.642C37.816 3.202 36.087 1 33.648.727a4.415 4.415 0 00-4.916 3.896c-.328 2.785.128 6.116.71 9.539 1.62.492 3.186 1.202 4.642 2.039 1.566-3.696 3.095-7.355 3.46-10.559zm17.131 10.705c-.965-2.258-3.586-3.277-5.844-2.312-2.967 1.292-6.044 3.823-9.139 6.426a24.132 24.132 0 013.186 3.841c3.514-.437 6.882-.965 9.485-2.093 2.257-1.002 3.295-3.623 2.312-5.862zM47.192 4.44c-1.966-1.457-4.752-1.056-6.208.91-2.221 2.986-3.714 7.446-5.334 11.797.546.364 1.056.728 1.547 1.11.364.291.747.6 1.13.91 3.713-2.803 7.572-5.534 9.793-8.52a4.444 4.444 0 00-.928-6.207z"
        fill={fill}
      />
      <Path
        d="M38.745 40.086c-1.365 1.474-2.822 2.84-4.37 4.169a168.972 168.972 0 01-6.608 5.443c-2.403-1.475-4.132-2.221-4.423-1.839-.255.346.746 1.62 2.548 3.277C19.848 55.632 13.458 59.6 6.595 62.86c-1.074.51-2.203.874-3.313 1.274-.291.11-.6.11-.728.128-1.748.2-2.276-.273-2.203-1.876.218-4.988 1.766-9.666 3.368-14.327.437-1.274.892-2.548 1.365-3.823 2.421 1.475 4.15 2.24 4.442 1.857.31-.419-1.147-2.093-3.586-4.187 1.747-4.515 3.695-8.957 5.99-13.216 4.587 3.404 8.665 5.643 9.12 5.024.455-.619-2.913-3.914-7.555-7.355l-.2-.145a79.08 79.08 0 012.53-4.06c1.11-1.675 2.476-3.204 3.823-4.697 1.802-1.984 4.133-2.658 6.736-2.075 8.338 1.857 14.127 6.644 16.857 14.855.547 1.675.055 3.313-.8 4.824a24.229 24.229 0 01-1.93 2.895c-4.406-3.223-8.229-5.298-8.666-4.715-.418.582 2.622 3.586 6.9 6.845zM92.449 10.403c-5.771 0-9.521 2.312-11.797 6.699h-.127v-2.73c0-1.967-1.602-3.55-3.568-3.55a3.543 3.543 0 00-3.55 3.55v30.201c0 1.966 1.584 3.568 3.55 3.568h.346a3.574 3.574 0 003.568-3.568V26.587c0-5.88 3.368-9.794 8.993-9.794 5.461 0 8.083 3.167 8.083 8.829v18.951c0 1.966 1.584 3.568 3.55 3.568h.346c1.966 0 3.55-1.602 3.55-3.568V24.22c0-8.593-4.697-13.817-12.944-13.817zM128.422 10.33c-10.432 0-17.24 7.61-17.24 19.279 0 11.687 6.735 18.969 17.549 18.969 6.699 0 12.234-2.967 14.728-7.591.928-1.694-.346-3.787-2.276-3.787h-1.893c-.947 0-1.766.546-2.258 1.365-1.438 2.476-4.46 3.969-8.155 3.969-6.117 0-10.177-4.26-10.177-10.723v-.437h23.848a2.596 2.596 0 002.586-2.585v-.036c0-11.305-6.463-18.423-16.712-18.423zm-9.685 15.747c.418-5.735 4.296-9.667 9.666-9.667 5.425 0 9.103 3.86 9.267 9.667h-18.933zM179.85 35.598h-1.984c-1.074 0-2.003.674-2.403 1.675-1.293 3.295-4.242 5.06-8.429 5.06-5.989 0-10.031-4.824-10.031-12.852 0-7.846 3.987-12.852 9.995-12.852 4.332 0 7.227 2.148 8.41 5.206.401 1.02 1.329 1.73 2.44 1.73h1.984c1.729 0 3.022-1.694 2.458-3.332-1.912-5.625-7.373-9.903-15.365-9.903-10.541 0-17.495 7.536-17.495 19.151 0 11.815 6.972 19.097 17.568 19.097 7.591 0 13.234-3.714 15.31-9.594.582-1.657-.692-3.386-2.458-3.386zM202.206 42.28a3 3 0 00-.401-.037c-2.458-.292-3.605-1.82-3.605-4.697V16.7h4.206a2.949 2.949 0 002.949-2.949 2.933 2.933 0 00-2.949-2.93H198.2v-4.68a3.7 3.7 0 00-1.092-2.62 3.67 3.67 0 00-2.621-1.093c-2.039 0-3.696 1.675-3.696 3.714v4.678h-2.221c-1.62 0-2.949 1.311-2.949 2.931a2.96 2.96 0 002.949 2.95h2.221V38.31c0 7.21 2.876 10.068 10.34 10.068h.037c.855 0 1.638-.255 2.294-.71.018 0 .036-.018.036-.018a3.007 3.007 0 001.274-2.44c0-1.493-1.11-2.749-2.566-2.93zM226.418 10.33c-5.826 0-10.632 2.366-13.089 6.025a3.587 3.587 0 00-.601 1.948c0 1.82 1.456 3.514 3.513 3.514 1.202 0 2.349-.637 2.913-1.693 1.202-2.258 3.769-3.641 7.064-3.641 4.988 0 7.828 2.348 7.828 6.608v.455a2.56 2.56 0 01-2.422 2.567l-7.646.437c-9.211.583-14.254 4.37-14.254 10.905 0 6.663 5.152 11.05 12.616 11.05 5.079 0 9.721-2.53 11.779-6.59h.163v2.658c0 .983.401 1.875 1.038 2.53a3.625 3.625 0 002.531 1.038c1.966 0 3.549-1.602 3.549-3.568V22.545c0-7.391-5.88-12.215-14.982-12.215zm7.628 23.793c0 4.897-4.187 8.447-9.722 8.447-4.296 0-7.081-2.057-7.081-5.26 0-3.296 2.658-5.19 7.737-5.499l9.066-.619v2.931zM265.158 10.439c-4.406 0-7.828 2.512-9.012 6.663h-.127v-2.73a3.554 3.554 0 00-3.55-3.55c-1.966 0-3.568 1.583-3.568 3.55v30.037c0 1.02.419 1.966 1.092 2.64a3.714 3.714 0 002.64 1.092 3.737 3.737 0 003.732-3.732V25.877c0-5.262 3.095-8.666 8.01-8.666.2 0 .419 0 .619.018 1.529.055 2.767-1.201 2.767-2.73V13.06c0-1.438-1.165-2.621-2.603-2.621z"
        fill={fill}
      />
      <Path
        d="M204.773 45.21c0 1.001-.51 1.893-1.275 2.44 0 0-.018.018-.036.018a2.881 2.881 0 01-1.657.51 2.972 2.972 0 01-2.985-2.968 2.972 2.972 0 012.985-2.967c.128 0 .273.018.401.036a2.95 2.95 0 012.567 2.931zM82.409 63.423c-.719.71-1.592 1.064-2.618 1.064-1.027 0-1.9-.355-2.618-1.064-.71-.71-1.064-1.582-1.064-2.618 0-1.036.354-1.909 1.064-2.618.718-.71 1.591-1.064 2.618-1.064 1.026 0 1.899.355 2.618 1.064.718.71 1.078 1.582 1.078 2.618 0 1.036-.36 1.909-1.078 2.618zm-2.618-.126c.7 0 1.288-.238 1.764-.714s.714-1.069.714-1.778c0-.71-.238-1.302-.714-1.778s-1.064-.714-1.764-.714c-.691 0-1.274.238-1.75.714s-.714 1.069-.714 1.778c0 .71.238 1.302.714 1.778s1.059.714 1.75.714zm14.118-6.174c.82 0 1.479.261 1.973.784.495.513.742 1.213.742 2.1v4.298h-1.218v-4.228c0-.57-.154-1.008-.462-1.316-.308-.318-.732-.476-1.273-.476-.607 0-1.097.191-1.47.574-.374.373-.56.952-.56 1.736v3.71h-1.219v-7h1.219v1.008c.494-.794 1.25-1.19 2.267-1.19zm9.916 7.182v-10.22h1.218v10.22h-1.218zm9.192-8.274a.8.8 0 01-.588-.238.781.781 0 01-.238-.574c0-.224.079-.416.238-.574a.778.778 0 01.588-.252c.224 0 .415.084.574.252.159.158.238.35.238.574a.781.781 0 01-.238.574.783.783 0 01-.574.238zm-.616 8.274v-7h1.218v7h-1.218zm12.062-7.182c.822 0 1.48.261 1.974.784.495.513.742 1.213.742 2.1v4.298h-1.218v-4.228c0-.57-.154-1.008-.462-1.316-.308-.318-.732-.476-1.274-.476-.606 0-1.096.191-1.47.574-.373.373-.56.952-.56 1.736v3.71h-1.218v-7h1.218v1.008c.495-.794 1.251-1.19 2.268-1.19zm10.771 4.242c.121.625.406 1.11.854 1.456.457.345 1.017.518 1.68.518.924 0 1.596-.34 2.016-1.022l1.036.588c-.682 1.054-1.708 1.582-3.08 1.582-1.111 0-2.016-.346-2.716-1.036-.691-.7-1.036-1.582-1.036-2.646 0-1.055.34-1.932 1.022-2.632.681-.7 1.563-1.05 2.646-1.05 1.026 0 1.862.364 2.506 1.092.653.718.98 1.586.98 2.604 0 .177-.014.36-.042.546h-5.866zm2.422-3.094c-.654 0-1.195.187-1.624.56-.43.364-.696.854-.798 1.47h4.676c-.103-.663-.364-1.167-.784-1.512a2.245 2.245 0 00-1.47-.518zm25.196-.966h1.204v6.706c0 1.036-.35 1.839-1.05 2.408-.7.579-1.54.868-2.52.868-.784 0-1.461-.15-2.03-.448-.57-.29-.999-.71-1.288-1.26l1.064-.602c.382.784 1.143 1.176 2.282 1.176.728 0 1.297-.192 1.708-.574.42-.383.63-.905.63-1.568v-.994c-.616.933-1.494 1.4-2.632 1.4-.999 0-1.844-.355-2.534-1.064-.691-.71-1.036-1.573-1.036-2.59s.345-1.876 1.036-2.576c.69-.71 1.535-1.064 2.534-1.064 1.148 0 2.025.462 2.632 1.386v-1.204zm-4.27 5.236c.476.476 1.068.714 1.778.714.709 0 1.302-.238 1.778-.714s.714-1.069.714-1.778c0-.7-.238-1.288-.714-1.764s-1.069-.714-1.778-.714c-.71 0-1.302.238-1.778.714s-.714 1.064-.714 1.764c0 .71.238 1.302.714 1.778zm14.037-4.06c.401-.868 1.129-1.302 2.184-1.302v1.274c-.597-.028-1.111.13-1.54.476-.429.345-.644.9-.644 1.666v3.71h-1.218v-7h1.218v1.176zm14.401 4.942c-.719.71-1.591 1.064-2.618 1.064s-1.899-.355-2.618-1.064c-.709-.71-1.064-1.582-1.064-2.618 0-1.036.355-1.909 1.064-2.618.719-.71 1.591-1.064 2.618-1.064s1.899.355 2.618 1.064c.719.71 1.078 1.582 1.078 2.618 0 1.036-.359 1.909-1.078 2.618zm-2.618-.126c.7 0 1.288-.238 1.764-.714s.714-1.069.714-1.778c0-.71-.238-1.302-.714-1.778s-1.064-.714-1.764-.714c-.691 0-1.274.238-1.75.714s-.714 1.069-.714 1.778c0 .71.238 1.302.714 1.778s1.059.714 1.75.714zm13.922 1.19c-1.055 0-1.932-.35-2.632-1.05-.7-.71-1.05-1.587-1.05-2.632 0-1.045.35-1.918 1.05-2.618.7-.71 1.577-1.064 2.632-1.064.691 0 1.311.168 1.862.504.551.326.961.77 1.232 1.33l-1.022.588a2.064 2.064 0 00-.826-.896 2.328 2.328 0 00-1.246-.336c-.7 0-1.288.238-1.764.714-.467.476-.7 1.069-.7 1.778 0 .7.233 1.288.7 1.764.476.476 1.064.714 1.764.714a2.48 2.48 0 001.26-.322c.373-.224.658-.523.854-.896l1.036.602c-.299.55-.728.994-1.288 1.33-.56.326-1.181.49-1.862.49zm10.611-3.122c.121.625.406 1.11.854 1.456.457.345 1.017.518 1.68.518.924 0 1.596-.34 2.016-1.022l1.036.588c-.682 1.054-1.708 1.582-3.08 1.582-1.111 0-2.016-.346-2.716-1.036-.691-.7-1.036-1.582-1.036-2.646 0-1.055.34-1.932 1.022-2.632.681-.7 1.563-1.05 2.646-1.05 1.026 0 1.862.364 2.506 1.092.653.718.98 1.586.98 2.604 0 .177-.014.36-.042.546h-5.866zm2.422-3.094c-.654 0-1.195.187-1.624.56-.43.364-.696.854-.798 1.47h4.676c-.103-.663-.364-1.167-.784-1.512a2.245 2.245 0 00-1.47-.518zm11.604.21c.401-.868 1.129-1.302 2.184-1.302v1.274c-.597-.028-1.111.13-1.54.476-.429.345-.644.9-.644 1.666v3.71h-1.218v-7h1.218v1.176zm9.492-2.45a.797.797 0 01-.588-.238.781.781 0 01-.238-.574c0-.224.079-.416.238-.574a.775.775 0 01.588-.252c.224 0 .415.084.574.252.158.158.238.35.238.574 0 .224-.08.415-.238.574a.783.783 0 01-.574.238zm-.616 8.274v-7h1.218v7h-1.218zm9.43-2.94c.121.625.406 1.11.854 1.456.457.345 1.017.518 1.68.518.924 0 1.596-.34 2.016-1.022l1.036.588c-.682 1.054-1.708 1.582-3.08 1.582-1.111 0-2.016-.346-2.716-1.036-.691-.7-1.036-1.582-1.036-2.646 0-1.055.34-1.932 1.022-2.632.681-.7 1.563-1.05 2.646-1.05 1.026 0 1.862.364 2.506 1.092.653.718.98 1.586.98 2.604 0 .177-.014.36-.042.546h-5.866zm2.422-3.094c-.654 0-1.195.187-1.624.56-.43.364-.696.854-.798 1.47h4.676c-.103-.663-.364-1.167-.784-1.512a2.245 2.245 0 00-1.47-.518zm13.989.21h-1.862v3.794c0 .345.065.593.196.742.14.14.35.214.63.224.28 0 .625-.01 1.036-.028v1.092c-1.064.14-1.844.056-2.338-.252-.495-.317-.742-.91-.742-1.778V58.48h-1.386v-1.176h1.386v-1.596l1.218-.364v1.96h1.862v1.176z"
        fill={fill}
      />
    </Svg>
)

export default SVG;