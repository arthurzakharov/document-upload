import { useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { useReactRedux, useLockedBody } from "../../hooks";
import { modalClear, modalClose } from "../../redux/modal/modal.slice";
import {
  selectModalIsOpen,
  selectModalWithCloseButton,
  selectModalMain,
  selectModalMainProps,
  selectModalSizeType,
} from "../../redux/modal/modal.selectors";
import { Close } from "../../svg";
import "./modal.css";

function Modal() {
  const { dispatch, useSelector } = useReactRedux();

  const isOpened = useSelector(selectModalIsOpen);
  const withCloseButton = useSelector(selectModalWithCloseButton);
  const size = useSelector(selectModalSizeType);
  const Main = useSelector(selectModalMain);
  const mainProps = useSelector(selectModalMainProps);

  const ref = useRef<HTMLDivElement>(null);

  const { setLocked } = useLockedBody();

  useEffect(() => {
    setLocked(isOpened);
  }, [isOpened, setLocked]);

  const close = () => {
    dispatch(modalClose());
  };

  const onEntered = () => {
    if (ref.current) {
      ref.current.focus();
    }
  };

  const onExited = () => {
    dispatch(modalClear());
  };

  return (
    <CSSTransition
      in={isOpened}
      timeout={{ enter: 600, exit: 1050 }}
      nodeRef={ref}
      classNames="modal"
      onEntered={onEntered}
      onExited={onExited}
      unmountOnExit
    >
      <div ref={ref} tabIndex={0} role="button" className="modal">
        <div className="modal__body" data-modal-size={size}>
          {withCloseButton && (
            <button type="button" className="modal__close" onClick={close}>
              <Close className="modal__icon" />
            </button>
          )}
          {Main && <Main {...mainProps} />}
        </div>
      </div>
    </CSSTransition>
  );
}

export default Modal;
