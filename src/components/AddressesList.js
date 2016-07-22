import React from 'react';

const renderAddressesList = addresses =>
  addresses.map((address, i) => (
    <li key={i} className="list-group-item">
      <div className="media-body">
        <strong>{address.label || 'no label'}</strong>
        <p className="selectable-text">{address.address}</p>
      </div>
    </li>
  ));

class AddressesList extends React.Component {
  constructor(props) {
    super(props);

    this.addLabel = this.addLabel.bind(this);
  }

  addLabel(event) {
    event.preventDefault();

    const label = this.refs.label.value || null;

    this.props.addAddress(label);
  }

  render() {
    return (
      <ul className="list-group">
        <li className="list-group-header">
          <form onSubmit={this.addLabel}>
            <input
              type="text"
              placeholder="label new address and hit return"
              ref="label"
              className="form-control"
            />
          </form>
        </li>
        {renderAddressesList(this.props.addresses)}
      </ul>
    );
  }
}

AddressesList.propTypes = {
  addresses: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  addAddress: React.PropTypes.func.isRequired,
};

export default AddressesList;
