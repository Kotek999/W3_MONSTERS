import React, { useEffect } from "react";
import { Text } from "react-native-paper";
import { StyleSheet, SafeAreaView } from "react-native";
import { connect } from "react-redux";
import { DataState } from "../Redux";

const TestCard = (props: any) => {
  useEffect(() => {
    props.callToData();
  }, []);

  let date: any = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  const currentTime = date.toLocaleTimeString();

  date = `${day}.${month}.${year}`;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={styles.text}>{props.pageData && props.pageData.title}</Text>
      <Text style={styles.text}>
        {props.pageData && props.pageData.content}
      </Text>
      <Text style={styles.date}>Data: {date}</Text>
      <Text style={styles.time}>Czas: {currentTime}</Text>
    </SafeAreaView>
  );
};

const mapStateToProps = (state: DataState) => {
  const data = state.data;
  return { data };
};

export default connect(mapStateToProps)(TestCard);

const styles = StyleSheet.create({
  text: {
    paddingTop: 80,
    fontSize: 20,
    letterSpacing: 1,
    color: "black",
    padding: 0,
    textAlign: "center",
  },
  date: {
    paddingTop: 80,
    fontSize: 20,
    letterSpacing: 1,
    color: "red",
    padding: 0,
    textAlign: "center",
  },
  time: {
    paddingTop: 40,
    fontSize: 20,
    letterSpacing: 1,
    color: "green",
    padding: 0,
    textAlign: "center",
  },
});
