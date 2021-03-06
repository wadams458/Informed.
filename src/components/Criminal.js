import React, { Component } from "react";
import { Container } from "reactstrap";
import { Helmet } from "react-helmet";
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
class Criminal extends Component {
  componentDidMount() {
    this.props.fetchNews("criminal justice");
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
        <Col xs="3">
          <Card className="article-card" key={article.id}>
            <CardImg src={article.urlToImage} alt="Card image cap" />
            <CardBody>
              <CardTitle>
                <strong>
                  <a href={article.url} target="_blank">
                    {article.title}
                  </a>
                </strong>
              </CardTitle>
              <CardSubtitle>Author: {article.author}</CardSubtitle>
              <CardSubtitle className="date">
                {article.publishedAt}
              </CardSubtitle>
              <CardText>{article.description}</CardText>
            </CardBody>
          </Card>
        </Col>
      );
    });
    return (
      <div>
        <h1>Informed - Criminal Justice</h1>
        <Row>{newsItems}</Row>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  news: state.news.news,
});
export default connect(mapStateToProps, { fetchNews })(Criminal);
