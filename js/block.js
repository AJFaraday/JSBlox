Block = function(args) {

  this.holder = args.holder.div || $('#holder')

  // height and width of each square in the block
  this.square_size = args.square_size || 10
  // most squares on one side of the block
  this.max_squares = args.max_squares || 5
 
  this.div = $(document.createElement('div'));
  this.div.addClass('block');
  this.holder.append(this.div);

  this.get_colour_value = function() {
    return Math.floor(Math.random() * 3) * 128
  }

  this.set_colour = function(){
    r = this.get_colour_value();
    g = this.get_colour_value();
    b = this.get_colour_value();
    this.div.css('background-color', 'rgb(' + r + ',' + g + ',' + b + ')');
  }

  this.get_dimension = function() {
    size = (Math.floor(Math.random() * this.max_squares) + 1) 
    pixels = size * this.square_size
    return pixels
  }

  this.set_size = function() {
    this.height = this.get_dimension();
    this.width = this.get_dimension();
    this.area = this.height * this.width;

    this.div.height(this.height);
    this.div.width(this.width);
  }

  this.clear = function() {
    this.div.remove();
  }

  this.set_colour();
  this.set_size();

}
