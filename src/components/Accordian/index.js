import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Accordion,
  Text,
  View,
} from 'native-base';

const _renderHeader = (item, expanded) => {
  return (
    <View
      style={
        [{
          flexDirection: 'row',
          padding: 10,
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'white',
          marginTop: 15,
          borderColor:'#707070',
          borderWidth:1,
          borderTopRightRadius: 8,
          borderTopLeftRadius: 8,
        },
        !expanded ? {borderRadius: 8} : {}]
      }>
      <Text
        style={{
          fontWeight: '600',
          fontSize: 12,
       
        }}>
        {item.title}
      </Text>
    </View>
  );
};

const _renderContent = item => {
  return (
    <Text
      style={{
        backgroundColor: 'white',
        padding: 10,
        fontStyle: 'italic',
        borderColor:'#707070',
        borderWidth:1,
        borderTopColor:'transparent',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
      }}>
      {item.content}
    </Text>
  );
};

export default class AccordionCustomHeaderContent extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content padder style={{backgroundColor: 'white'}}></Content>
      </Container>
    );
  }
}

const CAccordian = props => (
  <Accordion
    dataArray={props.dataArray}
    animation={true}
    style={{borderColor: 'transparent'}}
    expanded={true}
    renderHeader={_renderHeader}
    renderContent={_renderContent}
  />
);

export {CAccordian};
