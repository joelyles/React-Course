const Content = () => {
    const handleNameChange = () => {
    const names = ['bilbo', 'andrew', 'joe'];
    const int = Math.floor(Math.random() * names.length);
    return names[int];
  }

  // click events

  const handleClick = () => {
    console.log('you clicked it!')
  }
  const handleClick2 = (name) => {
    console.log(`${name} was clicked`)
  }
  const handleClick3 = (e) => {
    console.log(e.target.innerText)
  }

    return (
      <main>
        <p onDoubleClick={handleClick}>
          Hello {handleNameChange()}!!
        </p>
        <button onClick={handleClick}>Click Here</button>
        <button onClick={() => handleClick2('Joe')}>Click Here</button>
        <button onClick={(e) => handleClick3(e)}>Click Here</button>
      </main>
    )
};

export default Content