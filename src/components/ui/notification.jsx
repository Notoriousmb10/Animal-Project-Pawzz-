import React from "react";

const notyIconStyle = {
  position: "relative",
  display: "inline",
};
const notyNumStyle = {
  position: "absolute",
  right: "0",
  backgroundColor: "rgb(29, 161, 242)",
  fontSize: "11px",
  color: "white",
  display: "inline",
  padding: "3px 5px",
  borderRadius: "20px",
};
export default function Noty({ width, color, count, className }) {
  return (
    <div className={className}>
      <div style={notyIconStyle}>
        {count > 0 ? <div style={notyNumStyle}>{count}</div> : null}

        <svg
          viewBox="0 0 24 24"
          className="r-hkyrab r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
          width={width}
          fill={color}
        >
          <g>
            <path d="M21.697 16.468c-.02-.016-2.14-1.64-2.103-6.03.02-2.532-.812-4.782-2.347-6.335C15.872 2.71 14.01 1.94 12.005 1.93h-.013c-2.004.01-3.866.78-5.242 2.174-1.534 1.553-2.368 3.802-2.346 6.334.037 4.33-2.02 5.967-2.102 6.03-.26.193-.366.53-.265.838.102.308.39.515.712.515h4.92c.102 2.31 1.997 4.16 4.33 4.16s4.226-1.85 4.327-4.16h4.922c.322 0 .61-.206.71-.514.103-.307-.003-.645-.263-.838zM12 20.478c-1.505 0-2.73-1.177-2.828-2.658h5.656c-.1 1.48-1.323 2.66-2.828 2.66zM4.38 16.32c.74-1.132 1.548-3.028 1.524-5.896-.018-2.16.644-3.982 1.913-5.267C8.91 4.05 10.397 3.437 12 3.43c1.603.008 3.087.62 4.18 1.728 1.27 1.285 1.933 3.106 1.915 5.267-.024 2.868.785 4.765 1.525 5.896H4.38z" />
          </g>
        </svg>
      </div>
    </div>
  );
}
