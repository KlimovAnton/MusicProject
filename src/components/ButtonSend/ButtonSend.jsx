import css from './ButtonSend.module.css';
import clsx from 'clsx';

const ButtonSend = ({
  children,
  addClass = '',
  selected = false,
  disabled = false,
  ariaHidden = false,
  ...otherProps
}) => {
  return (
    <button
      aria-label="button"
      className={clsx(
        css.btn,
        {
          [css.isSelected]: selected,
          [css.isDisabled]: disabled,
        },
        addClass,
      )}
      disabled={disabled}
      aria-hidden={ariaHidden}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default ButtonSend;