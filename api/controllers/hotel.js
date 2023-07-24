import Hotel from "../models/Hotel.js";
import hotel from "../models/Hotel.js";

export const createHotel = async (req, res, next) => {
    const newHotel = new Hotel(req.body)
    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);

    } catch(err){
        next(err)
    }}

export const updateHotel = async (req, res, next) => {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedHotel);
    } catch (err) {
        next(err);
    }
}

export const deleteHotel = async (req, res, next) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json(`Hotel has been deleted`);
    } catch(err){
        res.status(500).json(err)
    }
}

export const getOneHotel = async (req, res, next) => {
    try {
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel);
    } catch (err) {
        next(err);
    }
}

export const getAllHotels = async (req, res, next) => {

        const {min, max, ...others} = req.query
        try {
            const allHotels = await Hotel.find({
                ...others,
                cheapestPrice: { $gt : min | 10, $lt: max || 800},
            }).limit(req.query.limit);
            res.status(200).json(allHotels);
        } catch (err) {
            res.status(500).json(err)
    }
}

export const countByCity = async (req, res, next) => {

    const cities = req.query.cities.split(',')
    try {
       const list = await Promise.all(cities.map(city => {
            const cityArr = city.split('')
            const firstWithUpper = cityArr[0].toUpperCase();
            cityArr.splice(0, 1, firstWithUpper)
            const result = cityArr.join('')
            return Hotel.countDocuments({city: result})
       }))
        res.status(200).json(list);
    } catch (err) {
        res.status(500).json(err)
    }
}

export const countByType = async (req, res, next) => {
try {
    const hotelCount = await Hotel.countDocuments({type:'hotel'})
    const apartmentCount = await Hotel.countDocuments({type: 'apartment'})
    const houseCount = await Hotel.countDocuments({type: 'house'})
    const villaCount = await Hotel.countDocuments({type: 'villa'})
    const glampingCount =  await Hotel.countDocuments({type: 'glamping'})
    const agroCount = await Hotel.countDocuments({type: 'agrotouristic'})

    res.status(200).json([
        {type: "apartments", count: apartmentCount},
        {type: "hotels", count: hotelCount},
        {type: "houses", count: houseCount},
        {type: "villas", count: villaCount},
        {type: "glamping", count: glampingCount},
        {type: "agrotouristic", count: agroCount}
    ])
} catch (err) {
    next(err)
}



}