JSBlox = function(args){

  this.init_blocks = function() {
    this.blocks = []
    this.block_area = 0
  }; 
  this.init_blocks();

  this.holder = new Holder(
    args.width || 100,
    args.height || 100
  );

  this.clear = function(){
    $.each(this.blocks, function(index, block){
      block.clear();
      delete block;
    });
    this.init_blocks();
  };

  this.build_blocks = function(){
    while(this.block_area < this.holder.area) {
      block = new Block({
        square_size: args.square_size || 10,
        max_squares: args.max_squares || 5,
        holder: this.holder.div
      });
      this.blocks.push(block);
      this.block_area += block.area;
    } 
  };

  this.rebuild_blocks = function(){
    this.clear();
    this.build_blocks();
  };

  this.build_blocks();  

};
