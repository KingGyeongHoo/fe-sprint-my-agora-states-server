const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    let data = discussionsData
    return res.status(200).json(data)
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    let filteredData = discussionsData.find(item => item.id === Number(req.params.id))
    console.log(filteredData)
    if(filteredData){
      return res.status(200).json(filteredData)
    } else {
      return res.status(404).json('Data Not Found')
    }
    
  }

};

module.exports = {
  discussionsController,
};
