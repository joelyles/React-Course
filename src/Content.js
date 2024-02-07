const Content = () => {
    const handleNameChange = () => {
    const names = ['bilbo', 'andrew', 'joe'];
    const int = Math.floor(Math.random() * names.length);
    return names[int];
  }
    return (
       <main>Hello {handleNameChange()}</main>
    )
};

export default Content