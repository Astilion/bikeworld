import styles from "./SliderContols.module.scss";

type ControlsProps = {
    onPrevClick: () => void;
    onNextClick: () => void
}
const SliderControls = (props: ControlsProps) => {
    return (
        <div className={styles["buttons-container"]}>
        <button className={styles["prev-button"]} onClick={props.onPrevClick}>
          <i className="ti ti-arrow-badge-left"></i>
        </button>
        <button className={styles["next-button"]} onClick={props.onNextClick}>
          <i className="ti ti-arrow-badge-right"></i>
        </button>
      </div>
    )
}
export default SliderControls