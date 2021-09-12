const checkExistanceInArray = (array, id) => {
    // returns true or false
    if(typeof array[0] == 'string'){
        return !!array.find((item) => item === id);
    }
    return !!array.find((item) => item._id === id);
};

export default checkExistanceInArray;