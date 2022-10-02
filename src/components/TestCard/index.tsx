import React, { useEffect } from "react";
import {
  Provider as PaperProvider,
  Text,
  DefaultTheme,
} from "react-native-paper";
import { StyleSheet, SafeAreaView } from "react-native";
import { connect } from "react-redux";

const TestCard = (props: any) => {

  useEffect(() => {
    props.callToData();
  }, []);
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={styles.text}>{props.pageData && props.pageData.title}</Text>
      <Text style={styles.text}>{props.pageData && props.pageData.content}</Text>
      <Text style={styles.text}>{props.pageData && props.pageData.date}</Text>
    </SafeAreaView>
  );
};

const mapStateToProps = (state: any) => {
  const data = state.data;
  return { data };
};

export default connect(mapStateToProps)(TestCard);

const styles = StyleSheet.create({
  text: {
    paddingTop: 30,
    fontSize: 20,
    letterSpacing: 1,
    color: "black",
    padding: 8,
    textAlign: "center",
  },
  title: {
    padding: 8,
    textAlign: "center",
    fontWeight: "bold",
  },
  subtitle: {
    padding: 8,
    textAlign: "left",
  },
});
