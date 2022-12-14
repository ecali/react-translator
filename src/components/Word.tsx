
interface Props{
    text: string,
    setText: (text: string) => void;
}

export const Word = ({text, setText}: Props) => {


  return (
    <div>
      <textarea
        rows={10}
        cols={80}
        placeholder="Start typing here..."
        value={text}
        onChange={(e) => setText(e.target.value) }
      ></textarea>
    </div>
  );
};
