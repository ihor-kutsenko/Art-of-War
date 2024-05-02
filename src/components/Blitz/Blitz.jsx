import Item from 'components/Item/Item';
import { blitz } from 'data/blitz';

const Blitz = () => {
  const disabled = medals => {
    return medals && medals.length > 0;
  };
  return (
    <div>
      {blitz.map((blitz, index) => (
        <Item
          key={index}
          title={blitz.title}
          imageUrl={blitz.imageUrl}
          buttonText={blitz.buttonText}
          medals={blitz.medals}
          disabled={disabled}
        />
      ))}
    </div>
  );
};

export default Blitz;
