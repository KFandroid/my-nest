import {extname} from 'path'
export const imageFileFilter = (req, file, callback) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
      return callback(new Error('Only image files are allowed!'), false);
    }
    callback(null, true);
  };

  export const editFileName = (req, file, callback) => {
    //  const base64Code = base64_encode(file)    
    const name = file.originalname.split('.')[0];
    const fileExtName = extname(file.originalname);

   callback(null, `${name}${fileExtName}`);
  };