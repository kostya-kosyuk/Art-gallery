import ExpandableElement from '../ExpandableElement';
import TextComponent from '../TextComponent/TextComponent';
import './IndividualArtist.scss';

type Props = {
    id: string;
};

const text = `"To poetize the world by seeking the essence of beings".

Linda Clerget is a French contemporary artist born in 1985 in Paris.She grew up in a family of artists and was introduced to art by her parents at an early age.

After studying fine arts, she started her career as an artist by exhibiting her work in art galleries in Paris.Her first works were mainly paintings inspired by Japanese prints, but she soon evolved into a more hybrid style inspired by neo - impressionism.

Linda Clerget focuses on the exploration of colours and textures, inspired by the nature that surrounds her and her daily life.She builds a poetic and intuitive visual universe, which addresses our sensations and emotions before our intellect.The viewer is thus projected into "little paradises", waking dreams where time slows down.Evocative and timeless, the paintings of artist Linda Clerget address our most primal self - a deep connection that the artist is eager to encourage.Deeply spiritual and intimate, the paintings are an integral part of the artist's personal journey and an expression of her search for truth and meaning. Her work has been shown in numerous solo and group exhibitions in France and abroad, including Paris, New York, Andria and Milan.

She has also won several awards and distinctions for her work, including the Artpreneur Prize in 2022 for her work 'Fin de journée tropicale'.

Linda Clerget is considered a very promising artist in France, and her work is highly regarded for its sensitivity, originality and boldness.Her work is present in many private and corporate collections around the world.`;

const IndividualArtist = ({ id }: Props) => {
    return (
        <div className='container'>
            <div className='background'>
                <img className='background__image' src="https://ik.imagekit.io/theartling/prod/products/Product/b65f440def8d42c6b3707bca90898c2f.jpg?tr=w-3330" alt="background" />
                <div className='avatar'>
                    <div className='avatar__background'>
                        <img className="avatar__image" src="https://ik.imagekit.io/theartling/prod/artists/Artist/e4cf285d2f4e45598c82a098dc990451.jpg?tr=w-370,r-max" alt="avatar" />
                    </div>
                </div>
            </div>
            <div className='nameSection'>
                Linda Clerget
            </div>
            <div className='information'>
                <p>Born: 1985</p>
                <p>Hometown: Fontainebleau</p>
                <p>Based in: Fontainebleau, France</p>
            </div>
            <div className='about'>
                <ExpandableElement content={<TextComponent text={text}/>}/>
            </div>
        </div>
    );
};

export default IndividualArtist;