import SellNow from "../model/sellnow-model.js";


const getSellNowByUserId = async (userId, order) => {
    try {
        const SellNow = await SellNow.findAll({ where: { userId: userId }, order: [['createdAt', order]] });
        return SellNow;
    } catch (error) {
        console.log(error);
    }
}
const createSellNow = async (pPost) => {
    try {
        const newSellNow = await SellNow.create(pPost);
        return newSellNow;
    } catch (err) {
        console.log(err);
    }
}

const deleteSellNowById = async (pId) => {
    return await SellNow.destroy({
        where: {
            id: pId
        }
    })
}
const updateSellNowById = async (pId, updatedSellNow) => {
    try {
        const post = await SellNow.findByPk(pId);
        if (post) {
            await SellNow.update(updatedSellNow, { where: { id: pId } });
            return
        }
        return { msg: "No post found with this ID" };
    } catch (error) {
        console.log(error);
    }
}
export default {
    getSellNowByUserId,   
    createSellNow,
    deleteSellNowById,
    updateSellNowById
}