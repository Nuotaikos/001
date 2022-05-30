function getId(key) {
  let id = localStorage.getItem(key);
  if (null === id) {
    id = 1;
    localStorage.setItem(key, 1);
    return 1;
  }
  id = parseInt(id); //gaunam skaiciu
  id++; //pridedam vieneta
  localStorage.setItem(key, id) //iraso i localstorage
  return id;
}
export default getId;