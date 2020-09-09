import React, { Component } from "react";
import { Container } from "reactstrap";
import { connect } from "react-redux";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col,
} from "reactstrap";
import { fetchNews } from "../actions/News";
class Climate extends Component {
  componentDidMount() {
    this.props.fetchNews("climate");
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.fetchNews(this.state.key);
  };

  render() {
    const newsItems = this.props.news.map((article) => {
      return (
        <Col>
          <Row>
            <Card
              key={article.id}
              style={{
                height: "20%",
                width: "20%",
                border: "solid",
                margin: "2rem",
              }}
            >
              <CardImg
                top
                width="100%"
                src={article.urlToImage}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>
                  <strong>{article.title}</strong>
                </CardTitle>
                <CardSubtitle>Author: {article.author}</CardSubtitle>
                <CardText>{article.description}</CardText>
                <Button color="primary" size="lg" active>
                  View Article
                </Button>
              </CardBody>
            </Card>
          </Row>
        </Col>
      );
    });
    return (
      <Container className="themed-container" fluid="sm">
        <div>
          <h1>Informed - Climate News</h1>
          {newsItems}
        </div>
      </Container>
    );
  }
}
const mapStateToProps = (state) => ({
  news: state.news.news,
});
export default connect(mapStateToProps, { fetchNews })(Climate);
