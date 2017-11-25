import React, { Component } from 'react';
import pokemon from 'pokemontcgsdk';
import {
  InputGroup,
  Input,
  Container,
  Row,
  Col,
  InputGroupButton,
  Button,
} from 'reactstrap';
import FontAwesome from 'react-fontawesome';

import CardDetails from './CardDetails.jsx';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
    };

    this.getCards = this.getCards.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  getCards() {
    pokemon.card
      .where({ name: this.state.searchText, pageSize: 100 })
      .then(result => {
        this.setState({ cards: result });
      });
  }

  onSearchChange(e) {
    const searchText = e.target.value;
    this.setState({ searchText });
  }

  toggleModal(selectedCard) {
    this.setState({
      modalOpen: !this.state.modalOpen,
      selectedCard,
    });
  }

  handleKeyPress(target) {
    if (target.charCode == 13) {
      this.getCards();
    }
  }

  render() {
    return (
      <Container
        className="w-100"
        style={{ marginTop: '20px', marginBottom: '20px' }}
      >
        <Row>
          <Col className="col">
            <InputGroup className="text-center">
              <Input
                placeholder="Search for your card here"
                value={this.state.searchText}
                onChange={this.onSearchChange}
                onKeyPress={this.handleKeyPress}
              />
              <InputGroupButton>
                <Button onClick={this.getCards}>
                  <FontAwesome id="search" name="search" />
                </Button>
              </InputGroupButton>
            </InputGroup>
          </Col>
        </Row>
        <Row style={{ marginTop: '20px', width: '100%' }}>
          <Col xs="12">
            <Container
              className="w-100"
              style={{
                maxWidth: '1344px',
                width: '1344px',
              }}
            >
              <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-md-around flex-wrap">
                {this.state.cards.map(card => (
                  <div
                    key={card.id}
                    style={{ padding: '2px' }}
                    onClick={() => this.toggleModal(card)}
                  >
                    <img src={card.imageUrl} />
                  </div>
                ))}
              </div>
            </Container>
          </Col>
        </Row>
        {this.state.selectedCard && (
          <CardDetails
            toggleModal={this.toggleModal}
            modalOpen={this.state.modalOpen}
            selectedCard={this.state.selectedCard}
          />
        )}
      </Container>
    );
  }
}

export default Search;
