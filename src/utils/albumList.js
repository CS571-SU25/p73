export const albumNames = [
  'Parklife',
  'Modern Life Is Rubbish',
  'Different Class',
  'His n Hers',
  'Definitely Maybe',
  "What's the Story Morning Glory",
  'Dog Man Star',
  'Urban Hymns',
  'A Northern Soul',
  'The Bends',
  'OK Computer',
  'Elastica',
  'I Should Coco',
  'Everything Must Go',
  'Hail to the Thief',
  'A Moon Shaped Pool',
  'Kid A',
  'In Rainbows',
  'The Great Escape',
  'Magic Whip',
  '13',
  'Parachutes',
  'A Rush of Blood to the Head',
  'X&Y',
  'Viva la Vida',
  'Mylo Xyloto',
  'Ghost Stories',
  'A Head Full of Dreams',
  'Everyday Life'
];

export const initialAlbums = albumNames.map((name, index) => {
  const fileSafe = name
    .toLowerCase()
    .replace(/[\s'’]/g, '')     // replace spaces and apostrophes
    .replace(/[^\w-]/g, '');     // remove other special characters

    console.log(fileSafe);
  return {
    id: `${index + 1}`,
    name,
    image: `p73/assets/${fileSafe}.jpg`, // or .png depending on your format
  };
});
