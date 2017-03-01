var Backbone = require('backbone');
var React = require('react');

var ImageCollection = require('../models/image.js').ImageCollection;
var Image = require('../models/image').Image;

var imageCollection = new ImageCollection();

var ImageForm = React.createClass({
    getInitialState: function(){
      return {
        url: '',
        caption: ''
      }
    },
    handleUrlChange: function(event){
      this.setState({url: event.target.value});
    },

    handleCaptionChange: function(event){
      this.setState({caption: event.target.value});
    },

    addImage: function(event){
      event.preventDefault();
      this.props.addImage(this.state);
      this.setState({url: '', caption: ''});
    },

    render: function(){
      return (
        <form onSubmit={this.addImage}>
          <div className="form-group">
            <input onChange={this.handleUrlChange} value={this.state.url} type="text" className="form-control image-url" id="url" placeholder="Image URL" />
          </div>
            <div className="form-group">
              <textarea onChange={this.handleCaptionChange} value={this.state.caption} type="text" className="form-control image-caption" id="caption" placeholder="Image Caption"></textarea>
            </div>
              <button className="cancel-btn" type="submit" name="cancel">
                Cancel
              </button>
              <button className="add-image-btn" type="submit" name="submit" value="Add">
                <span className="glyphicon glyphicon-picture" aria-hidden="true"></span>
                Add Image
              </button>
          </form>
      );
    }
});


var ImageList = React.createClass({

  render: function(){
    var images = this.props.imageCollection.map(function(image){
    return (

          <div key={image.cid} className="thumbnail">
            <img src={image.get('url')} alt="" />
              <div className="caption">
                <p>{image.get('caption')}</p>
              </div>
          </div>
    )
  });
    return(
      <div className="row">
        <div className="col-sm-6 col-md-4">
        {images}
      </div>
    </div>
    );
  }
});

var ImageBoard = React.createClass({

  getInitialState: function(){
    var imageCollection = new ImageCollection();

    var self = this;
    imageCollection.fetch().done(function(){
      self.setState({imageCollection: imageCollection});
    });

    return {
      imageCollection: imageCollection,
      showForm: false,
    };
  },
  componentWillMount: function(){
    var newImageCollection = this.state.imageCollection;

  },
  handleFormToggle: function(event){
    event.preventDefault();
    this.setState({showForm: !this.state.showForm});
  },
  addImage: function(newImage){
    var images = this.state.imageCollection;
    images.create(newImage);
    this.setState({imageCollection: images, showForm: false});
  },
  render: function(){
    return (

      <div className="container">

        <ul className="nav nav-pills well">
          <li role="presentation" className="active">
            <a onClick={this.handleFormToggle} href="#">+</a>
          </li>
        </ul>

        {this.state.showForm ? <ImageForm
          addImage = {this.addImage}
          /> : null}

        <ImageList imageCollection={this.state.imageCollection} />
      </div>
    );
  }
});

module.exports = {
  ImageForm,
  ImageList,
  ImageBoard
}
