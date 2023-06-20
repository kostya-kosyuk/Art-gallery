import React from "react";
import DATA from "../../DATA.json";
import DATA_test from "../../DATA_test.json";
import { Artwork } from "../../components/Artwork";
import { useParams } from "react-router-dom";
import './Artworks.scss';

export const Artworks: React.FC = () => {
  const { filter } = useParams();

  return (
    <div className="artworks container">
      {DATA_test.map((dataArt) => (
        <React.Fragment key={dataArt.id}>
          <Artwork dataArt={dataArt} />
        </React.Fragment>
      ))}
    </div>
  );
};
