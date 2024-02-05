import PropTypes from "prop-types"

Card.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    time: PropTypes.string
}

function imageNotFound(event) {
    event.target.onerror = null;
    event.target.src = 'assets/images/unknown.png';
}

function Card({image, title, author, time}) {
    return (
        <div className="card hover:shadow-3xl">
            <img src={image} onError={imageNotFound} alt="stew" className="w-full h-32 sm:h-48 object-cover" />
            <div className="m-4">
                <span className="font-bold">{title}</span>
                <span className="block text-gray-500 text-sm">Recipe by {author}</span>
            </div>
            <div className="badge">
                <svg className="w-5 inline-block h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>  
                <span>{time ? time : "NA"} mins</span>
            </div>
        </div>
    )
}

export default Card