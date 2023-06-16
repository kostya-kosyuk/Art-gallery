import React from "react";
import DATA from "../../DATA.json";
import { Artwork } from "../../components/Artwork";
import { useParams } from "react-router-dom";
import './Artworks.scss';

export const Artworks: React.FC = () => {
  const { filter } = useParams();

  return (
    <div className="artworks container">
      {DATA.map((dataArt) => (
        <React.Fragment key={dataArt.id}>
          <Artwork dataArt={dataArt} />
        </React.Fragment>
      ))}
    </div>
  );
};
