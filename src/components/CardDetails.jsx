import React, { Component } from 'react';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container,
  Row,
  Col,
  InputGroupButton,
  Button,
} from 'reactstrap';
import './CardDetail.css';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
    };
  }

  render() {
    const card = this.props.selectedCard;

    console.log(card);

    return (
      <Modal
        size="lg"
        isOpen={this.props.modalOpen}
        toggle={this.props.toggleModal}
      >
        <ModalHeader toggle={this.toggleModal}>{card.name}</ModalHeader>
        <ModalBody>
          <Container style={{ padding: '3px' }}>
            <Row>
              <Col className="col-4">
                <img src={card.imageUrlHiRes} className="img-fluid" />
              </Col>
              <Col className="col-8">
                <Container className="w-100">
                  <Row style={{ fontWeight: 'bold' }}>
                    <Col className="col-3">Name</Col>
                    <Col className="col-2">Stage</Col>
                    <Col className="col-1">HP</Col>
                    <Col className="col-3">Type</Col>
                  </Row>
                  <Row>
                    <Col className="col-3">{card.name}</Col>
                    <Col className="col-2">{card.subtype}</Col>
                    <Col className="col-1">{card.hp}</Col>
                    <Col className="col-3">
                      {card.types &&
                        card.types.map(type => (
                          <i class={`energy ${type.toLowerCase()}`} />
                        ))}
                    </Col>
                  </Row>
                  {card.text &&
                    card.text.length > 0 && (
                      <Row>
                        <Col>
                          <h5>Rules</h5>
                          {card.text.map(rule => (
                            <div style={{ borderBottom: '1px solid #000' }}>
                              {rule}
                            </div>
                          ))}
                        </Col>
                      </Row>
                    )}
                  {card.attacks &&
                    card.attacks.map(attack => {
                      return (
                        <div style={{ borderBottom: '1px solid #000' }}>
                          <Row style={{ marginTop: '10px' }}>
                            <Col className="col-4">
                              {attack.cost &&
                                attack.cost.map(attackCost => (
                                  <i
                                    class={`energy ${attackCost.toLowerCase()}`}
                                  />
                                ))}
                            </Col>
                            <Col
                              className="col-7"
                              style={{ fontWeight: 'bold' }}
                            >
                              {attack.name}
                            </Col>
                            <Col className="col-1">{attack.damage}</Col>
                          </Row>
                          {attack.text && (
                            <Row style={{ marginTop: '5px' }}>
                              <Col>{attack.text}</Col>
                            </Row>
                          )}
                        </div>
                      );
                    })}
                  <Row style={{ marginTop: '15px', fontSize: '0.8em' }}>
                    <Col className="text-uppercase">weakness</Col>
                    <Col className="text-uppercase">resistance</Col>
                    <Col className="text-uppercase">retreat cost</Col>
                  </Row>
                  <Row style={{ marginTop: '15px' }}>
                    <Col>
                      {card.weaknesses &&
                        card.weaknesses.map(weakness => (
                          <div>
                            <i
                              class={`energy ${weakness.type.toLowerCase()}`}
                            />
                            {weakness.value}
                          </div>
                        ))}
                    </Col>
                    <Col>
                      {card.resistances &&
                        card.resistances.map(resistance => (
                          <div>
                            <i
                              class={`energy ${resistance.type.toLowerCase()}`}
                            />
                            {resistance.value}
                          </div>
                        ))}
                    </Col>
                    <Col>
                      {card.retreatCost &&
                        card.retreatCost.map(cost => (
                          <i class={`energy ${cost.toLowerCase()}`} />
                        ))}
                    </Col>
                  </Row>
                  <Row style={{ marginTop: '40px' }}>
                    <Col className="text-uppercase">artist</Col>
                    <Col className="text-uppercase">rarity</Col>
                    <Col className="text-uppercase">set</Col>
                  </Row>
                  <Row>
                    <Col >{card.artist}</Col>
                    <Col >{card.rarity}</Col>
                    <Col >{card.set}</Col>
                  </Row>
                </Container>
              </Col>
            </Row>

          </Container>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.props.toggleModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default Search;
