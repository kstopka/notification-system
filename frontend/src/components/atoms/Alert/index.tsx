import CheckCircleSVG from "../symbols/CheckCircleSVG";
import InfoSVG from "../symbols/InfoSVG";
import XSVG from "../symbols/XSVG";
import { IAlertProps, IAlertStatus } from "./types";
import AlertSVG from "../symbols/AlertSVG";
import { useActions, AppCtx } from "../../../contexted";
import { initialAlert } from "../../../contexted/App/state";
import { IAppActions } from "../../../contexted/App/types";
import * as S from "./styles";

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
    <S.FixedWrapper>
      <S.AlertContainer status={status}>
        <div>{alertImage[status]}</div>
        {title.length && (
          <div>
            <div>{title}</div>
            {description.length > 0 ? <div>{description}</div> : null}
            {buttonText.length > 0 ? (
              <button onClick={handleClick}>{buttonText}</button>
            ) : null}
          </div>
        )}
        <div onClick={handleClose2}>
          <XSVG />
        </div>
      </S.AlertContainer>
    </S.FixedWrapper>
  );
};

export default Alert;
