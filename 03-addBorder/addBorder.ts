// function addBorder(picture: string[]): any {
//   const lengthOfWall = picture[0].length + 2;
//   let wall = '';

//   for (let index = 0; index < lengthOfWall; index++) {
//     wall = wall.concat('*');
//   }

//   picture.unshift(wall);
//   picture.push(wall);

//   for (let i = 1; i < picture.length - 1; i++) {
//     picture[i] = '*'.concat(picture[i], '*');
//   }

//   return picture;
// }

function addBorder(picture: string[]): any {
  const wall = '*'.repeat(picture[0].length + 2);

  picture.unshift(wall);
  picture.push(wall);

  for (let i = 1; i < picture.length - 1; i++) {
    picture[i] = '*'.concat(picture[i], '*');
  }

  return picture;
}

console.log(addBorder(['abc', 'ded']));
