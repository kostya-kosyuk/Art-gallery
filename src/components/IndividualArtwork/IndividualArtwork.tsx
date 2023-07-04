const authorName = 'Thomas';
const authorLink = '#/';

const IndividualArtwork = () => {
    return (
        <div className="mainInfo-container">
            <div className="titleAndAuthor">
                <div className="nameInfo">
                    <h1>
                        Name
                        <span>
                            <span>
                                By
                            </span>
                            <a href={authorLink}>
                                {authorName}
                            </a>
                        </span>
                    </h1>
                </div>
                <div className="likeContainer">
                    <button>

                    </button>
                </div>
            </div>
            <div className="image-container">
                <div className="image" onClick={() => {}}>
                    <img src="https://ik.imagekit.io/theartling/prod/tr:w-2400,h-2400,c-at_max,bg-000000/products/Product/aa06e0846fdd4928b2ffeaee51683a3f.jpg" alt="Artwork Image" />
                </div>
            </div>

        </div>
    );
};

export default IndividualArtwork;