import { View, Text, Button } from "react-native";

function Login({navigation}) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button
        title="Login"
        onPress={() => navigation.navigate('MyTabs')}
      />
        
      </View>
    );
  }

  export default Login;