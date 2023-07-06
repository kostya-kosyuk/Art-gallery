import { useState } from 'react';
import './IndividualArtwork.scss';
import classNames from 'classnames';

const artworkName = 'Artwork Name X';
const authorName = 'Thomas';
const authorLink = '#/';
const price = 227;

const IndividualArtwork = () => {
    const [isLike, setLike] = useState(false);

    const handleActivateLike = () => {
        setLike(prev => !prev);
    };

    return (
        <div className="artwork-container">
            <div className="mainInfo-container">
                <div className="images">
                    <div className="titleAndAuthor mobile-only">
                        <div className="nameInfo">
                            <p className='nameInfo__name'>{artworkName}</p>
                            <p>By <a className='nameInfo__authorLink' href={authorLink}>{authorName}</a></p>
                        </div>
                        <div className="buttonsContainer">
                            <div onClick={handleActivateLike} className='likeContainer'>
                                <svg className={classNames(isLike && 'active')}
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M20.84 4.58a5.5 5.5 0 0 0-7.78 0L12 5.66l-1.06-1.08a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.85a5.5 5.5 0 0 0 0-7.8z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="images__image-container">
                        <div className='images__image'>
                            <img src="https://ik.imagekit.io/theartling/prod/tr:cm-pad_resize,w-1094,h-1094/products/Product/aa06e0846fdd4928b2ffeaee51683a3f.jpg" alt="Artwork Image" />
                        </div>
                    </div>
                </div>
                <div className="info-container">
                    <div className="titleAndAuthor not-mobile">
                        <div className="nameInfo">
                            <p className='nameInfo__name'>{artworkName}</p>
                            <p>By <a className='nameInfo__authorLink' href={authorLink}>{authorName}</a></p>
                        </div>
                        <div className="buttonsContainer">
                            <div onClick={handleActivateLike} className='likeContainer'>
                                <svg className={classNames(isLike && 'active')}
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M20.84 4.58a5.5 5.5 0 0 0-7.78 0L12 5.66l-1.06-1.08a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.85a5.5 5.5 0 0 0 0-7.8z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className='price'>
                        <p>US$ {price}</p>
                        <button className='button'>Add to cart</button>
                    </div>
                    <hr className='artwork-container__space' />

                </div>
            </div>
        </div>
    );
};

export default IndividualArtwork;