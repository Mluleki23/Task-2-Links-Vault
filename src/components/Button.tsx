interface myButton{
    name : string,
    colours: string,
}

export default function Button({name, colours}:myButton) {
  return (
    <div>
      <button style={{backgroundColor: colours}} > {name}</button>
    </div>
  );
}
