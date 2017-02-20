var React = require('react');

var ImageForm = React.createClass({
  render: function(){
    return (
      <form>
        <div className="form-group">
          <input type="text" class="form-control image-url" id="url" placeholder="Image URL" />
        </div>
          <div className="form-group">
            <textarea type="text" class="form-control image-caption" id="caption" placeholder="Image Caption"></textarea>
          </div>
            <button className="cancel-btn" type="submit" name="cancel">Cancel</button>
            <button className="add-image-btn" type="submit" name="submit">
              <span className="glyphicon glyphicon-picture" aria-hidden="true"></span>
              Add Image
            </button>
      </form>
    );
  }
});


var ImageList = React.createClass({
  render: function(){
    return (
      <ul>
        ...
      </ul>
    );
  }
});

var ImageBoard = React.createClass({
  render: function(){
    return (
      <div>
        <ImageForm />
        <ImageList />
      </div>
    );
  }
});
