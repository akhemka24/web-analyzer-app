import Data from "./Data.js";

export const createData = async (req, res, next) => {
    console.log("function has run")
    console.log(req.body)
    //console.log(JSON.stringify(newData))
    const newData = new Data(req.body);
    try {
        const savedData = await newData.save();
        res.status(200).json(savedData);
    } catch (err) {
        console.log("we have encountered an error")
        next(err);
    }
}

export const getData = async (req, res, next) => {
    try {
      const datum = await Data.find();
      res.status(200).json(datum);
    } catch (err) {
      next(err);
    }
  };