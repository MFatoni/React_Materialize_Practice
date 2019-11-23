import React, {Component} from "react";
import {
  Button,
  Card,
  CardTitle,
  Row,
  Col,
  TextInput,
  Carousel
} from "react-materialize";

class App extends Component {
  render() {
    return (
      <div>
        <Carousel
          options={{fullWidth: true}}
          images={[
            "https://lorempixel.com/800/400/food/1",
            "https://lorempixel.com/800/400/food/2",
            "https://lorempixel.com/800/400/food/3",
            "https://lorempixel.com/800/400/food/4",
            "https://lorempixel.com/800/400/food/5"
          ]}
        ></Carousel>
        <Row>
          <Col m="5">
            <Card
              className="small"
              header={
                <CardTitle image="https://www.incimages.com/uploaded_files/image/970x450/products_364475.jpg">
                  Taman Bermain
                </CardTitle>
              }
            >
              Baju
            </Card>
            <Button>Sukses</Button>
          </Col>
          <Col m="5">
            <Card
              className="small"
              header={
                <CardTitle image="https://www.incimages.com/uploaded_files/image/970x450/products_364475.jpg">
                  Taman Bermain
                </CardTitle>
              }
            >
              Baju
            </Card>
          </Col>
        </Row>
        <TextInput type="text" label="Nama" />
        <Row>
          <TextInput label="Nama Depan" icon="account_circle" />
          <TextInput type="file" label="File" />
        </Row>
      </div>
    );
  }
}

export default App;
