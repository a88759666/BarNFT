
type props = {
    btnName?: string,
    onClickEvent?: React.MouseEventHandler<HTMLButtonElement>
    pxNumber?: number
    textColor?: string
    bgColor?: string
}
const SubButton:React.FC<props> = ({
    btnName,
    onClickEvent,
    pxNumber = 30 || 75 || 120,
    textColor = 'gold',
    bgColor = 'inherit',
}) => {
    const buttonStyle = {
        padding: `9px ${pxNumber}px`,
    }

    return <>
        <button 
            className={`text-${textColor} bg-[${bgColor}] rounded-[50px] cursor-pointer border-2 text-[16px] font-bold leading-[22px]`}
            style={buttonStyle}
            onClick={onClickEvent}
        >
            {btnName}
        </button>
    </>
  };
    
  export default SubButton;