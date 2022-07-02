const Avater = ({url, className}) => {
    return (
        <img 
            src={url}
            alt="profile-pic"
            className={`rounded-full border h-10 cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
            loading="lazy"
        />
    )
}

export default Avater;