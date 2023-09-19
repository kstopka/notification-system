import CheckCircleSVG from "../symbols/CheckCircleSVG";
import InfoSVG from "../symbols/InfoSVG";
import XSVG from "../symbols/XSVG";
import { IAlertProps, IAlertStatus } from "./types";
import "./style.css";
import AlertSVG from "../symbols/AlertSVG";

export const alertImage = {
  info: <InfoSVG />,
  error: <AlertSVG />,
  success: <CheckCircleSVG />,
};

const getClassName = (className: string, message: IAlertStatus) =>
  `${className}${message}`;

const Alert = ({
  title,
  handleClose,
  status = "info",
  description = "",
  buttonText = "",
  handleClick,
}: IAlertProps): JSX.Element => {
  return (
    <div className="FixedWrapper">
      <div
        className={`AlertContainer ${getClassName("AlertContainer", status)}`}
      >
        <div className="AlertSVGContainer">{alertImage[status]}</div>
        {title.length && (
          <div className="ContentWrapper">
            <div className="AlertHeading">{title}</div>
            {description.length > 0 ? (
              <div className="AlertDescription">{description}</div>
            ) : null}
            {buttonText.length > 0 ? (
              <button onClick={handleClick}>{buttonText}</button>
            ) : null}
          </div>
        )}
        <div className="CloseButton" onClick={handleClose}>
          <XSVG />
        </div>
      </div>
    </div>
  );
};

export default Alert;
