import React from "react"
import { SvgProps } from "../interfaces/interfaces"

function Amex(props : SvgProps) {
    return (
        <svg
            width="800px"
            height="800px"
            viewBox="0 -139.5 750 750"
            xmlns="http://www.w3.org/2000/svg"
            className={props.style}
        >
            <path
                d="M0 41.005C0 18.91 17.914 1 39.992 1h670.016C732.095 1 750 18.906 750 41.005v390.99C750 454.09 732.086 472 710.008 472H39.992C17.905 472 0 454.094 0 431.995V41.005zm.003 180.901h36.026l8.123-19.511h18.186l8.102 19.511h70.884V206.99l6.328 14.98h36.797l6.328-15.202v15.14h176.161l-.082-32.028h3.408c2.387.082 3.084.302 3.084 4.226v27.801h91.11v-7.456c7.35 3.922 18.78 7.456 33.821 7.456h38.33l8.204-19.511h18.186l8.022 19.511h73.864v-18.533l11.186 18.533h59.19V99.392h-58.578v14.469l-8.203-14.47h-60.108v14.47l-7.533-14.47h-81.192c-13.591 0-25.538 1.89-35.188 7.155v-7.154h-56.03v7.154c-6.14-5.427-14.509-7.154-23.813-7.154H179.918l-13.734 31.643-14.105-31.643H87.604v14.469l-7.082-14.47H25.535L0 157.642v64.265h.003zm227.657-17.254h-21.616l-.08-68.797-30.574 68.797h-18.514l-30.654-68.858v68.858H83.337l-8.102-19.593H31.333l-8.185 19.593H.248l37.758-87.842h31.327l35.861 83.169v-83.17h34.414l27.595 59.591 25.348-59.59h35.106v87.842h.003zM67.622 166.748L53.191 131.73l-14.35 35.02h28.781zm246.19 37.904h-70.438V116.81h70.437v18.292h-49.35v15.834h48.166v18.006H264.46v17.543h49.351v18.167zm99.314-64.184c0 14.005-9.388 21.24-14.858 23.413 4.614 1.75 8.554 4.838 10.43 7.398 2.977 4.369 3.491 8.272 3.491 16.117v17.256h-21.267l-.08-11.077c0-5.286.508-12.888-3.329-17.114-3.08-3.089-7.777-3.76-15.368-3.76H349.51v31.951h-21.083V116.81h48.497c10.776 0 18.715.283 25.532 4.207 6.67 3.924 10.67 9.653 10.67 19.45zm-27.574 12.336c-2.897 1.751-6.324 1.81-10.43 1.81h-25.614v-19.512h25.963c3.674 0 7.509.165 9.999 1.585 2.735 1.28 4.427 4.003 4.427 7.765 0 3.84-1.61 6.929-4.345 8.352zm61.317 51.848h-21.515V116.81h21.515v87.842zm249.597 0h-29.88l-39.967-65.93v65.93h-42.941l-8.206-19.593h-43.8l-7.961 19.593h-24.673c-10.25 0-23.226-2.257-30.575-9.715-7.41-7.459-11.265-17.562-11.265-33.536 0-13.027 2.304-24.937 11.366-34.348 6.817-7.01 17.492-10.243 32.022-10.243H521v18.822h-19.984c-7.695 0-12.04 1.14-16.225 5.204-3.595 3.699-6.062 10.69-6.062 19.898 0 9.41 1.879 16.196 5.798 20.629 3.246 3.476 9.145 4.53 14.695 4.53h9.47l29.717-69.08h31.594l35.699 83.086v-83.086h32.104l37.064 61.177v-61.177h21.597v87.84zm-128.18-37.904l-14.592-35.019-14.511 35.02h29.103zM750 344.518c-5.122 7.459-15.102 11.24-28.613 11.24h-40.72v-18.841h40.555c4.023 0 6.838-.527 8.533-2.175a7.71 7.71 0 002.493-5.731c0-2.56-1.025-4.592-2.576-5.81-1.53-1.341-3.757-1.95-7.429-1.95-19.798-.671-44.498.609-44.498-27.196 0-12.744 8.126-26.158 30.253-26.158h42v-17.482h-39.023c-11.776 0-20.33 2.809-26.389 7.175v-7.175h-57.72c-9.23 0-20.064 2.279-25.188 7.175v-7.175H498.607v7.175c-8.203-5.893-22.044-7.175-28.433-7.175h-67.987v7.175c-6.49-6.258-20.921-7.175-29.717-7.175h-76.09l-17.41 18.764-16.308-18.764H149v122.599h111.521l17.942-19.06 16.9 19.06 68.743.061v-28.84h6.758c9.121.14 19.879-.225 29.37-4.31v33.086h56.7v-31.953h2.735c3.49 0 3.834.143 3.834 3.617v28.334h172.244c10.936 0 22.367-2.788 28.696-7.846v7.846h54.636c11.369 0 22.472-1.587 30.92-5.652v-22.839zM408.517 296.84c0 24.408-18.287 29.447-36.718 29.447h-26.31v29.47h-40.982l-25.964-29.086-26.982 29.087h-83.52v-87.864h84.805l25.942 28.8 26.82-28.8h67.375c16.733 0 35.534 4.613 35.534 28.946zm-167.63 40.607h-51.842v-17.482h46.29v-17.927h-46.29v-15.974h52.863l23.063 25.605-24.085 25.778zm83.602 10.32l-32.373-35.79 32.373-34.653v70.443zm48.25-39.325h-27.25v-22.375h27.494c7.613 0 12.897 3.09 12.897 10.773 0 7.599-5.04 11.602-13.142 11.602zm142.26-40.548h70.374v18.17h-49.375v15.974h48.17v17.927h-48.17v17.482l49.375.08v18.23h-70.374v-87.863zm-26.636 47.032c4.693 1.725 8.53 4.817 10.329 7.376 2.977 4.29 3.408 8.293 3.493 16.038v17.418h-21.168v-10.993c0-5.286.51-13.113-3.409-17.198-3.08-3.148-7.777-3.9-15.47-3.9h-22.533v32.09h-21.187v-87.863h48.68c10.675 0 18.45.469 25.37 4.146 6.655 4.004 10.84 9.488 10.84 19.512-.002 14.024-9.395 21.18-14.945 23.374zm-12.734-10.935c-2.82 1.667-6.309 1.81-10.412 1.81h-25.615v-19.734h25.964c3.754 0 7.511.08 10.063 1.587 2.732 1.423 4.366 4.144 4.366 7.904s-1.634 6.788-4.366 8.433zm190.263 5.426c4.105 4.232 6.306 9.573 6.306 18.616 0 18.902-11.86 27.725-33.124 27.725h-41.068v-18.841h40.903c4 0 6.836-.527 8.613-2.175 1.45-1.36 2.49-3.334 2.49-5.731 0-2.56-1.125-4.592-2.572-5.81-1.613-1.341-3.837-1.95-7.509-1.95-19.719-.671-44.413.609-44.413-27.196 0-12.744 8.041-26.158 30.146-26.158h42.271v18.7h-38.679c-3.834 0-6.327.143-8.448 1.587-2.309 1.423-3.166 3.535-3.166 6.322 0 3.314 1.961 5.57 4.614 6.544 2.224.771 4.614.996 8.206.996l11.35.305c11.447.278 19.304 2.25 24.08 7.066zM750 286.592h-38.429c-3.837 0-6.386.143-8.533 1.587-2.224 1.423-3.08 3.534-3.08 6.322 0 3.314 1.878 5.569 4.61 6.544 2.224.77 4.614.996 8.126.996l11.428.305c11.531.283 19.229 2.257 23.922 7.071.854.67 1.368 1.423 1.956 2.176v-25.001z"
                fill="#fff"
                stroke="none"
                strokeWidth={1}
                fillRule="evenodd"
            />
        </svg>
    )
}

export default Amex