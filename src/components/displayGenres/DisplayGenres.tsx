import React from "react";
import "./DisplayGenres.css";
interface DisplayGenresProps {
  items: Record<string, any>[];
  selectedGenre: number[];
  setSelectedGenre: React.Dispatch<React.SetStateAction<number[]>>;
}

const DisplayGenres: React.FC<DisplayGenresProps> = ({
  items,
  selectedGenre,
  setSelectedGenre,
}: DisplayGenresProps) => {
  const handleClick = (id: number) => {
    if (selectedGenre.includes(1) && id !== 1) {
      // previously all was selected and user selectes something else
      const indexOfOne = selectedGenre.indexOf(1);
      const newArray = [...selectedGenre];
      newArray.splice(indexOfOne, 1);
      newArray.push(id);
      setSelectedGenre(newArray);
    }
    else if (id !== 1) {
      if (selectedGenre.includes(id)) {
        // user is removing already selected genere
        const newArray = [...selectedGenre];
        newArray.splice(newArray.indexOf(id), 1);

        if (newArray.length)
          setSelectedGenre(newArray);
        else
          setSelectedGenre([1])

      } else {
        // user has added new genere
        setSelectedGenre((old) => [...old, id]);
      }
    }
    else if (id === 1 && !selectedGenre.includes(1)) {
      // user has seleted the all genere button
      setSelectedGenre([1]);
    }
  }
  return (
    <div className="horizontal-scroll">
      {items.map((item) => (
        <button
          className={`scroll-button ${selectedGenre.includes(item.id) ? "selected-button" : ""
            }`}
          onClick={() => handleClick(item.id)}
          key={item.id}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default DisplayGenres;
