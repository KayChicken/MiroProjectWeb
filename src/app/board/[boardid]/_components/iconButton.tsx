import styles from "../../../styles/iconButton.module.css"

type Props = {
    onClick: () => void;
    children: React.ReactNode;
    isActive?: boolean;
    disabled?: boolean;
};

export default function IconButton(
    { onClick, children, isActive, disabled }: Props
) {
    return (
        <button
            className={`${styles.button} ${isActive ? styles.button_active : ""}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}