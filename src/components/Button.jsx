import { useStateContext } from '../contexts/ContextProvider';

const Button = ({ bgColor, color, size, text, borderRadius,bgHoverColor, width }) => {
    const { setIsClicked, initialState } = useStateContext();
    
    return (
        <button
            onClick={ () => setIsClicked(initialState) }
            type='button'
            style={{ backgroundColor: bgColor, color: color, borderRadius: borderRadius }}
            className={ `text-${ size } p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}` }
        >
            { text }
        </button>
    );
};

export default Button;