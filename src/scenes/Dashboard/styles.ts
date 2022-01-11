import styled from 'styled-components/native';

export const Wrapper = styled.ScrollView`
  margin-left: 16px;
`;

export const Contact = styled.TouchableOpacity`
  background-color: #56ace0;
  margin-top: 4px;
  padding: 4px;
  box-shadow: 0px 10px 15px #0000001a;
  align-self: flex-start;
  min-width: 200px;
  border-radius: 4px;
`;

export const IconAndNameWrapper = styled.View`
  flex-direction: row;
`;

export const Name = styled.Text`
  color: #16254a;
  opacity: 0.8;
  font-weight: bold;
  margin-left: 2px;
`;

export const Text = styled.Text`
  color: #16254a;
  opacity: 0.5;
  font-weight: bold;
`;

export const Title = styled.Text`
  color: #16254a;
  font-size: 17px;
  font-weight: bold;
`;

export const ButtonWrapper = styled.View`
  margin-top: 16px;
`;
