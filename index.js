var _ = require('lodash');

module.exports = {
  
  blocks: {
    embed: {
      process: function(blk) {

        if (this.output.name === 'website') {          
          return '<iframe src="' + blk.body.trim() + '" style="width: 100%; height: 600px; border: 0px none;"></iframe>';
        }
        else {
          return "<h1>THIS IS A PDF</h1>"
        }

        return "<div>html</div>"
      }
    }
  }

};