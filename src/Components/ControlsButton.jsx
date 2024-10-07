import PropTypes from 'prop-types';
import "./ControlsButton.css"
export default function ControlsButton({ onClick, sign, signText }) {
    return (
        <>
            <button type="button" onClick={onClick}>
                <div style={{ display: "flex", flexDirection: "column" ,alignItems:"center"}}>
                    <span className="material-symbols-outlined">{sign}</span>
                    <span className='signText' >{signText}</span>
                </div>
            </button>
        </>
    );
}

ControlsButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    sign: PropTypes.string.isRequired,
    signText: PropTypes.string
};