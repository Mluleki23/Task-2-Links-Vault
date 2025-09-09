interface SearchBar {
    img : string,
    name : string,
}

export default function SearchBar() {
  return (
    <div>
    
      <input type='text'id='search' placeholder='search' />
    </div>
  )
}
