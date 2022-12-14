
interface Props{
    text: string,
    setText: (text: string) => void;
    disable?: boolean
}

export const Word = ({text, setText, disable}: Props) => {


  return (
    <div className="word-container">
      <textarea
        disabled={disable}
        rows={10}
        placeholder="Start typing here..."
        value={text}
        onChange={(e) => setText(e.target.value) }
      ></textarea>
    </div>
  );
};
