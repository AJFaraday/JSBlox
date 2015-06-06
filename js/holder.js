Holder = function(width,height){

  this.div = $('#holder');
  this.height = height;
  this.width = width;
  this.area = this.height * this.width;

  this.div.width(this.width);
  this.div.height(this.height);

}
