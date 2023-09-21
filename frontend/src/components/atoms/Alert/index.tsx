import CheckCircleSVG from "../symbols/CheckCircleSVG";
import InfoSVG from "../symbols/InfoSVG";
import XSVG from "../symbols/XSVG";
import { IAlertProps, IAlertStatus } from "./types";
import "./style.css";
import AlertSVG from "../symbols/AlertSVG";
import { useActions, AppCtx } from "../../../contexted";
import { initialAlert } from "../../../contexted/App/state";
import { IAppActions } from "../../../contexted/App/types";

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
  const { setAlert } = useActions<IAppActions>(AppCtx, ["setAlert"]);

  const handleClose2 = () => setAlert(initialAlert);

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
        <div className="CloseButton" onClick={handleClose2}>
          <XSVG />
        </div>
      </div>
    </div>
  );
};

export default Alert;
