import path from 'path';
import express from 'express';
import multer from 'multer';
const router = express.Router();

// https://www.npmjs.com/package/multer
//disk storage
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/'); //null is for error
  },
  filename(req, file, cb) {
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
  },
});

function fileFilter(req, file, cb) {
  const filetypes = /jpe?g|png|webp/;
  const mimetypes = /image\/jpe?g|image\/png|image\/webp/;

  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = mimetypes.test(file.mimetype);
  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb(new Error('Images only!'), false);
  }
}
const upload = multer({ storage, fileFilter });//TODO ADD LIMITS HERE limits:{fieldSize:2000000}
const uploadSingleImage = upload.single('image');

// upload handled  by middleware
router.post('/', (req, res) => {
  uploadSingleImage(req, res, function (err) {
    if (err) {
      res.status(400).send({ message: err.message });
    }
    res.status(200).send({
      message: 'Image uploaded successfully',
      image: `/${req.file.path}`,
    });
  });
});

export default router;
