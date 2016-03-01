import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import Conditional from 'react-if-comp';
import Modal from 'react-modal';

var isEmpty = function(val){
  if (val === undefined || val === null) { return true; }
  if (val.length <= 0) {return true; }
  return false;
}

const closeButtonStyle = {
    position: "absolute",
    background: "url(images/close.png) 0 0 no-repeat",
    width: "24px",
    height: "27px",
    display: "block",
    textIndent: "-9999px",
    top: "0",
    right: "0"
}

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    borderRadius :"10px",
    padding                    : '5px'
  }
};

var hide={display:"none"};

class MerchItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      hasOptions: false,
      options: [],
      selectedOption: ""
    };

    if (!isEmpty(this.props.item.options))
    {
      this.state.hasOptions = true;
      this.state.options = this.props.item.options.split("|");
      this.state.selectedOption = this.state.options[0];
    }

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.itemClick = this.itemClick.bind(this);
    this.setOption = this.setOption.bind(this);
  }

  openModal(e) {
    e.preventDefault();
    this.setState({modalIsOpen: true});
  }

  itemClick()
  {
    var cartInfo =
    {
      name: this.props.item.info_title,
      price:this.props.item.info_price,
      type: this.props.item.info_price,
      option: this.state.hasOptions ? this.state.selectedOption : null
    }
    this.props.callbackParent(cartInfo);
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  setOption(e)
  {
    this.setState({selectedOption: e.target.value});
  }


  render(){

    var Item = this.props.item;
    Item.is_soldout = (Item.is_soldout==="1"); //convert to Boolean
    //console.log(Item.info_title, Item.options, (!isEmpty(Item.options)));

    if (Item.imagewidth !=null && Item.imageheight !=null)
    {
      //console.log(Item.imagewidth, Item.imageheight, window.innerHeight);
      var imageheight = window.innerHeight * 0.5;
      var imagewidth = Math.round(  imageheight * ( Item.imagewidth / Item.imageheight)  );
      var modalDescStyle = {width: imagewidth, margin: "auto"};
    }

    var classes = classNames("merchitem","col-sm-12","col-md-6","col-lg-4","simpleCart_shelfItem", "type-"+Item.info_type, {"is_soldout":Item.is_soldout});
    return(


    <div className={classes} key={Item.id}>


    <Modal
      isOpen={this.state.modalIsOpen}
      onRequestClose={this.closeModal}
      style={customStyles} >

      <h2>{Item.info_title}</h2>
      <p><img src={"images/merch/"+Item.itemdetail}  height={imageheight} width={imagewidth} /></p>
      <p style={modalDescStyle}>{Item.info_description} </p>
      <a style={closeButtonStyle} onClick={this.closeModal}>close</a>
    </Modal>



      <div className="title">{Item.info_title}</div>
    <div className="item_name" style={hide}>{Item.info_title} [{Item.info_type}]</div>

    <div className="merchthumb">

        <Conditional if={!isEmpty(Item.itemdetail)}>
          <a className="itemdetail" href={"images/merch/"+Item.itemdetail} data-width={Item.imagewidth} data-height={Item.imageheight} onClick={this.openModal} >

            <Conditional if={!isEmpty(Item.thumbnail)}>
              <img src={"images/merch/"+ Item.thumbnail} />
              <Conditional else>
                <img src="images/merch/default_thumb.png" />
              </Conditional>
            </Conditional>

            <span className="itemdetailtext">See Detail</span>

          </a>
          <Conditional else>

            <Conditional if={!isEmpty(Item.thumbnail)}>
              <img src={"images/merch/"+ Item.thumbnail} />
              <Conditional else>
                <img src="images/merch/default_thumb.png" />
              </Conditional>
            </Conditional>

            <span className="itemdetailtext">&nbsp;</span>
          </Conditional>
        </Conditional>

    </div>

    <Conditional if={Item.is_soldout}>
      <div className="input-group" >
        <div className="input-group-addon soldoutitem">SOLD OUT</div>
      </div>

      <Conditional else>

        <div className="input-group">
        <div className="input-group-addon price item_price">{Item.info_price}</div>

          <Conditional if={this.state.hasOptions}>
            <span className="input-group-addon select-group">
            <select onChange={this.setOption} className="c-select select-item item_size">
              {
                  this.state.options.map((option, index) => {
                  return <option key={index} value={option}>{option}</option>;
                })
              }
            </select>
            </span>
          </Conditional>

        <div className="input-group-btn">

          <button name="type" type="button" value="add" onClick={this.itemClick} className="btn btn-success item_add pull-left">Add</button>
        </div>
        </div>
      </Conditional>
    </Conditional>

  </div>
    )
  }
}

module.exports = MerchItem;
